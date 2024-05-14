import React from "react";

function Button({ handleClick, children }) {
  console.log("button component", children);
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="bg-orange-600 text-white rounded h-9 px-3"
      >
        {children}
      </button>
    </div>
  );
}

export default React.memo(Button);
