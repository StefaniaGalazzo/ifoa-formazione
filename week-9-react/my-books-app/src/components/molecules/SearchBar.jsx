/* eslint-disable react/prop-types */
import InputText from "../atoms/InputText";
import { IoSearch } from "react-icons/io5";

export default function SearchBar({ wdt, val, handler, margin }) {
  return (
    <div
      style={{ width: wdt ? wdt : "100%", margin: margin ? margin : "0 auto " }}
      className="d-flex align-center"
    >
      <IoSearch size="30px" color="lightblue" />
      <InputText val={val} handler={handler} margin={"0 0 0 10px"} />
    </div>
  );
}
