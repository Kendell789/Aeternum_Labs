//Eternum Labs

var cooksNeeded = (20,20,15) 
    //(lightRations,lightRations,Light Ration)                  //20 // energizing ligt rations 15//energizing travel ration 20 //Light ration 5//energizing travel ration
var weaversNeeded = ((40), 20) 
                //(silk, Sateen)                  //25 //silk  15//Silk 40//Silk
var huntRabbits =15// rabbits XXXXXX 25//cullRabbits XXXXX
var huntTurkey= 25 //trukey
var HuntElk= 3//elk
var fisherFolkNeed = 0//5 //NightcrawlerBait 20//WoodlouseBait
var huntersNeeded = 150 // rawhide //150//Rawhid 
var metalWorkersNeeded = 0//90//Iron Ingot
var alchemistsNeeded = (20,2,2,1) 
    //(common regeneration,Strong Health potions,Strong Mana Potion,PowerfulRegenPotion)            //10//common ManaPotion  15//weak Mana Potion 20//weak Mana Potion
var harvestersNeeded= (50, 100)
                    //(Fibers,FIbers)                       150//Fibers
var carpentersNeeded = (25, 90,90) //(Lumber,Timber,Timber) 
var stoneMasonNeeded = (25)
                    //(StoneBrick)                               50//StoneBlock 40//StoneBrick
var lumberJacksNeeded = ((150, 250,300), 200)
                        //(green wood ,aged wood)                        (//Greenwood, //Greenwood,//GreenWood)

var suppliesNeeded = (40,100) 
                    //(Oil // Water)

var armorSmithing = 0//Crude Iton Armor \ 1//Impenetrable Crude Iron Armor \ 1 //Rugged Crude Iron Armor \
//Toughened Crude Iron Armor
var sOTCIA = 1
//Hardened Crude Iron Armor
var sOHCIA = 1                      // -add
//Plundering Iron Armanets
var pIA = 2

var weaponSmithing = 0//1 //BruisingIronArmament \ 1//Cleaving Iton Armaments \ 1 //CrudeIronArmament \ 1 //ImpalingIronArmament \ 1 //Reaving Iron Armaments \
//Impaling Iron Armaments
var iIA = 1
//Reaving Iron Armaments
var rIA = 1
//Bulwark Crude Iron Armaments
var bCIA=2                              //- add
//Bruising Crude Iron Armametns
var brCIA = 1                           //-add


var cCIA = 0

var sOICIA = 0
var sORCIA = 0

var bIA = 0
var cIA = 0
//---------------------------------------------------------------------------------------------------------------------------------

//def cooksNeeded():
print ("What type or Food do you need to Cook")
    if (userclick === cooksNeeded){
       amount = userinput("How much")
    } else if(userclick === weaversNeeded){

        
    }




//-----------------

//------------------
var eLRations = 20
var eTRations = 20
var lRations = 20
//---------------
var silk = 80
//---------------
var rawHide = 150
//-----------------
var iIngot = 90 + iIA*4 + rIA*9 + bIA*15 + cIA*7
//--------------------
var cLeather = 0 + (iIA* 12) + (rIA*24) + (bIA*5) + (cIA*10)
//------------------
var fiber = 200
//------------------
var lumber = 25
//------------
var sBlock = 80
var sBrick = 40
///------------
var wLBait = 20  // VVV
var nCBait = 5   // VVV
//------------------------
var cMPot = 10
var wMPot = 35
//------------------------

var timber = 0 + iIA*4 + rIA *7 + bIA*5 + cIA*8
var stone = 0
var gWood = 0
var linen = 0
var iOre = 0
var water = 0

var t1RF = (1 * eLRations) + (1 * lRations)
var t2RF = 1* eTRations
var rF = 1*eTRations



var sateen_c = 2 * silk 
var linen_c = 4 * sateen_c + linen

var silkThread_c = 6 * silk
var fibers_c = linen_c * 4 + fiber
var cWFlux_c = 1* silk + 1 * linen_c

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







var gWood_Base = gWood_c + cCIA *15
var fibers_Base = fibers_c + sOTCIA*12 + sOICIA*26 + sORCIA*10
var rawHide_Base = rawHide_c +cCIA*15 + sOTCIA*9 + sOICIA*12 + sORCIA*6
var iOre_Base = iOre_c + cCIA * 20 + sOTCIA * 9 + sOICIA * 12 + sORCIA * 14
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





