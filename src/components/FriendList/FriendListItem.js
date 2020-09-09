import React from 'react';
import PropTypes from 'prop-types';
import './FriendListItem.css';
const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span className={isOnline ? 'online' : 'offline'}></span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </>
);
FriendListItem.defaultProps = {
  avatar:
    'https://yt3.ggpht.com/a/AATXAJyxes0-A1lfzQ-7Eq5UOA8-9zluABdVkXxtzcgUZA=s900-c-k-c0xffffffff-no-rj-mo',
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
