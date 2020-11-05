import React, { useState } from 'react'

type LunchProps = {
    lunch: {
        place: string,
        address: string,
        datetime: string,
        participants: string[]
    }
}

const Lunch = ({lunch} : LunchProps) => {
    function toogleParticipants(){
        state ? setState(false) : setState(true)
    }

    const [state, setState] = useState(false)

    return(
        <ul className="lunch">
            <li>{lunch.place}</li>
            <li>{lunch.address}</li>
            <li>{lunch.datetime}</li>
            <li className="participantsButton"><a onClick={toogleParticipants}>Participants</a><span className="count blueBackground">count: {lunch.participants.length}</span></li>
            <li style={{display: state ? 'block' : 'none' }} className="participants">
                <ul className="participant">{lunch.participants.map((participant, key)=>{
                    return <li key={key}>{participant}</li>
                })}</ul>
            </li>
            <li><button className="blueBackground">Participate</button></li>
        </ul>)
}

export default Lunch