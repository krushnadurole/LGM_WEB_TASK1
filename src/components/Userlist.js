import React from 'react'
import UserItem from './UserItem'
import './userlist.css'
const Userlist = ({ userdata }) => {
  return (
    <>

      <div className='Hello'>
        {userdata.map((user) => <UserItem key={user.id} user={user} />)}
      </div>

    </>
  )
}

export default Userlist