import { Link } from "react-router-dom";

const UpdateProfileBtn = () => {
  return (
    <Link to={"/update"} className="btn btn-outline">
      update profile
    </Link>
  );
};

export default UpdateProfileBtn;
