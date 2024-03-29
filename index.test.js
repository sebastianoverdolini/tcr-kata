import { test, expect } from "vitest"
import { hello } from "./index";

test("Hello, world!", () => {
    expect(hello()).toBe("Hello, world!")
})
