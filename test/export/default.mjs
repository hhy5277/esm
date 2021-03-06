import Anon from "../fixture/export/default/anon-class.mjs"
import Named from "../fixture/export/default/class.mjs"

import assert from "assert"
import array from "../fixture/export/default/array.mjs"
import expr from "../fixture/export/default/expression.mjs"
import anonFunc from "../fixture/export/default/anon-function.mjs"
import func from "../fixture/export/default/function.mjs"
import ident from "../fixture/export/default/identifier.mjs"
import number from "../fixture/export/default/number.mjs"
import object from "../fixture/export/default/object.mjs"
import redef from "../fixture/export/default/re-export.mjs"
import undef from "../fixture/export/default/undefined.mjs"

export function check() {
  assert.deepEqual(array, [1, 2, 3])
  assert.strictEqual(new Anon(1).value, 1)
  assert.strictEqual(new Named(2).value, 2)
  assert.strictEqual(expr, 1)
  assert.strictEqual(anonFunc(1), 1)
  assert.strictEqual(func(), func)
  assert.strictEqual(ident, 1)
  assert.strictEqual(number, 1)
  assert.deepEqual(object, { value: 1 })
  assert.strictEqual(redef, object)
  assert.strictEqual(undef, void 0)
}
