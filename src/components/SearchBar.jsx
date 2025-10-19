import { Search } from "lucide-react"; // make sure to install lucide-react

const SearchBar = () => {
  return (
    <div className="flex items-center w-[750px] mx-auto mt-[5rem] bg-white rounded-md shadow-base">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search your products from here"
        className="flex-1 px-4 py-3 rounded-l-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-gray-700 placeholder-gray-500 shadow-2xl bg-white"
      />

      {/* Search Button */}
      <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 rounded-r-md flex items-center gap-2">
        <Search className="w-4 h-4" />
        Search
      </button>
    </div>
  );
};

export default SearchBar;
