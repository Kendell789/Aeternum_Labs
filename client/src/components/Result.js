import React from 'react'
import './script';
import {breakdown , fiber2Calc} from './LogicFunc.js';

const Result = ({quests}) => {
    var Total = {};
    var baseVal = 0;
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
                      {fiber2Calc["Fibers"]} Fibers <br></br>
                      Craft into: <br></br>
                      {fiber2Calc["Linen"]} Linen<br></br>
                      {fiber2Calc["Sateen"]} Sateen <br></br>
                      {fiber2Calc["Silk"]} Silk <br></br>
                      {fiber2Calc["Infused Silk"]} Infused Silk <br></br>
                </div>
                </div>
                <div className= "dropdown" data-dropdown>
                <button className="result-card" data-dropdown-button>Rawhide</button>
                <div className= "dropdown-menu" style={{fontSize: "26px"}} >
                      {baseVal} Rawhide <br></br>
                      Craft into: <br></br>
                      {val} Coarse Leather<br></br>
                      {val} Rugged Leather <br></br>
                      {val} Layered Leather <br></br>
                      {val} Infused Leather <br></br>
                </div>
                </div>
                <div className= "dropdown" data-dropdown>
                <button class="result-card" data-dropdown-button>Stone</button>
                <div className= "dropdown-menu" style={{fontSize: "24px"}}>
                      {baseVal} Stone <br></br>
                      Craft into: <br></br>
                      {val} Stone Block<br></br>
                      {val} Stone Brick <br></br>
                      {val} Lodestone Brick <br></br>
                      {val} Obsidian Voidstone <br></br>
                </div>
                </div>
                <div className= "dropdown" data-dropdown>
                <button class="result-card" data-dropdown-button>Iron Ore</button>
                <div className= "dropdown-menu" style={{fontSize: "25px"}}>
                      {baseVal} Iron Ore <br></br>
                      Craft into: <br></br>
                      {val} Iron Ingot<br></br>
                      {val} Steel Ingot <br></br>
                      {val} Starmetal Ingot <br></br>
                      {val} Orichalcum Ingot <br></br>
                </div>
                </div>
                <div className= "dropdown" data-dropdown>
                <button class="result-card" data-dropdown-button>Green Wood</button>
                <div className= "dropdown-menu" style={{fontSize: "29px"}}>
                      {baseVal} Green Wood <br></br>
                      Craft into: <br></br>
                      {val} Linen<br></br>
                      {val} Sateen <br></br>
                      {val} Silk <br></br>
                      {val} Infused Silk <br></br>
                </div>
                </div>
              </section>
      
          </body>
          </div>



              <div class="rightDiv">
              <body className = "unique">   

              <h1 className = "rhead">Unique needed</h1>

              <section class="basic-grid">
              <button class="unique-card"> {fiber2Calc["wireFiber"]} Wirefiber</button>
              <button class="unique-card"> {fiber2Calc["silkThreads"]} Silk Threads</button>
              <button class="unique-card"> {val} Iron Hide</button>
              <button class="unique-card"> {val} Thick Hide</button>
              <button class="unique-card"> {val} Loamy Lodestone</button>
              <button class="unique-card"> {val} Lodestone</button>
              <button class="unique-card"> {val} Charcoal</button>
              <button class="unique-card"> {val} Flint</button>
              <button class="unique-card"> {val} Oil</button>
              <button class="unique-card"> {val} Water</button>
              <button class="unique-card"> {val} Fiber</button>





              </section>
              </body>
              </div>


              <div className = "flux">
                
              <h1 className = "rhead">Flux needed</h1>


              <section class="basic-grid">
              <div className= "dropdown" data-dropdown>
              <button class="result-card" data-dropdown-button>Cloth Weave</button>
              <div className= "dropdown-menu">
              {fiber2Calc["flux"]} Crossweave <br></br>
              {fiber2Calc["flux"]} Silkweave <br></br>
              {fiber2Calc["flux"]} Wireweave <br></br>
              </div>
              </div>
              <div className= "dropdown" data-dropdown>
              <button class="result-card" data-dropdown-button>Tannin</button>
              <div className= "dropdown-menu">
              {val} Tannin <br></br>
              {val} Rested Tannin <br></br>
              {val} Aged Tannin <br></br>
              </div>
              </div>
              <div className= "dropdown" data-dropdown>
              <button class="result-card" data-dropdown-button>Sandpaper</button>
              <div className= "dropdown-menu" style={{fontSize: "30px"}}>
              {val} Coarse Sandpaper<br></br>
              {val} Fine Sandpaper<br></br>
              {val} Obsidian Sandpaper<br></br>
              </div>
              </div>
              <div className= "dropdown" data-dropdown>
              <button class="result-card" data-dropdown-button>Flux</button>
              <div className= "dropdown-menu">
              {val} Sand Flux <br></br>
              {val} Shelldust Flux <br></br>
              {val} Obsidian Flux <br></br>
              </div>
              </div>
              </section>
              </div>

              </div>
      </>
    )
}

export default Result
