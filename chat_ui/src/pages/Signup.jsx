import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignup } from "../lib/api/auth";
import toast from "react-hot-toast";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutateAsync: signUpMutate, isPending } = useSignup();
  const onSubmit = async (data, e) => {
    e.preventDefault();
    const gettingData = await signUpMutate(data);
    console.log(gettingData);
    if (gettingData.response.data.message) {
      return toast.error(gettingData.response.data.message);
    }
  };
  if (isPending) {
    return <span className="loading loading-spinner loading-md"></span>;
  }
  return (
    <div className="w-[450px] bg-white-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
      <div className="w-[100%] flex justify-center items-center flex-col ">
        <h1 className="text-bold text-3xl mb-4 mt-5">Signup</h1>
        <form
          className="flex flex-col gap-2 w-[80%] justify-center items-center mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col ">
            <input
              type="text"
              placeholder="Enter your fullName"
              className="input input-bordered w-full max-w-xs"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && (
              <span className="text-red-600 text-sm text-left">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full flex flex-col">
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full max-w-xs"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-red-600 text-sm text-left">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600 text-sm text-left">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full flex flex-col">
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-600 text-sm text-left">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full">
            <Link
              to={"/login"}
              className="text-[10px] hover:text-blue-500 text-left"
            >
              Already have account then please login
            </Link>
          </div>
          <button type="submit" className="btn btn-primary w-[100px]">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
