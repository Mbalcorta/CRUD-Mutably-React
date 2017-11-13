import React from 'react';
import ReactDOM from 'react-dom';
// The dashboard will pass info to construct the url to the showcase page 

let resources = {
  books: {
    
  },

}

class Dashboard extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>This is the Dashboard</h1>
        <button>Books</button>
        <button>Pokemon</button>
        <button>Albums</button>
        </div>
    )
  }
}

export default Dashboard

