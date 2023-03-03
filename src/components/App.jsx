
import Profile from "./Profile/Profile";
import user from "./Profile/user"

import Statistics from "./Statistics/Statistics";
import data from "./Statistics/data"

import FriendList from "./FriendList/FriendList";
import friends from "./FriendList/friends"

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions";



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        userName={user.username}
        tage={user.tag}
        location={user.location}
        avatar={user.avatar}
        statsFollowers={user.stats.followers}
        statsViews={user.stats.views}
        statsLikes = {user.stats.likes}
      />

      <Statistics titel="Upload stats" stats={data} />
      <Statistics stats={data} />
      
      <FriendList
        friends={friends}
      />

      <TransactionHistory
        transactions={transactions}
      />
    </div>
  );
};



