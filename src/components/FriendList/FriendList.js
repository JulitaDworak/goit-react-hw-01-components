export const FriendList = ({friends}) => {
    return (
        <>
<ul class="friend-list">

{friends.map(friend => (
    <li class="item">
    <span class="status">{friend.isOnline} </span>
    <img class="avatar" src={friend.avatar} alt={friends.name} width="48" />
    <p class="name">{friend.name}</p>
  </li>
))}

</ul>
        </>
    )
}