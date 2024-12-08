import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navData } from "../database/Data";
import { MdSearch } from "react-icons/md";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Query:", search);
  };

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-white border-b-2 border-gray-300 px-4 lg:px-10 py-4">
      <div className="flex justify-between items-center">
        {/* Nav Logo */}
        <div>
          <h1 className="text-2xl font-bold">{"<spectra>"}</h1>
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6">
          {navData.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="text-gray-800 hover:text-black transition-colors duration-300"
              aria-label={item.title}
            >
              {item.title}
            </Link>

          ))}
        </nav>

        {/* Nav Icons */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden sm:flex items-center border-[1.5px] border-gray-600 rounded-md px-3 py-1"
          >
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearch}
              className="border-none outline-none"
              aria-label="Search"
            />
            <button type="submit" className="text-xl text-gray-700">
              <MdSearch />
            </button>
          </form>

          {/* Mobile Menu Toggle */}
          <button
            className="text-2xl text-gray-700 md:hidden"
            onClick={handleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={handleMenu}>
          <nav
            className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4 flex flex-col gap-4 md:hidden z-40"
            onClick={(e) => e.stopPropagation()}
          >
            {navData.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className="text-gray-800 hover:text-black transition-colors duration-300"
                onClick={handleMenu}
                aria-label={item.title}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
