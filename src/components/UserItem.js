import React from 'react'
import './user.css'
const UserItem = ({ user }) => {
  return (
    <>
      {/* <h5>{user.id}</h5>
      <img src={user.avatar} alt="avatar image" />
      <h4>{`${user.first_name}${user.last_name}`}</h4>
      <h4>{`${user.email}`}</h4> */}
      {/* style={{height:400,width:400}} */}
      <div className="card item"  >
        <p >{user.id}</p>
        <img src={user.avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{`${user.first_name}${user.last_name}`}</h5>
          <p className="card-text">{`${user.email}`}</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </>
  )
}

export default UserItem