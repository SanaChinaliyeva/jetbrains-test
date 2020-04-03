import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Missions from "../components/Missions/Missions";

class  App extends Component {
  state = {
    missions: []
  };
  getMissionsList = () => {
    let missions = [...this.state.missions];
    axios.get().then(response => {
      return Promise.all(response.data.map(mission => {
        missions.push(mission);
        this.setState({missions});
        return mission;
      }));
    }).catch(error => {
      console.log(error);
    });
  };
  componentDidMount () {
    this.getMissionsList();
  }

  render() {
    return (
        <div className="App">
         <Missions missions={this.state.missions} />
        </div>
    );
  }
}

export default App;
