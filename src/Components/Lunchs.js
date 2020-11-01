import React, {Component} from 'react'
import Lunch from './Lunch'
import data from './../placesData.json'

function Lunchs(){
    const lunchInfomration = data["lunches"]

    return (
        lunchInfomration.map(lunch =>{
            return(
                <div className="lunchCard">
                    <Lunch lunch={lunch}/>
                </div>)
        })
    )
}
  
export default Lunchs