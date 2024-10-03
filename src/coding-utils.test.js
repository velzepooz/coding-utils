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

  assert.deepStrictEqual(unique([1, '1', true, '1', true]), [1, '1', true], 'Should handle mixed types');
  assert.deepStrictEqual(unique([NaN, NaN, 0, -0]), [NaN, 0], 'Should handle NaN and -0');
  assert.deepStrictEqual(unique(['', ' ', '  ']), ['', ' ', '  '], 'Should treat different whitespace as unique');

  const symbol1 = Symbol('test');
  const symbol2 = Symbol('test');
  assert.deepStrictEqual(unique([symbol1, symbol2, symbol1]), [symbol1, symbol2], 'Should handle symbols');
  assert.throws(() => unique(null), Error, 'Input must be an array');
  assert.throws(() => unique(undefined), Error, 'Input must be an array');
});

test('capitalize function', () => {
  assert.strictEqual(capitalize('hello'), 'Hello', 'Should capitalize first letter');
  assert.strictEqual(capitalize('WORLD'), 'World', 'Should lowercase rest of the string');
  assert.strictEqual(capitalize(''), '', 'Should handle empty string');
  assert.strictEqual(capitalize('a'), 'A', 'Should handle single character');
  assert.strictEqual(capitalize('123abc'), '123abc', 'Should not change string starting with number');
  assert.strictEqual(capitalize(' space'), ' space', 'Should not change string starting with space');
  assert.strictEqual(capitalize('àéîôû'), 'Àéîôû', 'Should handle accented characters');
  assert.strictEqual(capitalize(null), '', 'Should handle not a string value');
  assert.strictEqual(capitalize(undefined), '', 'Should handle not a string value');

  assert.strictEqual(capitalize('camelCase'), 'Camelcase', 'Should handle camelCase');
  assert.strictEqual(capitalize('PascalCase'), 'Pascalcase', 'Should handle PascalCase');
  assert.strictEqual(capitalize('1st'), '1st', 'Should not change string starting with number');
  assert.strictEqual(capitalize('_underscore'), '_underscore', 'Should not change string starting with underscore');
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

  const nestedObj = { a: 1, b: { c: 2, d: 3 } };
  assert.deepStrictEqual(omit(nestedObj, ['b.c']), { a: 1, b: { c: 2, d: 3 } }, 'Should not affect nested properties');

  assert.throws(() => omit(null, ['a']), Error, 'Should throw TypeError for null input');
  assert.throws(() => omit(undefined, ['a']), Error, 'Should throw TypeError for undefined input');
  assert.throws(() => omit([], ['a']), Error, 'Should throw TypeError for array input');
  const emptyObj = {};
  assert.deepStrictEqual(omit(emptyObj, ['a']), emptyObj, 'Should return empty object if input is an empty object');

  const frozenObj = Object.freeze({ a: 1, b: 2 });
  assert.deepStrictEqual(omit(frozenObj, ['a']), { b: 2 }, 'Should work with frozen objects');

  const objWithGetter = {
    get a() { return 1; },
    b: 2,
  };
  assert.deepStrictEqual(omit(objWithGetter, ['a']), { b: 2 }, 'Should handle objects with getters');
});

