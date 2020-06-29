import './styles.css'

import React, { Component } from 'react'

import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'

import Axios from 'axios'

export default class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  infoApp = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`

  searchUsersHandler = async text => {
    this.setState({loading: true})
    const res = await Axios.get(`https://api.github.com/search/users?${this.infoApp}&q=${text}`)
    console.log(res.data.items)
    this.setState({users: res.data.items, loading: false})
  };

  clearUsersHandler = (e) => {
    e.preventDefault();
    this.setState({users: [], loading: false});
  }

  setAlert = (msg, type) => {
    this.setState({alert: {msg: msg, type: type}});
    setTimeout(() => {
      this.setState({alert: null})
    }, 3000)
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className='container'>
          <Alert alert={this.state.alert}/>
          <Search searchUsers={this.searchUsersHandler} clearUsers={this.clearUsersHandler} setAlert={this.setAlert}/>
          <Users loading={this.state.loading} users={this.state.users}/>  
        </div>
        
      </div>
    )
  }
}
