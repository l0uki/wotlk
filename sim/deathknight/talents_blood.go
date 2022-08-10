package deathknight

import (
	//"github.com/wowsims/wotlk/sim/core/proto"

	//"time"

	"math"
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/proto"
	"github.com/wowsims/wotlk/sim/core/stats"
)

func (dk *Deathknight) ApplyBloodTalents() {
	// Butchery
	dk.applyButchery()

	// Subversion
	// Implemented outside

	// Blade barrier
	dk.applyBladeBarrier()

	// Bladed Armor
	if dk.Talents.BladedArmor > 0 {
		coeff := float64(dk.Talents.BladedArmor)
		dk.AddStatDependency(stats.Armor, stats.AttackPower, 1.0+coeff/180.0)
	}

	// Two Handed Specialization
	if dk.Equip[proto.ItemSlot_ItemSlotMainHand].HandType == proto.HandType_HandTypeTwoHand {
		dk.PseudoStats.PhysicalDamageDealtMultiplier *= 1 + 0.01*float64(dk.Talents.TwoHandedWeaponSpecialization)
	}

	// Rune Tap
	// TODO: Implement

	// Dark Conviction
	dk.PseudoStats.BonusMeleeCritRating += core.CritRatingPerCritChance * float64(dk.Talents.DarkConviction)
	dk.PseudoStats.BonusSpellCritRating += core.CritRatingPerCritChance * float64(dk.Talents.DarkConviction)

	// Death Rune Mastery
	// TODO: Implement

	// Improved Rune Tap
	// TODO: Implement

	// Spell Deflection
	// TODO: Implement

	// Vendetta
	// TODO: Implement

	// Bloody Strikes
	// Implemented

	// Veteran of the Third War
	if dk.Talents.VeteranOfTheThirdWar > 0 {
		strengthCoeff := 0.02 * float64(dk.Talents.VeteranOfTheThirdWar)
		staminaCoeff := 0.01 * float64(dk.Talents.VeteranOfTheThirdWar)
		expertiseBonus := 2.0 * float64(dk.Talents.VeteranOfTheThirdWar)
		dk.AddStatDependency(stats.Strength, stats.Strength, 1.0+strengthCoeff)
		dk.AddStatDependency(stats.Stamina, stats.Stamina, 1.0+staminaCoeff)
		dk.AddStat(stats.Expertise, expertiseBonus*core.ExpertisePerQuarterPercentReduction)
	}

	// Mark of Blood
	// TODO: Implement

	dk.applyBloodworms()
	dk.applyBloodyVengeance()
	dk.applySuddenDoom()

	// Abomination's Might
	if dk.Talents.AbominationsMight > 0 {
		strengthCoeff := 0.01 * float64(dk.Talents.AbominationsMight)
		dk.AddStatDependency(stats.Strength, stats.Strength, 1.0+strengthCoeff)
	}

	dk.applyBloodGorged()
}

func (dk *Deathknight) bloodyStrikesBonus(spell *RuneSpell) float64 {
	if spell == dk.BloodStrike {
		return []float64{1.0, 1.05, 1.1, 1.15}[dk.Talents.BloodyStrikes]
	} else if spell == dk.HeartStrike {
		return []float64{1.0, 1.15, 1.3, 1.45}[dk.Talents.BloodyStrikes]
	} else if spell == dk.BloodBoil {
		return []float64{1.0, 1.1, 1.2, 1.3}[dk.Talents.BloodyStrikes]
	}
	return 1.0
}

func (dk *Deathknight) subversionThreatBonus() float64 {
	return []float64{0.0, 0.08, 0.16, 0.25}[dk.Talents.Subversion]
}

func (dk *Deathknight) subversionCritBonus() float64 {
	return 3.0 * float64(dk.Talents.Subversion)
}

func (dk *Deathknight) improvedDeathStrikeCritBonus() float64 {
	return 3.0 * float64(dk.Talents.ImprovedDeathStrike)
}

