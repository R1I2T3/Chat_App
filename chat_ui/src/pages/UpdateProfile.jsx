import useChatStore from "../lib/store/store";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import usePreview from "../Hooks/usePreview";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUpdateProfile } from "../lib/api/user";
const UpdateProfile = () => {
  const user = useChatStore((state) => state.user);
  const { handleImageChange, imageUrl: profilePic } = usePreview();
  const fileRef = useRef();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: user.fullName,
      email: user.email,
    },
  });
  const { mutateAsync: update, isPending } = useUpdateProfile();
  if (isPending) {
    return (
      <div className="w-[100%] h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  const handleReset = (e) => {
    e.preventDefault();
    navigate("/");
    toast.success("Your changes are reverted back successfully");
  };
  const onSubmit = async (data, e) => {
    e.preventDefault();
    const userId = user._id;
    const info = { ...data, profilePic };
    await update({ info, userId });
  };
  return (
    <div className="w-[450px] bg-white-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
      <h2 className="text-center text-bold text-gray-200 text-xl mt-2">
        Update your profile
      </h2>
      <div className="mt-3">
        <form
          className="flex flex-col justify-center items-center gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-center w-full items-center">
            <div className="avatar mr-10">
              <div className="w-24 rounded-full ml-4">
                <img
                  src={
                    profilePic || user.profilePic || "/defaultProfilePic.png"
                  }
                  alt="avatar"
                />
              </div>
            </div>
            <div className="w-auto ">
              <input
                type="file"
                className="hidden"
                ref={fileRef}
                onChange={handleImageChange}
              />
              <button
                className=" btn btn-outline mr-10 "
                onClick={(e) => {
                  e.preventDefault();
                  return fileRef.current.click();
                }}
              >
                Update Profile picture
              </button>
            </div>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("fullName")}
          />
          <input
            type="email"
            className="input input-bordered w-full max-w-xs"
            {...register("email")}
            // value={input.email}
          />
          <input
            type="password"
            className="input input-bordered w-full max-w-xs"
            placeholder="Enter your new password"
            {...register("password")}
            // value={input.password}
          />
          <div className="w-[100%] flex justify-between ">
            <button
              type="reset"
              className="ml-10 mr-3 mb-5 mt-3 btn btn-accent w-[30%]"
              onClick={handleReset}
            >
              Cancel
            </button>
            <button
              className="ml-3 mr-10 mb-5 mt-3 btn btn-primary w-[30%]"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
