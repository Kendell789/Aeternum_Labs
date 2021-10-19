import React from 'react'

const Result = ({quests}) => {
    var Total = {};

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
        <div>  
            TEST
            

            
        </div>
    )
}

export default Result