func (dk *Deathknight) improvedDeathStrikeDamageBonus() float64 {
	return 1.0 + 0.15*float64(dk.Talents.ImprovedDeathStrike)
}

func (dk *Deathknight) applyBladeBarrier() {
	if dk.Talents.BladeBarrier == 0 {
		return
	}

	damageTakenMult := 1.0 - 0.01*float64(dk.Talents.BladeBarrier)

	actionID := core.ActionID{SpellID: 55226}

	dk.BladeBarrierAura = dk.RegisterAura(core.Aura{
		Label:    "Blade Barrier",
		ActionID: actionID,
		Duration: time.Second * 10.0,

		OnGain: func(aura *core.Aura, sim *core.Simulation) {
			aura.Unit.PseudoStats.DamageTakenMultiplier *= damageTakenMult
		},
		OnExpire: func(aura *core.Aura, sim *core.Simulation) {
			aura.Unit.PseudoStats.DamageTakenMultiplier /= damageTakenMult
		},
	})

	dk.onRuneSpendBladeBarrier = func(sim *core.Simulation) {
		if dk.AllBloodRunesSpent() {
			dk.BladeBarrierAura.Activate(sim)
		}
	}
}

func (dk *Deathknight) applyButchery() {
	if dk.Talents.Butchery == 0 {
		return
	}

	actionID := core.ActionID{SpellID: 49483}
	amountOfRunicPower := 1.0 * float64(dk.Talents.Butchery)
	rpMetrics := dk.NewRunicPowerMetrics(actionID)

	dk.ButcheryAura = core.MakePermanent(dk.RegisterAura(core.Aura{
		ActionID: actionID,
		Label:    "Butchery",
		OnGain: func(aura *core.Aura, sim *core.Simulation) {
			dk.ButcheryPA = core.StartPeriodicAction(sim, core.PeriodicActionOptions{
				Period:   time.Second * 5,
				NumTicks: 0,
				OnAction: func(sim *core.Simulation) {
					dk.AddRunicPower(sim, amountOfRunicPower, rpMetrics)
				},
			})
		},
		OnExpire: func(aura *core.Aura, sim *core.Simulation) {
		},
	}))
}

func (dk *Deathknight) applyBloodyVengeance() {
	if dk.Talents.BloodyVengeance == 0 {
		return
	}

	actionID := core.ActionID{SpellID: 50449}
	physBonus := float64(dk.Talents.BloodyVengeance) * 0.01

	procAura := dk.RegisterAura(core.Aura{
		ActionID:  actionID,
		Label:     "Bloody Vengeance Proc",
		MaxStacks: 3,
		Duration:  30 * time.Second,
		OnStacksChange: func(aura *core.Aura, sim *core.Simulation, oldStacks, newStacks int32) {
			aura.Unit.PseudoStats.PhysicalDamageDealtMultiplier /= 1.0 + float64(oldStacks)*physBonus
			aura.Unit.PseudoStats.PhysicalDamageDealtMultiplier *= 1.0 + float64(newStacks)*physBonus
		},
	})

	core.MakePermanent(dk.RegisterAura(core.Aura{
		ActionID: actionID,
		Label:    "Bloody Vengeance",
		OnSpellHitDealt: func(aura *core.Aura, sim *core.Simulation, spell *core.Spell, spellEffect *core.SpellEffect) {
			if !spellEffect.Outcome.Matches(core.OutcomeCrit) {
				return
			}

			if !spellEffect.ProcMask.Matches(core.ProcMaskDirect) {
				return
			}

			procAura.Activate(sim)
			procAura.AddStack(sim)
		},
	}))
}

