import{bp as t,bq as n,cE as e,cF as a,db as i,dc as s,ab as l,ac as o,dd as r,de as d,cB as m,cD as c,bl as g,b6 as h,ag as f,b1 as u,b4 as p,a_ as S,a6 as v,cC as b,d as I,a as O,T as P,Z as y,R as C,a3 as W,bj as T,bk as k,D as w}from"./raid_sim_action-ba7bc10a.chunk.js";import{B as D,q as E,c as A,b as M,G as R,a as x,I as H,R as j,T as J,p as G}from"./individual_sim_ui-f17c4a89.chunk.js";const N={name:"Basic w/Aura Mastery+LoH buff",data:t.create({talentsString:"050501-05-05232051203331302133231331",glyphs:n.create({major1:e.GlyphOfSealOfVengeance,major2:e.GlyphOfJudgement,major3:e.GlyphOfConsecration,minor1:a.GlyphOfSenseUndead,minor2:a.GlyphOfLayOnHands,minor3:a.GlyphOfBlessingOfKings})})},B={name:"Basic w/Dsac",data:t.create({talentsString:"03-453201002-05222051203331302133201331",glyphs:n.create({major1:e.GlyphOfSealOfVengeance,major2:e.GlyphOfJudgement,major3:e.GlyphOfConsecration,minor1:a.GlyphOfSenseUndead,minor2:a.GlyphOfLayOnHands,minor3:a.GlyphOfBlessingOfKings})})},q=i.create({type:s.Standard,exoSlack:500,consSlack:500,useDivinePlea:!0,divinePleaPercentage:.75,holyWrathThreshold:4,sovTargets:1,customRotation:l.create({spells:[o.create({spell:r.JudgementOfWisdom}),o.create({spell:r.HammerOfWrath}),o.create({spell:r.CrusaderStrike}),o.create({spell:r.DivineStorm}),o.create({spell:r.Exorcism}),o.create({spell:r.Consecration})]}),customCastSequence:l.create({spells:[o.create({spell:r.JudgementOfWisdom}),o.create({spell:r.CrusaderStrike}),o.create({spell:r.DivineStorm}),o.create({spell:r.Consecration}),o.create({spell:r.CrusaderStrike}),o.create({spell:r.Exorcism}),o.create({spell:r.JudgementOfWisdom}),o.create({spell:r.CrusaderStrike}),o.create({spell:r.DivineStorm}),o.create({spell:r.Consecration}),o.create({spell:r.CrusaderStrike})]})}),V=d.create({aura:m.RetributionAura,judgement:c.JudgementOfWisdom,damageTakenPerSecond:0}),F=g.create({defaultPotion:h.PotionOfSpeed,defaultConjured:f.ConjuredDarkRune,flask:u.FlaskOfEndlessRage,food:p.FoodFishFeast}),L={name:"Pre-Raid Preset",tooltip:D,enableWhen:t=>!0,gear:S.fromJsonString('{"items": [\n        {\n          "id": 41386,\n          "enchant": 44879,\n          "gems": [\n            41398,\n            40022\n          ]\n        },\n        {\n          "id": 40678\n        },\n        {\n          "id": 34388,\n          "enchant": 44131,\n          "gems": [\n            39996,\n            40037\n          ]\n        },\n        {\n          "id": 37647,\n          "enchant": 55002\n        },\n        {\n          "id": 39633,\n          "enchant": 44489,\n          "gems": [\n            39996,\n            40038\n          ]\n        },\n        {\n          "id": 41355,\n          "enchant": 44484,\n          "gems": [\n            0\n          ]\n        },\n        {\n          "id": 39634,\n          "enchant": 54999,\n          "gems": [\n            39996,\n            0\n          ]\n        },\n        {\n          "id": 40694,\n          "gems": [\n            39996,\n            39996\n          ]\n        },\n        {\n          "id": 37193,\n          "enchant": 38372,\n          "gems": [\n            39996,\n            39996\n          ]\n        },\n        {\n          "id": 44297,\n          "enchant": 55016\n        },\n        {\n          "id": 40586\n        },\n        {\n          "id": 37685\n        },\n        {\n          "id": 42987\n        },\n        {\n          "id": 40684\n        },\n        {\n          "id": 37852,\n          "enchant": 44492\n        },\n        {},\n        {\n          "id": 37574\n        }\n      ]\n    }')},U={name:"P1 Preset",tooltip:D,enableWhen:t=>!0,gear:S.fromJsonString('{\n\t\t"items": [\n\t\t  {\n\t\t\t"id": 40576,\n\t\t\t"enchant": 44879,\n\t\t\t"gems": [\n\t\t\t  41398,\n\t\t\t  40037\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 44664,\n\t\t\t"gems": [\n\t\t\t  42142\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40578,\n\t\t\t"enchant": 44871,\n\t\t\t"gems": [\n\t\t\t  49110\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40403,\n\t\t\t"enchant": 55002\n\t\t  },\n\t\t  {\n\t\t\t"id": 40574,\n\t\t\t"enchant": 44489,\n\t\t\t"gems": [\n\t\t\t  42142,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40186,\n\t\t\t"enchant": 44484,\n\t\t\t"gems": [\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40541,\n\t\t\t"enchant": 54999,\n\t\t\t"gems": [\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40205,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40577,\n\t\t\t"enchant": 38374,\n\t\t\t"gems": [\n\t\t\t  42142,\n\t\t\t  40038\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 39701,\n\t\t\t"enchant": 55016\n\t\t  },\n\t\t  {\n\t\t\t"id": 40075\n\t\t  },\n\t\t  {\n\t\t\t"id": 40474\n\t\t  },\n\t\t  {\n\t\t\t"id": 42987\n\t\t  },\n\t\t  {\n\t\t\t"id": 40431\n\t\t  },\n\t\t  {\n\t\t\t"id": 40384,\n\t\t\t"enchant": 44492\n\t\t  },\n\t\t  {},\n\t\t  {\n\t\t\t"id": 42852\n\t\t  }\n\t\t]\n\t  }')},_={name:"P2 Preset (Placeholder)",tooltip:D,enableWhen:t=>!0,gear:S.fromJsonString('{\n\t\t"items": [\n\t\t  {\n\t\t\t"id": 46156,\n\t\t\t"enchant": 44879,\n\t\t\t"gems": [\n\t\t\t  41398,\n\t\t\t  40003\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45517,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46152,\n\t\t\t"enchant": 44871,\n\t\t\t"gems": [\n\t\t\t  40059\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45461,\n\t\t\t"enchant": 55002,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46154,\n\t\t\t"enchant": 44489,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45611,\n\t\t\t"enchant": 44484,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46155,\n\t\t\t"enchant": 54999,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46095,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  39996,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45134,\n\t\t\t"enchant": 38374,\n\t\t\t"gems": [\n\t\t\t  42142,\n\t\t\t  42142,\n\t\t\t  42142\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45599,\n\t\t\t"enchant": 55016,\n\t\t\t"gems": [\n\t\t\t  40003,\n\t\t\t  49110\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45456,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 45525\n\t\t  },\n\t\t  {\n\t\t\t"id": 45609\n\t\t  },\n\t\t  {\n\t\t\t"id": 45522\n\t\t  },\n\t\t  {\n\t\t\t"id": 45533,\n\t\t\t"enchant": 44492,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {},\n\t\t  {\n\t\t\t"id": 42852\n\t\t  }\n\t\t]\n\t  }')},K={name:"P3 Preset (Placeholder)",tooltip:D,enableWhen:t=>!0,gear:S.fromJsonString('{\n\t\t"items": [\n\t\t  {\n\t\t\t"id": 48614,\n\t\t\t"enchant": 44879,\n\t\t\t"gems": [\n\t\t\t  41398,\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 53103,\n\t\t\t"gems": [\n\t\t\t  40162\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 47972,\n\t\t\t"enchant": 44871,\n\t\t\t"gems": [\n\t\t\t  40111,\n\t\t\t  40162\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46971,\n\t\t\t"enchant": 55002,\n\t\t\t"gems": [\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 47004,\n\t\t\t"enchant": 44489,\n\t\t\t"gems": [\n\t\t\t  40111,\n\t\t\t  40111,\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 47155,\n\t\t\t"enchant": 44484,\n\t\t\t"gems": [\n\t\t\t  49110,\n\t\t\t  40111,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 48615,\n\t\t\t"enchant": 54999,\n\t\t\t"gems": [\n\t\t\t  40162,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 47460,\n\t\t\t"gems": [\n\t\t\t  40111,\n\t\t\t  40111,\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46975,\n\t\t\t"enchant": 38374,\n\t\t\t"gems": [\n\t\t\t  42142,\n\t\t\t  42142,\n\t\t\t  42142\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 47154,\n\t\t\t"enchant": 55016,\n\t\t\t"gems": [\n\t\t\t  40111,\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 47075,\n\t\t\t"gems": [\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 46966,\n\t\t\t"gems": [\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 47131\n\t\t  },\n\t\t  {\n\t\t\t"id": 47115\n\t\t  },\n\t\t  {\n\t\t\t"id": 47519,\n\t\t\t"enchant": 44492,\n\t\t\t"gems": [\n\t\t\t  40111,\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {},\n\t\t  {\n\t\t\t"id": 47661\n\t\t  }\n\t\t]\n\t  }')},z={name:"P4 Preset (Placeholder)",tooltip:D,enableWhen:t=>!0,gear:S.fromJsonString('{\n\t\t"items": [\n\t\t  {\n\t\t\t"id": 51162,\n\t\t\t"enchant": 44879,\n\t\t\t"gems": [\n\t\t\t  41398,\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 50421,\n\t\t\t"gems": [\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 51160,\n\t\t\t"enchant": 44871,\n\t\t\t"gems": [\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 49998,\n\t\t\t"enchant": 55002,\n\t\t\t"gems": [\n\t\t\t  40125\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 51164,\n\t\t\t"enchant": 44489,\n\t\t\t"gems": [\n\t\t\t  40111,\n\t\t\t  49110\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 51832,\n\t\t\t"enchant": 44484,\n\t\t\t"gems": [\n\t\t\t  42142,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 50021,\n\t\t\t"enchant": 54999,\n\t\t\t"gems": [\n\t\t\t  40125,\n\t\t\t  40111,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 51925,\n\t\t\t"gems": [\n\t\t\t  40111,\n\t\t\t  40111,\n\t\t\t  40125\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 51161,\n\t\t\t"enchant": 38374,\n\t\t\t"gems": [\n\t\t\t  42142,\n\t\t\t  42142\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 49895,\n\t\t\t"enchant": 55016,\n\t\t\t"gems": [\n\t\t\t  40125,\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 51843,\n\t\t\t"gems": [\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 49949,\n\t\t\t"gems": [\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 50351\n\t\t  },\n\t\t  {\n\t\t\t"id": 50343\n\t\t  },\n\t\t  {\n\t\t\t"id": 49888,\n\t\t\t"enchant": 44492,\n\t\t\t"gems": [\n\t\t\t  40111,\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {},\n\t\t  {\n\t\t\t"id": 50455\n\t\t  }\n\t\t]\n\t  }')},Z={name:"P5 Preset (Placeholder)",tooltip:D,enableWhen:t=>!0,gear:S.fromJsonString('{\n\t\t"items": [\n\t\t  {\n\t\t\t"id": 51277,\n\t\t\t"enchant": 44879,\n\t\t\t"gems": [\n\t\t\t  41398,\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 54581,\n\t\t\t"gems": [\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 51279,\n\t\t\t"enchant": 44871,\n\t\t\t"gems": [\n\t\t\t  40118\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 50653,\n\t\t\t"enchant": 55002,\n\t\t\t"gems": [\n\t\t\t  40125\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 51275,\n\t\t\t"enchant": 44489,\n\t\t\t"gems": [\n\t\t\t  40118,\n\t\t\t  49110\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 54580,\n\t\t\t"enchant": 44484,\n\t\t\t"gems": [\n\t\t\t  42142,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 50690,\n\t\t\t"enchant": 54999,\n\t\t\t"gems": [\n\t\t\t  40125,\n\t\t\t  40111,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 50707,\n\t\t\t"gems": [\n\t\t\t  40111,\n\t\t\t  40111,\n\t\t\t  40125\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 51161,\n\t\t\t"enchant": 38374,\n\t\t\t"gems": [\n\t\t\t  42142,\n\t\t\t  42142\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 54578,\n\t\t\t"enchant": 55016,\n\t\t\t"gems": [\n\t\t\t  40111,\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 54576,\n\t\t\t"gems": [\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 52572,\n\t\t\t"gems": [\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 50706\n\t\t  },\n\t\t  {\n\t\t\t"id": 54590\n\t\t  },\n\t\t  {\n\t\t\t"id": 49623,\n\t\t\t"enchant": 44492,\n\t\t\t"gems": [\n\t\t\t  40111,\n\t\t\t  40111,\n\t\t\t  40111\n\t\t\t]\n\t\t  },\n\t\t  {},\n\t\t  {\n\t\t\t"id": 50455\n\t\t  }\n\t\t]\n\t  }')},Q=E({fieldName:"aura",values:[{color:"grey",value:m.NoPaladinAura},{actionId:v.fromSpellId(54043),value:m.RetributionAura}]}),X=E({fieldName:"seal",values:[{actionId:v.fromSpellId(42463),value:b.Vengeance},{actionId:v.fromSpellId(20154),value:b.Righteousness},{actionId:v.fromSpellId(20424),value:b.Command,showWhen:t=>t.getTalents().sealOfCommand}],changeEmitter:t=>t.changeEmitter}),Y=E({fieldName:"judgement",values:[{actionId:v.fromSpellId(53408),value:c.JudgementOfWisdom},{actionId:v.fromSpellId(20271),value:c.JudgementOfLight}]}),$=A({fieldName:"exoSlack",label:"Exo Slack (MS)",labelTooltip:"Amount of extra time in MS to give main abilities to come off cooldown before using Exorcism on single target",positive:!0,showWhen:t=>t.getRotation().type==s.Standard}),tt=A({fieldName:"consSlack",label:"Cons Slack (MS)",labelTooltip:"Amount of extra time in MS to give main abilities to come off cooldown before using Consecration on single target",positive:!0,showWhen:t=>t.getRotation().type==s.Standard}),nt=M({fieldName:"useDivinePlea",label:"Use Divine Plea",labelTooltip:"Whether or not to maintain Divine Plea",showWhen:t=>t.getRotation().type==s.Standard}),et=M({fieldName:"useDivinePlea",label:"Use Divine Plea - Out of Sequence",labelTooltip:"Whether or not to maintain Divine Plea, this happens OUTSIDE of the cast sequence",showWhen:t=>t.getRotation().type==s.CastSequence}),at=A({fieldName:"divinePleaPercentage",label:"Divine Plea Mana Threshold %",labelTooltip:"% of max mana left before beginning to use Divine Plea",percent:!0,positive:!0}),it=A({fieldName:"holyWrathThreshold",label:"Holy Wrath Threshold",labelTooltip:"Minimum number of Demon and Undead units before Holy Wrath is considered viable to add to an AOE rotation.",positive:!0,showWhen:t=>t.getRotation().type==s.Standard}),st=A({fieldName:"sovTargets",label:"Max SoV Targets",labelTooltip:"The maximum number of targets to keep the SoV debuff on.",positive:!0,showWhen:t=>t.getSpecOptions().seal==b.Vengeance,changeEmitter:t=>t.changeEmitter}),lt=R({fieldName:"customRotation",numColumns:2,values:[{actionId:v.fromSpellId(53408),value:r.JudgementOfWisdom},{actionId:v.fromSpellId(53385),value:r.DivineStorm},{actionId:v.fromSpellId(48806),value:r.HammerOfWrath},{actionId:v.fromSpellId(48819),value:r.Consecration},{actionId:v.fromSpellId(48817),value:r.HolyWrath},{actionId:v.fromSpellId(35395),value:r.CrusaderStrike},{actionId:v.fromSpellId(48801),value:r.Exorcism},{actionId:v.fromSpellId(54428),value:r.DivinePlea}],showWhen:t=>t.getRotation().type==s.Custom}),ot=R({fieldName:"customCastSequence",numColumns:2,values:[{actionId:v.fromSpellId(53408),value:r.JudgementOfWisdom},{actionId:v.fromSpellId(53385),value:r.DivineStorm},{actionId:v.fromSpellId(48806),value:r.HammerOfWrath},{actionId:v.fromSpellId(48819),value:r.Consecration},{actionId:v.fromSpellId(48817),value:r.HolyWrath},{actionId:v.fromSpellId(35395),value:r.CrusaderStrike},{actionId:v.fromSpellId(48801),value:r.Exorcism},{actionId:v.fromSpellId(54428),value:r.DivinePlea}],showWhen:t=>t.getRotation().type==s.CastSequence}),rt=x({fieldName:"type",label:"Type",labelTooltip:"<ul>\n\t\t<li>\n\t\t\t<div>Standard: All-in-one rotation for single target and aoe.</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<div>Custom: Highest spell that is ready will be cast.</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<div>Cast Sequence: Spells will be cast in the order of the list. (Like 1-button-macro)</div>\n\t\t</li>\n\t</ul>",values:[{name:"Standard",value:s.Standard},{name:"Custom",value:s.Custom},{name:"Cast Sequence",value:s.CastSequence}]});class dt extends H{constructor(t,n){super(t,n,{cssClass:"retribution-paladin-sim-ui",knownIssues:[],epStats:[I.StatStrength,I.StatAgility,I.StatIntellect,I.StatMP5,I.StatAttackPower,I.StatMeleeHit,I.StatMeleeCrit,I.StatMeleeHaste,I.StatExpertise,I.StatArmorPenetration,I.StatSpellPower,I.StatSpellCrit,I.StatSpellHit,I.StatSpellHaste],epReferenceStat:I.StatAttackPower,displayStats:[I.StatStrength,I.StatAgility,I.StatIntellect,I.StatMP5,I.StatAttackPower,I.StatMeleeHit,I.StatMeleeCrit,I.StatMeleeHaste,I.StatExpertise,I.StatArmorPenetration,I.StatSpellPower,I.StatSpellCrit,I.StatSpellHit,I.StatMana,I.StatHealth],modifyDisplayStats:t=>{let n=new O;return P.freezeAllAndDo((()=>{t.getMajorGlyphs().includes(e.GlyphOfSealOfVengeance)&&t.getSpecOptions().seal==b.Vengeance&&(n=n.addStat(I.StatExpertise,10*y))})),{talents:n}},defaults:{gear:U.gear,epWeights:O.fromMap({[I.StatStrength]:2.42,[I.StatAgility]:1.88,[I.StatIntellect]:0,[I.StatAttackPower]:1,[I.StatMeleeCrit]:1.98,[I.StatExpertise]:4.7,[I.StatMeleeHaste]:3.27,[I.StatArmorPenetration]:.24,[I.StatSpellPower]:.35,[I.StatSpellCrit]:0,[I.StatSpellHit]:0}),consumes:F,rotation:q,talents:N.data,specOptions:V,raidBuffs:C.create({arcaneBrilliance:!0,divineSpirit:!0,giftOfTheWild:W.TristateEffectImproved,bloodlust:!0,manaSpringTotem:W.TristateEffectRegular,hornOfWinter:!0,battleShout:W.TristateEffectImproved,sanctifiedRetribution:!0,swiftRetribution:!0,elementalOath:!0,rampage:!0,trueshotAura:!0,icyTalons:!0,totemOfWrath:!0,wrathOfAirTotem:!0}),partyBuffs:T.create({}),individualBuffs:k.create({judgementsOfTheWise:!0,blessingOfKings:!0,blessingOfMight:W.TristateEffectImproved}),debuffs:w.create({shadowMastery:!0,totemOfWrath:!0,judgementOfWisdom:!0,judgementOfLight:!0,misery:!0,curseOfElements:!0,bloodFrenzy:!0,exposeArmor:!0,sunderArmor:!0,faerieFire:W.TristateEffectImproved,curseOfWeakness:W.TristateEffectRegular})},playerIconInputs:[Q,Y,X],rotationInputs:{inputs:[rt,nt,et,at,tt,$,it,st,lt,ot]},includeBuffDebuffInputs:[j],excludeBuffDebuffInputs:[],otherInputs:{inputs:[J,G]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[N,B],gear:[L,U,_,K,z,Z]}})}}export{N as A,q as D,U as P,dt as R,V as a,F as b,_ as c,K as d,z as e,Z as f};
//# sourceMappingURL=sim-b19cafc3.chunk.js.map
