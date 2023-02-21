import React from 'react';
import './App.css';
import Header from './Components/Header';
import Input from './Components/Input';
import Button from './Components/Button';

class App extends React.Component{

  // constructor
  constructor(props) {
    // call React.Component constructor to set foundation before adding App class specific properties and methods
    super(props);

    // initialize the state object (state is managed within the Component)
    this.state = {
      game: 'on'
    };
  }

  // event handler for Button onClick event
  submitGuess() {

    let guess = document.querySelector('input').value;

    // log user input to console
    console.log(guess);
  }

  // render method (only required method in a class Component)
  render() {

    // return JSX
    return (
      <div id='app-body'>
        <Header title='Number Guessing Game'/>
        <Input type='number' min='0' max='100' />
        <Button  type='button' text='Submit' onClick={this.submitGuess}/>
      </div>
    );
  }

}

export default App;
