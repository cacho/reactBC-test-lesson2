import { renderHook, act } from "@testing-library/react-hooks";

import useCounter from "../hooks/useCounter";

describe("useCounter", () => {
  // TODO: Test - Setting a start value works as expected
  test("The initial state is based on provided data", () => {
    const { result } = renderHook(() => useCounter());
    expect(result).toEqual({});
  });

  // TODO: Test - Calling the hook without an initial value defaults the counter to 0

  // TODO: Test - Calling increment() increments current counter synchrounously
  
  // TODO: Test - Calling incrementAsync() increments current counter asynchrounously
});
