import React, { Component } from 'react';
import './user-list-area.css'

class UserListArea extends Component {
  constructor(props){
    super(props)
  }

  renderUsers = () => {
    if (this.props.users.length == 0 && this.props.search.length > 0){
      return (
        <div>No Users Found</div>
      )
    }

    return (
      this.props.users.map((user, index) =>
        <li className="flex-item" key={index}>
          <button className="button" onClick={() => this.props.setUserImages(user.photos)}>{user.name}</button>
        </li>
    ))
  }

  render() {
    return (
      <ul className="flex-container column">
        <li className="flex-item">
          <input
            value={this.props.search}
            onChange={this.props.handleChange}
          />
        </li>
        {this.renderUsers()}
      </ul>
    )
  }
}

export default UserListArea
