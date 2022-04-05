import React from 'react'
const Navbar = ({getuserdata}) => {
  return (
    <>
    <h1>User Info : </h1>
    <button onClick={()=>{getuserdata(1)}}>Get users</button>;
    </>
  )
}

export default Navbar