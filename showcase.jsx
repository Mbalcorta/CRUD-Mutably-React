import React from 'react';
import ReactDOM from 'react-dom';


class Showcase extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      resources: []
    }
  }

  componentWillMount() {
    fetch(`https://mutably.herokuapp.com/${this.props.resource}`)
    .then(res => {
      res.json()
      .then(resources => {
        // console.log(resources[`${this.props.resource}`])
        this.setState({
          resources: resources[`${this.props.resource}`]
        })
      })
    })
  }

  makeLi(resource) {

    let content = Object.keys(resource).slice(1, -1).map((key, i) => {
      return (
        <li key={i}>{`${key}: ${resource[key]}`}</li>
      )
    })
    
    return (
      <ul key={resource.id}>
        {content}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <h1>{this.props.resource}</h1>
          <ul>{this.state.resources.map(resource => this.makeLi(resource))}</ul>  
        <button onClick={() => this.props.renderDashboard()}>Go Back</button>
      </div>
    )
  }

}

export default Showcase