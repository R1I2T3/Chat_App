import SearchHeader from "./SearchHeader";
import ProfileView from "./ProfileView";
import { useGetUsers } from "../lib/api/user";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const MembersContainer = () => {
  const [users, setUsers] = useState([]);
  const { isLoading, isError, data } = useGetUsers();
  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);
  if (isLoading) {
    return (
      <div className="w-[100%] h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (isError) {
    toast.error("Error while fetching user");
    return <h2 className="flex justify-center items-center">Error!</h2>;
  }
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <SearchHeader />
      <div className="divider w-full"></div>
      <div className="w-full h-[390px] flex flex-col overflow-y-scroll">
        {users.length !== 0 ? (
          users.map((user) => {
            return (
              <>
                <ProfileView conversation={user} key={user._id} />
                <div className="divider w-full my-0"></div>
              </>
            );
          })
        ) : (
          <h1 className="flex justify-center items-center">No user found</h1>
        )}
      </div>
    </div>
  );
};

export default MembersContainer;
