

import React from 'react'

function User(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.data.img_path} alt="" />
      </div>
      <div className="description">
        <p>Name : <strong>{props.data.name}</strong> </p>
        <p>Username :  <strong>{props.data.username}</strong> </p> 
        <p>Email : <strong> {props.data.email}</strong></p> 
        <div className='btn'>Ajouter</div>
      </div>
    </div>
  )
}

export default User