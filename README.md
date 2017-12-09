# n-validator
[![codecov][codecov-image]][codecov-url]

[codecov-url]: https://codecov.io/gh/ReAlign/n-validator
[codecov-image]: https://codecov.io/gh/ReAlign/n-validator/branch/master/graph/badge.svg

#### 前提：目前前端 `mock`， 只做了 `url` & `method` 校验。

这种情况下，前端几乎不太会去关心接口 `具体参数` 的格式，所以，前端的自测，一般在 `mock` 环境下通过，就算是通过了。但是跟后端联调各种格式问题。

所以，想在前端 `mock` 环境下，搞一套类似 `静态类型检查` 的东西，初始生成 `mock` 数据的时候，就定好 `参数格式规则` ，省去前后端联调时再去 `订正` 数据格式的时间，提高效率。


## Validator

| Method | Description |
| --- | --- |
| isInt(str, [, options]) | check if the string is an integer. |
| isFloat(str, [, options]) | check if the string is a float. |
| isDateStr(str, [, options]) | check if the string is a date. |
| isBoolean(val, [, options]) | check if the variable is a boolean. |
| isLength(str, [, options]) | check if the string's length falls in a range. |

## todo

* [ ] isFloat, decimal digits(0.10: 2?1)
* [ ] number strictMode
* [ ] date stamp