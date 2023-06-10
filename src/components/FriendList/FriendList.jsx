import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <>
      <div className={css.friendsItem}>
        <ul className={css.friendList}>
          {friends.map(friend => (
            <li className={css.item}>
              <span className={friend.isOnline ? css.online : css.offline}>
                {friend.isOnline}{' '}
              </span>
              <img class="avatar" src={friend.avatar} alt={friends.name} />
              <p class="name">{friend.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
