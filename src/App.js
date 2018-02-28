import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import createReactContext from 'create-react-context';

const MyContext = createReactContext();

class ContextProvider extends Component {
  state = { mood: 'happy'};
  
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        actions: {
          flick: () => this.setState({mood: 'annoyed'})
        }
      }}>
        { this.props.children }
      </MyContext.Provider>
    );
  }
}

const FirstComponent = () => {
  return (
    <div>
      <SecondComponent />
    </div>
  )
}

const SecondComponent = () => {
  return (
    <MyContext.Consumer>
    {
      ({state, actions}) => (
        <div>
          <p>Mood: { state.mood }</p>
          <div>
            <button onClick={actions.flick}>Flick!</button>
          </div>
        </div>
      )
    }
    </MyContext.Consumer>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContextProvider>
          <FirstComponent />
        </ContextProvider>
      </div>
    );
  }
}

export default App;
