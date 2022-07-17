import React, { useState } from 'react';
import UserForm from './Components/Users/UserForm';
import UsersList from './Components/Users/UsersList';

let users = [];

function App() {
  const [currUsers, setCurrUsers] = useState(users);
  const onAddingNewUser = (user) => {
    setCurrUsers(prevUsers => {
      return [user, ...prevUsers];
    })
  }
  return (
    <React.Fragment>
      <UserForm onAddUser={onAddingNewUser}/>
      <UsersList users={currUsers}/>
    </React.Fragment>
  );
}

export default App;
