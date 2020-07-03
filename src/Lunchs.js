import React, {Component} from 'react'
import {Lunch, LunchModel} from './Lunch'

class Lunchs extends Component {
    getLunches(){
      this.lunchs = [
        new LunchModel("Place1", "Address1", "Datetime1", ["Viktor", "Viktor1"]),
        new LunchModel("Place2", "Address2", "Datetim2", ["Ahmed", "Ahmed1"])
      ];
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
  
  export default Lunchs;