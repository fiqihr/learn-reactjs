import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div className="">
      <h1>ini Profile</h1>
        Username : {username}
      </div>
  )
};

export default ProfilePage;