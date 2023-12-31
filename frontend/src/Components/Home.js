import React from 'react'

const Home = () => {
  return (
    <div className="container my-3">
      <h2>Add Note</h2>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput2" className="form-label">
          Example textarea
        </label>
        <input className="form-control" id="exampleFormControlInput2"></input>
      </div>
      <button type="button" class="btn btn-primary">
        Submit
      </button>
      <h2>Notes</h2>
    </div>
  )
}

export default Home
