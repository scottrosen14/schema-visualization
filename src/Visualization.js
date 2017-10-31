import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App'

class Visualization extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleButtonClick}> Create table </button>
                <button> Add relations </button>
                {this.props.renderTable()}
            </div>
        )
    }
}
export default Visualization;