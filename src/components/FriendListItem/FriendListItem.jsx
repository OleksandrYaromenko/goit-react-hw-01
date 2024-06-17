import clsx from "clsx";
import css from "./FriendListItem.module.css";
export default function FriendListItem({ avatar, name, isOnline }) {
  {
    const statusClasses = clsx(css.p, isOnline ? css.isOnline : css.isOffline);

    return (
      <div className={css.div}>
        <img src={avatar} alt={name} width="80px" />
        <p>{name}</p>
        <p className={statusClasses}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    );
  }
}
