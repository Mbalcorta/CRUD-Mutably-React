import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard'
import Showcase from './showcase'

class MainFrame extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      show: <Dashboard />
    }
    
  }

  showDashboard() {
    this.setState = {
      show: <Dashboard />
    }
  }

  showShowcase(resource) {
    this.setState = {
      show: <Showcase resource = {resource} />
    }
  }

  render() {
    return (
      <div> { this.state.show } </div>
    )
  }
}

export default MainFrame