/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchNav({ searchVal, searchHandler }) {
  const [isOpen, setIsOpen] = useState(false);
  function handlerClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div
      className="rounded-pill pb-1 position-relative"
      id="searchNav"
      style={{
        animationName:
          isOpen || searchVal.lenght >= 2 ? "openSearch" : "closeSearch",
        cursor: "pointer",
      }}
    >
      <input
        className="search rounded-pill pb-1"
        type="text"
        value={searchVal}
        onChange={searchHandler}
      />
      <FaSearch
        color="white"
        size="18px"
        className="position-absolute"
        style={{ top: "5px", right: "5px" }}
        onClick={handlerClick}
      />
    </div>
  );
}
