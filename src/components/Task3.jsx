import { useEffect, useState } from "react";

/* TASK 3 Fix another infinite loop

- For this you will need to 'fix' the useEffect() call to avoid an infinite loop. After the loop of the page is fixed and the page is re-rendered, you should see the following displayed: 'Counter = 1'. Think about what the problem is with the current setup of useEffect and why it results in infinite re-renders. Use the console in the browser to get a hint from the error message. Once you have a solution, refresh the page to see if the infinite loop has been eliminated. */

const Task3 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Do not change code below this line
    if (counter < 500000) {
      setCounter((counter) => counter + 1);
      console.log(counter, "<<< counter here");
    }
    //Do not change code above this line
  }, [counter]);

  return (
    <section>
      <h2>Task 3 - Fix an infinite loop again</h2>
      <p>Counter = {counter}</p>
    </section>
  );
};

export default Task3;
