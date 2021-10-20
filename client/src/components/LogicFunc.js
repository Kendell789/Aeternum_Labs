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

};
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
var flux_c = 0;
var silkThreads_c = 0;
var wireFiber_c = 0;



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
    sortMaterials(MaterialType)}

    
function sortMaterials(Material){
    Material.forEach(item =>{
        if (item in fiber2Calc){
            if ("Fibers" == item){
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
        else if (item in rawhide2Calc){
            console.log(5)
            }
        }

    })
Fiberbreakdown(fiber2Calc)
}

function Fiberbreakdown(fiber2Calc){
    fiber = fiber2Calc["Fibers"] 
    linen = fiber2Calc["Linen"]
    sateen = fiber2Calc["Sateen"]
    silk = fiber2Calc["Silk"]
    infSilk = fiber2Calc["Infused Silk"] 

    infSilk_c = infSilk
    silk_c = (2*infSilk_c) + silk
    sateen_c = (2 * silk_c) + sateen
    linen_c = (4 * sateen_c) + linen
    fiber_c = (linen_c * 4) + fiber

    silkThreads_c = (6 * silk_c)
    wireFiber_c = infSilk_c

    flux_c = infSilk_c + silk_c + sateen_c

    fiber2Calc["Fibers"] = fiber_c
    fiber2Calc["Linen"] = linen_c
    fiber2Calc["Sateen"] = sateen_c
    fiber2Calc["Silk"] = silk_c
    fiber2Calc["Infused Silk"] = infSilk_c
    fiber2Calc["silkThreads"] = silkThreads_c
    fiber2Calc["wireFiber"] = wireFiber_c
    fiber2Calc["flux"] = flux_c
}