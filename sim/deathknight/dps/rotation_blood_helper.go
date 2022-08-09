package dps

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/deathknight"
)

func (dk *DpsDeathknight) blDiseaseCheck(sim *core.Simulation, target *core.Unit, spell *deathknight.RuneSpell, costRunes bool, casts int) bool {
	return dk.shDiseaseCheck(sim, target, spell, costRunes, casts, 0)
}

func (dk *DpsDeathknight) blSpreadDiseases(sim *core.Simulation, target *core.Unit, s *deathknight.Sequence) bool {
	if dk.blDiseaseCheck(sim, target, dk.Pestilence, true, 1) {
		casted := dk.CastPestilence(sim, target)
		landed := dk.LastOutcome.Matches(core.OutcomeLanded)

		// Reset flags on succesfull cast
		dk.sr.recastedFF = !(casted && landed)
		dk.sr.recastedBP = !(casted && landed)
		return casted
	} else {
		dk.blRecastDiseasesSequence(sim)
		return true
	}
}

// Save up Runic Power for DRW - Allow casts above 100 rp or garg CD > 5 sec
func (dk *DpsDeathknight) blDeathCoilCheck(sim *core.Simulation) bool {
	return !(dk.DancingRuneWeapon.IsReady(sim) || dk.DancingRuneWeapon.CD.TimeToReady(sim) < 5*time.Second) || dk.CurrentRunicPower() >= 100
}
