import React from 'react';
import './AddRobot.css';

class AddRobot extends React.Component {
  constructor() {
    super();
    this.state = {
      showFields: false,
      inputs: {
        name: '', 
        email: '', 
        username: ''
      }
    }
  }
handleAddClick = () => {
   
    if (this.state.showFields) {
         if (this.state.inputs.name === '' || this.state.inputs.email === '' || this.state.inputs.username === '') {
        alert('All fields must be filled out before submitting');
        return;
    }
        this.props.onAddRobot(this.state.inputs);
        this.setState({ inputs: {name: '', email: '', username: ''} });
    }
    this.setState(prevState => ({ showFields: !prevState.showFields }));
};

  // handleAddClick = () => {
  //   if(this.state.showFields) {
  //     this.props.onAddRobot(this.state.inputs);
  //     this.setState({ inputs: {name: '', email: '', username: ''} });
  //   }
  //   this.setState(prevState => ({ showFields: !prevState.showFields }));
  // };

  handleInputChange = (e) => {
    this.setState({ inputs: {...this.state.inputs, [e.target.name]: e.target.value} });
  };

  handleCancelClick = () => {
    this.setState({ inputs: {name: '', email: '', username: ''}, showFields: false });
  };

  render() {
    return (
      <div className = 'tc'>
       {/*<button onClick={this.handleAddClick}>{this.state.showFields} {'Add new robots'} </button>*/}

        <button onClick={this.handleAddClick}>{this.state.showFields ? 'Submit' : 'Add new robots'}</button>
        {this.state.showFields && (
          <div>
            <form onSubmit={(e) => {e.preventDefault(); this.handleAddClick();}}>
              <label>
                Name:
                <input className="robot-input" type="text" name="name" value={this.state.inputs.name} onChange={this.handleInputChange} />
              </label>
              <label>
                Email:
                <input className="robot-input" type="text" name="email" value={this.state.inputs.email} onChange={this.handleInputChange} />
              </label>
              <label>
                Username:
                <input className="robot-input" type="text" name="username" value={this.state.inputs.username} onChange={this.handleInputChange} />
              </label>
             
            </form>
            <button onClick={this.handleCancelClick}>X</button>
          </div>
        )}
              
      </div>
    );
  }
};

export default AddRobot;
