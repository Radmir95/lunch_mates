import React, {useState} from 'react'

const Header = () => {
    function navbarClick(){
        state ? setState(false) : setState(true)
    }

    const [state, setState] = useState(true)

    return(
        <nav className="navbar">
            <span role="img" aria-label="hamburger" className="logo">Lunch Mates &#127828;</span>
            <div className="menu">
                <span className="navbar-toggle">
                    <i onClick={navbarClick} className="box-shadow-menu"></i>
                </span>
                <ul className={state ? "main-nav" : "main-nav active"}>
                    <li className="nav-links">View</li>
                    <li className="nav-links">Schedule new</li>
                    <li className="nav-links">Participation history</li>
                </ul>
            </div>
        </nav>)
}

export default Header