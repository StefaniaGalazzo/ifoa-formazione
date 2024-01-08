/* eslint-disable react/prop-types */
export default function Button({ type, clickHandler, text }) {
  return (
    <button type={type} onClick={clickHandler}>
      {text}
    </button>
  );
}
