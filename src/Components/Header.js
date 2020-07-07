import React, {Component} from 'react'

class Header extends Component{
    constructor(props){
        super(props)
        this.navbarClick = this.navbarClick.bind(this)
        this.myRef = React.createRef()
    }
  
    navbarClick(){
        this.myRef.current.classList.toggle("active");
    }
  
    render(){
        return(
            <nav className="navbar">
                <span role="img" aria-label="hamburger" className="logo">Lunch Mates &#127828;</span>
                <div className="menu">
                    <span className="navbar-toggle">
                        <i onClick={this.navbarClick} className="box-shadow-menu"></i>
                    </span>
                    <ul ref={this.myRef} className="main-nav">
                        <li className="nav-links">View</li>
                        <li className="nav-links">Schedule new</li>
                        <li className="nav-links">Participation history</li>
                    </ul>
                </div>
            </nav>)
    }
  }

export default Header