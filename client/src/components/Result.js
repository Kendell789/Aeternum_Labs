import React from 'react'
import './script';

const Result = ({quests}) => {
    var Total = {};
    var val = 312;
    var baseVal = 1542;

    quests.forEach(element => {
        if (element.resourceTypeReq in Total){
            Total[element.resourceTypeReq] += element.resourceAmountReq
        }else{
        Total[element.resourceTypeReq] = element.resourceAmountReq;
        }
    });

    const Mats = Object.keys(Total)


    Mats.forEach(item =>{
        console.log(item)
        console.log(Total[item])
    })



    return (
      <>
      <script src = "./script.js" defer> </script>
      <div className = "result-container">


          <div className="leftDiv">


              <body className = "resource"> 
              <h1 className = "rhead">Resources needed</h1>

                <section class="basic-grid">
                <div className= "dropdown active" data-dropdown>
                <button className="result-card" data-dropdown-button>Fiber</button>
                <div className= "dropdown-menu" style={{fontSize: "29px"}}>
                      {baseVal} Rawhide <br></br>
                      Craft into: <br></br>
                      {val} Linen<br></br>
                      {val} Sateen <br></br>
                      {val} Silk <br></br>
                      {val} Infused Silk <br></br>
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
              <button class="unique-card"> {val} Wirefiber</button>
              <button class="unique-card"> {val} Silk Threads</button>
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
              {val} Crossweave <br></br>
              {val} Silkweave <br></br>
              {val} Wireweave <br></br>
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
