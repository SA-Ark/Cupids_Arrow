import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../store/details';
function User() {
  const dispatch = useDispatch()
  const [user, setUser] = useState(0);
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    dispatch(fetchDetails(userId))
    
    setUser(user+1)
    // (async () => {
    //   const response = await fetch(`/api/users/${userId}`);
    //   const user = await response.json();
    //   setUser(user);
    //   console.log(user)
    // })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
    </ul>
  );
}
export default User;
