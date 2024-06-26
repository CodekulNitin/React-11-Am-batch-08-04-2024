import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function UseCallBackHook() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(5000);

  const incrementAge =useCallback(() => {
    setAge(age + 1);
  },[age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  },[salary]);

  return (
    <div className="text-center my-10">
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default UseCallBackHook;
