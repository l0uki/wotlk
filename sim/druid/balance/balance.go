package balance

import (
	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/items"
	"github.com/wowsims/wotlk/sim/core/proto"
	"github.com/wowsims/wotlk/sim/druid"
)

func RegisterBalanceDruid() {
	core.RegisterAgentFactory(
		proto.Player_BalanceDruid{},
		proto.Spec_SpecBalanceDruid,
		func(character core.Character, options proto.Player) core.Agent {
			return NewBalanceDruid(character, options)
		},
		func(player *proto.Player, spec interface{}) {
			playerSpec, ok := spec.(*proto.Player_BalanceDruid)
			if !ok {
				panic("Invalid spec value for Balance Druid!")
			}
			player.Spec = playerSpec
		},
	)
}

func NewBalanceDruid(character core.Character, options proto.Player) *BalanceDruid {
	balanceOptions := options.GetBalanceDruid()
	selfBuffs := druid.SelfBuffs{}

	if balanceOptions.Options.InnervateTarget != nil {
		selfBuffs.InnervateTarget = *balanceOptions.Options.InnervateTarget
	} else {
		selfBuffs.InnervateTarget.TargetIndex = -1
	}

	moonkin := &BalanceDruid{
		Druid:    druid.New(character, druid.Moonkin, selfBuffs, *balanceOptions.Talents),
		Rotation: *balanceOptions.Rotation,
	}

	moonkin.ResetTalentsBonuses()
	moonkin.RegisterTalentsBonuses()
	moonkin.RegisterCooldownRankings()
	moonkin.EnableResumeAfterManaWait(moonkin.tryUseGCD)
	return moonkin
}

type BalanceCooldown struct {
	Name string
	Stat string
	ID   int32
}

type BalanceDruid struct {
	*druid.Druid

	Rotation         proto.BalanceDruid_Rotation
	CooldownsRanking []BalanceCooldown

	// CDS
	hyperSpeedMCD *core.MajorCooldown
	potionMCD     *core.MajorCooldown
	onUseTrinket1 *core.MajorCooldown
	onUseTrinket2 *core.MajorCooldown
	potionUsed    bool
}

func (moonkin *BalanceDruid) GetDruid() *druid.Druid {
	return moonkin.Druid
}

func (moonkin *BalanceDruid) Initialize() {
	moonkin.Druid.Initialize()
	moonkin.RegisterBalanceSpells()
}

func (moonkin *BalanceDruid) Reset(sim *core.Simulation) {
	moonkin.Druid.Reset(sim)
	moonkin.RebirthTiming = moonkin.Env.BaseDuration.Seconds() * sim.RandomFloat("Rebirth Timing")

	if moonkin.Rotation.McdInsideLunarThreshold > 0 || moonkin.Rotation.McdInsideSolarThreshold > 0 {
		// Add Potions, Gloves and Trinkets MCD to an array via moonkin.getBalanceMajorCooldown
		// Sort this array depending on moonkin.CooldownRankings
		moonkin.potionUsed = false
		consumes := &moonkin.Consumes
		if consumes.DefaultPotion == proto.Potions_PotionOfSpeed {
			moonkin.potionMCD = moonkin.getBalanceMajorCooldown(core.ActionID{ItemID: 40211})
		}
		if consumes.DefaultPotion == proto.Potions_PotionOfWildMagic {
			moonkin.potionMCD = moonkin.getBalanceMajorCooldown(core.ActionID{ItemID: 40212})
		}
		moonkin.hyperSpeedMCD = moonkin.getBalanceMajorCooldown(core.ActionID{SpellID: 54758})
		moonkin.onUseTrinket1 = moonkin.getBalanceMajorCooldown(core.ActionID{ItemID: moonkin.Equip[items.ItemSlotTrinket1].ID})
		moonkin.onUseTrinket2 = moonkin.getBalanceMajorCooldown(core.ActionID{ItemID: moonkin.Equip[items.ItemSlotTrinket2].ID})
	}
}

func (moonkin *BalanceDruid) getBalanceMajorCooldown(actionID core.ActionID) *core.MajorCooldown {
	if moonkin.Character.HasMajorCooldown(actionID) {
		majorCd := moonkin.Character.GetMajorCooldown(actionID)
		majorCd.ShouldActivate = func(sim *core.Simulation, character *core.Character) bool {
			return false
		}
		return majorCd
	}
	return nil
}

func (moonkin *BalanceDruid) RegisterCooldownRankings() {
	moonkin.CooldownsRanking = []BalanceCooldown{
		{
			Name: "Potion of Speed",
			Stat: "haste",
			ID:   40211,
		},
		{
			Name: "Potion of Wild Magic",
			Stat: "crit",
			ID:   40212,
		},
		{
			Name: "Potion of Wild Magic",
			Stat: "haste",
			ID:   54758,
		},
	}
}
