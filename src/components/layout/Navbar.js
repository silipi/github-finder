import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar nav-light bg-dark py-3 mb-4">        
      <a className='navbar-brand text-white d-flex align-items-center' href='/'>
        <i className="fab fa-github-alt mx-3" style={{fontSize: 30}}/>
        Github Profile Finder
      </a>
    </nav>
  )
}

export default Navbar


