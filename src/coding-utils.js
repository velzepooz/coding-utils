/**
 * omit - function creates an object composed of the own
 * and inherited enumerable property paths of `object` that are not omitted.
 * @param {Record<string, any>} obj - The source object
 * @param {string[] | string} paths - The property paths to omit
 * @returns {Record<string, any>} A new object with the specified properties omitted
 * @throws {Error} If the paths argument contains non-string elements or is not a string or array
 */
const omit = (obj, paths) => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    throw new Error('Error at omit function. Object to omit should be a non-null object');
  }

  if (!Array.isArray(paths) && typeof paths !== 'string') {
    throw new Error('Error at omit function. Paths to omit should be a string or an array of strings');
  }

  if (Array.isArray(paths) && paths.some((path) => typeof path !== 'string')) {
    throw new Error('Error at omit function. Path to omit should be an array of strings');
  }

  return Object.fromEntries(
    Object.entries(obj).filter(([key]) =>
      Array.isArray(paths) ? !paths.includes(key) : key !== paths,
    ),
  );
};

/**
 * capitalize - function which capitalizes the first letter of a string and makes the rest lowercase.
 * @param {string} string - The input string to capitalize.
 * @returns {string} The capitalized string, or an empty string if input is not a string.
 */
const capitalize = (string) => {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

/**
 * unique -remove duplicated primitives from array
 * @param {Array} array - The input array to remove duplicates from
 * @returns {Array} A new array with duplicates removed
 * @throws {Error} If the input is not an array
 */
const unique = (array) => {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  if (array.length === 0) {
    return [];
  }
  return [...new Set(array)];
};

const codingUtils = {
  capitalize,
  omit,
  unique,
};

module.exports = codingUtils;
module.exports.default = codingUtils;
module.exports.codingUtils = codingUtils;
