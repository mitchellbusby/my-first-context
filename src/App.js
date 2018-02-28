import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import createReactContext from 'create-react-context';

const MyContext = createReactContext();

class ContextProvider extends Component {
  state = { foo: 'bar '};
  
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        actions: {
          flick: () => this.setState({foo: 'zar'})
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
          <p>{ state.foo }</p>
          <div>
            <button onClick={actions.flick}>Change it!</button>
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
        <FirstComponent />
        <FirstComponent />
          <FirstComponent />
        </ContextProvider>
        <ContextProvider>
          <FirstComponent />
        </ContextProvider>
      </div>
    );
  }
}

export default App;
