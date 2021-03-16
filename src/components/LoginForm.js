import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

const LoginForm = () => {
  const { dispatch } = useContext(UserContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_USER', user: { name, password }});
    setName('');
    setPassword('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="User Name" value={name}
        onChange={(e) => setName(e.target.value)} required />
      <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} required />
      <input type="submit" value="Register" />
    </form>
  );
}
 
export default LoginForm;