import React from 'react'
import importedMushroomData from '../mushrooms_data'
import MushroomsContainer from './MushroomsContainer'
import MushroomDetails from './MushroomDetails'

class MushroomsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      mushrooms: importedMushroomData,
      details: undefined
    }
  }

  getDetails = (details) => {
    this.setState({
      details: details
    })
  }


  render(){
    return(
      <div>
        <MushroomDetails details={this.state.details} />
        <MushroomsContainer getDetails={this.getDetails} mushrooms={this.state.mushrooms} />
      </div>
    )
  }
}

export default MushroomsPage
