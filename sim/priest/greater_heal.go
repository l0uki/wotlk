package priest

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/stats"
)

func (priest *Priest) registerGreaterHealSpell() {
	baseCost := .32 * priest.BaseMana

	priest.GreaterHeal = priest.RegisterSpell(core.SpellConfig{
		ActionID:    core.ActionID{SpellID: 48063},
		SpellSchool: core.SpellSchoolHoly,

		ResourceType: stats.Mana,
		BaseCost:     baseCost,

		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				Cost: baseCost *
					(1 - .05*float64(priest.Talents.ImprovedHealing)) *
					core.TernaryFloat64(priest.HasSetBonus(ItemSetRegaliaOfFaith, 4), .95, 1),

				GCD:      core.GCDDefault,
				CastTime: time.Second*3 - time.Millisecond*100*time.Duration(priest.Talents.DivineFury),
			},
		},

		ApplyEffects: core.ApplyEffectFuncDirectDamage(core.SpellEffect{
			IsHealing: true,
			ProcMask:  core.ProcMaskSpellHealing,

			BonusCritRating: float64(priest.Talents.HolySpecialization) * 1 * core.CritRatingPerCritChance,
			DamageMultiplier: 1 *
				core.TernaryFloat64(priest.HasSetBonus(ItemSetVestmentsOfAbsolution, 4), 1.05, 1),
			ThreatMultiplier: 1 - []float64{0, .07, .14, .20}[priest.Talents.SilentResolve],

			BaseDamage:     core.BaseDamageConfigHealing(3980, 4621, 1.6114+0.08*float64(priest.Talents.EmpoweredHealing)),
			OutcomeApplier: priest.OutcomeFuncHealingCrit(priest.DefaultHealingCritMultiplier()),
		}),
	})
}
