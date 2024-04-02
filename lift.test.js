import { test, expect } from "vitest";
import { hello } from "./index";
import { lift } from "./lift";

test("Hello, world!", () => {
  expect(hello()).toBe("Hello, world!");
});

class A {}

test("lift goes to the given floor when called", () => {
  new A();
  lift.call(5);

  expect(lift.currentFloor).toBe(5);
});
