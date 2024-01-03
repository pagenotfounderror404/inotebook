import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const [credentials, setCredential] = useState({ email: '', password: '' })
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const host = 'http://localhost:5000'
    try {
      const response = await axios.post(
        `${host}/api/v1/auth/login`,
        { email: credentials.email, password: credentials.password },
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      localStorage.setItem('token', response.data.authToken)
      navigate('/')
      props.showAlert('Logged in Successfully', 'success')
    } catch (error) {
      props.showAlert('Invalid Credentials', 'danger')
      console.error('Wrong login or password', error.message)
    }
  }
  const onChange = (e) => {
    setCredential({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <h2>Login to continue to iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your E-mail"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
            <button type="submit" className="btn btn-primary my-2">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
