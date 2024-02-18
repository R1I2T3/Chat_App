import { useLogout } from "../lib/api/auth";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const { mutateAsync: logoutAsync, isPending } = useLogout();
  const navigate = useNavigate();
  if (isPending) {
    return (
      <div className="w-full h-screen justify-center items-center">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }
  const logoutHandler = async (e) => {
    e.preventDefault();
    await logoutAsync();
    navigate("/login");
  };
  return (
    <button type="submit" onClick={logoutHandler} className="btn btn-outline">
      Logout
    </button>
  );
};

export default Logout;
