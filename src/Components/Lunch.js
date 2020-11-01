import React from 'react'

function Lunch(){
    function expandOrCloseParticipants(target){
        let content = target.parentElement.nextElementSibling
        if (content.style.display === "block") {
            content.style.display = "none"
        } else {
            content.style.display = "block"
        }
    }
  
    return(
        <ul className="lunch">
            {/* <li>{this.props.lunch.place}</li>
            <li>{this.props.lunch.address}</li>
            <li>{this.props.lunch.datetime}</li> */}
            {/* <li className="participantsButton"><a onClick={ e => expandOrCloseParticipants(e.target)}>Participants</a><span className="count blueBackground">count: {this.props.lunch.participants.length}</span></li> */}
            <li className="participants">
                {/* <ul className="participant">{this.props.lunch.participants.map((participant, key)=>{
                    return <li key={key}>{participant}</li>
                })}</ul> */}
            </li>
            <li><button className="blueBackground">Participate</button></li>
        </ul>)
}

export default Lunch