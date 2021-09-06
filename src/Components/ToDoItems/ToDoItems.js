import React, { Component } from "react";

export class ToDoItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.delete = this.delete.bind(this);
  }
  delete(key) {
    this.props.delete(key);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.lista.map((item) => {
            return (
              <li key={item.key}>
                {item.text}
                <button onClick={() => this.delete(item.key)}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ToDoItems;
