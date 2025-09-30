import React from 'react';
import DataSource from './DataSource';
import LiveOrderList from './LiveOrderList';
import NewsletterSubscribers from './NewsletterSubscribers';

function App() {
  const addNewUser = () => {
    const newUser = {
      id: Date.now(),
      email: `user${Date.now()}@email.com`
    };
    DataSource.addUser(newUser);
  };

  const addNewOrder = () => {
    const newOrder = {
      id: Date.now(),
      name: `Order ${Date.now()}`
    };
    DataSource.addOrder(newOrder);
  };

  return (
    <div style={{'padding' : '20px'}}>
      <h1>Lemon Restaurant Dashboard</h1>
      <div>
        <button onClick={addNewUser}>Add New User</button>
        <button onClick={addNewOrder}>Add New Order</button>
      </div>
      <div>
        <LiveOrderList />
        <NewsletterSubscribers />
      </div>
    </div>
  );
}

export default App
