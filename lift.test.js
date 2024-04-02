import { test, expect } from "vitest";
import { hello } from "./index";
import { Lift } from "./lift";

test("Hello, world!", () => {
  expect(hello()).toBe("Hello, world!");
});

test("lift goes to the given floor when called", () => {
  const lift = new Lift();
  lift.call(5);

  expect(lift.currentFloor).toBe(5);
});
