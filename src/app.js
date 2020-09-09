import React from 'react';
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistics.json';
import friends from './components/FriendList/friends.json';
import Transactions from './components/TransactionHistory/Transactions.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendListItem from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendListItem friends={friends} />
      <TransactionHistory Transactions={Transactions} />
    </div>
  );
};
export default App;
