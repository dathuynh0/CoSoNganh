import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchBar = ({ search, onSearchChange }) => {
  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={search}
        onChange={onSearchChange}
        className="w-full pr-7 pl-4 border border-gray-300 rounded-full focus:ring-2 transition-all duration-200 shadow-sm"
      />
      <button className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
        <Search className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SearchBar;
