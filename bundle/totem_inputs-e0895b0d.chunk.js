import{r as t,s as e,t as o}from"./individual_sim_ui-f17c4a89.chunk.js";import{b$ as a,a6 as s,b_ as n,c0 as r,c1 as m,c2 as i}from"./raid_sim_action-ba7bc10a.chunk.js";function l(l,c){c.innerHTML='\n\t\t<div class="totem-dropdowns-container"></div>\n\t\t<div class="totem-inputs-container"></div>\n\t\t<div class="fire-elemental-inputs-container"></div>\n\t';const u=c.getElementsByClassName("totem-dropdowns-container")[0];c.getElementsByClassName("totem-inputs-container")[0];const d=c.getElementsByClassName("fire-elemental-inputs-container")[0];new t(u,l.player,{extraCssClasses:["earth-totem-picker"],numColumns:1,values:[{color:"#ffdfba",value:a.NoEarthTotem},{actionId:s.fromSpellId(58643),value:a.StrengthOfEarthTotem},{actionId:s.fromSpellId(8143),value:a.TremorTotem}],equals:(t,e)=>t==e,zeroValue:a.NoEarthTotem,changedEvent:t=>t.rotationChangeEmitter,getValue:t=>t.getRotation().totems?.earth||a.NoEarthTotem,setValue:(t,e,o)=>{const a=e.getRotation();a.totems||(a.totems=n.create()),a.totems.earth=o,e.setRotation(t,a)}}),new t(u,l.player,{extraCssClasses:["air-totem-picker"],numColumns:1,values:[{color:"#baffc9",value:r.NoAirTotem},{actionId:s.fromSpellId(8512),value:r.WindfuryTotem},{actionId:s.fromSpellId(3738),value:r.WrathOfAirTotem}],equals:(t,e)=>t==e,zeroValue:r.NoAirTotem,changedEvent:t=>t.rotationChangeEmitter,getValue:t=>t.getRotation().totems?.air||r.NoAirTotem,setValue:(t,e,o)=>{const a=e.getRotation();a.totems||(a.totems=n.create()),a.totems.air=o,e.setRotation(t,a)}}),new t(u,l.player,{extraCssClasses:["fire-totem-picker"],numColumns:1,values:[{color:"#ffb3ba",value:m.NoFireTotem},{actionId:s.fromSpellId(58734),value:m.MagmaTotem},{actionId:s.fromSpellId(58704),value:m.SearingTotem},{actionId:s.fromSpellId(57722),value:m.TotemOfWrath}],equals:(t,e)=>t==e,zeroValue:m.NoFireTotem,changedEvent:t=>t.rotationChangeEmitter,getValue:t=>t.getRotation().totems?.fire||m.NoFireTotem,setValue:(t,e,o)=>{const a=e.getRotation();a.totems||(a.totems=n.create()),a.totems.fire=o,e.setRotation(t,a)}}),new t(u,l.player,{extraCssClasses:["water-totem-picker"],numColumns:1,values:[{color:"#bae1ff",value:i.NoWaterTotem},{actionId:s.fromSpellId(58774),value:i.ManaSpringTotem}],equals:(t,e)=>t==e,zeroValue:i.NoWaterTotem,changedEvent:t=>t.rotationChangeEmitter,getValue:t=>t.getRotation().totems?.water||i.NoWaterTotem,setValue:(t,e,o)=>{const a=e.getRotation();a.totems||(a.totems=n.create()),a.totems.water=o,e.setRotation(t,a)}});const g=e({getModObject:t=>t,getValue:t=>t.getRotation().totems||n.create(),setValue:(t,e,o)=>{const a=e.getRotation();a.totems=o,e.setRotation(t,a)},changeEmitter:t=>t.rotationChangeEmitter},s.fromSpellId(2894),"useFireElemental");return new o(d,l.player,g),"Totems"}export{l as T};
//# sourceMappingURL=totem_inputs-e0895b0d.chunk.js.map
