package deathknight

import (
	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/stats"
)

var HeartStrikeActionID = core.ActionID{SpellID: 55050}

func (dk *Deathknight) newHeartStrikeSpell(isMainTarget bool, onhit func(sim *core.Simulation, spell *core.Spell, spellEffect *core.SpellEffect)) *RuneSpell {
	weaponBaseDamage := core.BaseDamageFuncMeleeWeapon(core.MainHand, true, 250.0, 1.0, 0.5, true)
	if !isMainTarget {
		weaponBaseDamage = core.BaseDamageFuncMeleeWeapon(core.MainHand, true, 250.0, 1.0, 0.25, true)
	}

	diseaseMulti := dk.diseaseMultiplier(0.1)

	effect := core.SpellEffect{
		ProcMask:         core.ProcMaskMeleeSpecial,
		BonusCritRating:  (dk.subversionCritBonus() + dk.annihilationCritBonus()) * core.CritRatingPerCritChance,
		DamageMultiplier: dk.thassariansPlateDamageBonus() * dk.scourgelordsBattlegearDamageBonus(dk.HeartStrike) * dk.bloodyStrikesBonus(dk.HeartStrike),
		ThreatMultiplier: 1,
		OutcomeApplier:   dk.OutcomeFuncMeleeSpecialHitAndCrit(dk.critMultiplierGoGandMoM()),
		BaseDamage: core.BaseDamageConfig{
			Calculator: func(sim *core.Simulation, hitEffect *core.SpellEffect, spell *core.Spell) float64 {
				return weaponBaseDamage(sim, hitEffect, spell) *
					(1.0 + dk.countActiveDiseases(hitEffect.Target)*diseaseMulti)
			},
			TargetSpellCoefficient: 1,
		},
		OnSpellHitDealt: onhit,
	}

	conf := core.SpellConfig{
		ActionID:     HeartStrikeActionID,
		SpellSchool:  core.SpellSchoolPhysical,
		Flags:        core.SpellFlagMeleeMetrics,
		ApplyEffects: core.ApplyEffectFuncDirectDamage(effect),
	}
	rs := &RuneSpell{}
	if isMainTarget { // off target doesnt need GCD
		conf.ResourceType = stats.RunicPower
		conf.BaseCost = float64(core.NewRuneCost(10, 1, 0, 0, 0))
		conf.Cast = core.CastConfig{
			DefaultCast: core.Cast{
				GCD:  core.GCDDefault,
				Cost: conf.BaseCost,
			},
			ModifyCast: func(sim *core.Simulation, spell *core.Spell, cast *core.Cast) {
				cast.GCD = dk.getModifiedGCD()
			},
		}
		conf.ApplyEffects = dk.withRuneRefund(rs, effect, false)
	}

	return dk.RegisterSpell(rs, conf)
}

func (dk *Deathknight) registerHeartStrikeSpell() {
	dk.HeartStrike = dk.newHeartStrikeSpell(true, func(sim *core.Simulation, spell *core.Spell, spellEffect *core.SpellEffect) {
		if dk.Env.GetNumTargets() > 1 {
			dk.HeartStrikeOffHit.Cast(sim, dk.Env.NextTargetUnit(dk.CurrentTarget))
		}
		dk.LastOutcome = spellEffect.Outcome
	})
	dk.HeartStrikeOffHit = dk.newHeartStrikeSpell(false, nil)
}

func (dk *Deathknight) CanHeartStrike(sim *core.Simulation) bool {
	return dk.CastCostPossible(sim, 0.0, 1, 0, 0) && dk.HeartStrike.IsReady(sim)
}

func (dk *Deathknight) CastHeartStrike(sim *core.Simulation, target *core.Unit) bool {
	if dk.CanHeartStrike(sim) {
		return dk.HeartStrike.Cast(sim, target)
	}
	return false
}
