import React from 'react'
import './script';
import {breakdown, fiber2Calc, rawhide2Calc, stone2Calc, iron2Calc, wood2Calc, supplies_r} from './LogicFunc.js';

const Result = ({quests}) => {
    var Total = {};
    var val = 0;

    quests.forEach(element => {
        if (element.resourceTypeReq in Total){
            Total[element.resourceTypeReq] += element.resourceAmountReq
        }else{
        Total[element.resourceTypeReq] = element.resourceAmountReq;
        }
    });
    breakdown(Total)
    return (
      <>
      <script src = "./script.js" defer> </script>
      <div className = "result-container">


          <div className="leftDiv">


              <body className = "resource"> 
              <h1 className = "rhead">Resources needed</h1>

                <section className="basic-grid">
                <div className= "dropdown active" data-dropdown>
                <button className="result-card" data-dropdown-button>Fiber</button>
                <div className= "dropdown-menu" style={{fontSize: "29px"}}>
                <span className = "highlight">{fiber2Calc["Fibers"]}</span> Fibers <br></br>
                      Craft into: <br></br>
                      <span className = "highlight-l">{fiber2Calc["Linen"]}</span> Linen<br></br>
                      <span className = "highlight-l">{fiber2Calc["Sateen"]}</span> Sateen <br></br>
                      <span className = "highlight-l">{fiber2Calc["Silk"]}</span> Silk <br></br>
                      <span className = "highlight-l">{fiber2Calc["Infused Silk"]}</span> Infused Silk <br></br>
                </div>
                </div>
                <div className= "dropdown" data-dropdown>
                <button className="result-card" data-dropdown-button>Rawhide</button>
                <div className= "dropdown-menu" style={{fontSize: "26px"}} >
                <span className = "highlight">{rawhide2Calc["Rawhide"]}</span> Rawhide <br></br>
                      Craft into: <br></br>
                      <span className = "highlight-l">{rawhide2Calc["Coarse Leather"]}</span> Coarse Leather<br></br>
                      <span className = "highlight-l">{rawhide2Calc["Rugged Leather"]}</span> Rugged Leather <br></br>
                      <span className = "highlight-l">{rawhide2Calc["Layered Leather"]}</span> Layered Leather <br></br>
                      <span className = "highlight-l">{rawhide2Calc["Infused Leather"]}</span> Infused Leather <br></br>
                </div>
                </div>
                <div className= "dropdown" data-dropdown>
                <button class="result-card" data-dropdown-button>Stone</button>
                <div className= "dropdown-menu" style={{fontSize: "24px"}}>
                <span className = "highlight">{stone2Calc["Stone"]}</span> Stone <br></br>
                      Craft into: <br></br>
                      <span className = "highlight-l">{stone2Calc["Stone Block"]}</span> Stone Block<br></br>
                      <span className = "highlight-l">{stone2Calc["Stone Brick"]}</span> Stone Brick <br></br>
                      <span className = "highlight-l">{stone2Calc["Lodestone Brick"]}</span> Lodestone Brick <br></br>
                      <span className = "highlight-l">{stone2Calc["Obsidian Voidstone"]}</span> Obsidian Voidstone <br></br>
                </div>
                </div>
                <div className= "dropdown" data-dropdown>
                <button class="result-card" data-dropdown-button>Iron Ore</button>
                <div className= "dropdown-menu" style={{fontSize: "25px"}}>
                <span className = "highlight">{iron2Calc["Iron Ore"]}</span> Iron Ore <br></br>
                      Craft into: <br></br>
                      <span className = "highlight-l">{iron2Calc["Iron Ingot"]}</span> Iron Ingot<br></br>
                      <span className = "highlight-l">{iron2Calc["Steel Ingot"]}</span> Steel Ingot <br></br>
                      <span className = "highlight-l">{iron2Calc["Starmetal Ingot"]}</span> Starmetal Ingot <br></br>
                      <span className = "highlight-l">{iron2Calc["Orichalcum Ingot"]}</span> Orichalcum Ingot <br></br>
                </div>
                </div>
                <div className= "dropdown" data-dropdown>
                <button class="result-card" data-dropdown-button>Green Wood</button>
                <div className= "dropdown-menu" style={{fontSize: "25.9px"}}>
                      <span className = "highlight">{wood2Calc["Green Wood"]}</span> Green Wood <br></br>
                      Craft into: <br></br>
                      <span className = "highlight-l">{wood2Calc["Timber"]}</span> Timber<br></br>
                      <span className = "highlight-l">{wood2Calc["Lumber"]}</span> Lumber <br></br>
                      <span className = "highlight-l">{wood2Calc["Wyrdwood Planks"]}</span> Wyrdwood Planks <br></br>
                      <span className = "highlight-l">{wood2Calc["Ironwood Planks"]}</span> Ironwood Planks <br></br>
                </div>
                </div>
              </section>
      
          </body>
          </div>



              <div class="rightDiv">
              <body className = "unique">   

              <h1 className = "rhead">Unique needed</h1>

              <section class="basic-grid">
              <button class="unique-card"> <span className = "highlight">{fiber2Calc["wireFiber"]}</span>&nbsp;&nbsp;&nbsp;Wirefiber</button>
              <button class="unique-card"> <span className = "highlight">{fiber2Calc["silkThreads"]}</span>&nbsp;&nbsp;&nbsp;Silk Threads</button>
              <button class="unique-card"> <span className = "highlight">{rawhide2Calc["Iron Hide"]}</span> &nbsp;&nbsp;&nbsp;Iron Hide</button>
              <button class="unique-card"> <span className = "highlight">{rawhide2Calc["Thick Hide"]}</span> &nbsp;&nbsp;&nbsp;Thick Hide</button>
              <button class="unique-card"> <span className = "highlight">{stone2Calc["Loamy Lodestone"]}</span> &nbsp;&nbsp;&nbsp;Loamy Lodestone</button>
              <button class="unique-card"> <span className = "highlight">{stone2Calc["Lodestone"]}</span> &nbsp;&nbsp;&nbsp;Lodestone</button>
              <button class="unique-card"> <span className = "highlight">{iron2Calc["Orichalcum Ore"]}</span> &nbsp;&nbsp;&nbsp;Orichalcum ore</button>
              <button class="unique-card"> <span className = "highlight">{iron2Calc["Starmetal Ore"]}</span> &nbsp;&nbsp;&nbsp;Starmetal ore</button>
              <button class="unique-card"> <span className = "highlight">{iron2Calc["Charcoal"]}</span> &nbsp;&nbsp;&nbsp;Charcoal</button>
              <button class="unique-card"> <span className = "highlight">{wood2Calc["Ironwood"]}</span> &nbsp;&nbsp;&nbsp;Ironwood</button>
              <button class="unique-card"> <span className = "highlight">{wood2Calc["Wyrdwood"]}</span> &nbsp;&nbsp;&nbsp;Wyrdwood</button>
              <button class="unique-card"> <span className = "highlight">{wood2Calc["Aged Wood"]}</span> &nbsp;&nbsp;&nbsp;Aged Wood</button>
              <button class="unique-card"> <span className = "highlight">{supplies_r["Flint"]}</span> &nbsp;&nbsp;&nbsp;Flint</button>
              <button class="unique-card"> <span className = "highlight">{supplies_r["Oil"]}</span> &nbsp;&nbsp;&nbsp;Oil</button>
              <button class="unique-card"> <span className = "highlight">{supplies_r["Water"]}</span> &nbsp;&nbsp;&nbsp;Water</button>
              <button class="unique-card"> <span className = "highlight">{supplies_r["Feather"]}</span> &nbsp;&nbsp;&nbsp;Feather</button>

              </section>
              </body>
              </div>


              <div className = "flux">
                
              <h1 className = "rhead">Flux needed</h1>


              <section class="basic-grid">
              <div className= "dropdown" data-dropdown>
              <button class="result-card" data-dropdown-button>Cloth Weave</button>
              <div className= "dropdown-menu">
              <span className = "highlight">{fiber2Calc["flux"]}</span><br></br>
              Crossweave <br></br>
              Silkweave <br></br>
              Wireweave <br></br>
              </div>
              </div>
              <div className= "dropdown" data-dropdown>
              <button class="result-card" data-dropdown-button>Tannin</button>
              <div className= "dropdown-menu">
              <span className = "highlight">{rawhide2Calc["flux"]}</span><br></br>
               Tannin <br></br>
              Rested Tannin <br></br>
              Aged Tannin <br></br>
              </div>
              </div>
              <div className= "dropdown" data-dropdown>
              <button class="result-card" data-dropdown-button>Sandpaper</button>
              <div className= "dropdown-menu" style={{fontSize: "30px"}}>
              <span className = "highlight">{(wood2Calc["flux"]) + (stone2Calc["flux"])}</span><br></br>
              Coarse Sandpaper<br></br>
              Fine Sandpaper<br></br>
              Obsidian Sandpaper<br></br>
              </div>
              </div>
              <div className= "dropdown" data-dropdown>
              <button class="result-card" data-dropdown-button>Flux</button>
              <div className= "dropdown-menu">
              <span className = "highlight">{iron2Calc["flux"]}</span><br></br>
              Sand Flux <br></br>
              Shelldust Flux <br></br>
              Obsidian Flux <br></br>
              </div>
              </div>
              </section>
              </div>

              </div>
      </>
    )
}

export default Result
