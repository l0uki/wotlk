package deathknight

import (
	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/stats"
)

func (dk *Deathknight) registerBloodBoilSpell() {

	// TODO: Handle blood boil correctly -
	//  There is no refund and you only get RP on at least one of the effects hitting.
	rs := &RuneSpell{}
	baseCost := core.NewRuneCost(10, 1, 0, 0, 0)
	dk.BloodBoil = dk.RegisterSpell(rs, core.SpellConfig{
		ActionID:     core.ActionID{SpellID: 49941},
		SpellSchool:  core.SpellSchoolShadow,
		ResourceType: stats.RunicPower,
		BaseCost:     float64(baseCost),
		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				GCD:  core.GCDDefault,
				Cost: float64(baseCost),
			},
			ModifyCast: func(sim *core.Simulation, spell *core.Spell, cast *core.Cast) {
				cast.GCD = dk.getModifiedGCD()
			},
		},

		ApplyEffects: dk.withRuneRefund(rs, core.SpellEffect{
			ProcMask:             core.ProcMaskSpellDamage,
			BonusSpellCritRating: 0.0,
			DamageMultiplier:     1.0,
			ThreatMultiplier:     1.0,
			BaseDamage: core.BaseDamageConfig{
				Calculator: func(sim *core.Simulation, hitEffect *core.SpellEffect, spell *core.Spell) float64 {
					roll := (220.0-180.0)*sim.RandomFloat("Blood Boil") + 180.0
					return (roll + dk.getImpurityBonus(hitEffect, spell.Unit)*0.06) * dk.RoRTSBonus(hitEffect.Target)
				},
			},
			OutcomeApplier: dk.OutcomeFuncMagicHitAndCrit(dk.spellCritMultiplierGoGandMoM()),
			OnSpellHitDealt: func(sim *core.Simulation, spell *core.Spell, spellEffect *core.SpellEffect) {
				if spellEffect.Target == dk.CurrentTarget {
					dk.LastCastOutcome = spellEffect.Outcome
				}
			},
		}, true),
	})
}

func (dk *Deathknight) CastBloodBoil(sim *core.Simulation, target *core.Unit) bool {
	if dk.BloodBoil.IsReady(sim) {
		return dk.BloodBoil.Cast(sim, target)
	}
	return false
}
