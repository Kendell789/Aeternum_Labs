// //Eternum Labs
// //---------------------------------------------------------------

// /*if (userclick === cooksNeeded){
//     cooksNeeded()
// } else if(userclick === weaversNeeded){
//      weaversNeeded()
//  } else if(userclick === fisherFolkNeeded){
//     fisherFolkNeeded()
// } else if(userclick === huntersNeeded){
//     huntersNeeded()
// } else if(userclick === metalWorkersNeeded){
//     metalWorkersNeeded()
// } else if(userclick === alchemistsNeeded){
//     alchemistsNeeded()
// } else if(userclick === harvestersNeeded){
//     harvestersNeeded()
// } else if(userclick === carpentersNeeded){
//     carpentersNeeded()
// } else if(userclick === stoneMasonNeeded){
//     stoneMasonNeeded()
// } else if(userclick === lumberJacksNeeded){
//     lumberJacksNeeded()
// } else if(userclick === suppliesNeeded){
//     suppliesNeeded()
// } else if(userclick === armorSmithing){
//     armorSmithing()
// } else if(userclick === weaponSmithing){
//     weaponSmithing()
// } else if(userclick === hunt){
//     hunt()
// }
// */
// function cooksNeeded() {
//   print("What type or Food do you need to Cook")
//   display('lightRations', 'energizing', 'light rations', 'energizing travel rations')
//   var selected = 0 //whatever was clicked when there was stuff displayed
//   print("How many do you need")
//   display(10, 15, 20)
//   dsiplay('custom amount')//display custom button under card options
//   var amount = 0 //whatever the user selected
//   return (selected, amount);
// }

// function weaversNeeded() {
//   print("What are you weaving")
//   display('silk', 'Sateen')
//   var selected = 0//whatever was clicked when there was stuff displayed
//   print("How many do you need")
//   display(15, 20, 25, 40)
//   dsiplay('custom amount')//display custom button under card options
//   var amount = 0//whatever the user selected
//   return (selected, amount);
// }

// function fisherFolkNeeded() {
//   print("What kind of bait are you looking for ")
//   display('NightcrawlerBait', 'WoodlouseBait', "Fish Oil", "firm fish filet", "tadpole")
//   var selected = 0//whatever was clicked when there was stuff displayed
//   print("How many do you need")
//   display(5, 7, 10, 15, 20)
//   dsiplay('custom amount')//display custom button under card options
//   var amount = 0//whatever the user selected
//   return (selected, amount);
// }

// function huntersNeeded() {
//   print("How much hide do you need")
//   var selected = rawHide
//   print("How many do you need")
//   display(150)
//   dsiplay('custom amount')//display custom button under card options
//   var amount = 0//whatever the user selected
//   return (selected, amount);
// }

// function metalWorkersNeeded() {
//   print("What type of metal do you need")
//   display('Iron Ingots',)
//   var selected = //whatever was clicked when there was stuff displayed
//       print("How many do you need")
//   display(90)
//   dsiplay('custom amount')//display custom button under card options
//   var amount = 0//whatever the user selected
//   return (selected, amount);
// }

// function alchemistsNeeded() {
//   print("What kind of potions do you need")
//   display('Lumber', 'Timber')
//   var selected = 0//whatever was clicked when there was stuff displayed
//   print("How many do you need")
//   display(1, 2, 10, 15, 20)
//   dsiplay('custom amount')//display custom button under card options
//   var amount = 0//whatever the user selected
//   return (selected, amount);
// }

// function harvestersNeeded() {
//   print("How much fiber do you need")
//   var selected = fiber
//   print("How many do you need")
//   display(50, 100, 150)
//   dsiplay('custom amount')//display custom button under card options
//   var amount = 0//whatever the user selected
//   return (selected, amount);
// }

// function carpentersNeeded() {
//   print("What kind of wood do you need")
//   display('Lumber', 'Timber')
//   var selected = 0//whatever was clicked when there was stuff displayed
//   print("How many do you need")
//   display(25, 90)
//   dsiplay('custom amount')//display custom button under card options
//   var amount = 0//whatever the user selected
//   return (selected, amount);
// }

// function stoneMasonNeeded() {
//   print("What kind of stone do you need")
//   display('Stone bricks', 'Stone blocks',)
//   var selected = 0//whatever was clicked when there was stuff displayed
//   print("How many do you need")
//   display(25, 40, 50)
//   dsiplay('custom amount')//display custom button under card options
//   var amount = 0//whatever the user selected
//   return (selected, amount);
// }

// function lumberJacksNeeded() {
//   print("What type of wood do you need")
//   display('green wood', 'aged wood')
//   var selected = 0//whatever was clicked when there was stuff displayed
//   print("How many do you need")
//   display(150, 200, 250, 300)
//   dsiplay('custom amount')//display custom button under card options
//   var amount = 0 //whatever the user selected
//   return (selected, amount);
// }

