import { test, expect } from "vitest";
import { hello } from "./index";

test("Hello, world!", () => {
  expect(hello()).toBe("Hello, world!");
});

test("lift goes to the given floor when called", () => {
  const lift = {
    currentFloor: 5,
    call: (floor) => {},
  };

  lift.call(5);

  expect(lift.currentFloor).toBe(5);
});