func (dk *Deathknight) applySuddenDoom() {
	if dk.Talents.SuddenDoom == 0 {
		return
	}

	procChance := 0.05 * float64(dk.Talents.SuddenDoom)

	dk.SuddenDoomAura = dk.RegisterAura(core.Aura{
		Label:    "Sudden Doom Proc",
		ActionID: core.ActionID{SpellID: 49530},
		Duration: core.NeverExpires,
	})

	core.MakePermanent(dk.RegisterAura(core.Aura{
		Label: "Sudden Doom",
		OnSpellHitDealt: func(aura *core.Aura, sim *core.Simulation, spell *core.Spell, spellEffect *core.SpellEffect) {
			if !spellEffect.Landed() {
				return
			}

			if spell != dk.HeartStrike.Spell && spell != dk.BloodStrike.Spell {
				return
			}

			if sim.RandomFloat("Sudden Doom Proc") < procChance {
				dk.SuddenDoomAura.Activate(sim)
				dk.DeathCoil.Cast(sim, dk.CurrentTarget)
				dk.SuddenDoomAura.Deactivate(sim)
			}
		},
	}))
}

func (dk *Deathknight) applyBloodGorged() {
	if dk.Talents.BloodGorged == 0 {
		return
	}

	bonusDamage := 1.1
	armorPenRating := 10.0 * core.ArmorPenPerPercentArmor
	bonusStats := stats.Stats{stats.ArmorPenetration: armorPenRating}

	procAura := core.MakePermanent(dk.RegisterAura(core.Aura{
		Label:    "Blood Gorged Proc",
		ActionID: core.ActionID{SpellID: 50111},
		OnGain: func(aura *core.Aura, sim *core.Simulation) {
			aura.Unit.PseudoStats.DamageDealtMultiplier *= bonusDamage
			aura.Unit.AddStatsDynamic(sim, bonusStats)
		},
		OnExpire: func(aura *core.Aura, sim *core.Simulation) {
			aura.Unit.PseudoStats.DamageDealtMultiplier /= bonusDamage
			aura.Unit.AddStatsDynamic(sim, bonusStats.Multiply(-1))
		},
	}))

	core.MakePermanent(dk.RegisterAura(core.Aura{
		Label: "Blood Gorged",
		OnSpellHitTaken: func(aura *core.Aura, sim *core.Simulation, spell *core.Spell, spellEffect *core.SpellEffect) {
			isActive := procAura.IsActive()
			shouldBeActive := aura.Unit.CurrentHealthPercent() >= 0.75
			if isActive && !shouldBeActive {
				procAura.Deactivate(sim)
			} else if !isActive && shouldBeActive {
				procAura.Activate(sim)
			}
		},
	}))
}

func (dk *Deathknight) applyBloodworms() {
	if dk.Talents.Bloodworms == 0 {
		return
	}

	procChance := 0.03 * float64(dk.Talents.Bloodworms)
	icd := core.Cooldown{
		Timer:    dk.NewTimer(),
		Duration: time.Second * 20,
	}

	// For tracking purposes
	procSpell := dk.RegisterSpell(nil, core.SpellConfig{
		ActionID: core.ActionID{SpellID: 49543},
		ApplyEffects: func(sim *core.Simulation, _ *core.Unit, _ *core.Spell) {
			// Summon Bloodworms
			random := int(math.Round(sim.RandomFloat("Bloodworms count")*2.0)) + 2
			for i := 0; i < random; i++ {
				dk.Bloodworm[i].EnableWithTimeout(sim, dk.Bloodworm[i], time.Second*20)
				dk.Bloodworm[i].CancelGCDTimer(sim)
			}
		},
	})

	core.MakePermanent(dk.RegisterAura(core.Aura{
		Label: "Bloodworms Proc",
		OnSpellHitDealt: func(aura *core.Aura, sim *core.Simulation, spell *core.Spell, spellEffect *core.SpellEffect) {
			if !spellEffect.ProcMask.Matches(core.ProcMaskMelee) {
				return
			}

			if !icd.IsReady(sim) {
				return
			}

			if sim.RandomFloat("Bloodworms proc") < procChance {
				icd.Use(sim)
				procSpell.Cast(sim, spellEffect.Target)
			}
		},
	}))
}
