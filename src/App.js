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
import './App.css'
import ErrorBoundry from  './ErrorBoundry';

class App extends React.Component {
	constructor(){
    super();
    this.state = 
    {
      robots: [],
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
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>  response.json())
      .then(users=> this.setState({robots:users}));
  }
  render(){
    let filteredRobots = this.state.robots.filter(item => 
      item.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
    if (this.state.robots.length === 0){
      return <h1 className='tc'>Loading...</h1>
    }
    else{
      return (
      <div className = 'tc'>
        <h1 className= 'f1'>RoboFriends</h1>
        <AddRobot  onAddRobot={this.addRobot} />
        <SearchBox searchChange={this.onSearchChange}/>
        <ErrorBoundry>
          <CardList robots={filteredRobots}/>
        </ErrorBoundry>
      </div>
    );
    }
    
  }
}

export default App;
