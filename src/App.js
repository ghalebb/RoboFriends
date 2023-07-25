// import React from 'react';
// import CardList from './CardList';
// import SearchBox from './SearchBox';
// import {robots} from './robots';

// class App extends React.Component {
// 	constructor(){
// 	super();
// 	this.state = 
// 		{
// 		robots: robots,
// 		searchfield:''
// 		}
// 	}
// 	onSearchChange= (event)=>{
// 		this.setState({searchfield:event.target.value});
		
// 	}


// 	render(){
// 		let filteredRobots = this.state.robots.filter(item => 
// 			item.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));

// 		return (
// 			<div className = 'tc'>
// 			<h1>RoboFriends</h1>
// 			<SearchBox searchChange={this.onSearchChange}/>
// 			<CardList robots={filteredRobots}/>
// 			</div>
// 		);
// 	}
// }
// export default App;

import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import AddRobot from './AddRobot';
import {robots} from './robots';
import './App.css'

class App extends React.Component {
	constructor(){
    super();
    this.state = 
    {
      robots: robots,
      searchfield:''
    }
  }
  
  onSearchChange = (event)=>{
    this.setState({searchfield:event.target.value});
  }

  addRobot = (newRobot) => {
  	 newRobot.id = this.state.robots.length+1;
    this.setState(prevState => ({ robots: [...prevState.robots, newRobot] }));
  }

  render(){
    let filteredRobots = this.state.robots.filter(item => 
      item.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));

    return (
      <div className = 'tc'>
        <h1 className= 'f1'>RoboFriends</h1>
        <AddRobot  onAddRobot={this.addRobot} />
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;
