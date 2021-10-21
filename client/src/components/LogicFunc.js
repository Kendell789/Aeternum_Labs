var master = {};
var MaterialType = [];
export var fiber2Calc = {
    "Fibers":0,
    "Linen":0,
    "Sateen":0,
    "Silk":0,
    "Infused Silk":0,
    "silkThreads":0,
    "wireFiber":0,
    "flux":0
 };
export var rawhide2Calc = {
    "Rawhide":0,
    "Coarse Leather":0,
    "Rugged Leather":0,
    "Layered Leather":0,
    "Infused Leather":0,
    "Iron Hide":0,
    "Thick Hide":0,
    "flux":0
};
export var stone2Calc = {
    "Stone":0,
    "Stone Block":0,
    "Stone Brick":0,
    "Lodestone Brick":0,
    "Obsidian Voidstone":0,
    "Loamy Lodestone":0,
    "Lodestone":0,
    "flux":0
};
export var iron2Calc = {
    "Iron Ore":0,
    "Iron Ingot":0,
    "Steel Ingot":0,
    "Starmetal Ingot":0,
    "Orichalcum Ingot":0,
    "Charcoal":0,
    "Starmetal Ore":0,
    "Orichalcum Ore":0,
    "flux":0
};
export var wood2Calc = {
    "Green Wood":0,
    "Timber":0,
    "Lumber":0,
    "Wyrdwood Planks":0,
    "Ironwood Planks":0,
    "Ironwood":0,
    "Wyrdwood":0,
    "Aged Wood":0,
    "flux":0
};
export var supplies_r = {
    "Flint":0,
    "Feather":0,
    "Oil":0,
    "Water":0
}
//fiber
var fiber = 0;
var linen = 0;
var sateen = 0;
var silk = 0;
var infSilk = 0;
var fiber_c = 0;
var linen_c = 0;
var sateen_c = 0;
var silk_c = 0;
var infSilk_c = 0;
var f_flux_c = 0;
var silkThreads_c = 0;
var wireFiber_c = 0;
//rawhide
var rawhide = 0;
var coarseLeather = 0;
var ruggedLeather = 0;
var layeredLeather = 0;
var infusedLeather = 0;
var rawhide_c = 0;
var coarseLeather_c = 0;
var ruggedLeather_c = 0;
var layeredLeather_c = 0;
var infusedLeather_c = 0;
var r_flux_c = 0;
var ironHide_c = 0;
var thickHide_c = 0;
//stone
var stone = 0;
var stoneBlock = 0;
var stoneBrick = 0;
var lodestoneBrick = 0;
var obsidianVoidstone = 0;
var stone_c = 0;
var stoneBlock_c = 0;
var stoneBrick_c = 0;
var lodestoneBrick_c = 0;
var obsidianVoidstone_c = 0;
var s_flux_c = 0;
var loamyLodestone_c = 0;
var lodeStone_c = 0;
//iron 
var ironOre = 0;
var ironIngot = 0;
var steelIngot = 0;
var starmetalIngot = 0;
var orichalcumIngot = 0;
var ironOre_c = 0;
var ironIngot_c = 0;
var steelIngot_c = 0;
var starmetalIngot_c = 0;
var orichalcumIngot_c = 0;
var i_flux_c = 0;
var charcoal_c = 0;
var starmetalOre_c = 0;
var orichalcumOre_c = 0;

//wood
var greenWood = 0;
var timber = 0;
var lumber = 0;
var wyrdwoodPlanks = 0;
var ironwoodPlanks = 0;
var greenWood_c = 0;
var timber_c = 0;
var lumber_c = 0;
var wyrdwoodPlanks_c = 0;
var ironwoodPlanks_c = 0;
var w_flux_c = 0;
var ironwood_c = 0;
var wyrdwood_c = 0;
var agedWood_c = 0;



