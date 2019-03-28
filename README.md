# @indlekofer/object_get

## Usage

```js
import og from '@indlekofer/object_get';
```

```js
var obj = og({test: 1, test2: 2, test3: {text4: 4}}, ["test3", "test4"]);
console.log(obj); //=> 4
```

## Parameters

  **object**: *object* source object  
  **in**: *array* find   
  **defaultValue**: optional default  
