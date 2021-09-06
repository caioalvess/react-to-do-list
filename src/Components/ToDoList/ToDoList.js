import React, { Component } from "react";

export class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefa: [],
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.addItem}>
        <input
          type="text"
          placeholder="Nova Tarefa"
          name="tarefa"
          value={this.state.tarefa}
          onChange={(e) => this.setState({ tarefa: e.target.value })}
          ref={(e) => (this._tarefaInput = e)}
        />
        <button type="submit">Adicionar</button>
      </form>
    );
  }
}

export default ToDoList;
