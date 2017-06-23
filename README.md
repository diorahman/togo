## to go

```js
const to = require('togo')
const [err, val] = await to(Promise.resolve(true))
console.log(val) // true
console.log(err) // null
```
