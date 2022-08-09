package deathknight

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/stats"
)

func (dk *Deathknight) registerDancingRuneWeaponCD() {
	if !dk.Talents.DancingRuneWeapon {
		return
	}

	duration := time.Second * 10

	dancingRuneWeaponAura := dk.RegisterAura(core.Aura{
		Label:    "Dancing Rune Weapon",
		ActionID: core.ActionID{SpellID: 49028},
		Duration: duration,
	})

	baseCost := float64(core.NewRuneCost(60.0, 0, 0, 0, 0))
	dk.DancingRuneWeapon = dk.RegisterSpell(nil, core.SpellConfig{
		ActionID: core.ActionID{SpellID: 49028},

		ResourceType: stats.RunicPower,
		BaseCost:     baseCost,

		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				GCD:  core.GCDDefault,
				Cost: baseCost,
			},
			ModifyCast: func(sim *core.Simulation, spell *core.Spell, cast *core.Cast) {
				cast.GCD = dk.getModifiedGCD()
			},
			CD: core.Cooldown{
				Timer:    dk.NewTimer(),
				Duration: time.Second * 90,
			},
		},

		ApplyEffects: func(sim *core.Simulation, _ *core.Unit, _ *core.Spell) {
			dk.RuneWeapon.EnableWithTimeout(sim, dk.Gargoyle, duration)
			dk.RuneWeapon.CancelGCDTimer(sim)

			dancingRuneWeaponAura.Activate(sim)
		},
	})
}

func (dk *Deathknight) CanDancingRuneWeapon(sim *core.Simulation) bool {
	return dk.CastCostPossible(sim, 60.0, 0, 0, 0) && dk.DancingRuneWeapon.IsReady(sim)
}

func (dk *Deathknight) CastDancingRuneWeapon(sim *core.Simulation, target *core.Unit) bool {
	if dk.CanDancingRuneWeapon(sim) {
		return dk.DancingRuneWeapon.Cast(sim, target)
	}
	return false
}

type RuneWeaponPet struct {
	core.Pet

	dkOwner *Deathknight
}

func (dk *Deathknight) NewRuneWeapon() *RuneWeaponPet {
	runeWeapon := &RuneWeaponPet{
		Pet: core.NewPet(
			"Rune Weapon",
			&dk.Character,
			runeWeaponBaseStats,
			runeWeaponStatInheritance,
			false,
			true,
		),
		dkOwner: dk,
	}

	runeWeapon.EnableAutoAttacks(runeWeapon, core.AutoAttackOptions{
		MainHand:       dk.WeaponFromMainHand(2),
		AutoSwingMelee: false,
	})

	runeWeapon.PseudoStats.DamageDealtMultiplier = 0.5
	runeWeapon.PseudoStats.DamageTakenMultiplier = 0

	dk.AddPet(runeWeapon)

	return runeWeapon
}

func (runeWeapon *RuneWeaponPet) GetPet() *core.Pet {
	return &runeWeapon.Pet
}

func (runeWeapon *RuneWeaponPet) Initialize() {
	runeWeapon.registerSpellCasts()
}

func (runeWeapon *RuneWeaponPet) Reset(sim *core.Simulation) {
}

func (runeWeapon *RuneWeaponPet) OnGCDReady(sim *core.Simulation) {
	// No GCD system on Rune Weapon
	runeWeapon.DoNothing()
}

// These numbers are just rough guesses
var runeWeaponBaseStats = stats.Stats{
	stats.Stamina: 100,
}

var runeWeaponStatInheritance = func(ownerStats stats.Stats) stats.Stats {
	return stats.Stats{
		stats.AttackPower: ownerStats[stats.AttackPower],
		stats.MeleeHit:    ownerStats[stats.MeleeHit],
		stats.MeleeCrit:   ownerStats[stats.MeleeCrit],
		stats.Expertise:   ownerStats[stats.Expertise],
	}
}

func (runeWeapon *RuneWeaponPet) registerSpellCasts() {
	core.MakePermanent(runeWeapon.dkOwner.RegisterAura(core.Aura{
		Label: "Dancing Rune Weapon Listener",
		// Auto Attacks
		OnSpellHitDealt: func(aura *core.Aura, sim *core.Simulation, spell *core.Spell, spellEffect *core.SpellEffect) {
			if !spellEffect.ProcMask.Matches(core.ProcMaskMeleeMHAuto) {
				return
			}

			//runeWeapon.AutoAttacks.MHAuto.Cast(sim, spellEffect.Target)
			runeWeapon.AutoAttacks.SwingMelee(sim, spellEffect.Target)
		},
		OnCastComplete: func(aura *core.Aura, sim *core.Simulation, spell *core.Spell) {

		},
	}))
}