export function breakdown(total){
    MaterialType = Object.keys(total)
    master=total
    //reset values to zero
    fiber2Calc = {
        "Fibers":0,
        "Linen":0,
        "Sateen":0,
        "Silk":0,
        "Infused Silk":0,
        "silkThreads":0,
        "wireFiber":0,
        "flux":0
     };
    rawhide2Calc = {
        "Rawhide":0,
        "Coarse Leather":0,
        "Rugged Leather":0,
        "Layered Leather":0,
        "Infused Leather":0,
        "Thick Hide":0,
        "Iron Hide":0,
        "flux":0
    
    };
    stone2Calc = {
        "Stone":0,
        "Stone Block":0,
        "Stone Brick":0,
        "Lodestone Brick":0,
        "Obsidian Voidstone":0,
        "Loamy Lodestone":0,
        "Lodestone":0,
        "flux":0
    
    };
    iron2Calc = {
        "Iron Ore":0,
        "Iron Ingot":0,
        "Steel Ingot":0,
        "Starmetal Ingot":0,
        "Orichalcum Ingot":0,
        "Charcoal":0,
        "Starmetal Ore":0,
        "Orichalcum Ore":0,
        "flux":0
    };
    wood2Calc = {
        "Green Wood":0,
        "Timber":0,
        "Lumber":0,
        "Wyrdwood Planks":0,
        "Ironwood Planks":0,
        "Ironwood":0,
        "Wyrdwood":0,
        "Aged Wood":0,
        "flux":0
    };
    supplies_r = {
        "Flint":0,
        "Feather":0,
        "Oil":0,
        "Water":0
    }
sortMaterials(MaterialType)}
function sortMaterials(Material){
    Material.forEach(item =>{
        console.log(item)

        if (item in fiber2Calc){
            if ("Fibers" === item){
                fiber2Calc[item] += master[item]
            }else if ("Linen" === item){
                fiber2Calc[item] += master[item]
            }else if("Sateen" === item){
                fiber2Calc[item] += master[item]
            }else if("Silk" === item){
                fiber2Calc[item] += master[item]
            }else if("Infused Silk" === item){
                fiber2Calc[item] += master[item]
            }
        }
        else if (item in rawhide2Calc){
            if ("Rawhide" === item){
                rawhide2Calc[item] += master[item]
            }else if ("Coarse Leather" === item){
                rawhide2Calc[item] += master[item]
            }else if("Rugged Leather" === item){
                rawhide2Calc[item] += master[item]
            }else if("Layered Leather" === item){
                rawhide2Calc[item] += master[item]
            }else if("Infused Leather" === item){
                rawhide2Calc[item] += master[item]
            }
        }
        else if (item in stone2Calc){
            if ("Stone" === item){
                stone2Calc[item] += master[item]
            }else if ("Stone Block" === item){
                stone2Calc[item] += master[item]
            }else if("Stone Brick" === item){
                stone2Calc[item] += master[item]
            }else if("Lodestone Brick" === item){
                stone2Calc[item] += master[item]
            }else if("Obsidian Voidstone" === item){
                stone2Calc[item] += master[item]
            }
        }
        else if (item in iron2Calc){
            if ("Iron Ore" === item){
                iron2Calc[item] += master[item]
            }else if ("Iron Ingot" === item){
                iron2Calc[item] += master[item]
            }else if("Steel Ingot" === item){
                iron2Calc[item] += master[item]
            }else if("Starmetal Ingot" === item){
                iron2Calc[item] += master[item]
            }else if("Orichalcum Ingot" === item){
                iron2Calc[item] += master[item]
            }
        }
        else if (item in wood2Calc){
            if ("Green Wood" === item){
                wood2Calc[item] += master[item]
            }else if ("Timber" === item){
                wood2Calc[item] += master[item]
            }else if("Lumber" === item){
                wood2Calc[item] += master[item]
            }else if("Wyrdwood Planks" === item){
                wood2Calc[item] += master[item]
            }else if("Ironwood Planks" === item){
                wood2Calc[item] += master[item]
            }
        }else if (item in supplies_r){
            supplies_r[item] = master[item]
        }

    })

Fiberbreakdown(fiber2Calc)
Rawhidereakdown(rawhide2Calc)
Stonebeakdown(stone2Calc)
Ironbreakdown(iron2Calc)
Woodbrekdown(wood2Calc)
}

function Fiberbreakdown(update){
    fiber = update["Fibers"] 
    linen = update["Linen"]
    sateen = update["Sateen"]
    silk = update["Silk"]
    infSilk = update["Infused Silk"] 

    infSilk_c = infSilk
    silk_c = (2 * infSilk_c) + silk
    sateen_c = (2 * silk_c) + sateen
    linen_c = (4 * sateen_c) + linen
    fiber_c = (4 * linen_c) + fiber

    silkThreads_c = (6 * silk_c)
    wireFiber_c = (8 * infSilk_c)

    f_flux_c = infSilk_c + silk_c + sateen_c

    update["Fibers"] = fiber_c
    update["Linen"] = linen_c
    update["Sateen"] = sateen_c
    update["Silk"] = silk_c
    update["Infused Silk"] = infSilk_c
    update["silkThreads"] = silkThreads_c
    update["wireFiber"] = wireFiber_c
    update["flux"] = f_flux_c
}

