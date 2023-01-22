import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserCard from '../Cards/profile';

function Discover() {
  const [users, setUsers] = useState([]);
  let imageURL
  useEffect(() => {
    // this is suppose to be a thunk, convert later
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);

    }

    fetchData();

  }, []);

  const userComponents = users?.map((user) => {
    return (
      <li key={user.id}>
        <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
      </li>
    );
  });
console.log(users[0])
  return (
    <>
      <h1>User List: </h1>
      {<UserCard match={users[0]}/>}
      {/* <img src={imageURL}  /> */}
      {/* <ul>{userComponents}</ul> */}
    </>
  );
}

export default Discover;
