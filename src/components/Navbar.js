import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Navbar = () => {
  const { users } = useContext(UserContext);
  return (
    <div className="navbar">
      <h1>List Registered Users</h1>
      <p>Currently you have {users.length} registered users...</p>
    </div>
  );
}
 
export default Navbar;