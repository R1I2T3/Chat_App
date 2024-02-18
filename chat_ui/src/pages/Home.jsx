import Logout from "../components/Logout";
import UpdateProfileBtn from "../components/updateProfileBtn";
import ChatContainer from "../components/chatContainer";
import MembersContainer from "../components/MembersContainer";
const Home = () => {
  return (
    <div className="w-[700px] h-[600px] bg-white-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100 flex flex-col">
      <div className="w-[100%] flex justify-between items-center">
        <h1 className="text-2xl text-bold pl-4 pt-4 text-orange-500">
          CosmoChat
        </h1>
        <div className="w-[35%] h-full flex justify-around pt-4">
          <Logout />
          <UpdateProfileBtn />
        </div>
      </div>
      <div className="divider divider-primary"></div>
      <div className="flex justify-between w-[100%]">
        <div className="w-[40%]">
          <MembersContainer />
        </div>
        <div className="divider lg:divider-horizontal m-0"></div>
        <div className="w-[60%]">
          <ChatContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
