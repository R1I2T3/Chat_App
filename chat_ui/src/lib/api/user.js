import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import useChatStore from "../store/store";
import { useNavigate } from "react-router-dom";
const useUpdateProfile = () => {
  const navigate = useNavigate();
  const setUser = useChatStore((state) => state.setUser);
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.put(
        `/api/users/update/${data.userId}`,
        data.info
      );
      return response;
    },
    onError: (error) => {
      if (error.response) {
        toast.error(error?.response?.data?.error);
      }
    },
    onSuccess: (data) => {
      navigate("/");
      localStorage.removeItem("chat_app_Data");
      console.log(data.data);
      localStorage.setItem("chat_app_Data", JSON.stringify(data.data));
      setUser(data.data);
      toast.success("User data updated successfully");
    },
  });
  return mutation;
};

export { useUpdateProfile };
