package dps

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/deathknight"
)

func (dk *DpsDeathknight) setupBloodRotations() {
	dk.Opener.Clear().
		NewAction(dk.RotationActionCallback_IT).
		NewAction(dk.RotationActionCallback_PS).
		NewAction(dk.RotationActionCallback_HS)

	dk.Main.NewAction(dk.RotationActionCallback_BloodRotation)
}

func (dk *DpsDeathknight) RotationActionCallback_BloodRotation(sim *core.Simulation, target *core.Unit, s *deathknight.Sequence) bool {
	casted := false

	if dk.CanDancingRuneWeapon(sim) {
		casted = dk.CastDancingRuneWeapon(sim, target)
	}

	if !casted {
		if dk.blDiseaseCheck(sim, target, dk.DeathStrike, true, 1) {
			if dk.shShouldSpreadDisease(sim) {
				casted = dk.blSpreadDiseases(sim, target, s)
			} else {
				casted = dk.CastDeathStrike(sim, target)
			}
		} else {
			dk.blRecastDiseasesSequence(sim)
			return true
		}
		if !casted {
			if dk.blDiseaseCheck(sim, target, dk.BloodStrike, true, 1) {
				casted = dk.CastHeartStrike(sim, target)
			} else {
				dk.blRecastDiseasesSequence(sim)
				return true
			}
			if !casted {
				if dk.blDeathCoilCheck(sim) {
					casted = dk.CastDeathCoil(sim, target)
				}
				if !casted {
					casted = dk.CastHornOfWinter(sim, target)
				}
			}
		}
	}

	return casted
}

func (dk *DpsDeathknight) blRecastDiseasesSequence(sim *core.Simulation) {
	dk.Main.Clear().
		NewAction(dk.RotationActionBL_FF_ClipCheck).
		NewAction(dk.RotationActionBL_IT_Custom).
		NewAction(dk.RotationActionBL_BP_ClipCheck).
		NewAction(dk.RotationActionBL_PS_Custom).
		NewAction(dk.RotationAction_ResetToBloodMain)

	dk.WaitUntil(sim, sim.CurrentTime)
}

func (dk *DpsDeathknight) RotationAction_ResetToBloodMain(sim *core.Simulation, target *core.Unit, s *deathknight.Sequence) bool {
	dk.Main.Clear().
		NewAction(dk.RotationActionCallback_BloodRotation)

	dk.WaitUntil(sim, sim.CurrentTime)
	return true
}

// Custom PS callback for tracking recasts for pestilence disease sync
func (dk *DpsDeathknight) RotationActionBL_PS_Custom(sim *core.Simulation, target *core.Unit, s *deathknight.Sequence) bool {
	casted := dk.CastPlagueStrike(sim, target)
	advance := dk.LastOutcome.Matches(core.OutcomeLanded)

	dk.sr.recastedBP = casted && advance
	s.ConditionalAdvance(casted && advance)
	return casted
}

// Custom IT callback for tracking recasts for pestilence disease sync
func (dk *DpsDeathknight) RotationActionBL_IT_Custom(sim *core.Simulation, target *core.Unit, s *deathknight.Sequence) bool {
	casted := dk.CastIcyTouch(sim, target)
	advance := dk.LastOutcome.Matches(core.OutcomeLanded)
	dk.sr.recastedFF = casted && advance
	s.ConditionalAdvance(casted && advance)
	return casted
}

func (dk *DpsDeathknight) RotationActionBL_FF_ClipCheck(sim *core.Simulation, target *core.Unit, s *deathknight.Sequence) bool {
	dot := dk.FrostFeverDisease[target.Index]
	gracePeriod := dk.CurrentFrostRuneGrace(sim)
	return dk.RotationActionBL_DiseaseClipCheck(dot, gracePeriod, sim, target, s)
}

func (dk *DpsDeathknight) RotationActionBL_BP_ClipCheck(sim *core.Simulation, target *core.Unit, s *deathknight.Sequence) bool {
	dot := dk.BloodPlagueDisease[target.Index]
	gracePeriod := dk.CurrentUnholyRuneGrace(sim)
	return dk.RotationActionBL_DiseaseClipCheck(dot, gracePeriod, sim, target, s)
}

// Check if we have enough rune grace period to delay the disease cast
// so we get more ticks without losing on rune cd
func (dk *DpsDeathknight) RotationActionBL_DiseaseClipCheck(dot *core.Dot, gracePeriod time.Duration, sim *core.Simulation, target *core.Unit, s *deathknight.Sequence) bool {
	// TODO: Play around with allowing rune cd to be wasted
	// for more disease ticks and see if its a worth option for the ui
	//runeCdWaste := 0 * time.Millisecond
	if dot.TickCount < dot.NumberOfTicks-1 {
		nextTickAt := dot.ExpiresAt() - dot.TickLength*time.Duration((dot.NumberOfTicks-1)-dot.TickCount)
		if nextTickAt > sim.CurrentTime && (nextTickAt < sim.CurrentTime+gracePeriod || nextTickAt < sim.CurrentTime+400*time.Millisecond) {
			// Delay disease for next tick
			dk.LastOutcome = core.OutcomeMiss
			dk.WaitUntil(sim, nextTickAt+50*time.Millisecond)
		} else {
			dk.WaitUntil(sim, sim.CurrentTime)
		}
	} else {
		dk.WaitUntil(sim, sim.CurrentTime)
	}

	s.Advance()
	return true
}
