import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard'
import Showcase from './showcase'


class MainFrame extends React.Component {

  constructor(props) {
    super(props)

    this.renderShowcase = this.renderShowcase.bind(this)
    this.renderDashboard = this.renderDashboard.bind(this)

    this.state = {
      show: <Dashboard renderShowcase={this.renderShowcase} />
    }
  }

  renderShowcase(resource) {
    this.setState(
      {
        show: <Showcase resource={resource.toLowerCase()} renderDashboard={this.renderDashboard} />
      }
    )
  }

  renderDashboard() {
    this.setState(
      {
        show: <Dashboard renderShowcase={this.renderShowcase} />
      }
    )
  }

  render() {
    return (
      <div>
        <div> {this.state.show} </div>
      </div>
    )
  }

}

export default MainFrame