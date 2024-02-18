/* eslint-disable react/prop-types */
import useChatStore from "../lib/store/store";

const ProfileView = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useChatStore();
  const user = useChatStore((state) => state.user);
  const isSelected = selectedConversation?._id === conversation?._id;
  return (
    <div
      className={`w-full h-[60px] p-3 flex justify-between items-center ${
        isSelected ? "bg-sky-500" : ""
      }`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className="w-[40%]">
        <img
          src={conversation?.profilePic || "/defaultProfilePic.png"}
          alt="profile"
          className="w-10 rounded-full"
        />
      </div>
      <h1 className="w-[70%]">
        {user.username === conversation?.username
          ? conversation?.username + " (Me)"
          : conversation?.username}
      </h1>
    </div>
  );
};

export default ProfileView;
