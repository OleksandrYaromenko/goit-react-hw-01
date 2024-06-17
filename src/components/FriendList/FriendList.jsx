import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={css.ul}>
      {friends.map((item) => (
        <li className={css.li} key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
