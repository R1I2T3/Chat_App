const ProfileView = () => {
  return (
    <div className="w-full h-[60px] p-3 flex justify-between items-center ">
      <div className="w-[40%]">
        <img
          src={"/defaultProfilePic.png"}
          alt="profile"
          className="w-10 rounded-full"
        />
      </div>
      <h1 className="w-[70%]">Name</h1>
    </div>
  );
};

export default ProfileView;
