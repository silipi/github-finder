import React from 'react'

const Spinner = () => {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <div className="spinner-border" role="status">
        
      </div>
      <span className='ml-5' style={{fontSize: '1.4rem'}}>Carregando...</span>
    </div>
  )
}

export default Spinner
