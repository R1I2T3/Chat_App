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
      localStorage.setItem("chat_app_Data", JSON.stringify(data.data));
      setUser(data.data);
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
        toast.error(error?.response?.data?.error);
      }
    },
    onSuccess: (data) => {
      console.log(data.data);
      localStorage.setItem("chat_app_Data", JSON.stringify(data.data));
      setUser(data.data);
      navigate("/");
      toast.success("User Logged in successfully");
    },
  });
  return mutation;
};

const useLogout = () => {
  const navigate = useNavigate();
  const setUser = useChatStore((state) => state.setUser);
  const mutation = useMutation({
    mutationFn: async () => {
      await axios.post("/api/auth/logout");
    },
    onError: (error) => {
      if (error.response) {
        toast.error(error?.response?.data?.error);
      }
    },
    onSuccess: () => {
      localStorage.removeItem("chat_app_Data");
      setUser(null);
      navigate("/login");
      toast.success("user logged out successfully");
    },
  });
  return mutation;
};

export { useLogin, useSignup, useLogout };
