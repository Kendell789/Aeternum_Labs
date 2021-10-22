import React from 'react'
import './script';
import {breakdown, fiber2Calc, rawhide2Calc, stone2Calc, iron2Calc, wood2Calc, supplies_r} from './LogicFunc.js';
import { BsCaretDownSquareFill } from "react-icons/bs";
import { useState } from 'react';

const Result = ({quests}) => {
    var Total = {};
    quests.forEach(element => {
        if (element.resourceTypeReq in Total){
            Total[element.resourceTypeReq] += element.resourceAmountReq
        }else{
        Total[element.resourceTypeReq] = element.resourceAmountReq;
        }
    });

        const[isa,seta]=useState(false);
        const a = () => {seta(!isa);};
        const[isb,setb]=useState(false);
        const b = () => {setb(!isb);};
        const[isc,setc]=useState(false);
        const c = () => {setc(!isc);};        
        const[isd,setd]=useState(false);
        const d = () => {setd(!isd);};        
        const[ise,sete]=useState(false);
        const e = () => {sete(!ise);};        
        const[isf,setf]=useState(false);
        const f = () => {setf(!isf);};        
        const[isg,setg]=useState(false);
        const g = () => {setg(!isg);};        
        const[ish,seth]=useState(false);
        const h = () => {seth(!ish);};        
        const[isi,seti]=useState(false);
        const i = () => {seti(!isi);};        
        const[isj,setj]=useState(false);
        const j = () => {setj(!isj);};        
        const[isk,setk]=useState(false);
        const k = () => {setk(!isk);};        
        const[isl,setl]=useState(false);
        const l = () => {setl(!isl);};        
        const[ism,setm]=useState(false);
        const m = () => {setm(!ism);};        
        const[isn,setn]=useState(false);
        const n = () => {setn(!isn);};        
        const[iso,seto]=useState(false);
        const o = () => {seto(!iso);};        
        const[isp,setp]=useState(false);
        const p = () => {setp(!isp);};

    
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
                <button className="result-card" data-dropdown-button>Fiber &nbsp;{<BsCaretDownSquareFill className = "icon"size ={20} data-dropdown-button />} </button>
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
                <button className="result-card" data-dropdown-button > Rawhide &nbsp;{<BsCaretDownSquareFill className = "icon"size ={20} data-dropdown-button />}</button>
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
                <button class="result-card" data-dropdown-button>Stone&nbsp;{<BsCaretDownSquareFill className = "icon"size ={20} data-dropdown-button />}</button>
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
                <button class="result-card" data-dropdown-button>Iron Ore&nbsp;{<BsCaretDownSquareFill className = "icon"size ={20} data-dropdown-button />}</button>
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
                <button class="result-card" data-dropdown-button style={{fontSize: "45px"}}>Green Wood&nbsp;{<BsCaretDownSquareFill className = "icon"size ={20} data-dropdown-button />}</button>
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

              <h1 className = "rhead">Unique needed </h1>

              <section class="basic-grid">
              <button class={isa ? 'unique-used':'unique-card'}onClick={a}> <span className = {isa ? 'unique-used':'highlight'}onClick={a}>{fiber2Calc["wireFiber"]}</span>&nbsp;&nbsp;&nbsp;Wirefiber</button>
              <button class={isb ? 'unique-used':'unique-card'}onClick={b}> <span className = {isb ? 'unique-used':'highlight'}onClick={b}>{fiber2Calc["silkThreads"]}</span>&nbsp;&nbsp;&nbsp;Silk Threads</button>
              <button class={isc ? 'unique-used':'unique-card'}onClick={c}> <span className = {isc ? 'unique-used':'highlight'}onClick={c}>{rawhide2Calc["Iron Hide"]}</span> &nbsp;&nbsp;&nbsp;Iron Hide</button>
              <button class={isd ? 'unique-used':'unique-card'}onClick={d}> <span className = {isd ? 'unique-used':'highlight'}onClick={d}>{rawhide2Calc["Thick Hide"]}</span> &nbsp;&nbsp;&nbsp;Thick Hide</button>
              <button class={ise ? 'unique-used':'unique-card'}onClick={e}> <span className = {ise ? 'unique-used':'highlight'}onClick={e}>{stone2Calc["Loamy Lodestone"]}</span> &nbsp;&nbsp;&nbsp;Loamy Lodestone</button>
              <button class={isf ? 'unique-used':'unique-card'}onClick={f}> <span className = {isf ? 'unique-used':'highlight'}onClick={f}>{stone2Calc["Lodestone"]}</span> &nbsp;&nbsp;&nbsp;Lodestone</button>
              <button class={isg ? 'unique-used':'unique-card'}onClick={g}> <span className = {isg ? 'unique-used':'highlight'}onClick={g}>{iron2Calc["Orichalcum Ore"]}</span> &nbsp;&nbsp;&nbsp;Orichalcum ore</button>
              <button class={ish ? 'unique-used':'unique-card'}onClick={h}> <span className = {ish ? 'unique-used':'highlight'}onClick={h}>{iron2Calc["Starmetal Ore"]}</span> &nbsp;&nbsp;&nbsp;Starmetal ore</button>
              <button class={isi ? 'unique-used':'unique-card'}onClick={i}> <span className = {isi ? 'unique-used':'highlight'}onClick={i}>{iron2Calc["Charcoal"]}</span> &nbsp;&nbsp;&nbsp;Charcoal</button>
              <button class={isj ? 'unique-used':'unique-card'}onClick={j}> <span className = {isj ? 'unique-used':'highlight'}onClick={j}>{wood2Calc["Ironwood"]}</span> &nbsp;&nbsp;&nbsp;Ironwood</button>
              <button class={isk ? 'unique-used':'unique-card'}onClick={k}> <span className = {isk ? 'unique-used':'highlight'}onClick={k}>{wood2Calc["Wyrdwood"]}</span> &nbsp;&nbsp;&nbsp;Wyrdwood</button>
              <button class={isl ? 'unique-used':'unique-card'}onClick={l}> <span className = {isl ? 'unique-used':'highlight'}onClick={l}>{wood2Calc["Aged Wood"]}</span> &nbsp;&nbsp;&nbsp;Aged Wood</button>
              <button class={ism ? 'unique-used':'unique-card'}onClick={m}> <span className = {ism ? 'unique-used':'highlight'}onClick={m}>{supplies_r["Flint"]}</span> &nbsp;&nbsp;&nbsp;Flint</button>
              <button class={isn ? 'unique-used':'unique-card'}onClick={n}> <span className = {isn ? 'unique-used':'highlight'}onClick={n}>{supplies_r["Oil"]}</span> &nbsp;&nbsp;&nbsp;Oil</button>
              <button class={iso ? 'unique-used':'unique-card'}onClick={o}> <span className = {iso ? 'unique-used':'highlight'}onClick={o}>{supplies_r["Water"]}</span> &nbsp;&nbsp;&nbsp;Water</button>
              <button class={isp ? 'unique-used':'unique-card'}onClick={p}> <span className = {isp ? 'unique-used':'highlight'}onClick={p}>{supplies_r["Feather"]}</span> &nbsp;&nbsp;&nbsp;Feather</button>

              </section>
              </body>
              </div>


              <div className = "flux">
                
              <h1 className = "rhead">Flux needed</h1>


              <section class="basic-grid">
              <div className= "dropdown" data-dropdown>
              <button class="result-card" data-dropdown-button>Cloth Weave&nbsp;{<BsCaretDownSquareFill className = "icon"size ={20} data-dropdown-button />}</button>
              <div className= "dropdown-menu">
              <span className = "highlight">{fiber2Calc["flux"]}</span><br></br>
              Crossweave <br></br>
              Silkweave <br></br>
              Wireweave <br></br>
              </div>
              </div>
              <div className= "dropdown" data-dropdown>
              <button class="result-card" data-dropdown-button>Tannin&nbsp;{<BsCaretDownSquareFill className = "icon"size ={20} data-dropdown-button />}</button>
              <div className= "dropdown-menu">
              <span className = "highlight">{rawhide2Calc["flux"]}</span><br></br>
               Tannin <br></br>
              Rested Tannin <br></br>
              Aged Tannin <br></br>
              </div>
              </div>
              <div className= "dropdown" data-dropdown>
              <button class="result-card" data-dropdown-button>Sandpaper&nbsp;{<BsCaretDownSquareFill className = "icon"size ={20} data-dropdown-button />}</button>
              <div className= "dropdown-menu" style={{fontSize: "30px"}}>
              <span className = "highlight">{(wood2Calc["flux"]) + (stone2Calc["flux"])}</span><br></br>
              Coarse Sandpaper<br></br>
              Fine Sandpaper<br></br>
              Obsidian Sandpaper<br></br>
              </div>
              </div>
              <div className= "dropdown" data-dropdown>
              <button class="result-card" data-dropdown-button>Flux&nbsp;{<BsCaretDownSquareFill className = "icon"size ={20} data-dropdown-button />}</button>
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
