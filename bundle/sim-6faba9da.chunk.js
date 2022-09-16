import{bp as t,bq as n,cs as e,ct as a,cu as i,cv as s,cw as o,cx as r,cy as l,bl as m,b1 as d,b4 as c,b6 as g,ag as h,a_ as p,a6 as f,T as S,cz as u,d as b,a as y,R as F,a3 as A,bj as w,bk as P,D as W}from"./raid_sim_action-ba7bc10a.chunk.js";import{B as v,q as O,i as T,a as B,b as k,c as M,I as G,O as R,T as C}from"./individual_sim_ui-f17c4a89.chunk.js";const E={name:"Arcane",data:t.create({talentsString:"23000513310033015032310250532-03-023303001",glyphs:n.create({major1:e.GlyphOfArcaneBlast,major2:e.GlyphOfArcaneMissiles,major3:e.GlyphOfMoltenArmor,minor1:a.GlyphOfSlowFall,minor2:a.GlyphOfFrostWard,minor3:a.GlyphOfBlastWave})})},I={name:"Fire",data:t.create({talentsString:"23000503110003-0055030011302331053120321351",glyphs:n.create({major1:e.GlyphOfFireball,major2:e.GlyphOfMoltenArmor,major3:e.GlyphOfLivingBomb,minor1:a.GlyphOfSlowFall,minor2:a.GlyphOfFrostWard,minor3:a.GlyphOfBlastWave})})},j={name:"Frostfire",data:t.create({talentsString:"-0055030011302331053120321351-2033030310003",glyphs:n.create({major1:e.GlyphOfFrostfire,major2:e.GlyphOfMoltenArmor,major3:e.GlyphOfLivingBomb,minor1:a.GlyphOfSlowFall,minor2:a.GlyphOfFrostWard,minor3:a.GlyphOfBlastWave})})},N={name:"Frost",data:t.create({talentsString:"23000503110003--0533030310233100030152231351",glyphs:n.create({major1:e.GlyphOfFrostbolt,major2:e.GlyphOfEternalWater,major3:e.GlyphOfMoltenArmor,minor1:a.GlyphOfSlowFall,minor2:a.GlyphOfFrostWard,minor3:a.GlyphOfBlastWave})})},x=i.create({type:s.Fire,primaryFireSpell:o.Fireball,maintainImprovedScorch:!1}),D=r.create({armor:l.MoltenArmor,focusMagicPercentUptime:99}),H=m.create({flask:d.FlaskOfTheFrostWyrm,food:c.FoodFirecrackerSalmon,defaultPotion:g.PotionOfSpeed,defaultConjured:h.ConjuredFlameCap}),J=i.create({type:s.Frost,waterElementalDisobeyChance:.1}),z=r.create({armor:l.MoltenArmor}),U=m.create({defaultPotion:g.PotionOfSpeed,defaultConjured:h.ConjuredFlameCap,flask:d.FlaskOfTheFrostWyrm,food:c.FoodFishFeast}),_=i.create({type:s.Arcane,minBlastBeforeMissiles:4,num4StackBlastsToMissilesGamble:12,num4StackBlastsToEarlyMissiles:6,extraBlastsDuringFirstAp:2}),L=r.create({armor:l.MoltenArmor,focusMagicPercentUptime:99}),q=m.create({defaultPotion:g.PotionOfSpeed,defaultConjured:h.ConjuredDarkRune,flask:d.FlaskOfTheFrostWyrm,food:c.FoodFirecrackerSalmon}),K={name:"Wotlk P1 Arcane Preset",tooltip:v,enableWhen:t=>t.getRotation().type==s.Arcane,gear:p.fromJsonString('{"items": [\n        {\n          "id": 40416,\n          "enchant": 44877,\n          "gems": [\n            41285,\n            39998\n          ]\n        },\n        {\n          "id": 44661,\n          "gems": [\n            40026\n          ]\n        },\n        {\n          "id": 40419,\n          "enchant": 44874,\n          "gems": [\n            40051\n          ]\n        },\n        {\n          "id": 44005,\n          "enchant": 55642,\n          "gems": [\n            40026\n          ]\n        },\n        {\n          "id": 44002,\n          "enchant": 44489,\n          "gems": [\n            39998,\n            39998\n          ]\n        },\n        {\n          "id": 44008,\n          "enchant": 44498,\n          "gems": [\n            39998,\n            0\n          ]\n        },\n        {\n          "id": 40415,\n          "enchant": 54999,\n          "gems": [\n            39998,\n            0\n          ]\n        },\n        {\n          "id": 40561,\n          "gems": [\n            39998\n          ]\n        },\n        {\n          "id": 40417,\n          "enchant": 41602,\n          "gems": [\n            39998,\n            40051\n          ]\n        },\n        {\n          "id": 40558,\n          "enchant": 55016\n        },\n        {\n          "id": 40719\n        },\n        {\n          "id": 40399\n        },\n        {\n          "id": 39229\n        },\n        {\n          "id": 40255\n        },\n        {\n          "id": 40396,\n          "enchant": 44487\n        },\n        {\n          "id": 40273\n        },\n        {\n          "id": 39426\n        }\n      ]\n    }')},V={name:"Wotlk P1 Fire Preset",tooltip:v,enableWhen:t=>t.getRotation().type==s.Fire,gear:p.fromJsonString('{\n\t\t"items": [\n\t\t  {\n\t\t\t"id": 40416,\n\t\t\t"enchant": 44877,\n\t\t\t"gems": [\n\t\t\t  41285,\n\t\t\t  39998\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 44661,\n\t\t\t"gems": [\n\t\t\t  40026\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40419,\n\t\t\t"enchant": 44874,\n\t\t\t"gems": [\n\t\t\t  40049\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 44005,\n\t\t\t"enchant": 55642,\n\t\t\t"gems": [\n\t\t\t  40026\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40418,\n\t\t\t"enchant": 44489,\n\t\t\t"gems": [\n\t\t\t  39998,\n\t\t\t  40048\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 44008,\n\t\t\t"enchant": 44498,\n\t\t\t"gems": [\n\t\t\t  39998,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40415,\n\t\t\t"enchant": 54999,\n\t\t\t"gems": [\n\t\t\t  39998,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40301,\n\t\t\t"gems": [\n\t\t\t  39998\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40560,\n\t\t\t"enchant": 41602\n\t\t  },\n\t\t  {\n\t\t\t"id": 40246,\n\t\t\t"enchant": 55016\n\t\t  },\n\t\t  {\n\t\t\t"id": 40399\n\t\t  },\n\t\t  {\n\t\t\t"id": 40719\n\t\t  },\n\t\t  {\n\t\t\t"id": 40255\n\t\t  },\n\t\t  {\n\t\t\t"id": 40432\n\t\t  },\n\t\t  {\n\t\t\t"id": 40396,\n\t\t\t"enchant": 44487\n\t\t  },\n\t\t  {\n\t\t\t"id": 40273\n\t\t  },\n\t\t  {\n\t\t\t"id": 39712\n\t\t  }\n\t\t]\n\t  }')},Q={name:"Wotlk P1 Frost Preset",tooltip:v,enableWhen:t=>t.getRotation().type==s.Frost,gear:p.fromJsonString('{"items": [\n        {\n          "id": 40416,\n          "enchant": 44877,\n          "gems": [\n            41285,\n            39998\n          ]\n        },\n        {\n          "id": 44661,\n          "gems": [\n            40026\n          ]\n        },\n        {\n          "id": 40419,\n          "enchant": 44874,\n          "gems": [\n            40051\n          ]\n        },\n        {\n          "id": 44005,\n          "enchant": 55642,\n          "gems": [\n            40026\n          ]\n        },\n        {\n          "id": 40418,\n          "enchant": 44489,\n          "gems": [\n            39998,\n            40048\n          ]\n        },\n        {\n          "id": 44008,\n          "enchant": 44498,\n          "gems": [\n            39998,\n            0\n          ]\n        },\n        {\n          "id": 40415,\n          "enchant": 54999,\n          "gems": [\n            39998,\n            0\n          ]\n        },\n        {\n          "id": 40301,\n          "gems": [\n            39998\n          ]\n        },\n        {\n          "id": 40560,\n          "enchant": 41602\n        },\n        {\n          "id": 40558,\n          "enchant": 55016\n        },\n        {\n          "id": 40399\n        },\n        {\n          "id": 40719\n        },\n        {\n          "id": 40255\n        },\n        {\n          "id": 40432\n        },\n        {\n          "id": 40396,\n          "enchant": 44487\n        },\n        {\n          "id": 39766\n        },\n        {\n          "id": 39712\n        }\n      ]\n    }')},X={name:"Arcane Pre Raid Preset",tooltip:v,enableWhen:t=>t.getRotation().type==s.Arcane,gear:p.fromJsonString('\n\t{\n\t\t"items": [\n\t\t  {\n\t\t\t"id": 42553,\n\t\t\t"enchant": 44877,\n\t\t\t"gems": [\n\t\t\t  41285,\n\t\t\t  40049\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 39472\n\t\t  },\n\t\t  {\n\t\t\t"id": 37673,\n\t\t\t"enchant": 44874,\n\t\t\t"gems": [\n\t\t\t  39998\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 41610,\n\t\t\t"enchant": 55642\n\t\t  },\n\t\t  {\n\t\t\t"id": 39492,\n\t\t\t"enchant": 44489,\n\t\t\t"gems": [\n\t\t\t  39998,\n\t\t\t  40049\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 37361,\n\t\t\t"enchant": 44498,\n\t\t\t"gems": [\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 39495,\n\t\t\t"enchant": 54999,\n\t\t\t"gems": [\n\t\t\t  39998,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40696,\n\t\t\t"gems": [\n\t\t\t  40049,\n\t\t\t  40026\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 37854,\n\t\t\t"enchant": 41602\n\t\t  },\n\t\t  {\n\t\t\t"id": 44202,\n\t\t\t"enchant": 55016,\n\t\t\t"gems": [\n\t\t\t  40026\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40585\n\t\t  },\n\t\t  {\n\t\t\t"id": 37694\n\t\t  },\n\t\t  {\n\t\t\t"id": 37873\n\t\t  },\n\t\t  {\n\t\t\t"id": 40682\n\t\t  },\n\t\t  {\n\t\t\t"id": 37360,\n\t\t\t"enchant": 45059\n\t\t  },\n\t\t  {},\n\t\t  {\n\t\t\t"id": 37238\n\t\t  }\n\t\t]\n\t  }')},Y={name:"Fire Pre Raid Preset",tooltip:v,enableWhen:t=>t.getRotation().type==s.Fire,gear:p.fromJsonString('\n\t{\n\t\t"items": [\n\t\t  {\n\t\t\t"id": 42553,\n\t\t\t"enchant": 44877,\n\t\t\t"gems": [\n\t\t\t  41285,\n\t\t\t  40014\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 39472\n\t\t  },\n\t\t  {\n\t\t\t"id": 34210,\n\t\t\t"enchant": 44874,\n\t\t\t"gems": [\n\t\t\t  40049,\n\t\t\t  40014\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 41610,\n\t\t\t"enchant": 63765\n\t\t  },\n\t\t  {\n\t\t\t"id": 39492,\n\t\t\t"enchant": 44489,\n\t\t\t"gems": [\n\t\t\t  40049,\n\t\t\t  40014\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 37361,\n\t\t\t"enchant": 44498,\n\t\t\t"gems": [\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 39495,\n\t\t\t"enchant": 54999,\n\t\t\t"gems": [\n\t\t\t  40049,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40696,\n\t\t\t"gems": [\n\t\t\t  40014,\n\t\t\t  40026\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 37854,\n\t\t\t"enchant": 41602\n\t\t  },\n\t\t  {\n\t\t\t"id": 44202,\n\t\t\t"enchant": 60623,\n\t\t\t"gems": [\n\t\t\t  40026\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40585\n\t\t  },\n\t\t  {\n\t\t\t"id": 42644,\n\t\t\t"gems": [\n\t\t\t  40049\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 37873\n\t\t  },\n\t\t  {\n\t\t\t"id": 40682\n\t\t  },\n\t\t  {\n\t\t\t"id": 45085,\n\t\t\t"enchant": 44487\n\t\t  },\n\t\t  {\n\t\t\t"id": 40698\n\t\t  },\n\t\t  {\n\t\t\t"id": 37177\n\t\t  }\n\t\t]\n\t  }\n\t')},Z={name:"Wotlk ICC Frostfire Bolt Preset",tooltip:v,enableWhen:t=>t.getRotation().type==s.Fire,gear:p.fromJsonString('\n\t\t{"items": [\n\t\t\t{\n\t\t\t"id": 51281,\n\t\t\t"enchant": 44877,\n\t\t\t"gems": [\n\t\t\t\t41285,\n\t\t\t\t40133\n\t\t\t]\n\t\t\t},\n\t\t\t{\n\t\t\t"id": 50724,\n\t\t\t"gems": [\n\t\t\t\t40133\n\t\t\t]\n\t\t\t},\n\t\t\t{\n\t\t\t"id": 51284,\n\t\t\t"enchant": 44874,\n\t\t\t"gems": [\n\t\t\t\t40153\n\t\t\t]\n\t\t\t},\n\t\t\t{\n\t\t\t"id": 54583,\n\t\t\t"enchant": 55642,\n\t\t\t"gems": [\n\t\t\t\t40152\n\t\t\t]\n\t\t\t},\n\t\t\t{\n\t\t\t"id": 51283,\n\t\t\t"enchant": 44489,\n\t\t\t"gems": [\n\t\t\t\t40152,\n\t\t\t\t40133\n\t\t\t]\n\t\t\t},\n\t\t\t{\n\t\t\t"id": 54582,\n\t\t\t"enchant": 44498,\n\t\t\t"gems": [\n\t\t\t\t40152,\n\t\t\t\t0\n\t\t\t]\n\t\t\t},\n\t\t\t{\n\t\t\t"id": 51280,\n\t\t\t"enchant": 54999,\n\t\t\t"gems": [\n\t\t\t\t40133,\n\t\t\t\t0\n\t\t\t]\n\t\t\t},\n\t\t\t{\n\t\t\t"id": 50613,\n\t\t\t"gems": [\n\t\t\t\t40133,\n\t\t\t\t40153,\n\t\t\t\t40153\n\t\t\t]\n\t\t\t},\n\t\t\t{\n\t\t\t"id": 50694,\n\t\t\t"enchant": 41602,\n\t\t\t"gems": [\n\t\t\t\t40152,\n\t\t\t\t40133,\n\t\t\t\t40153\n\t\t\t]\n\t\t\t},\n\t\t\t{\n\t\t\t"id": 50699,\n\t\t\t"enchant": 55016,\n\t\t\t"gems": [\n\t\t\t\t40133,\n\t\t\t\t40152\n\t\t\t]\n\t\t\t},\n\t\t\t{\n\t\t\t"id": 50664,\n\t\t\t"gems": [\n\t\t\t\t40133\n\t\t\t]\n\t\t\t},\n\t\t\t{\n\t\t\t"id": 50398,\n\t\t\t"gems": [\n\t\t\t\t40153\n\t\t\t]\n\t\t\t},\n\t\t\t{\n\t\t\t"id": 50348\n\t\t\t},\n\t\t\t{\n\t\t\t"id": 50345\n\t\t\t},\n\t\t\t{\n\t\t\t"id": 50732,\n\t\t\t"gems": [\n\t\t\t\t40152\n\t\t\t]\n\t\t\t},\n\t\t\t{\n\t\t\t"id": 50719\n\t\t\t},\n\t\t\t{\n\t\t\t"id": 50684,\n\t\t\t"gems": [\n\t\t\t\t40153\n\t\t\t]\n\t\t\t}\n\t\t]\n\t\t}')},$={name:"Wotlk ICC Fire Preset",tooltip:v,enableWhen:t=>t.getRotation().type==s.Fire,gear:p.fromJsonString('{\n\t\t"items": [\n\t\t  {\n\t\t\t"id": 51281,\n\t\t\t"enchant": 44877,\n\t\t\t"gems": [\n\t\t\t  41285,\n\t\t\t  40133\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 50658,\n\t\t\t"gems": [\n\t\t\t  40153\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 51284,\n\t\t\t"enchant": 44874,\n\t\t\t"gems": [\n\t\t\t  40153\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 54583,\n\t\t\t"enchant": 55642,\n\t\t\t"gems": [\n\t\t\t  40152\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 51283,\n\t\t\t"enchant": 44489,\n\t\t\t"gems": [\n\t\t\t  40152,\n\t\t\t  40133\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 54582,\n\t\t\t"enchant": 44498,\n\t\t\t"gems": [\n\t\t\t  40152,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 51280,\n\t\t\t"enchant": 54999,\n\t\t\t"gems": [\n\t\t\t  40133,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 50613,\n\t\t\t"gems": [\n\t\t\t  40133,\n\t\t\t  40153,\n\t\t\t  40153\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 50694,\n\t\t\t"enchant": 41602,\n\t\t\t"gems": [\n\t\t\t  40152,\n\t\t\t  40133,\n\t\t\t  40153\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 50699,\n\t\t\t"enchant": 55016,\n\t\t\t"gems": [\n\t\t\t  40133,\n\t\t\t  40152\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 50664,\n\t\t\t"gems": [\n\t\t\t  40133\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 50398,\n\t\t\t"gems": [\n\t\t\t  40153\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 50348\n\t\t  },\n\t\t  {\n\t\t\t"id": 50345\n\t\t  },\n\t\t  {\n\t\t\t"id": 50732,\n\t\t\t"gems": [\n\t\t\t  40152\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 50719\n\t\t  },\n\t\t  {\n\t\t\t"id": 50684,\n\t\t\t"gems": [\n\t\t\t  40153\n\t\t\t]\n\t\t  }\n\t\t]\n\t  }\n\t')},tt={name:"Ulduar Arcane rough BiS",tooltip:v,enableWhen:t=>t.getRotation().type==s.Arcane,gear:p.fromJsonString('\n\t\t{\n\t\t\t"items": [\n\t\t\t  {\n\t\t\t\t"id": 46129,\n\t\t\t\t"enchant": 44877,\n\t\t\t\t"gems": [\n\t\t\t\t  41285,\n\t\t\t\t  39998\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45243,\n\t\t\t\t"gems": [\n\t\t\t\t  39998\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 46134,\n\t\t\t\t"enchant": 44874,\n\t\t\t\t"gems": [\n\t\t\t\t  40051\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45618,\n\t\t\t\t"enchant": 55642,\n\t\t\t\t"gems": [\n\t\t\t\t  40026\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 46130,\n\t\t\t\t"enchant": 44489,\n\t\t\t\t"gems": [\n\t\t\t\t  39998,\n\t\t\t\t  39998\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45446,\n\t\t\t\t"enchant": 44498,\n\t\t\t\t"gems": [\n\t\t\t\t  39998,\n\t\t\t\t  39998\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45665,\n\t\t\t\t"enchant": 54999,\n\t\t\t\t"gems": [\n\t\t\t\t  40026,\n\t\t\t\t  40051,\n\t\t\t\t  0\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45619,\n\t\t\t\t"gems": [\n\t\t\t\t  40049,\n\t\t\t\t  40049,\n\t\t\t\t  39998\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 46133,\n\t\t\t\t"enchant": 41602,\n\t\t\t\t"gems": [\n\t\t\t\t  39998,\n\t\t\t\t  39998\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45135,\n\t\t\t\t"enchant": 55016,\n\t\t\t\t"gems": [\n\t\t\t\t  39998,\n\t\t\t\t  40026\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 46046,\n\t\t\t\t"gems": [\n\t\t\t\t  40049\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45495,\n\t\t\t\t"gems": [\n\t\t\t\t  39998\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45518\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45490\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45620,\n\t\t\t\t"gems": [\n\t\t\t\t  39998\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45271\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 39712\n\t\t\t  }\n\t\t\t]\n\t\t  }\n\t\t')},nt={name:"Ulduar Fire rough BiS",tooltip:v,enableWhen:t=>t.getRotation().type==s.Fire,gear:p.fromJsonString('\n\t\t{\n\t\t\t"items": [\n\t\t\t  {\n\t\t\t\t"id": 46129,\n\t\t\t\t"enchant": 44877,\n\t\t\t\t"gems": [\n\t\t\t\t  41285,\n\t\t\t\t  39998\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45133,\n\t\t\t\t"gems": [\n\t\t\t\t  40051\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 46134,\n\t\t\t\t"enchant": 44874,\n\t\t\t\t"gems": [\n\t\t\t\t  40051\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45242,\n\t\t\t\t"enchant": 55642,\n\t\t\t\t"gems": [\n\t\t\t\t  40051\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 46130,\n\t\t\t\t"enchant": 44489,\n\t\t\t\t"gems": [\n\t\t\t\t  39998,\n\t\t\t\t  39998\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45275,\n\t\t\t\t"enchant": 44498,\n\t\t\t\t"gems": [\n\t\t\t\t  39998\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45665,\n\t\t\t\t"enchant": 54999,\n\t\t\t\t"gems": [\n\t\t\t\t  40026,\n\t\t\t\t  40051,\n\t\t\t\t  0\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45619,\n\t\t\t\t"gems": [\n\t\t\t\t  40051,\n\t\t\t\t  40051,\n\t\t\t\t  39998\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 46133,\n\t\t\t\t"enchant": 41602,\n\t\t\t\t"gems": [\n\t\t\t\t  39998,\n\t\t\t\t  39998\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45537,\n\t\t\t\t"enchant": 55016,\n\t\t\t\t"gems": [\n\t\t\t\t  39998,\n\t\t\t\t  40026\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 46046,\n\t\t\t\t"gems": [\n\t\t\t\t  40051\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45495,\n\t\t\t\t"gems": [\n\t\t\t\t  39998\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45308\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45518\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45620,\n\t\t\t\t"enchant": 44495,\n\t\t\t\t"gems": [\n\t\t\t\t  39998\n\t\t\t\t]\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 45617\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"id": 39712\n\t\t\t  }\n\t\t\t]\n\t\t  }\n\t\t')},et=O({fieldName:"armor",values:[{color:"grey",value:l.NoArmor},{actionId:f.fromSpellId(43024),value:l.MageArmor},{actionId:f.fromSpellId(43046),value:l.MoltenArmor}]}),at=T({fieldName:"evocationTicks",label:"# Evocation Ticks",labelTooltip:"The number of ticks of Evocation to use, or 0 to use the full duration."}),it=T({fieldName:"focusMagicPercentUptime",label:"Focus Magic Percent Uptime",labelTooltip:"Percent of uptime for Focus Magic Buddy"}),st={inputs:[B({fieldName:"type",label:"Spec",labelTooltip:"Switches between spec rotation settings. Will also update talents to defaults for the selected spec.",values:[{name:"Arcane",value:s.Arcane},{name:"Fire",value:s.Fire},{name:"Frost",value:s.Frost}],setValue:(t,n,e)=>{const a=n.getRotation();a.type=e,S.freezeAllAndDo((()=>{a.type==s.Arcane?(n.setTalentsString(t,E.data.talentsString),n.setGlyphs(t,E.data.glyphs)):a.type==s.Fire?(n.setTalentsString(t,I.data.talentsString),n.setGlyphs(t,I.data.glyphs)):a.type==s.Frost&&(n.setTalentsString(t,N.data.talentsString),n.setGlyphs(t,N.data.glyphs)),n.setRotation(t,a)}))}}),B({fieldName:"aoe",label:"Primary Spell",values:[{name:"Arcane Explosion",value:u.ArcaneExplosion},{name:"Flamestrike",value:u.Flamestrike},{name:"Blizzard",value:u.Blizzard}],showWhen:t=>t.getRotation().type==s.Aoe}),B({fieldName:"primaryFireSpell",label:"Primary Spell",values:[{name:"Fireball",value:o.Fireball},{name:"FrostfireBolt",value:o.FrostfireBolt}],showWhen:t=>t.getRotation().type==s.Fire}),k({fieldName:"optimizeCdsForExecute",label:"Optimize CDs for execute time",labelTooltip:"Automatically save cooldowns that only have 1 use remaining for execute time",showWhen:t=>t.getRotation().type==s.Fire}),k({fieldName:"maintainImprovedScorch",label:"Maintain Imp. Scorch",labelTooltip:"Always use Scorch when below 5 stacks, or < 5.5s remaining on debuff.",showWhen:t=>t.getRotation().type==s.Fire}),k({fieldName:"lbBeforeHotstreak",label:"Living Bomb Over Hot Streak",labelTooltip:"Choose to reapply living bomb before consuming hot streak",showWhen:t=>t.getRotation().type==s.Fire}),M({fieldName:"waterElementalDisobeyChance",percent:!0,label:"Water Ele Disobey %",labelTooltip:"Percent of Water Elemental actions which will fail. This represents the Water Elemental moving around or standing still instead of casting.",changeEmitter:t=>S.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter]),showWhen:t=>t.getRotation().type==s.Frost,enableWhen:t=>t.getTalents().summonWaterElemental}),M({fieldName:"minBlastBeforeMissiles",label:"Min ABs before missiles",labelTooltip:"Minimum arcane blasts to cast before using a missile barrage proc",showWhen:t=>t.getRotation().type==s.Arcane}),M({fieldName:"num4StackBlastsToMissilesGamble",label:"Switch to AM Gamble At",labelTooltip:"Number of times mage has cast a 4 stacked arcane blast over the whole fight before gambling on AM when you dont have missile barrage",showWhen:t=>t.getRotation().type==s.Arcane}),M({fieldName:"num4StackBlastsToEarlyMissiles",label:"Switch to ASAP missiles barrage At",labelTooltip:"Switch to using missiles barrage ASAP after this many 4 cost ABs",showWhen:t=>t.getRotation().type==s.Arcane}),M({fieldName:"extraBlastsDuringFirstAp",label:"Extra blasts during first AP",labelTooltip:"Number of extra arcane blasts to use during your first cooldown phase with AP",showWhen:t=>t.getRotation().type==s.Arcane})]};class ot extends G{constructor(t,n){super(t,n,{cssClass:"mage-sim-ui",knownIssues:[],epStats:[b.StatIntellect,b.StatSpirit,b.StatSpellPower,b.StatArcaneSpellPower,b.StatFireSpellPower,b.StatFrostSpellPower,b.StatSpellHit,b.StatSpellCrit,b.StatSpellHaste,b.StatMP5],epReferenceStat:b.StatSpellPower,displayStats:[b.StatHealth,b.StatStamina,b.StatIntellect,b.StatSpirit,b.StatSpellPower,b.StatArcaneSpellPower,b.StatFireSpellPower,b.StatFrostSpellPower,b.StatSpellHit,b.StatSpellCrit,b.StatSpellHaste,b.StatMP5],defaults:{gear:K.gear,epWeights:y.fromMap({[b.StatIntellect]:.43,[b.StatSpirit]:.39,[b.StatSpellPower]:1,[b.StatArcaneSpellPower]:1,[b.StatFireSpellPower]:0,[b.StatFrostSpellPower]:0,[b.StatSpellCrit]:.59,[b.StatSpellHaste]:1.27,[b.StatMP5]:.1,[b.StatSpellHit]:.3}),consumes:q,rotation:_,talents:E.data,specOptions:L,raidBuffs:F.create({giftOfTheWild:A.TristateEffectImproved,bloodlust:!0,manaSpringTotem:A.TristateEffectImproved,wrathOfAirTotem:!0,divineSpirit:!0,swiftRetribution:!0,sanctifiedRetribution:!0,demonicPact:2500,moonkinAura:A.TristateEffectImproved,arcaneBrilliance:!0}),partyBuffs:w.create({manaTideTotems:1}),individualBuffs:P.create({blessingOfKings:!0,blessingOfWisdom:A.TristateEffectImproved,innervates:0,vampiricTouch:!0}),debuffs:W.create({judgementOfWisdom:!0,misery:!0,curseOfElements:!0,shadowMastery:!0,heartOfTheCrusader:!0})},playerIconInputs:[et],rotationInputs:st,includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[at,it,R,C]},encounterPicker:{showExecuteProportion:!0},presets:{talents:[E,I,j,N],gear:[K,V,Q,X,Y,Z,$,tt,nt]}})}}export{E as A,_ as D,I as F,ot as M,K as P,L as a,q as b,x as c,D as d,H as e,V as f,J as g,N as h,z as i,U as j,Q as k};
//# sourceMappingURL=sim-6faba9da.chunk.js.map
