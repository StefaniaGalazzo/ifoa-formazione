/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchNav.module.scss";

export default function SearchNav({
  searchVal,
  searchHandler,
  cleanInput,
  placeholder,
}) {
  const [isOpen, setIsOpen] = useState(false);
  function handlerClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div
      className={`rounded-pill pb-1 position-relative`}
      id={styles.searchNav}
      style={{
        animationName:
          isOpen || searchVal?.lenght >= 2 ? "openSearch" : "closeSearch",
        cursor: "pointer",
      }}
    >
      <input
        className="search rounded-pill"
        type="text"
        value={searchVal && searchVal}
        onChange={searchHandler && searchHandler}
        onKeyDown={searchHandler}
        onKeyUp={cleanInput}
        placeholder={placeholder}
      />
      <FaSearch
        color="black"
        size="18px"
        className="position-absolute"
        style={{ top: "5px", right: "5px" }}
        onClick={handlerClick}
      />
    </div>
  );
}
