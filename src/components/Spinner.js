import React, { Component } from 'react'
import loading from './loading.gif'
import './SpinnerCss.css';
function Spinner () {
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }

export default Spinner;