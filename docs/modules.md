[Documentation - v0.0.0](README.md) / Modules

# Documentation - v0.0.0

## Table of contents

### Functions

- [capitalize](modules.md#capitalize)
- [omit](modules.md#omit)
- [unique](modules.md#unique)

## Functions

### capitalize

▸ **capitalize**(`string`): `string`

capitalize - function which capitalizes the first letter of a string and makes the rest lowercase.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The input string to capitalize. |

#### Returns

`string`

The capitalized string, or an empty string if input is not a string.

#### Defined in

coding-utils.js:34

___

### omit

▸ **omit**(`obj`, `paths`): `Record`<`string`, `any`\>

omit - function creates an object composed of the own
and inherited enumerable property paths of `object` that are not omitted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Record`<`string`, `any`\> | The source object |
| `paths` | `string` \| `string`[] | The property paths to omit |

#### Returns

`Record`<`string`, `any`\>

A new object with the specified properties omitted

**`Throws`**

If the paths argument contains non-string elements or is not a string or array

#### Defined in

coding-utils.js:9

___

### unique

▸ **unique**(`array`): `any`[]

unique -remove duplicated primitives from array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `any`[] | The input array to remove duplicates from |

#### Returns

`any`[]

A new array with duplicates removed

**`Throws`**

If the input is not an array

#### Defined in

coding-utils.js:47
