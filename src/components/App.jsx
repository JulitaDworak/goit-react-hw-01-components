import { FriendList } from "./FriendList/FriendList";
import { Profile } from "./Profile/Profile";
import user from './Profile/user.json';
import { Statistics } from "./Statistics/Statistics";
import data from './Statistics/data.json';
import friends from "./FriendList/friends.json"
import {Transaction} from './Transaction/Transaction'
import transactions from './Transaction/transactions'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection:"column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginTop:1000
      }}
    >

  <Profile 
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics 
stats = {data}
      />
      <FriendList 
      friends = {friends}/>
    <Transaction 
    title = 'Data'
    transactions={transactions}
    />
    </div>
  );
};
