import React, { Component } from 'react';
import './App.css';
import Visualization from './Visualization'
import CreateTable from './CreateTable'
// import AddRelations from './AddRelations'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grabTable: false,
      data: {}
    }
    this.renderTable = this.renderTable.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  renderTable = () => {
    if (!this.state.grabTable) return '';

    return (
      <CreateTable />
    );
  }

  handleButtonClick = () => {
    this.setState({ grabTable: true });
  }

  render() {
    return (
      <div className="App">
        <Visualization
         handleButtonClick = {this.handleButtonClick}
         renderTable = {this.renderTable} />
      </div>
    );
  }
}

export default App;
