import React, { useEffect, useMemo, useState } from "react";

function UseMemoHook() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  // const isEven =()=>{
  //   let i = 0;
  //   while (i < 2000000000) i++;
  //   return counterOne % 2===0;
  // }

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div className="text-center py-20">
      {time}
      <h1> {counterOne}</h1>
      {isEven ? "Even" : "Odd"}
      <h1> {counterTwo}</h1>
      <div className="flex space-x-3 justify-center">
        <button
          className="bg-purple-700 text-white px-3 h-9 rounded"
          type="button"
          onClick={() => {
            setCounterOne(counterOne + 1);
          }}
        >
          Increament Counter One
        </button>
        <button
          className="bg-purple-700 text-white px-3 h-9 rounded"
          type="button"
          onClick={() => {
            setCounterTwo(counterTwo + 1);
          }}
        >
          Increament Counter Two
        </button>
      </div>
    </div>
  );
}

export default UseMemoHook;
