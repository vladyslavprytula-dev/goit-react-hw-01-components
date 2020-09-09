import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './Friendlist.module.css';
const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={styles.item} key={id}>
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      </li>
    ))}
  </ul>
);

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
export default FriendList;
