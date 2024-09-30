/**
 * No file extensions!!!
 * @typedef {import('./dtsTypes').DtsExampleInterfaceWriter} IDts
 * @typedef {import('./dtsTypes').DtsExampleType} DtsType
 * @typedef {import('./dtsTypes').dtsExampleFunction} dtsFn
*/
/** @implements {IDts} */
export class DtsClass implements IDts {
    fs: {};
    /**
     * Write
     * @param {Buffer} buf
     */
    write(buf: Buffer): Promise<void>;
}
/**
 * Sum
 * @type {dtsFn}
 */
export const dtsSum: dtsFn;
export function dtsRandom(): DtsType;
/**
 * No file extensions!!!
 */
export type IDts = import('./dtsTypes').DtsExampleInterfaceWriter;
/**
 * No file extensions!!!
 */
export type DtsType = import('./dtsTypes').DtsExampleType;
/**
 * No file extensions!!!
 */
export type dtsFn = import('./dtsTypes').dtsExampleFunction;
