import React from 'react'

function Lunch(props){
    function toogleParticipants(target){
        const content = target.parentElement.nextElementSibling
        if (content.style.display === "block") {
            content.style.display = "none"
        } else {
            content.style.display = "block"
        }
    }

    return(
        <ul className="lunch">
            <li>{props.lunch.place}</li>
            <li>{props.lunch.address}</li>
            <li>{props.lunch.datetime}</li>
            <li className="participantsButton"><a onClick={ e => toogleParticipants(e.target)}>Participants</a><span className="count blueBackground">count: {props.lunch.participants.length}</span></li>
            <li className="participants">
                <ul className="participant">{props.lunch.participants.map((participant, key)=>{
                    return <li key={key}>{participant}</li>
                })}</ul>
            </li>
            <li><button className="blueBackground">Participate</button></li>
        </ul>)
}

export default Lunch