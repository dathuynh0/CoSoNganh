import React, { useState } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="relative">
        <Input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full pl-10 pr-4 border border-gray-300 rounded-full focus:ring-2 transition-all duration-200 shadow-sm"
        />
        <button
          type="submit"
          className="absolute left-3 top-1/2 -translate-y-1/2"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
