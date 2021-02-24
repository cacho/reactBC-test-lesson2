import React from "react";

function useCounter(initState = 0) {
  const [counter, setCounter] = React.useState(initState);
  const increment = React.useCallback(
    () => setCounter((counter) => counter + 1),
    []
  );
  const incrementAsync = React.useCallback(
    () => setTimeout(() => setCounter((counter) => counter + 1), 100),
    []
  );

  return { counter, increment, incrementAsync };
}

export default useCounter;
