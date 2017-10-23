import React, { Component } from 'react'

export default class extends Component {

  state = {
    senators: [],
  }


  getSenators = async () => {
    const results = await fetch('https://www.govtrack.us/api/v2/role?current=true&role_type=senator')
    const { objects } = await results.json()
    this.setState({ senators: objects })
  }

  componentDidMount() {
    this.getSenators()
  }


  render() {

    const { senators } = this.state
    return (
      <div>
        {senators.map(s => (
            <div key={s.person.cspanid}>
              {s.person.name}
            </div>
          ),
        )}
      </div>
    )
  }
}