import css from "./Profile.module.css";
export default function Profile({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.profile}>
      <div className={css.conteiner}>
        <div className={css.profile}>
          <img className={css.img} src={avatar} alt="User avatar" width={200} />
          <p>{username}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>

        <ul className={css.ul}>
          <li className={css.li}>
            <span>Followers</span>
            <span>{followers}</span>
          </li>
          <li className={css.li}>
            <span>Views</span>
            <span>{views}</span>
          </li>
          <li className={css.li}>
            <span>Likes</span>
            <span>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
