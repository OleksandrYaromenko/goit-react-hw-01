import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList";
export default function App() {
  return (
    <div>
      <Profile user={userData} />
      <>
        <FriendList friends={friends} />
      </>
    </div>
  );
}
