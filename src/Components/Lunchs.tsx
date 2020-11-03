import React, {Component} from 'react'
import Lunch from './Lunch'
import data from './../placesData.json'

function Lunchs(){
    const lunchInfomration = data["lunches"]

    function LunchCards() : JSX.Element{
        const result: any = lunchInfomration.map((lunch, i) =>{
            return(
                <div className="lunchCard" key={i}>
                    <Lunch lunch={lunch}/>
                </div>)
        })
        return result;
    }

    return (
        <div>
            {LunchCards()}
        </div>
    )
}
  
export default Lunchs