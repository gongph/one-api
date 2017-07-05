# 一个搜索API接口

### 1. 根据频道类型和关键字搜索

```bash
# `{channel}` 频道类型
# `{keyword}` 关键字
http://v3.wufazhuce.com:8000/api/search/{channel}/{keyword}
```

关于 `channel` 类型，请移步[这里](../channel/README.md) 。

Example:

[http://v3.wufazhuce.com:8000/api/search/reading/夏天与西瓜](http://v3.wufazhuce.com:8000/api/search/reading/夏天与西瓜)

返回结果：

```js
{
  res: 0,
  data: [
    id: "2608",
    title: "夏天与西瓜",
    type: "essay",
    number: 0
  ]
}
```

### 2. 根据类型和月份搜索
这种接口用在 [往期列表] 搜索中。

```bash 
# `{type}` 类型
# `{month}` 月份
http://v3.wufazhuce.com:8000/api/{type}/bymonth/{month}
```

参数：

- `{type}` : 只能是以下五种类型：
  - `hp` : 图文
  - `reading` : 阅读
  - `serialcontent` : 连载
  - `question` : 问答
  - `music` : 音乐

- `{month}` : 月份格式如下：
  - 2017-07
  - 2017-07-01
  - 2017-07-01 000:00:00

**Tips:** 由于「ONE · 一个」是 2012年10月才有的，所以如果月份在2012年10月之前则搜不到数据。

Example: 

[http://v3.wufazhuce.com:8000/api/reading/bymonth/2017-07](http://v3.wufazhuce.com:8000/api/reading/bymonth/2017-07)