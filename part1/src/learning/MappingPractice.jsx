import React from "react";

class MappingPractice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arr: props.arr };
  }

  render() {
    const arrNumbers = this.state.arr;
    const arrComponents = arrNumbers.map((n) => <li>{n ** 2}</li>);
    return (
      <div>
        <h2>List of things:</h2>
        <ul>{arrComponents}</ul>;
      </div>
    );
  }
}

export default MappingPractice;
