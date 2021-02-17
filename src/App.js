import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
  
  state = {
    counters: [
        {id: 1, value: 1},
        {id: 2, value: 4},
        {id: 3, value: 9},
        {id: 4, value: 0},
        {id: 5, value: 1},
        {id: 6, value: -1}
    ]
  };
  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++; 
      this.setState({counters});
  }
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--; 
    this.setState({counters});
}
  handleDelete = counterID => {
      const counters = this.state.counters.filter(counter => counter.id !== counterID);
      this.setState({counters});
  };
  handleReset = () => {
      const counters = this.state.counters.map(counter => {
          counter.value = 0;
          return counter;
      });
      this.setState({counters});
  };
  render(){
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(counter => counter.value !==0).length} />
        <main className="container">
          <Counters onDecrement={this.handleDecrement} counters={this.state.counters} onDelete={this.handleDelete} onReset={this.handleReset} onIncrement={this.handleIncrement} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
