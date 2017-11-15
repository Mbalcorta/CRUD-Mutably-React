import React from 'react';
import ReactDOM from 'react-dom';

class Dashboard extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>This is the Dashboard</h1>
        <button onClick={() => this.props.renderShowcase('books')}>Books</button>
        <button onClick={() => this.props.renderShowcase('pokemon')}>Pokemon</button>
        <button onClick={() => this.props.renderShowcase('albums')}>Albums</button>
      </div>
    )
  }
}

export default Dashboard

