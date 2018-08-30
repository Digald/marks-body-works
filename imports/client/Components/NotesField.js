import React, { Component } from "react";

class NotesField extends Component {
  render() {
    return (
      <form className="NotesField">
        <textarea defaultValue={`${this.props.day} notes`} />
      </form>
    );
  }
}

export default NotesField;
