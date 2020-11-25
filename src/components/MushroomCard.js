import React from 'react'


class MushroomCard extends React.Component {

  renderEdibility = () => {
    switch (this.props.edibility) {
      case "edible": return (
      <span><i className="icon smile outline" />Edible</span>
      )
      case "not edible": return (
        <span><i className="icon meh outline" />Not Edible</span>
      )
      case "toxic": return (
      <span><i className="icon frown outline" />Toxic</span>
      )
    }
  }    

  render(){
    const {name, scientific_name, details, image_url} = this.props
    return(
      <div style={{marginBottom: "25px"}} className="ui column">
        <div className="ui card" onClick={() => this.props.getDetails(details) }>

          <div className="image">
            <img style={{width: "100%", height: "250px"}} src={image_url} />
          </div>

          <div className="content">
            <div className="header">
              {name}
            </div>
            <div className="meta text-wrap">
              <small>{scientific_name}</small>
            </div>
          </div>

          <div className="extra content">
       
          { this.renderEdibility() }
         
          </div>

        </div>
    </div>
    )
  }
}

export default MushroomCard
