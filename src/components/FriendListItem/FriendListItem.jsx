export default function FriendListItem({ avatar, name, isOnline }) {
  <div>
    <img src={avatar} alt={name} width="48" />
    <p>{name}</p>
    <p>{isOnline}</p>
  </div>;
}
