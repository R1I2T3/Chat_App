import useChatStore from "../lib/store/store";

const ProfileView = ({ userImage, username }) => {
  const user = useChatStore((state) => state.user);
  return (
    <div className="w-full h-[60px] p-3 flex justify-between items-center ">
      <div className="w-[40%]">
        <img
          src={userImage || "/defaultProfilePic.png"}
          alt="profile"
          className="w-10 rounded-full"
        />
      </div>
      <h1 className="w-[70%]">
        {user.username === username ? username + " (Me)" : username}
      </h1>
    </div>
  );
};

export default ProfileView;
