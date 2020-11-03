import React from 'react'

const Header = () => {
    function navbarClick(){
        myRef.current.classList.toggle("active");
    }

    const myRef : any = React.createRef()

    return(
        <nav className="navbar">
            <span role="img" aria-label="hamburger" className="logo">Lunch Mates &#127828;</span>
            <div className="menu">
                <span className="navbar-toggle">
                    <i onClick={navbarClick} className="box-shadow-menu"></i>
                </span>
                <ul ref={myRef} className="main-nav">
                    <li className="nav-links">View</li>
                    <li className="nav-links">Schedule new</li>
                    <li className="nav-links">Participation history</li>
                </ul>
            </div>
        </nav>)
}

export default Header