import React from 'react';
import './App.css';
import UserList from './UserList';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Discover Some Awesome Users</h1>
      </header>
      <div className="user-list-container">
        <UserList /> {/*this is how to show the list of users on the website*/}
      </div>
    </div>
  );
}

export default App;