function Rawhidereakdown(update){
    rawhide = update["Rawhide"]
    coarseLeather = update["Coarse Leather"]
    ruggedLeather = update["Rugged Leather"]
    layeredLeather = update["Layered Leather"]
    infusedLeather = update["Infused Leather"]

    infusedLeather_c = infusedLeather
    layeredLeather_c = (2 * infusedLeather_c) + layeredLeather
    ruggedLeather_c = (2 * layeredLeather_c) + ruggedLeather
    coarseLeather_c = (4 * ruggedLeather_c) + coarseLeather
    rawhide_c = (3 * coarseLeather_c) + rawhide
   
    thickHide_c = (6 * layeredLeather_c)
    ironHide_c = (8 * infusedLeather_c)

    r_flux_c = infusedLeather_c + layeredLeather_c + ruggedLeather_c

    update["Rawhide"] = rawhide_c
    update["Coarse Leather"] = coarseLeather_c
    update["Rugged Leather"] = ruggedLeather_c
    update["Layered Leather"] = layeredLeather_c
    update["Infused Leather"] = infusedLeather_c
    update["Thick Hide"] = thickHide_c
    update["Iron Hide"] = ironHide_c
    update["flux"] = r_flux_c
}

function Stonebeakdown(update){
    stone = update["Stone"] 
    stoneBlock = update["Stone Block"]
    stoneBrick = update["Stone Brick"]
    lodestoneBrick = update["Lodestone Brick"]
    obsidianVoidstone = update["Obsidian Voidstone"] 

    obsidianVoidstone_c = obsidianVoidstone
    lodestoneBrick_c = (8 * obsidianVoidstone_c) + lodestoneBrick
    stoneBrick_c = (2 * lodestoneBrick_c) + stoneBrick
    stoneBlock_c = (4 * stoneBrick_c) + stoneBlock
    stone_c = (4 * stoneBlock_c) + stone

    loamyLodestone_c = obsidianVoidstone_c
    lodeStone_c = (2 * obsidianVoidstone_c) + (6 * lodestoneBrick_c)

    s_flux_c = obsidianVoidstone_c + lodestoneBrick_c + stoneBrick_c

    update["Stone"] = stone_c
    update["Stone Block"] = stoneBlock_c
    update["Stone Brick"] = stoneBrick_c
    update["Lodestone Brick"] = lodestoneBrick_c
    update["Obsidian Voidstone"] = obsidianVoidstone_c
    update["Loamy Lodestone"] = loamyLodestone_c
    update["Lodestone"] = lodeStone_c
    update["flux"] = s_flux_c
}
function Ironbreakdown(update){
    ironOre = update["Iron Ore"] 
    ironIngot = update["Iron Ingot"]
    steelIngot = update["Steel Ingot"]
    starmetalIngot = update["Starmetal Ingot"]
    orichalcumIngot = update["Orichalcum Ingot"] 

    orichalcumIngot_c = orichalcumIngot
    starmetalIngot_c = (2 * orichalcumIngot_c) + starmetalIngot
    steelIngot_c = (2 * starmetalIngot_c) + steelIngot
    ironIngot_c = (3 * steelIngot_c) + ironIngot
    ironOre_c = (4 * ironIngot_c) + ironOre

    charcoal_c = (2 * orichalcumIngot_c) + (2 * starmetalIngot_c) + (2 * steelIngot_c)
    starmetalOre_c = (6 * starmetalIngot_c)
    orichalcumOre_c= (8 * orichalcumIngot_c)

    i_flux_c = orichalcumIngot_c + starmetalIngot_c + steelIngot_c

    update["Iron Ore"] = ironOre_c
    update["Iron Ingot"] = ironIngot_c
    update["Steel Ingot"] = steelIngot_c
    update["Starmetal Ingot"] = starmetalIngot_c
    update["Orichalcum Ingot"] = orichalcumIngot_c
    update["Charcoal"] = charcoal_c
    update["Starmetal Ore"] = starmetalOre_c
    update["Orichalcum Ore"] = orichalcumOre_c
    update["flux"] =i_flux_c

}
function Woodbrekdown(update){
    greenWood = update["Green Wood"] 
    timber = update["Timber"]
    lumber = update["Lumber"]
    wyrdwoodPlanks = update["Wyrdwood Planks"]
    ironwoodPlanks = update["Ironwood Planks"] 
    
    ironwoodPlanks_c = ironwoodPlanks
    wyrdwoodPlanks_c = (2 * ironwoodPlanks_c) + wyrdwoodPlanks
    lumber_c = (2 * wyrdwoodPlanks_c) + lumber
    timber_c = (2 * lumber_c) + timber
    greenWood_c = (4 * timber_c) + greenWood
    
    ironwood_c = (8 * ironwoodPlanks_c)
    wyrdwood_c = (6 * wyrdwoodPlanks_c)
    agedWood_c = (4 * lumber_c)
    
    
    w_flux_c = ironwoodPlanks_c + wyrdwoodPlanks_c + lumber_c
    
    update["Green Wood"] = greenWood_c
    update["Timber"] = timber_c
    update["Lumber"] = lumber_c
    update["Wyrdwood Planks"] = wyrdwoodPlanks_c
    update["Ironwood Planks"] = ironwoodPlanks_c
    update["Ironwood"] = ironwood_c
    update["Wyrdwood"] = wyrdwood_c
    update["Aged Wood"] = agedWood_c
    
    update["flux"] = w_flux_c
}