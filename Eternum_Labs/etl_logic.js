//Eternum Labs
//---------------------------------------------------------------

/*if (userclick === cooksNeeded){
    cooksNeeded()
} else if(userclick === weaversNeeded){
     weaversNeeded()
 } else if(userclick === fisherFolkNeeded){
    fisherFolkNeeded()
} else if(userclick === huntersNeeded){
    huntersNeeded()
} else if(userclick === metalWorkersNeeded){
    metalWorkersNeeded()
} else if(userclick === alchemistsNeeded){
    alchemistsNeeded()
} else if(userclick === harvestersNeeded){
    harvestersNeeded()
} else if(userclick === carpentersNeeded){
    carpentersNeeded()
} else if(userclick === stoneMasonNeeded){
    stoneMasonNeeded()
} else if(userclick === lumberJacksNeeded){
    lumberJacksNeeded()
} else if(userclick === suppliesNeeded){
    suppliesNeeded()
} else if(userclick === armorSmithing){
    armorSmithing()
} else if(userclick === weaponSmithing){
    weaponSmithing()
} else if(userclick === hunt){
    hunt()
}
*/
function cooksNeeded(){
    print ("What type or Food do you need to Cook")
    display ('lightRations', 'energizing', 'light rations', 'energizing travel rations')
    var selected = 0 //whatever was clicked when there was stuff displayed
    print("How many do you need")
    display (10,15,20)
    dsiplay('custom amount')//display custom button under card options
    var amount = 0 //whatever the user selected
    return (selected,amount);
}

function weaversNeeded(){
    print ("What are you weaving")    
    display ('silk', 'Sateen')
    var selected = 0//whatever was clicked when there was stuff displayed
    print("How many do you need")
    display (15,20,25,40)
    dsiplay('custom amount')//display custom button under card options
    var amount = 0//whatever the user selected
    return (selected,amount);
}

function fisherFolkNeeded(){
    print ("What kind of bait are you looking for ")    
    display ('NightcrawlerBait', 'WoodlouseBait')
    var selected = 0//whatever was clicked when there was stuff displayed
    print("How many do you need")
    display (5,20)
    dsiplay('custom amount')//display custom button under card options
    var amount = 0//whatever the user selected
    return (selected,amount);
}

function huntersNeeded(){
    print ("How much hide do you need")
    var selected = rawHide
    print("How many do you need")
    display (150)
    dsiplay('custom amount')//display custom button under card options
    var amount = 0//whatever the user selected
    return (selected,amount);
}

function metalWorkersNeeded(){
    print ("What type of metal do you need")
    display ('Iron Ingots', )
    var selected = //whatever was clicked when there was stuff displayed
    print("How many do you need")
    display (90)
    dsiplay('custom amount')//display custom button under card options
    var amount = 0//whatever the user selected
    return (selected,amount);
}

function alchemistsNeeded(){
    print ("What kind of potions do you need")
    display ('Lumber','Timber')
    var selected = 0//whatever was clicked when there was stuff displayed
    print("How many do you need")
    display (1,2,10,15, 20)
    dsiplay('custom amount')//display custom button under card options
    var amount = 0//whatever the user selected
    return (selected,amount);
}

function harvestersNeeded(){
    print ("How much fiber do you need")
    var selected = fiber
    print("How many do you need")
    display (50,100,150)
    dsiplay('custom amount')//display custom button under card options
    var amount = 0//whatever the user selected
    return (selected,amount);
}

function carpentersNeeded(){
    print ("What kind of wood do you need")
    display ('Lumber','Timber')
    var selected = 0//whatever was clicked when there was stuff displayed
    print("How many do you need")
    display (25,90)
    dsiplay('custom amount')//display custom button under card options
    var amount = 0//whatever the user selected
    return (selected,amount);
}

function stoneMasonNeeded(){
    print ("What kind of stone do you need")
    display ('Stone bricks','Stone blocks')
    var selected = 0//whatever was clicked when there was stuff displayed
    print("How many do you need")
    display (25,40,50)
    dsiplay('custom amount')//display custom button under card options
    var amount = 0//whatever the user selected
    return (selected,amount);
}

function lumberJacksNeeded(){
    print ("What type of wood do you need")
    display ('green wood','aged wood')
    var selected = 0//whatever was clicked when there was stuff displayed
    print("How many do you need")
    display (150,200,250,300)
    dsiplay('custom amount')//display custom button under card options
    var amount =0 //whatever the user selected
    return (selected,amount);
}

function suppliesNeeded(){
    print ("What type of supplies do you need ")
    display ('oil','water')
    var selected = 0//whatever was clicked when there was stuff displayed
    print("How many do you need")
    display (40,100)
    dsiplay('custom amount')//display custom button under card options
    var amount =0 //whatever the user selected
    return (selected,amount);
}

