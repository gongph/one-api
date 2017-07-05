# 一个影视API接口

### 1. 获取影视频道最新的10条图文
当点击影视 icon 或者下拉刷新的时候，调用的都是同一个接口，即：

[http://v3.wufazhuce.com:8000/api/channel/movie/more/0](http://v3.wufazhuce.com:8000/api/channel/movie/more/0)

返回结果：

```js
{
  res: 0,
  data: [
    // 第一条
    {
      id: "12415", 
      ...
    }
    ...
    // 最后一条
    {
      id: "12251"
      ...
    }
  ]
}
```

由于返回内容较多，请自己点开链接查看。

### 2. 上拉刷新获取图文列表
上拉刷新接口传入的 id 参数是 `data` 数组中最后一条图文的 id

```bash
# 其中 `{id}` 替换成对应图文id值
http://v3.wufazhuce.com:8000/api/channel/movie/more/{id}
```

Example: 

[http://v3.wufazhuce.com:8000/api/channel/movie/more/12251](http://v3.wufazhuce.com:8000/api/channel/movie/more/12251)

### 3. 根据id获取影视图文详情信息

```
http://v3.wufazhuce.com:8000/api/movie/{id}/story/1/0
```

Example:

[http://v3.wufazhuce.com:8000/api/movie/871/story/1/0](http://v3.wufazhuce.com:8000/api/movie/871/story/1/0)

### 4. 根据id获取头部滚动的五张图片和电影海报信息

```
http://v3.wufazhuce.com:8000/api/movie/detail/{id}
```

Example: 

[http://v3.wufazhuce.com:8000/api/movie/detail/871](http://v3.wufazhuce.com:8000/api/movie/detail/871)