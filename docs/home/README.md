# 首页

## Headers

- **Method**: GET /api/channel/one/0/0
- **Host**: v3.wufazhuce.com:8000
- **User-agent**: android-async-http/2.0

## request

参数|中文名
---|---
user_id|用户Id
channel|频道
sign|登录标识
version|4.6.0
uuid|唯一标识
platform|平台

例如：

```bash
# 根路径 v3.wufazhuce.com:8000
/api/channel/one/0/0?user_id=10467837&channel=360&sign=8787a2bf0c8d7d83718fce9da2140643&version=4.6.0&uuid=&platform=android
```

## response

Demo:

```js
{
  res: 0,
  data: {
    id: "5178",
    // 天气
    weatcher: Object,
    // 日期
    date: String,
    // 内容，共七条内容
    // Array[0] 是画廊，其余是下面的六条内容
    content_list: Array[7],
    // 这个是画廊下面的导航菜单列表
    // 点击标题可进入到对应的文章详情
    menu: {
      vol: "2454",
      list: Array[6]
    }
  }
}
```

详细字段自己代码里调试即可。