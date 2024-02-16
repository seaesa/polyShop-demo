import React from 'react'
import './user-info.scss'

const UserInfo = ({ user }) => {
  return (
    <div className='user-info'>
      <div className="user-info__img">
        <img style={{ height: '100%', objectFit: 'contain' }} src={user.img} alt="" />
      </div>
      <div className="user-info__name">
        <span>{user.name}</span>
      </div>
    </div>
  )
}

export default UserInfo
