import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
  const [credentials, setCredential] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  })
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const host = 'http://localhost:5000'
    try {
      const { name, email, password } = credentials
      const response = await axios.post(
        `${host}/api/v1/auth/createuser`,
        { name, email, password },
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      localStorage.setItem('token', response.data.authToken)
      navigate('/')
      props.showAlert('Account Created Successfully', 'success')
    } catch (error) {
      console.error(error.message)
      props.showAlert('Invalid Details', 'danger')
    }
  }

  const onChange = (e) => {
    setCredential({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={onChange}
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={onChange}
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={onChange}
              name="password"
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              onChange={onChange}
              name="cpassword"
              minLength={5}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
