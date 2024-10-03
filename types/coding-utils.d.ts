/**
 * capitalize - function which capitalizes the first letter of a string and makes the rest lowercase.
 * @param {string} string - The input string to capitalize.
 * @returns {string} The capitalized string, or an empty string if input is not a string.
 */
export function capitalize(string: string): string;
/**
 * omit - function creates an object composed of the own
 * and inherited enumerable property paths of `object` that are not omitted.
 * @param {Record<string, any>} obj - The source object
 * @param {string[] | string} paths - The property paths to omit
 * @returns {Record<string, any>} A new object with the specified properties omitted
 * @throws {Error} If the paths argument contains non-string elements or is not a string or array
 */
export function omit(obj: Record<string, any>, paths: string[] | string): Record<string, any>;
/**
 * unique -remove duplicated primitives from array
 * @param {Array} array - The input array to remove duplicates from
 * @returns {Array} A new array with duplicates removed
 * @throws {Error} If the input is not an array
 */
export function unique(array: any[]): any[];
