import React from 'react';


class Home extends React.Component {
  state = {
      name: "",
      id: ""
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleIDChange = (event) => {
    this.setState({id: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createParcel(this.state.name, this.state.id)
  }

  render () {
    return (<form onSubmit={this.handleSubmit}>
      <h3>Create a new Parcel </h3>
        <label>
          Name:
        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <label>
        ID:
        <input type="integer" value={this.state.id} onChange={this.handleIDChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>)
  }
}

export default Home
