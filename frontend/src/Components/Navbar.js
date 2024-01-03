import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  let location = useLocation()
  const navigator = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigator('/login')
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iNotebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === '/' ? 'active' : ''
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === '/about' ? 'active' : ''
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem('token') ? (
              <form className="d-flex justify-content-end">
                <Link
                  className="btn btn-primary mx-2"
                  style={{ marginLeft: 'auto' }}
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary ml-2"
                  to="/signup"
                  role="button"
                >
                  Sign Up
                </Link>
              </form>
            ) : (
              <div className="d-flex justify-content-end">
                {' '}
                <Link
                  className="btn btn-primary ml-2"
                  role="button"
                  onClick={handleLogout}
                  to="/login"
                >
                  Log Out
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