/*function armorSmithing(){
    print ("What type")
    //Toughened Crude Iron Armor
    var sOTCIA = 1
    //Hardened Crude Iron Armor
    var sOHCIA = 1                      // -add
    //Plundering Iron Armanets
    var pIA = 2
}
function weaponSmithing(){
    print ("What type ")
    //Impaling Iron Armaments
    var iIA = 1
    //Reaving Iron Armaments
    var rIA = 1
    //Bulwark Crude Iron Armaments
    var bulCIA=2                              //- add
    //Bruising Crude Iron Armametns
    var bruCIA = 1                           //-add
}
*/
function hunt(){
    print ("What are you hunting?")
    display ('rabits', 'turkey','elk','bear')
    var selected = 0//whatever was clicked when there was stuff displayed
    print("How many do you need")
    display (3,15,25)
    dsiplay('custom amount')//display custom button under card options
    var amount = 0//whatever the user selected
    return (selected,amount);
}
//Impaling Iron Armaments
var iIA = 0
//Reaving Iron Armaments
var rIA = 0
//Bulwark Crude Iron Armaments
var bulCIA = 0                              
//Bruising Crude Iron Armaments
var bruCIA = 0                           //-add
//Toughened Crude Iron Armor
var sOTCIA = 0
//Hardened Crude Iron Armor
var sOHCIA = 1                      
//Plundering Iron Armanets
var pIA = 0

var sOICIA =  0
var sORCIA = 0
var bIA = 0
var cIA = 0
var cCIA = 0

//------------------
//COST LOGIC
//------------------


var eLRations = 0
var eTRations = 0
var lRations = 0
//---------------
var silk = 0
//---------------
//-----------------
var iIngot = 0 
//--------------------
var cLeather = 0 
//------------------
//------------------
var lumber = 0
//------------
var sBlock = 0
var sBrick = 0
///------------
var wLBait = 0  // VVV
var nCBait = 0  // VVV
//------------------------
var cMPot = 0
var wMPot = 0
//------------------------


var fiber = 0 + (sOHCIA * 15) 
var rawHide = 0 + (sOHCIA * 15)
var timber = 0 
var stone = 0
var gWood = 0
var linen = 0
var iOre = 0 + (sOHCIA * 20)
var water = 0

var t1RF = (1 * eLRations) + (1 * lRations)
var t2RF = 1* eTRations
var rF = 1*eTRations



var sateen_c = 2 * silk 
var linen_c = 4 * sateen_c + linen
var cWFlux_c = 1* silk + 1 * linen_c
var silkThread_c = 6 * silk

var fibers_c = linen_c * 4 + fiber


var iIngot_c = iIngot
var iOre_c = iIngot_c * 4 + iOre 

var timber_c = lumber * 2 + timber
var agedWood_Base = lumber * 4
var cSFluxL = lumber * 1
var gWood_c = timber_c * 4 + gWood

var sBlock_c = sBrick * 4 + sBlock
var cSFluxS = sBrick * 1
var stone_c = sBlock_c * 4 + stone

var rawHide_c = cLeather *4 + rawHide 
var briarBuds_c = wMPot * 1
var t2MR_c = cMPot * 1


var water_c = wMPot *1 + cMPot *1 + water







var gWood_Base = gWood_c 
var fibers_Base = fibers_c 
var rawHide_Base = rawHide_c 
var iOre_Base = iOre_c 
var stone_Base = stone_c
var water_Base = water_c
var briarBuds_Base =briarBuds_c
var t2MR_Base = t2MR_c
var silkThread_Base = silkThread_c


console.log("Green Wood  " + gWood_Base)
console.log("Aged Wood  " + agedWood_Base)
console.log("Coarse sandpaper Flux  " + cSFluxL)
console.log("Craft into  " + timber_c + "  Timber")
console.log("In order to make  " + lumber + "  Lumber")


console.log("Raw Fibers  " + fibers_Base)
console.log("Silk Thread  " + silkThread_Base)
console.log("Cross Weave flux  " + cWFlux_c)
console.log ("Craft into  " + linen_c + "  linen")
console.log("Craft into  " + sateen_c +"  sateen")
console.log("In order to make  " + silk + "  silk")

console.log("Raw Hide  " + rawHide_c)
console.log("Craft into  " + cLeather + "  Coarse Leather")



console.log("Iron Ore  " + iOre_c)
console.log("Craft into  " + iIngot_c + "  Iron Ingots")


console.log("Stones  " + stone_Base)
console.log("Coarse sandpaper Flux  " + cSFluxS)
console.log("Craft into  " + sBlock_c + " Stone Blocks ")
console.log("Craft into  " + sBrick + " Stone Bricks  ")


//TODO::
console.log("Water  " + water_Base)

console.log("Briar Buds  " + briarBuds_Base)

console.log("t2MR  " + t2MR_Base)





