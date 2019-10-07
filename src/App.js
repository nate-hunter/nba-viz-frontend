import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import DataContainer from './components/DataContainer'
import ListTeams from './components/ListTeams';

class App extends React.Component {

  state = {
    data: []
}

componentDidMount(){
    fetch(`http://localhost:8080/api/v1/teams`)  
    .then(resp => resp.json())
    .then(data => {
        this.setState({
            data
        })
    })  
}

render(){
    const { data } = this.state;

    return (
      <Router>
          <NavBar />
          <DataContainer data={data} />
      </Router>
    );
  }
}

export default App;
