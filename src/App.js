import React, { Component } from 'react';
import UserListArea from './UserListArea';
import PhotoGrid from './PhotoGrid'
import Footer from './Footer'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: "",
      users: [],
      userPhotos: [],
      clicked: false
    }
  }

  handleChange = e => {
    this.setState({ search: e.currentTarget.value})
    fetch(`https://api.unsplash.com/search/users?client_id=aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5&query=${e.currentTarget.value}`)
      .then(res => res.json())
      .then(data => this.setState({users: data.results}))
  }

  setUserImages = userPhotos => {
    this.setState({clicked: true})
    this.setState({ userPhotos })
  }

  render() {
    return (
      <div className="App">
        <UserListArea
          search={this.state.search}
          handleChange={this.handleChange}
          users={this.state.users}
          setUserImages={this.setUserImages}
        />
        <PhotoGrid
          clicked={this.state.clicked}
          userPhotos={this.state.userPhotos}
          search={this.state.search}
        />
        <Footer/>
      </div>
    )
  }

}

export default App;
