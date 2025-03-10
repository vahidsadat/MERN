import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id:'u1',
      name:'Vahid', 
      image : 'https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ' , 
      places: 3
    }
  ];
  return <UsersList items={USERS}/>;
};

export default Users;
