import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import List from "./List";
import Task from "./Task";
import { Grid } from '@material-ui/core';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };

    this.delete = this.delete.bind(this)
  }

  render() {
    return (
      <div id="App">
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List 
          items={this.state.items} 
          delete = {this.delete}
        />
      </div>
    );
  }

  onChange = event => {
    this.setState({ term: event.target.value });
  };

  delete(item) {
    var new_items = [];
    var index = this.state.items.indexOf(item);
    var i;
    for (i = 0; i < this.state.items.length; i++) {
      if (i != index) {
        new_items.push(this.state.items[i])
      }
    }
    this.setState({ 
      items: new_items
    })
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };
}
