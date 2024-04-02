import { test, expect } from "vitest";
import { Lift } from "./lift";

test("lift goes to the given floor when called", () => {
  const lift = new Lift(0);

  lift.call(5);
  lift.run()

  expect(lift.currentFloor()).toBe(5);

  lift.reach(2)
  lift.reach(3)
  lift.run()

  expect(lift.currentFloor()).toBe(3)
});
