import Profile from "./myButton";

const user1 = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const user2 = {
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function App() {
  return (
    <>
      <Profile user={user1} />
      <Profile user={user2} />;
    </>
  );
}
