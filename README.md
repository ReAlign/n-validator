# n-validator

目前前端 `mock`， 只做了 `url` & `method` 校验。

这种情况下，前端几乎不太会去关心接口 `具体参数` 的格式，前端 `mock` 环境下自测通过，但是跟后端联调各种格式问题。

所以，前端 `mock` 环境下搞一套类似 `静态类型检查` 的东西，省去前后端联调时再去 订正 数据格式的时间，提高效率。