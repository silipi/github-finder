import React from 'react'

const UserItem = (props) => {
  return (
    <div className='card shadow d-flex align-items-center justify-content-center' style={{width: '15rem'}}>
      <img src={props.avatar_url} alt={`Avatar do usuário '${props.login}'`} className='card-img-top rounded-circle my-3' style={{width: '80px'}} />

      <div style={{height: '2px', width: '100%', backgroundColor: '#eee'}}></div>

      <div className='card-body'>
        <h5 className='card-title text-center'>{props.login}</h5>
        <a className='btn btn-info btn-sm' href={props.html_url} target='_blank' rel="noopener noreferrer">Acesso ao perfil</a>
      </div>
    </div>
  )
}

export default UserItem

