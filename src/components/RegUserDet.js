import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserDetails = ({ user }) => {
  const { dispatch } = useContext(UserContext);
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_USER', id: user.id })}>
      <div className="name">{user.name}</div>
    </li>
  );
}

export default UserDetails;