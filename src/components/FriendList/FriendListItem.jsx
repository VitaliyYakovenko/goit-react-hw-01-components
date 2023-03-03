import PropTypes from 'prop-types';
import css from './Friend.module.css'


export default function FriendListItem({ friends }) {
    return (friends.map(friend => (
        <li className={css.friend__item} key={friend.id}>
            <span
                className={friend.isOnline ? `${css.isOnline}` : `${css.isOfline}`}>{friend.isOnline}</span>
            <img className={css.friend__avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
        </li>
    )))
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name : PropTypes.string.isRequired,
    }))
    
}