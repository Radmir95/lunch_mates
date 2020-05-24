import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.navbarClick = this.navbarClick.bind(this);
    this.myRef = React.createRef();
  }

  navbarClick(){
    console.log(this.myRef.current.classList.toggle('active'));
  }

  render(){
    return (
      <nav className="navbar">
        <span className="navbar-toggle">
        <i onClick={this.navbarClick} className="box-shadow-menu"></i>
        </span>
    <a className="logo">Lunch Mates</a>
    <ul ref={this.myRef} className="main-nav">
      <li>
        <a className="nav-links">View</a>
      </li>
      <li>
        <a className="nav-links">Schedule new</a>
      </li>
      <li>
        <a className="nav-links">Participation history</a>
      </li>
    </ul>
  </nav>
   )
  }

}

export default App;
