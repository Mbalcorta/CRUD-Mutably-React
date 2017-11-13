import React from 'react';
import ReactDOM from 'react-dom';


class Showcase extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div><h1> This is the Showcase showing {this.props.resource} </h1></div>
    )
  }

}

export default Showcase