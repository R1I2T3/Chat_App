import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useChatStore from "../lib/store/store";
import { useGetUsers } from "../lib/api/user";
import toast from "react-hot-toast";
const SearchHeader = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useChatStore();
  let { data: conversation } = useGetUsers();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 2) {
      return toast.error("More than 2 characters are required fot searching");
    }
    conversation = conversation.find((c) =>
      c.username.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
    }
    setSearch("");
  };
  return (
    <div className="w-[100%] flex justify-center">
      <form
        className="w-[100%] flex justify-between items-center mb-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="input w-[80%] rounded-xl mx-2"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary rounded-full">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchHeader;
