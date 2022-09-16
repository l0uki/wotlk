import{bp as t,bq as n,cg as e,ch as a,dj as i,dk as s,g as r,N as l,bl as o,b1 as d,b4 as f,b6 as p,R as m,a3 as c,bk as S,D as u,a_ as h,a6 as g,d as b,a as w,U as I,bj as P}from"./raid_sim_action-ba7bc10a.chunk.js";import{B as T,m as D,b as O,c as y,I as v,T as F}from"./individual_sim_ui-f17c4a89.chunk.js";const H={name:"Standard",data:t.create({talentsString:"05332031013005023310001-005551002020152-00502",glyphs:n.create({major1:e.GlyphOfSmite,major2:e.GlyphOfShadowWordPain,major3:e.GlyphOfShadowWordDeath,minor1:a.GlyphOfFortitude,minor2:a.GlyphOfShadowfiend,minor3:a.GlyphOfFading})})},M=i.create({useDevouringPlague:!0,useShadowWordDeath:!1,useMindBlast:!1}),W=s.create({useInnerFire:!0,useShadowfiend:!0,powerInfusionTarget:r.create({targetIndex:l})}),B=o.create({flask:d.FlaskOfTheFrostWyrm,food:f.FoodFishFeast,defaultPotion:p.RunicManaPotion,prepopPotion:p.PotionOfWildMagic}),C=m.create({giftOfTheWild:c.TristateEffectImproved,arcaneBrilliance:!0,divineSpirit:!0,totemOfWrath:!0,moonkinAura:c.TristateEffectImproved,wrathOfAirTotem:!0,sanctifiedRetribution:!0,bloodlust:!0}),j=S.create({blessingOfKings:!0,blessingOfWisdom:c.TristateEffectImproved,blessingOfMight:c.TristateEffectImproved,vampiricTouch:!0}),k=u.create({faerieFire:c.TristateEffectImproved,ebonPlaguebringer:!0,heartOfTheCrusader:!0,judgementOfWisdom:!0}),N={name:"Preraid Preset",tooltip:T,gear:h.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 42553,\n\t\t\t"enchant": 44877,\n\t\t\t"gems": [\n\t\t\t\t41333,\n\t\t\t\t40014\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40680\n\t\t},\n\t\t{\n\t\t\t"id": 34210,\n\t\t\t"enchant": 44874,\n\t\t\t"gems": [\n\t\t\t\t42144,\n\t\t\t\t40014\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 41610,\n\t\t\t"enchant": 63765\n\t\t},\n\t\t{\n\t\t\t"id": 43792,\n\t\t\t"enchant": 33990,\n\t\t\t"gems": [\n\t\t\t\t42144,\n\t\t\t\t40049\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37361,\n\t\t\t"enchant": 44498,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39285,\n\t\t\t"enchant": 44592,\n\t\t\t"gems": [\n\t\t\t\t40014,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40696,\n\t\t\t"gems": [\n\t\t\t\t40049,\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37854,\n\t\t\t"enchant": 41602\n\t\t},\n\t\t{\n\t\t\t"id": 44202,\n\t\t\t"enchant": 60623,\n\t\t\t"gems": [\n\t\t\t\t40026\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 43253,\n\t\t\t"gems": [\n\t\t\t\t42144\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39250\n\t\t},\n\t\t{\n\t\t\t"id": 37835\n\t\t},\n\t\t{\n\t\t\t"id": 37873\n\t\t},\n\t\t{\n\t\t\t"id": 41384,\n\t\t\t"enchant": 44487\n\t\t},\n\t\t{\n\t\t\t"id": 40698\n\t\t},\n\t\t{\n\t\t\t"id": 37177\n\t\t}\n\t]}')},x={name:"P1 Preset",tooltip:T,gear:h.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 40562,\n\t\t\t"enchant": 44877,\n\t\t\t"gems": [\n\t\t\t\t41333,\n\t\t\t\t42144\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44661,\n\t\t\t"gems": [\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40459,\n\t\t\t"enchant": 44874,\n\t\t\t"gems": [\n\t\t\t\t42144\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44005,\n\t\t\t"enchant": 63765,\n\t\t\t"gems": [\n\t\t\t\t42144\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40234,\n\t\t\t"enchant": 33990,\n\t\t\t"gems": [\n\t\t\t\t39998,\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44008,\n\t\t\t"enchant": 44498,\n\t\t\t"gems": [\n\t\t\t\t39998,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40454,\n\t\t\t"enchant": 54999,\n\t\t\t"gems": [\n\t\t\t\t40049,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40561,\n\t\t\t"enchant": 54793,\n\t\t\t"gems": [\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40560,\n\t\t\t"enchant": 41602\n\t\t},\n\t\t{\n\t\t\t"id": 40558,\n\t\t\t"enchant": 60623\n\t\t},\n\t\t{\n\t\t\t"id": 40719\n\t\t},\n\t\t{\n\t\t\t"id": 40399\n\t\t},\n\t\t{\n\t\t\t"id": 40255\n\t\t},\n\t\t{\n\t\t\t"id": 40432\n\t\t},\n\t\t{\n\t\t\t"id": 40395,\n\t\t\t"enchant": 44487\n\t\t},\n\t\t{\n\t\t\t"id": 40273\n\t\t},\n\t\t{\n\t\t\t"id": 39712\n\t\t}\n\t]}')},U=D({fieldName:"powerInfusionTarget",id:g.fromSpellId(10060),extraCssClasses:["within-raid-sim-hide"],getValue:t=>t.getSpecOptions().powerInfusionTarget?.targetIndex!=l,setValue:(t,n,e)=>{const a=n.getSpecOptions();a.powerInfusionTarget=r.create({targetIndex:e?0:l}),n.setSpecOptions(t,a)}}),E=D({fieldName:"useInnerFire",id:g.fromSpellId(48168)}),G=D({fieldName:"useShadowfiend",id:g.fromSpellId(34433)}),_={inputs:[O({fieldName:"useDevouringPlague",label:"Use Devouring Plague",labelTooltip:"Use Devouring Plague whenever its not active."}),O({fieldName:"useShadowWordDeath",label:"Use Shadow Word: Death",labelTooltip:"Use Shadow Word: Death whenever off CD."}),O({fieldName:"useMindBlast",label:"Use Mind Blast",labelTooltip:"Use Mind Blast whenever off CD."}),O({fieldName:"memeDream",label:"Meme Dream",labelTooltip:"Assumes 2nd Smite Priest in raid, so just spams HF + Smite with permanent HF uptime."}),y({fieldName:"allowedHolyFireDelayMs",label:"Allowed Delay for HF",labelTooltip:"Time, in milliseconds, the player is allowed to wait for Holy Fire if it is about to come off CD."})]};class A extends v{constructor(t,n){super(t,n,{cssClass:"smite-priest-sim-ui",knownIssues:[],epStats:[b.StatIntellect,b.StatSpirit,b.StatSpellPower,b.StatSpellHit,b.StatSpellCrit,b.StatSpellHaste,b.StatMP5],epReferenceStat:b.StatSpellPower,displayStats:[b.StatHealth,b.StatStamina,b.StatIntellect,b.StatSpirit,b.StatSpellPower,b.StatSpellHit,b.StatSpellCrit,b.StatSpellHaste,b.StatMP5],modifyDisplayStats:t=>{let n=new w;return n=n.addStat(b.StatSpellHit,1*t.getTalents().shadowFocus*I),{talents:n}},defaults:{gear:x.gear,epWeights:w.fromMap({[b.StatIntellect]:1.38,[b.StatSpirit]:1.18,[b.StatSpellPower]:1,[b.StatSpellHit]:2.57,[b.StatSpellCrit]:.44,[b.StatSpellHaste]:.28,[b.StatMP5]:2.05}),consumes:B,rotation:M,talents:H.data,specOptions:W,raidBuffs:C,partyBuffs:P.create({}),individualBuffs:j,debuffs:k},playerIconInputs:[U,E,G],rotationInputs:_,includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[F]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[H],gear:[N,x]}})}}export{M as D,x as P,A as S,H as a,W as b,B as c};
//# sourceMappingURL=sim-ecd40dab.chunk.js.map
