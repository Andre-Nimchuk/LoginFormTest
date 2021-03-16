import React from 'react';
import Navbar from './components/Navbar';
import UserContextProvider from './contexts/UserContext';
import UserList from './components/UserList';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Navbar />
        <UserList />
        <LoginForm />
      </UserContextProvider>
    </div>
  );
}

export default App;
