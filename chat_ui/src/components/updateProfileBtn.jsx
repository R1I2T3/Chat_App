import { Link } from "react-router-dom";

const UpdateProfileBtn = () => {
  return (
    <Link to={"/update"} className="btn btn-primary">
      update profile
    </Link>
  );
};

export default UpdateProfileBtn;
