import { test, expect } from "vitest";
import { Lift } from "./lift";

test("lift goes to the given floor when called", () => {
  const lift = new Lift();

  lift.call(5);

  expect(lift.currentFloor()).toBe(5);

  lift.reach(3)
  lift.reach(2)

  expect(lift.currentFloor()).toBe(2)
});
