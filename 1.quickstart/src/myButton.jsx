export default function Profile(user) {
  if (user.name)
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={"Photo of " + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
      </>
    );
  return <div>not found name</div>;
}
