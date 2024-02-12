import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import useChatStore from "../store/store";
import { useNavigate } from "react-router-dom";
const useSignup = () => {
  const navigate = useNavigate();
  const setUser = useChatStore((state) => state.setUser);
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post("/api/auth/signup", data);
      return response;
    },
    onError: (error) => {
      if (error.response) {
        toast.error(error?.response?.data?.message);
      }
    },
    onSuccess: (data) => {
      localStorage.setItem("chat_app_Data", JSON.stringify(data));
      setUser(data);
      navigate("/");
      toast.success("User sign up successfully");
    },
  });
  return mutation;
};

const useLogin = () => {
  const navigate = useNavigate();
  const setUser = useChatStore((state) => state.setUser);
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post("/api/auth/signin", data);
      return response;
    },
    onError: (error) => {
      if (error.response) {
        toast.error(error?.response?.data?.message);
      }
    },
    onSuccess: (data) => {
      localStorage.setItem("chat_app_Data", JSON.stringify(data));
      setUser(data);
      navigate("/");
      toast.success("User sign up successfully");
    },
  });
  return mutation;
};

const useLogout = () => {};

export { useLogin, useSignup, useLogout };
