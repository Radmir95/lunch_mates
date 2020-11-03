import React from 'react'

type LunchProps = {
    lunch: {
        place: string,
        address: string,
        datetime: string,
        participants: string[]
    }
}

const Lunch = ({lunch} : LunchProps) => {
    function toogleParticipants(target : any){
        const content = target.parentElement.nextElementSibling
        if (content.style.display === "block") {
            content.style.display = "none"
        } else {
            content.style.display = "block"
        }
    }

    return(
        <ul className="lunch">
            <li>{lunch.place}</li>
            <li>{lunch.address}</li>
            <li>{lunch.datetime}</li>
            <li className="participantsButton"><a onClick={ e => toogleParticipants(e.target)}>Participants</a><span className="count blueBackground">count: {lunch.participants.length}</span></li>
            <li className="participants">
                <ul className="participant">{lunch.participants.map((participant, key)=>{
                    return <li key={key}>{participant}</li>
                })}</ul>
            </li>
            <li><button className="blueBackground">Participate</button></li>
        </ul>)
}

export default Lunch