// function suppliesNeeded() {
//   print("What type of supplies do you need ")
//   display('oil', 'water', "feathers")
//   var selected = 0//whatever was clicked when there was stuff displayed
//   print("How many do you need")
//   display(20, 40, 100, 250,)
//   dsiplay('custom amount')//display custom button under card options
//   var amount = 0 //whatever the user selected
//   return (selected, amount);
// }

// function armorSmithing(){
//   print ("What type")
//   //Toughened Crude Iron Armor
//   var sOTCIA = 1
//   //Hardened Crude Iron Armor
//   var sOHCIA = 1                      
//   //Plundering Iron Armanets
//   var pIA = 2
// }
// function weaponSmithing(){
//   print ("What type ")
//   //Impaling Iron Armaments
//   var iIA = 1
//   //Reaving Iron Armaments
//   var rIA = 1
//   //Bulwark Crude Iron Armaments
//   var bulCIA=2                              
//   //Bruising Crude Iron Armametns
//   var bruCIA = 1                           
// }

// function hunt() {
//   print("What are you hunting?")
//   display('rabits', 'turkey', 'elk', 'bear', "lynx", "wolves")
//   var selected = 0//whatever was clicked when there was stuff displayed
//   print("How many do you need")
//   display(1, 3, 10, 15, 25)
//   dsiplay('custom amount')//display custom button under card options
//   var amount = 0//whatever the user selected
//   return (selected, amount);
// }


  //Delete Task
  const deleteTask = (id) => {
    console.log('delete',id)
    setTasks(tasks.filter((task) => task.id !== id))
            }
  //Toggle Selected
  const toggleSelected = (id) => {
   // setResources(resources.map((resource) => resource.id === id ? { ...resource,selected: !resource.selected} : resource))
   console.log(id)
  }

//Impaling Iron Armaments
var iIA = 1
//Reaving Iron Armaments
var reavIA = 0
//Bulwark Crude Iron Armaments
var bulCIA = 0
//Bruising Crude Iron Armaments
var bruCIA = 0
//Toughened Crude Iron Armor
var sOTCIA = 0
//Hardened Crude Iron Armor
var sOHCIA = 0
//Rugged Iron Armor
var RugIA = 0           
//Plundering Iron Armanets
var pIA = 0
// Crushiung Iron Armaents
var cIA = 0
//Reaving Crude Iron Armaments 
var reavCIA = 0         
//Ransacking Crude Iron Armaments
var ranCIA = 1              
//Plundering Crude Iron Armaments
var plunCIA = 1              
//Crushing Crude Iron Armaments
var cCIA = 1                
//Hardened Iron Armor
var hIA = 0         
//Pillaging Crude Iron Armaments
var pillCIA = 0
//Gashing Crude Iron Armaments
var gCIA = 1                    
//Impaling Crude Iron Arament
var iCIA = 2                    
//Bruising Iron Armaments
var bIA = 1                     
//Toughened Iron Armor
var tIA = 1             
//Cleaving Iron Armaments
var cleaveIA = 1 


   


//------------------
//COST LOGIC
//------------------


var eLRations = 20
var eTRations = 0
var lRations = 0
var tRations = 0
//---------------
var silk = 0
var sateen = 20
var linen = 0 + (RugIA*10) + (hIA*10) + (tIA*5)

//---------------
//-----------------
var iIngot = 100 + (reavIA * 9) + (pIA * 6) + (iIA * 4) + (cIA * 5) + (RugIA*5) + (hIA*10) + (cleaveIA*7) + (tIA * 10) + (bIA *15)
//--------------------
var lLeather = 50 //-add
var rLeather = -98
var cLeather = 0 + (reavIA * 24) + (pIA * 7) + (iIA * 12) + (cIA * 8) + (RugIA*5) + (hIA*5) + (cleaveIA*10) + (tIA * 5) + (bIA*5)
//------------------
//------------------
var lumber = 0
var timber = 0 + (reavIA * 7) + (pIA * 7) + (iIA * 4) + (cIA * 12) + (cleaveIA * 8) + (bIA*5)
//------------
var sBlock = 0
var sBrick = 45
///------------
var wLBait = 0  // VVV
var nCBait = 0  // VVV
//------------------------
// common mana potion
var cMPot = 0
// weak mana potion
var wMPot = 0
//common regeneration potion
var cRPot = 0
//Strong Health Potion
var sHPot = 0
//strong Mana Potion
var sMPot = 0
//Powerful Regeneration Potion
var pRPot = 0
//Common Health Potion
var cHPot = 0
//------------------------

