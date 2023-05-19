import React, { useEffect, useState } from "react";

function Counter() {
  const [hookState, setHookState] = useState({
    Title: "React Hook Count Test",
    Theme: "Black & White",
    Count: 10,
  });

  const updateHookState = () => {
    setHookState({
      Count: hookState.Count + 1
    });
    
  };

  useEffect(() =>{
    document.title = `You clicked ${hookState.Count} times`;
  });

  return (
    <div>
      <p>You clicked {hookState.Count} times</p>
      {/* <button onClick={() => setCountVal(count + 1)}>Click me</button> */}
      <button
        onClick={() =>
          setHookState((x) => {
            return { ...x, Count: x.Count + 1 };
          })
        }
      >
        Click me
      </button>
      <button onClick={updateHookState}>Click me 2</button>
    </div>
  );
}
export default Counter;
