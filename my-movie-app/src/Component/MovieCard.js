import React, { Component } from 'react'
import Review from './Review'

export default class MovieCard extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{this.props.title}</h2>
          <img className="image"src={this.props.image}/>
          <p className="card-text">{this.props.synopsis}</p>
          <Review />
        </div>
      </div>  
    )
  }
}