//--------------BASE---------------
var fiber = 0 + (sOHCIA * 15) + (sOTCIA * 12)
var rawHide = 150 + (sOHCIA * 15) + (bulCIA * 12) + (sOTCIA * 9) + (bruCIA * 10) + (reavCIA*25) + (cCIA*15) + (ranCIA*20) + (plunCIA*10) + (pillCIA*25) + (iCIA*8) + (gCIA*30)
var stone = 0
var gWood = 1200 + (bulCIA * 3) + (bruCIA * 20) + (reavCIA*15) + (cCIA*15) + (ranCIA*20) + (plunCIA*10) + (pillCIA*40) + (iCIA*14) + (gCIA*30)
var agedWood = 80
var iOre = 0 + (sOHCIA * 20) + (bulCIA * 15) + (sOTCIA * 9) + (bruCIA * 20) + (reavCIA*50) + (cCIA*20) + (ranCIA*10) + (plunCIA*10) + (pillCIA*25) + (iCIA*8) + (gCIA*30)
var water = 0
var feathers = 0
var oil = 30
var flint = 85
var t1RF = (0 * eLRations) + (1 * lRations)
var t2RF = 0 * eTRations
var rF = 0 * eTRations

//calcs--------------------
var silk_c = silk
var sateen_c = 2 * silk_c + sateen
var linen_c = 4 * sateen_c + linen
var cWFlux_c = 1 * silk + 1 * sateen_c
var silkThread_c = 6 * silk

var fibers_c = linen_c * 4 + fiber


var iIngot_c = iIngot
var iOre_c = iIngot_c * 4 + iOre

var timber_c = lumber * 2 + timber
var agedWood_c = lumber * 4 + agedWood
var cSFluxL = lumber * 1
var gWood_c = timber_c * 4 + gWood

var sBrick_c = sBrick
var sBlock_c = sBrick_c * 4 + sBlock
var cSFluxS = sBrick * 1
var stone_c = sBlock_c * 4 + stone


var lLeather_c = lLeather
var ThickHide_c = lLeather_c * 6
var rLeather_c = lLeather_c * 2 + rLeather
var tFlux = rLeather_c * 1 +  rLeather_c *1
var cLeather_c =  rLeather_c * 4  + cLeather
var rawHide_c = cLeather_c * 4 + rawHide








var briarBuds_c = wMPot * 1

//Tier 2 Medicinal Reagents
// t2MR_c is  Sporebloom fruit, Glowing Mushroom cap, Gillflower Gills, Platecap Flesh, LifeBloom Stem
var t2MR_c = (cMPot * 1) + (cHPot * 1)


var water_c = (cMPot * 1) + (wMPot * 1) + (cHPot * 1) + water



var agedWood_Base = agedWood_c
var gWood_Base = gWood_c
var fibers_Base = fibers_c
var rawHide_Base = rawHide_c
var iOre_Base = iOre_c
var stone_Base = stone_c
var water_Base = water_c
var briarBuds_Base = briarBuds_c
var t2MR_Base = t2MR_c
var silkThread_Base = silkThread_c


console.log("Green Wood  " + gWood_Base + "--------------")
console.log("Aged Wood  " + agedWood_Base + "--------------")
console.log("Coarse sandpaper Flux  " + cSFluxL + "--------------")
console.log("Craft into  " + timber_c + "  Timber")
console.log("In order to make  " + lumber + "  Lumber")


console.log("Raw Fibers  " + fibers_Base + "--------------")
console.log("Silk Thread  " + silkThread_Base + "--------------")
console.log("Cross Weave flux  " + cWFlux_c + "--------------")
console.log("Craft into  " + linen_c + "  linen")
console.log("Craft into  " + sateen_c + "  sateen")
console.log("In order to make  " + silk + "  silk")

console.log("Raw Hide  " + rawHide_c + "--------------")
console.log("Tannin" + tFlux + "--------------")
console.log("Thick Hide " + ThickHide_c + "--------------")
console.log("Craft into  " + cLeather + "  Coarse Leather")
console.log("Craft into  " + rLeather_c + "  RuggedLeather")
console.log("Craft into  " + lLeather + "  Layered Leather")


console.log("Iron Ore  " + iOre_c + "--------------")
console.log("Craft into  " + iIngot_c + "  Iron Ingots")


console.log("Stones  " + stone_Base + "--------------")
console.log("Coarse sandpaper Flux  " + cSFluxS + "--------------")
console.log("Craft into  " + sBlock_c + " Stone Blocks ")
console.log("Craft into  " + sBrick + " Stone Bricks  ")
console.log("Oil " + oil + "--------------")
console.log("Feathers " + feathers + "--------------")
console.log("Feathers " + flint + "--------------")
//TODO::
console.log("Water  " + water_Base)

console.log("Briar Buds  " + briarBuds_Base)

console.log("t2MR  " + t2MR_Base)