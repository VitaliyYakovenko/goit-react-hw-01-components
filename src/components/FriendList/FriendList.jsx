import FriendListItem from './FriendListItem';
import css from './Friend.module.css'

export default function FriendList({friends}) {
    return (
        <ul className={css.friends}>
            <FriendListItem friends={friends}/>
       </ul>
   )
}



