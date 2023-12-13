import React from 'react'
import Friend from './Friend'

const FriendsList = ({friends, onSelection}) => {
  return (
    <ul>
        {friends.map((friend) => (
            <Friend key={friend.id} friend={friend} onSelection={onSelection} />
        ))}
    </ul>
  )
}

export default FriendsList