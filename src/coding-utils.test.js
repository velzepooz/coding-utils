import test from 'node:test';
import assert from 'node:assert';

import { capitalize, unique, omit } from './coding-utils.js';

test('unique function', () => {
  assert.deepStrictEqual(unique([1, 2, 2, 3, 4, 4, 5]), [1, 2, 3, 4, 5], 'Should remove duplicates from numbers');
  assert.deepStrictEqual(unique(['a', 'b', 'b', 'c', 'a']), ['a', 'b', 'c'], 'Should remove duplicates from strings');
  assert.deepStrictEqual(unique([]), [], 'Should handle empty array');
  assert.deepStrictEqual(unique([1]), [1], 'Should handle array with single element');
  assert.deepStrictEqual(
    unique([null, undefined, false, '', 0, null]), [null, undefined, false, '', 0], 'Should handle falsy values',
  );
  const obj1 = { a: 1 };
  const obj2 = { b: 2 };
  assert.deepStrictEqual(unique([obj1, obj2, obj1]), [obj1, obj2], 'Should handle objects');
});

test('capitalize function', () => {
  assert.strictEqual(capitalize('hello'), 'Hello', 'Should capitalize first letter');
  assert.strictEqual(capitalize('WORLD'), 'World', 'Should lowercase rest of the string');
  assert.strictEqual(capitalize(''), '', 'Should handle empty string');
  assert.strictEqual(capitalize('a'), 'A', 'Should handle single character');
  assert.strictEqual(capitalize('123abc'), '123abc', 'Should not change string starting with number');
  assert.strictEqual(capitalize(' space'), ' space', 'Should not change string starting with space');
  assert.strictEqual(capitalize('àéîôû'), 'Àéîôû', 'Should handle accented characters');
});

test('omit function', () => {
  const obj = { a: 1, b: 2, c: 3, d: 4 };
  assert.deepStrictEqual(omit(obj, ['b', 'd']), { a: 1, c: 3 }, 'Should omit specified keys');
  assert.deepStrictEqual(omit(obj, []), obj, 'Should return same object if no keys to omit');
  assert.deepStrictEqual(omit(obj, ['e']), obj, 'Should handle non-existent keys');
  assert.deepStrictEqual(omit({}, ['a']), {}, 'Should handle empty object');
  assert.deepStrictEqual(omit(obj, ['a', 'b', 'c', 'd']), {}, 'Should return empty object if all keys omitted');

  const objWithProto = Object.create({ inherited: true });
  objWithProto.own = false;
  assert.deepStrictEqual(omit(objWithProto, ['inherited']), { own: false }, 'Should only omit own properties');
});

