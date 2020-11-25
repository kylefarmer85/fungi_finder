import React from 'react'
import MushroomCard from '../components/MushroomCard'


class MushroomsContainer extends React.Component {

  renderMushrooms = () => {
    return this.props.mushrooms.map((mushroom, i) => {
      return <MushroomCard {...mushroom} key={i} getDetails={this.props.getDetails} />
    })
  }

  render(){
    return(
      <div>
				 <div className="ui four column grid">
					<div className="row">
            {this.renderMushrooms()}
					</div>
  	  	</div>
			</div>
    )
  }
}

export default MushroomsContainer;
