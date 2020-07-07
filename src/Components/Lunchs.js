import React, {Component} from 'react'
import {Lunch} from './Lunch'
import data from './../placesData.json'

class Lunchs extends Component {
    getLunches(){
        this.lunchs = data["lunches"];
    }
  
    render(){
      this.getLunches();
      return (
        this.lunchs.map(lunch =>{
          return (
            <div className="lunchBlock">
              <Lunch lunch={lunch}/>
            </div>
          )
        })
      )
    }
  }
  
  export default Lunchs