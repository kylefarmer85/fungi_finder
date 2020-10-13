import React from 'react'


class MushroomCard extends React.Component {

  render(){
    return(
      <div style={{marginBottom: "25px"}} className="ui column">
        <div className="ui card">

          <div className="image">
            <img style={{width: "100%", height: "250px"}} src={/* mushroom source here */} />
          </div>

          <div className="content">
            <div className="header">
              {/* mushroom name here */}
            </div>
            <div className="meta text-wrap">
              <small>{/* mushroom scientific name here */}</small>
            </div>
          </div>

          <div className="extra content">
            <span><i className="icon smile outline" />Edible</span>
            <span><i className="icon meh outline" />Not Edible</span>
            <span><i className="icon frown outline" />Toxic</span>
          </div>

        </div>
    </div>
    )
  }
}

export default MushroomCard
