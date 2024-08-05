import React, { useEffect, useState } from 'react'

function Home() {
  const [Users, setUsers] = useState([])
  
  useEffect(() =>{
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(users => setUsers(users))
    .catch(error => console.log(error))
    
  },[])
  
  const displayUsers = users.map(user => {
    return(
      <dive></dive>
    )
  })
  return(
    <>
    
    </>
  )
}

export default Home
