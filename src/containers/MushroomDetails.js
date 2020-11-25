import React from 'react'

class MushroomDetails extends React.Component {

  renderDetails = () => {
    if (this.props.details)
    return this.props.details
  }

  render(){
    return(
      <div className="ui segment inverted blue mush-details">
        <h1 style={{textAlign: "center"}}>Welcome to the Mushroom Page!</h1>
        <p> {this.renderDetails()} </p>
      </div>
    )
  }
}

export default MushroomDetails
