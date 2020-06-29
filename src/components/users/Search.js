import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
  state = {
    text: ''
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  }

  changeHandler = e => this.setState({[e.target.name]: e.target.value});
  
  submitHandler = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Digite algo para pesquisar!', 'warning')
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({text: ''});
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler} className='form-group'>
          <input className='mb-3 form-control' placeholder='Usuário do Github' name='text' type='text' value={this.state.text} onChange={this.changeHandler}/>
          <div className='d-flex justify-content-center'>
            <button type='submit' className='mx-3 btn btn-primary d-inline' value='Pesquisar'>Pesquisar</button>
            <button className='mx-3 btn btn-info d-inline' onClick={this.props.clearUsers}>Limpar</button>
          </div>
          
        </form>
        
      </div>
    )
  }
}

export default Search
