import React from 'react'

import '../css/dashboard.css';

export default function Dashboard() {
  return (
    <div className="container">
        <h3>Hello from Dashboard</h3>
        <h6>Here goes all the Content for the Dashboard section</h6>
        <div className="row">
      <div className="col s12">
        <h3>In this Section are the columns displayed</h3>
      </div>
      <div className="col s6">
      <div>
        <p>Hello from the first half of the column</p>
      </div>
      <div>
          <h4>Overview</h4>
        </div>
      </div>
      <div className="col s6">
        <div>
          <p>Hello from the second half of the column</p>
        </div>
        <div>
          <h4>Statistics</h4>
        </div>
      </div>
    </div>
    <div className="fixed-action-btn">
      <a className="btn-floating btn-large blue">
        <i className="material-icons">add</i>
      </a>
    </div>
      </div>
  )
}
