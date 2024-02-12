import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-[450px] bg-white-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
      <div className="w-[100%] flex justify-center items-center flex-col ">
        <h1 className="text-bold text-3xl mb-4 mt-2">Login</h1>
        <form
          className="flex flex-col gap-2 w-[80%] justify-center items-center mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
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
              to={"/signup"}
              className="text-[10px] hover:text-blue-500 text-left"
            >
              Don{"'"}t have account then please sing up
            </Link>
          </div>
          <button type="submit" className="btn btn-primary w-[100px]">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
