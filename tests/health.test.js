const test = require("node:test");
const assert = require("node:assert");

test("health check", async () => {
  assert.strictEqual(1 + 1, 2);
});
