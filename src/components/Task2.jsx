import { useEffect, useState } from "react";

/* TASK 2 Fix infinite loop 

- For this task you will need to set up the useEffect() hook properly to avoid infinite loops (a limit of 500000 iterations has been set up as a safety feature). Use the console in the browser to get a hint from the error message. Once you have a solution, refresh the page to see if the infinite loop has been eliminated. If it has been eliminated successfully, you should see the following displayed: 'Counter = 1'.*/

const Task2 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Do not change code below this line
    if (counter < 500000) {
      setCounter((counter) => counter + 1);
      console.log(counter, "<<< counter here");
    }
    //Do not change code above this line
  });

  return (
    <section>
      <h2>Task 2 - Fix the infinite loop</h2>
      <p>Counter = {counter}</p>
    </section>
  );
};

export default Task2;
