import React, { useState } from "react";

function UseStateHook() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue((prevState) => prevState + 1);
  };
  const handleDecrement = () => {
    setValue((prevState) => prevState - 1);
  };
  console.log("value", value);
  return (
    <div className=" flex justify-center space-x-3 my-20">
      <h4> {value}</h4>
      <button
        type="button"
        onClick={handleIncrement}
        className="px-3 bg-blue-900 text-white py-1"
      >
        Increment
      </button>
      {value > 0 && (
        <button
          type="button"
          onClick={handleDecrement}
          className="px-3 bg-blue-900 text-white py-1"
        >
          Decrement
        </button>
      )}
    </div>
  );
}

export default UseStateHook;
