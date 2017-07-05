# 评论API接口

### 1. 根据类型和id获取评论列表

```
http://v3.wufazhuce.com:8000/api/comment/praiseandtime/{category}/{id}/0
```

返回结果：

```js
{
  res: 0,
  data: {
  	count: 76,
  	data: [
  	  ...
  	  // 最后一条评论id
  	  {
  	  	id: 62187,
  	  	...
  	  }
  	]
  }
}
```

Example: 

获取 `essay` 类型下文章 `id` 是 2604 的评论列表

[http://v3.wufazhuce.com:8000/api/comment/praiseandtime/essay/2604/0](http://v3.wufazhuce.com:8000/api/comment/praiseandtime/essay/2604/0)

### 2. 上拉获取一下页评论列表

```bash
# `{category}` 类型
# `{id}` 图文id
# `{lastcommentid}` 当前页最后一条评论的id
http://v3.wufazhuce.com:8000/api/comment/praiseandtime/{category}/{id}/{lastcommentid}
```

Example:

获取下一页的评论列表

[http://v3.wufazhuce.com:8000/api/comment/praiseandtime/essay/2604/62187](http://v3.wufazhuce.com:8000/api/comment/praiseandtime/essay/2604/62187)
