# 一个阅读API接口

### 1. 获取阅读频道最新的10条图文
当点击阅读 icon 或者下拉刷新的时候，调用的都是同一个接口，即：

[http://v3.wufazhuce.com:8000/api/channel/reading/more/0](http://v3.wufazhuce.com:8000/api/channel/reading/more/0)

返回结果：

```js
{
  res: 0,
  data: [
    // 第一条
    {
      id: "12410", 
      ...
    }
    ...
    // 最后一条
    {
      id: "12306"
      ...
    }
  ]
}
```

由于返回内容较多，请自己点开链接查看。

### 2. 下拉刷新获取图文列表
下拉刷新接口传入的 id 参数是 `data` 数组中最后一条图文的 id

```bash
# 其中 `{id}` 替换成对应图文id值
http://v3.wufazhuce.com:8000/api/channel/reading/more/{id}
```

Example: 

[http://v3.wufazhuce.com:8000/api/channel/reading/more/12306](http://v3.wufazhuce.com:8000/api/channel/reading/more/12306)