import React from 'react'

class Pet extends React.Component {
  
  constructor(){
    super()
    this.state = {
      isAdopted: false
    }
  }
  genderSymbol = () => {
    if (this.props.pet.gender === 'male') {
      return '♂'
    } else if (this.props.pet.gender === 'female') {
      return '♀'
    }
  }

  adoptButton = () => {
    if (this.props.pet.isAdopted === true) {
      return <button className="ui disabled button">Already adopted</button>
    } else if (this.props.pet.isAdopted === false) {
      return <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.genderSymbol()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">{this.adoptButton()}</div>
      </div>
    )
  }
}

export default Pet
