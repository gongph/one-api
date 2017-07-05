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