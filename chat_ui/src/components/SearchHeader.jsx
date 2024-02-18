import { FaSearch } from "react-icons/fa";

const SearchHeader = () => {
  return (
    <div className="w-[100%] flex justify-center">
      <form className="w-[100%] flex justify-between items-center mb-2">
        <input
          type="text"
          className="input w-[80%] rounded-xl mx-2"
          placeholder="Search"
        />
        <button className="btn btn-primary rounded-full">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchHeader;
