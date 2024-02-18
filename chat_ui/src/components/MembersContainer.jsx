import SearchHeader from "./SearchHeader";
import ProfileView from "./ProfileView";
const MembersContainer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <SearchHeader />
      <div className="divider"></div>
      <div className="w-full h-[300px] flex flex-col overflow-y-scroll">
        <ProfileView />
        <div className="divider w-full my-0"></div>
        <ProfileView />
        <div className="divider w- my-0"></div>
        <ProfileView />
        <ProfileView />
        <ProfileView />
        <ProfileView />
        <ProfileView />
        <ProfileView />
        <ProfileView />
        <ProfileView />
        <ProfileView />
        <ProfileView />
        <ProfileView />
      </div>
    </div>
  );
};

export default MembersContainer;
