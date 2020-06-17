import React, {Component} from 'react';
import './App.css';

class LunchModel{
  constructor(place, address, datetime, participants){
    this.place = place;
    this.address = address;
    this.datetime = datetime;
    this.participants = participants;
  }
  place
  address
  datetime
  participants
}

class Lunchs extends Component {
  constructor(props){
    super(props);
    this.generateLunches();
    this.expandOrCloseParticipants.bind(this);
  }
  lunchs

  generateLunches(){
    this.lunchs = [
      new LunchModel("Place1", "Address1", "Datetime1", ["Viktor", "Viktor1"]),
      new LunchModel("Place2", "Address2", "Datetim2", ["Ahmed", "Ahmed1"])
    ];
  }

  expandOrCloseParticipants(target){
    let content = target.parentElement.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }

  render(){
    return (
      this.lunchs.map(lunch =>{
        return (
          <ul className="lunch">
            <li>{lunch.place}</li>
            <li>{lunch.address}</li>
            <li>{lunch.datetime}</li>
            <li><text onClick={ e => this.expandOrCloseParticipants(e.target)}>Participants</text> Count: {lunch.participants.length}</li>
            <li class="content"><text>Hello World!</text></li>
          </ul>
        )
      })
    )
  }
}

class App extends Component{
  constructor(props) {
    super(props);
    this.navbarClick = this.navbarClick.bind(this);
    this.myRef = React.createRef();
  }

  navbarClick(){
    this.myRef.current.classList.toggle("active");
  }

  render(){
    return (
      <div>
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
        </nav>
        <div className="main">
          <Lunchs/>
        </div>
      </div>
   )
  }
}

export default App;
