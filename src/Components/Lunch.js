import React, {Component} from 'react'

class Lunch extends Component{
    expandOrCloseParticipants(target){
      let content = target.parentElement.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none"
      } else {
        content.style.display = "block"
      }
    }
  
    render(){
      return( <ul className="lunch">
      <li>{this.props.lunch.place}</li>
      <li>{this.props.lunch.address}</li>
      <li>{this.props.lunch.datetime}</li>
      <li className="participant"><a onClick={ e => this.expandOrCloseParticipants(e.target)}>Participants</a><span className="count blueBackground"> Count: {this.props.lunch.participants.length}</span></li>
      <li className="participants">
        <ul className="part">{this.props.lunch.participants.map((participant, key)=>{
          return <li key={key}>{participant}</li>
        })}</ul>
      </li>
      <li><button className="blueBackground">Participate</button></li>
    </ul>)
    }
  }

  class LunchModel{
    constructor(place, address, datetime, participants){
      this.place = place
      this.address = address
      this.datetime = datetime
      this.participants = participants
    }
  }

  export {Lunch, LunchModel}