

import React from 'react'

function User(props) {
  return (
    <div>
      <div className="img-container">
        <img src={props.data.img_path} alt="" />
      </div>
      <div className="description">
        <p>Name : <strong>{props.data.name}</strong> </p>
        <p>Age :  <strong>{props.data.age}</strong></p> 
        <p>Skills : <strong> {props.data.skills}</strong></p> 
        <div className='btn'>Ajouter</div>
      </div>
    </div>
  )
}

export default User