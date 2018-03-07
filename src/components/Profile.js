import React, { Component } from 'react';
import Preferences from './Preferences';
import Matches from './Matches'
import { fetchUser } from '../actions/users'

import { connect } from 'react-redux'

import '../styles/Profile.css'

class Profile extends Component {

  componentWillMount() {
    this.props.fetchUser(this.props.match.params.id)
  }

  render() {
    //const {user} = this.props.info
    if (!this.props.user) return null
    return (
      <div className="Profile">
      {console.log(this.props)}
        <h2>Profile</h2>
        <div className="bio">

          <div className="bio-photo">
            <img src="" alt="profile"/>
          </div>

          <div className="bio-details">
            <p>Username: { this.props.user.info.username } </p>
            <p>Email: { this.props.user.info.email } </p>
            <p>Location: { this.props.user.info.location } </p>
            <p>Age: { this.props.user.info.age }</p>


          </div>

        </div>

        <Matches />

        <Preferences />


      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.user
  }
}


export default connect(mapStateToProps, { fetchUser })(Profile)
