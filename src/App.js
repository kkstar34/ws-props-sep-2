import React from 'react'
import './App.css';
import User from './User';


function App() {
  


  let users = [
  {id : 1, name : "Krouma idrissa", img_path : "https://gomycodelearndev.blob.core.windows.net/profiles/75d39dea-2a73-4c62-be71-2732efb24b1c-133333690764587011.jpg", age : 19, skills : "Python"},
  {id : 2, name : "Kouadio Flora", img_path : "https://gomycodelearndev.blob.core.windows.net/profiles/d387525e-f559-4029-b182-2bb37ea8e623-133388427996412652.jpeg", age : 22, skills : "Java"},
  {id : 3, name : "Abdoul Aziz", img_path : "https://gomycodelearndev.blob.core.windows.net/profiles/28b95197-98cb-41e5-ae07-095f11becf6c-133379117250513988.jpg", age : 23, skills : "PHP"},
  {id : 4, name : "Isaac",img_path : "https://gomycodelearndev.blob.core.windows.net/profiles/4807f629-7e08-423b-a5aa-59f87ba8f6ef-133384027876563417.jpeg", age : 24, skills : "Go"}
]


  return (
    <div className="main">
      {users.map((elt) => { return (
        <User data={elt}/>
      )})}
     
    </div>
  )
}

export default App