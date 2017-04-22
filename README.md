# array-retain
  Retains elements in array that matches filter

```shell
npm install --save array-retain
```

## Examples

```js
var retain = require('array-retain');

var a = [1, 2, 3, 4, 5, 6, 7];
//a: [1, 2, 3, 4, 5, 6, 7]

retain(a, (val) => a % 2 === 0);
// => returns a
//a: [2, 4, 6]
```
Array-Retain can be used to be called directly by Arrays
```js
Array.prototype.retain = require('array-retain');

var a = [1, 2, 3, 4, 5, 6, 7];
//a: [1, 2, 3, 4, 5, 6, 7]

a.retain((val) => a % 2 === 0);
// => returns a
//a: [2, 4, 6]
```

## API

### `retain(array, filter)`

#### arguments

- `array: (array)`
- `filter: function(value)`

#### returns

- `array`

### `retain(filter)` (if `this` is an array)

#### arguments

- `filter: function(value)`

#### returns

- `this`