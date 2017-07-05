# 一个音乐API接口

### 1. 获取音乐频道最新的10条图文
当点击音乐 icon 或者下拉刷新的时候，调用的都是同一个接口，即：

[http://v3.wufazhuce.com:8000/api/channel/music/more/0](http://v3.wufazhuce.com:8000/api/channel/music/more/0)

返回结果：

```js
{
  res: 0,
  data: [
    // 第一条
    {
      id: "12412", 
      item_id: "2202"
      ...
    }
    ...
    // 最后一条
    {
      id: "12347",
      item_id: "2199"
      ...
    }
  ]
}
```

由于返回内容较多，请自己点开链接查看。

### 2. 上拉刷新获取下一页内容
上拉刷新接口传入的 id 参数是 `data` 数组中最后一条音乐的 id

```bash
# 其中 `{id}` 替换成对应图文id值
http://v3.wufazhuce.com:8000/api/channel/music/more/{id}
```

Example: 

[http://v3.wufazhuce.com:8000/api/channel/music/more/12347](http://v3.wufazhuce.com:8000/api/channel/music/more/12347)

### 3. 根据item_id获取音乐详情信息
`id` 对应虾米音乐的一首歌曲，而 `item_id` 是这首音乐的详细介绍页。

```
# `{item_id}` 对应 data 中的 item_id 字段
http://v3.wufazhuce.com:8000/api/music/detail/{item_id}
```

Example:

[http://v3.wufazhuce.com:8000/api/music/detail/2199](http://v3.wufazhuce.com:8000/api/music/detail/2199)