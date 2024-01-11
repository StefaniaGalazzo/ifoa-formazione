/* eslint-disable react/prop-types */
export default function InputText({ val, handler, margin }) {
  return (
    <input
      className="borderform-control border-info rounded-lg rounded"
      type="text"
      value={val}
      onChange={handler}
      style={{ margin: margin ? margin : "" }}
    />
  );
}
