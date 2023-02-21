import React from 'react';
import './App.css';
import Header from './Components/Header';
import Input from './Components/Input';
import Button from './Components/Button';

class App extends React.Component{

  // render method (only required method in a class Component)
  render() {

    // return JSX
    return (
      <div id='app-body'>
        <Header title='Number Guessing Game'/>
        <Input type='number' min='0' max='100' />
        <Button  type='button' text='Submit' />
      </div>
    );
  }

}

export default App;
