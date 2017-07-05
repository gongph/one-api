# 首页 API 说明文档

#### 1. 获取前十天的图文id数组集合

[http://v3.wufazhuce.com:8000/api/onelist/idlist](http://v3.wufazhuce.com:8000/api/onelist/idlist)

返回结果：

```js
{
  res: 0,
  data: [
    "4252",
    "4242",
    "4241",
    "4065",
    "4145",
    "4231",
    "4240",
    "4219",
    "4216",
    "4215"
  ]
}
```

**Tips:** `data` 数组中的第一项是今天的图文id，最后一项是10天前的图文id。


#### 2. 根据id获取某一天的图文列表

```bash
# 其中 `{id}` 替换成当前id值
http://v3.wufazhuce.com:8000/api/onelist/{id}/0
```

Example: 

[http://v3.wufazhuce.com:8000/api/onelist/4215/0](http://v3.wufazhuce.com:8000/api/onelist/4215/0)

返回结果：

```js
{
    "res": 0,
    "data": {
        "id": "4215",
        "weather": {
            "city_name": "地球",
            "date": "2017-07-05",
            "temperature": "-275",
            "humidity": "120",
            "climate": "对流层",
            "wind_direction": "一阵妖风",
            "hurricane": "36级",
            "icons": {
                "day": "weather_icon_unknown",
                "night": "weather_icon_unknown_night"
            }
        },
        "date": "2017-06-25 06:00:00",
        "content_list": [
            {
                "id": "12199",
                "category": "0",
                "display_category": "4",
                "item_id": "1750",
                "title": "摄影",
                "forward": "现实世界的人总说，在悲剧发生之后，悲伤、失落、心痛会“随着时间的流逝而减轻”，但这不是真的。悲伤和失落是永恒不变的，但如果一生都一直背负着它们，我们将无法承受。悲伤会让我们瘫痪。所以最后，我们只能拿袋子装起它们，扔到什么地方去。",
                "img_url": "http://image.wufazhuce.com/FuWOiw8PawWWIBCneVI9SSn8m2-S",
                "like_count": 11457,
                "post_date": "2017-06-25 06:00:00",
                "last_update_date": "2017-06-19 17:13:08",
                "author": {},
                "video_url": "",
                "audio_url": "",
                "audio_platform": 2,
                "start_video": "",
                "volume": "VOL.1723",
                "pic_info": "Patrick Joust",
                "words_info": "《外婆的道歉信》",
                "subtitle": "",
                "number": 0,
                "serial_id": 0,
                "serial_list": [],
                "movie_story_id": 0,
                "ad_id": 0,
                "ad_type": 0,
                "ad_pvurl": "",
                "ad_linkurl": "",
                "ad_makettime": "",
                "ad_closetime": "",
                "ad_share_cnt": "",
                "ad_pvurl_vendor": "",
                "content_id": "1750",
                "content_type": "0",
                "content_bgcolor": "#FFFFFF",
                "share_url": "http://m.wufazhuce.com/one/1750",
                "share_info": {
                    "url": "http://m.wufazhuce.com/one/1750",
                    "image": "http://image.wufazhuce.com/FuWOiw8PawWWIBCneVI9SSn8m2-S",
                    "title": "VOL.1723",
                    "content": "现实世界的人总说，在悲剧发生之后，悲伤、失落、心痛会“随着时间的流逝而减轻”，但这不是真的。悲伤和失落是永恒不变的，但如果一生都一直背负着它们，我们将无法承受。悲伤会让我们瘫痪。所以最后，我们只能拿袋子装起它们，扔到什么地方去。 from 《外婆的道歉信》"
                },
                "share_list": {
                    "wx": {
                        "title": "",
                        "desc": "",
                        "link": "http://m.wufazhuce.com/one/1750?channel=singlemessage",
                        "imgUrl": "",
                        "audio": ""
                    },
                    "wx_timeline": {
                        "title": "",
                        "desc": "",
                        "link": "http://m.wufazhuce.com/one/1750?channel=timeline",
                        "imgUrl": "",
                        "audio": ""
                    },
                    "weibo": {
                        "title": "ONE一个 现实世界的人总说，在悲剧发生之后，悲伤、失落、心痛会“随着时间的流逝而减轻”，但这不是真的。悲伤和失落是永恒不变的，但如果一生都一直背负着它们，我们将无法承受。悲伤会让我们瘫痪。所以…——《外婆的道歉信》 下载ONE一个APP:http://weibo.com/p/100404157874",
                        "desc": "",
                        "link": "http://m.wufazhuce.com/one/1750?channel=weibo",
                        "imgUrl": "",
                        "audio": ""
                    },
                    "qq": {
                        "title": "",
                        "desc": "",
                        "link": "http://m.wufazhuce.com/one/1750?channel=qq",
                        "imgUrl": "",
                        "audio": ""
                    }
                },
                "tag_list": []
            },
            {
                "id": "12231",
                "category": "1",
                "display_category": "1",
                "item_id": "2556",
                "title": "她的便利店",
                "forward": "就算你说的是真的，可你这个故事有一个很大的漏洞。",
                "img_url": "http://image.wufazhuce.com/Fqd8DdNy-klTRzjgBG9S8vXAFqkM",
                "like_count": 3221,
                "post_date": "2017-06-25 06:00:00",
                "last_update_date": "2017-06-22 06:51:57",
                "author": {
                    "user_id": "8108626",
                    "user_name": "风太",
                    "desc": "青年作家。",
                    "wb_name": "",
                    "is_settled": "0",
                    "settled_type": "0",
                    "summary": "青年作家。",
                    "fans_total": "661",
                    "web_url": "http://image.wufazhuce.com/FkYEyWi4GVn0_a49Ai04v06h_5Eb"
                },
                "video_url": "",
                "audio_url": "",
                "audio_platform": 2,
                "start_video": "",
                "volume": 0,
                "pic_info": "",
                "words_info": "",
                "subtitle": "",
                "number": 0,
                "serial_id": 0,
                "serial_list": [],
                "movie_story_id": 0,
                "ad_id": 0,
                "ad_type": 0,
                "ad_pvurl": "",
                "ad_linkurl": "",
                "ad_makettime": "",
                "ad_closetime": "",
                "ad_share_cnt": "",
                "ad_pvurl_vendor": "",
                "content_id": "2556",
                "content_type": "1",
                "content_bgcolor": "#FFFFFF",
                "share_url": "http://m.wufazhuce.com/article/2556",
                "share_info": {
                    "url": "http://m.wufazhuce.com/article/2556",
                    "image": "http://image.wufazhuce.com/Fqd8DdNy-klTRzjgBG9S8vXAFqkM",
                    "title": "她的便利店 作者/风太",
                    "content": "就算你说的是真的，可你这个故事有一个很大的漏洞哦。"
                },
                "share_list": {
                    "wx": {
                        "title": "ONE STORY | 她的便利店",
                        "desc": "文/风太 就算你说的是真的，可你这个故事有一个很大的漏洞哦。",
                        "link": "http://m.wufazhuce.com/article/2556?channel=singlemessage",
                        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
                        "audio": ""
                    },
                    "wx_timeline": {
                        "title": "ONE STORY | 她的便利店",
                        "desc": "文/风太 就算你说的是真的，可你这个故事有一个很大的漏洞哦。",
                        "link": "http://m.wufazhuce.com/article/2556?channel=timeline",
                        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
                        "audio": ""
                    },
                    "weibo": {
                        "title": "ONE一个《ONE STORY | 她的便利店》 文/风太： 就算你说的是真的，可你这个故事有一个很大的漏洞哦。 阅读全文：http://m.wufazhuce.com/article/2556?channel=weibo 下载ONE一个APP:http://weibo.com/p/100404157874",
                        "desc": "",
                        "link": "http://m.wufazhuce.com/article/2556?channel=weibo",
                        "imgUrl": "",
                        "audio": ""
                    },
                    "qq": {
                        "title": "她的便利店",
                        "desc": "就算你说的是真的，可你这个故事有一个很大的漏洞哦。",
                        "link": "http://m.wufazhuce.com/article/2556?channel=qq",
                        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
                        "audio": ""
                    }
                },
                "tag_list": [
                    {
                        "id": "7",
                        "title": "ONE STORY"
                    }
                ]
            },
            {
                "id": "12252",
                "category": "1",
                "display_category": "1",
                "item_id": "2563",
                "title": "你可以你bibi",
                "forward": "“当父母老了以后，他们能教我们什么，他们能教我们的就是疾病、衰老、死亡，他们以这种方式来把最后一点人生的智慧和知识教给子女。”",
                "img_url": "http://image.wufazhuce.com/FnRS1xo-BDaoGzV1uKnXVLzstmAU",
                "like_count": 645,
                "post_date": "2017-06-25 06:00:00",
                "last_update_date": "2017-06-23 16:30:10",
                "author": {
                    "user_id": "7654034",
                    "user_name": "黄集伟",
                    "desc": "黄集伟，专栏作者，曾有“阅读笔记”系列、“语词笔记”系列、《孤岛访谈录》等闲书出版。",
                    "wb_name": "",
                    "is_settled": "0",
                    "settled_type": "0",
                    "summary": "黄集伟，专栏作者。",
                    "fans_total": "2101",
                    "web_url": "http://image.wufazhuce.com/FvVmWbqlle7jlUCTeozoval9NyBH"
                },
                "video_url": "",
                "audio_url": "",
                "audio_platform": 2,
                "start_video": "",
                "volume": 0,
                "pic_info": "",
                "words_info": "",
                "subtitle": "",
                "number": 0,
                "serial_id": 0,
                "serial_list": [],
                "movie_story_id": 0,
                "ad_id": 0,
                "ad_type": 0,
                "ad_pvurl": "",
                "ad_linkurl": "",
                "ad_makettime": "",
                "ad_closetime": "",
                "ad_share_cnt": "",
                "ad_pvurl_vendor": "",
                "content_id": "2563",
                "content_type": "1",
                "content_bgcolor": "#FFFFFF",
                "share_url": "http://m.wufazhuce.com/article/2563",
                "share_info": {
                    "url": "http://m.wufazhuce.com/article/2563",
                    "image": "http://image.wufazhuce.com/FnRS1xo-BDaoGzV1uKnXVLzstmAU",
                    "title": "你可以你bibi 作者/黄集伟",
                    "content": "Who Can Who Up？"
                },
                "share_list": {
                    "wx": {
                        "title": "一周语文 | 你可以你bibi",
                        "desc": "文/黄集伟 Who Can Who Up？",
                        "link": "http://m.wufazhuce.com/article/2563?channel=singlemessage",
                        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
                        "audio": ""
                    },
                    "wx_timeline": {
                        "title": "一周语文 | 你可以你bibi",
                        "desc": "文/黄集伟 Who Can Who Up？",
                        "link": "http://m.wufazhuce.com/article/2563?channel=timeline",
                        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
                        "audio": ""
                    },
                    "weibo": {
                        "title": "ONE一个《一周语文 | 你可以你bibi》 文/黄集伟： Who Can Who Up？ 阅读全文：http://m.wufazhuce.com/article/2563?channel=weibo 下载ONE一个APP:http://weibo.com/p/100404157874",
                        "desc": "",
                        "link": "http://m.wufazhuce.com/article/2563?channel=weibo",
                        "imgUrl": "",
                        "audio": ""
                    },
                    "qq": {
                        "title": "你可以你bibi",
                        "desc": "Who Can Who Up？",
                        "link": "http://m.wufazhuce.com/article/2563?channel=qq",
                        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
                        "audio": ""
                    }
                },
                "tag_list": [
                    {
                        "id": "3",
                        "title": "一周语文"
                    }
                ]
            },
            {
                "id": "12263",
                "category": "3",
                "display_category": "1",
                "item_id": "1773",
                "title": "不自律的生活就一定不好吗？",
                "forward": "每个人都有自己的局限性，那些突破了自身局限的人很了不起，但是承认自己就是不够自律也没什么丢人的。\r\n",
                "img_url": "http://image.wufazhuce.com/FkyWLMsDTpQNj7m-QWOApRdJk5KK",
                "like_count": 1715,
                "post_date": "2017-06-25 06:00:00",
                "last_update_date": "2017-06-24 23:50:21",
                "author": {
                    "user_id": "8103073",
                    "user_name": "斑马 答 发明黑暗的爱迪生",
                    "desc": "斑马，青年作家，咨询师，壹心理最佳专栏作家。新书《从今天起，不活在别人的期待里》。公众号：油炸绿番茄（ID : tomato2050）",
                    "wb_name": "@斑马的后花园",
                    "is_settled": "0",
                    "settled_type": "0",
                    "summary": "青年作家，咨询师。",
                    "fans_total": "376",
                    "web_url": "http://image.wufazhuce.com/Fq8CTVfiV-W4DjN_PTQ9UeqcgI7i"
                },
                "video_url": "",
                "audio_url": "",
                "audio_platform": 2,
                "start_video": "",
                "volume": 0,
                "pic_info": "",
                "words_info": "",
                "subtitle": "",
                "number": 0,
                "serial_id": 0,
                "serial_list": [],
                "movie_story_id": 0,
                "ad_id": 0,
                "ad_type": 0,
                "ad_pvurl": "",
                "ad_linkurl": "",
                "ad_makettime": "",
                "ad_closetime": "",
                "ad_share_cnt": "",
                "ad_pvurl_vendor": "",
                "content_id": "1773",
                "content_type": "3",
                "content_bgcolor": "#FFFFFF",
                "share_url": "http://m.wufazhuce.com/question/1773",
                "share_info": {
                    "url": "http://m.wufazhuce.com/question/1773",
                    "image": "http://image.wufazhuce.com/FkyWLMsDTpQNj7m-QWOApRdJk5KK",
                    "title": "不自律的生活就一定不好吗？",
                    "content": "很多鸡汤文都宣扬要自律。但是爱干嘛干嘛自由自在随心随欲的生活就不好吗？"
                },
                "share_list": {
                    "wx": {
                        "title": "问答 | 不自律的生活就一定不好吗？",
                        "desc": "文/斑马 承认自己就是不够自律也没什么丢人的。",
                        "link": "http://m.wufazhuce.com/question/1773?channel=singlemessage",
                        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
                        "audio": ""
                    },
                    "wx_timeline": {
                        "title": "问答 | 不自律的生活就一定不好吗？",
                        "desc": "文/斑马 承认自己就是不够自律也没什么丢人的。",
                        "link": "http://m.wufazhuce.com/question/1773?channel=timeline",
                        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
                        "audio": ""
                    },
                    "weibo": {
                        "title": "ONE一个《问答 | 不自律的生活就一定不好吗？》 文/斑马： 承认自己就是不够自律也没什么丢人的。 阅读全文：http://m.wufazhuce.com/question/1773?channel=weibo 下载ONE一个APP:http://weibo.com/p/100404157874",
                        "desc": "",
                        "link": "http://m.wufazhuce.com/question/1773?channel=weibo",
                        "imgUrl": "",
                        "audio": ""
                    },
                    "qq": {
                        "title": "不自律的生活就一定不好吗？",
                        "desc": "承认自己就是不够自律也没什么丢人的。",
                        "link": "http://m.wufazhuce.com/question/1773?channel=qq",
                        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
                        "audio": ""
                    }
                },
                "tag_list": []
            },
            {
                "id": "12221",
                "category": "1",
                "display_category": "1",
                "item_id": "2555",
                "title": "软糖| “一段对话” _ 午休",
                "forward": "我们每周会选择一个主题，由七个作者绘制不同风格的短篇漫画，每天一幅。",
                "img_url": "http://image.wufazhuce.com/FokswjlqFuL67gzXwit02cl39hsi",
                "like_count": 273,
                "post_date": "2017-06-25 06:00:00",
                "last_update_date": "2017-06-20 18:13:45",
                "author": {
                    "user_id": "7772421",
                    "user_name": "张益磊",
                    "desc": "插画、漫画创作人，现居上海。",
                    "wb_name": "",
                    "is_settled": "0",
                    "settled_type": "0",
                    "summary": "插画、漫画创作人，现居上海。",
                    "fans_total": "943",
                    "web_url": "http://image.wufazhuce.com/FqWEwKEa0b1NnppFuZ3x9mgHZMxG"
                },
                "video_url": "",
                "audio_url": "",
                "audio_platform": 2,
                "start_video": "",
                "volume": 0,
                "pic_info": "",
                "words_info": "",
                "subtitle": "",
                "number": 0,
                "serial_id": 0,
                "serial_list": [],
                "movie_story_id": 0,
                "ad_id": 0,
                "ad_type": 0,
                "ad_pvurl": "",
                "ad_linkurl": "",
                "ad_makettime": "",
                "ad_closetime": "",
                "ad_share_cnt": "",
                "ad_pvurl_vendor": "",
                "content_id": "2555",
                "content_type": "1",
                "content_bgcolor": "#FFFFFF",
                "share_url": "http://m.wufazhuce.com/article/2555",
                "share_info": {
                    "url": "http://m.wufazhuce.com/article/2555",
                    "image": "http://image.wufazhuce.com/FokswjlqFuL67gzXwit02cl39hsi",
                    "title": "软糖| “一段对话” _ 午休 作者/张益磊",
                    "content": "我们每周会选择一个主题，由七个作者绘制不同风格的短篇漫画，每天一幅。"
                },
                "share_list": {
                    "wx": {
                        "title": "软糖漫画 | 软糖| “一段对话” _ 午休",
                        "desc": "文/张益磊 我们每周会选择一个主题，由七个作者绘制不同风格的短篇漫画，每天一幅。",
                        "link": "http://m.wufazhuce.com/article/2555?channel=singlemessage",
                        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
                        "audio": ""
                    },
                    "wx_timeline": {
                        "title": "软糖漫画 | 软糖| “一段对话” _ 午休",
                        "desc": "文/张益磊 我们每周会选择一个主题，由七个作者绘制不同风格的短篇漫画，每天一幅。",
                        "link": "http://m.wufazhuce.com/article/2555?channel=timeline",
                        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
                        "audio": ""
                    },
                    "weibo": {
                        "title": "ONE一个《软糖漫画 | 软糖| “一段对话” _ 午休》 文/张益磊： 我们每周会选择一个主题，由七个作者绘制不同风格的短篇漫画，每天一幅。 阅读全文：http://m.wufazhuce.com/article/2555?channel=weibo 下载ONE一个APP:http://weibo.com/p/100404157874",
                        "desc": "",
                        "link": "http://m.wufazhuce.com/article/2555?channel=weibo",
                        "imgUrl": "",
                        "audio": ""
                    },
                    "qq": {
                        "title": "软糖| “一段对话” _ 午休",
                        "desc": "我们每周会选择一个主题，由七个作者绘制不同风格的短篇漫画，每天一幅。",
                        "link": "http://m.wufazhuce.com/article/2555?channel=qq",
                        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
                        "audio": ""
                    }
                },
                "tag_list": [
                    {
                        "id": "1",
                        "title": "软糖漫画"
                    }
                ]
            },
            {
                "id": "12246",
                "category": "4",
                "display_category": "1",
                "item_id": "2152",
                "title": "我们在长夜里浪费了良辰和美景，我们在雨中手扶岁月和灰尘",
                "forward": "你幽居在哪一座星宿，为何远踞天空的暗处，精心构置着我们尘世的生活。",
                "img_url": "http://image.wufazhuce.com/FhdecFk4in7SA2F8MkEE62NwTErx",
                "like_count": 1685,
                "post_date": "2017-06-25 06:00:00",
                "last_update_date": "2017-06-24 21:32:03",
                "author": {
                    "user_id": "8111646",
                    "user_name": "Iron & Wine",
                    "desc": "Samuel Beam，艺名Iron & Wine，独立民谣时代的都市乡愁，美国民谣摇滚原创歌手。",
                    "wb_name": "",
                    "is_settled": "0",
                    "settled_type": "0",
                    "summary": "美国民谣摇滚原创歌手",
                    "fans_total": "0",
                    "web_url": "http://image.wufazhuce.com/FohyTpSri_aXgs--sTMD-xFHunt-"
                },
                "video_url": "",
                "audio_url": "",
                "audio_platform": 2,
                "start_video": "",
                "volume": 0,
                "pic_info": "",
                "words_info": "",
                "subtitle": "专辑:The Shepherd's Dog",
                "number": 0,
                "serial_id": 0,
                "serial_list": [],
                "movie_story_id": 0,
                "ad_id": 0,
                "ad_type": 0,
                "ad_pvurl": "",
                "ad_linkurl": "",
                "ad_makettime": "",
                "ad_closetime": "",
                "ad_share_cnt": "",
                "ad_pvurl_vendor": "",
                "content_id": "2152",
                "content_type": "4",
                "content_bgcolor": "#FFFFFF",
                "share_url": "http://h.xiami.com/one-share.html?id=1119377",
                "share_info": {
                    "url": "http://h.xiami.com/one-share.html?id=1119377",
                    "image": "http://image.wufazhuce.com/FhdecFk4in7SA2F8MkEE62NwTErx",
                    "title": "「一个」音乐: Iron & Wine Flightless Bird, American Mouth",
                    "content": "\n26年过去了，世人依然只知海子，不知还有戈麦。\n提起早逝的北大诗人，人们的第一反应总是海子，却少有人知道戈麦，这位同样顽固、忧伤、又才华横溢的诗人。\n戈麦，原名褚福军，1967年生于黑龙江省萝北县宝泉岭农场，1985年考入北京大学中文系，有北大“校园诗人”之称。1991年9月24日自沉于北京西郊万泉河，时年仅二十四岁。\n作为黑龙江人，戈麦生前一直向往着江南，他曾在自述中写道：“戈麦寓于北京，但喜欢南方的都市生活。他觉得在那些曲折回旋的小巷深处，在那些雨水从街面上流到室内，从屋顶上漏至铺上的诡秘生活中，一定会发生许多绝而又绝的故事。”结果是，这些绝而又绝的故事发生在他自己身上。\n从1985年开始尝试写作算起，戈麦的实际写作时间不到6年，就在这6年时间里，他却给我们留下了大量诗作。\n他曾经在《关于诗歌》一文中阐述过自己的诗歌观：“诗歌应当是语言的利斧，它能够剖开心灵的冰河。在词与词的交汇、融合、分解、对抗的创造中，犀利夺目的语言之光必将照亮人的生存。诗歌直接从属于幻想，它能够拓展心灵与生存的空间，同时让不可能的成为可能。”\n有人说过，一个诗人的热情是无限的，戈麦则用其有限的生命证明了这一点。\n1、深夜\n深夜我对着一只\n沾满星光的盆\n遥远的时间的岸上\n白衣峨冠的道士\n载渡着不愿生活的人\n当我把手伸进夜空\n雾就纷纷落下\n我不能拯救\n我的疑虑在空气中延伸\n2、界限\n发现我的，是一本书；是不可能的。\n飞是不可能的。\n居住在一家核桃的内部，是不可能的。 \n三根弦的吉他是不可能的。\n让田野装满痛苦，是不可能的。\n双倍的激情是不可能的。\n忘却词汇，是不可能的。\n留，是不可能的。\n和上帝一起宵夜，是不可能的。\n死是不可能的。\n3、妄想时光倒流\n时光倒流，夕阳从海上升起 \n往世的人从肮脏的街道爬出 \n即便在一个清晰的早晨 \n一个人和他早年时期的形象相遇 \n相互沉默不语 \n同样在黄昏时刻，有许多窗子打开 \n里面陈放着我们认识不清的物品 \n树叶上的叶子在风中鸣响 \n映照的是同一种光，是病人眼中算差的时辰 \n时光倒流，你会遇到很多过去的东西 \n一封信，让你困惑多时 \n一本书页从后向前翻起 \n一瓶白酒自下而上流入杯中 \n不同时代的列车在岔路口相持 \n鸟儿在水中游荡 \n演算代数的狮子在大地上摆满事物的结局 \n王在沉思，是天堂还是地狱 \n时光倒流，一颗头颅跑回审判台上 \n野火从废墟的石头上燃起 \n幸存的人们重新向火灾深处走去 \n海水重新返回大地 \n松散的阳光流入一片广阔的空虚\n4、命运\n我们诞生时的月晕，我们睡梦时的薄雪 \n我们黎明深处的梦境，我们想象中的草鞋 \n肯定与你有关 \n我们在洁白的纸上写下鲜血和记忆 \n我们在长夜里浪费了良辰和美景\n我们在雨中手扶岁月和灰尘\n也一定与你有关 \n你不要沉默不语 \n你掩口微笑的日子已经够多 \n你幽居在哪一座星宿 \n为何远踞天空的暗处 \n精心构置着我们尘世的生活\n5、誓言\n好了。我现在接受全部的失败\n全部的空酒瓶子和漏着小眼儿的鸡蛋\n好了。我已经可以完成一次重要的分裂\n仅仅一次，就可以干得异常完美\n对于我们身上的补品，抽干的校样\n爱情、行为、唾液和革命理想\n我完全可以把它们全部煮进锅里\n送给你，渴望我完全垮掉的人\n但我对于我肢解后的那些零件\n是给予优厚的希冀，还是颓丧的废弃\n我送给你一颗米粒，好似忠告\n是作为美好形成的据点还是丑恶的证明\n所以，还要进行第二次分裂\n瞄准遗物中我堆砌的最软弱的部位\n判决——我不需要剩下的一切\n哪怕第三、第四，加法和乘法\n全部扔给你。还有死鸟留下的衣裳\n我同样不需要减法，以及除法\n这些权利的姐妹，也同样送给你\n用它们继续把我的零也给废除掉\n6、南方\n像是从前某个夜晚遗落的微雨\n我来到南方的小站\n檐下那只翠绿的雌鸟\n我来到你妊娠着李花的故乡\n我在北方的书记中想象过你的音容\n四处是亭台的摆设和越女的清唱\n漫长的中古 南方的衰微\n一只杜鹃委婉地走在清晨\n我的耳畔是另一个国度 另一个东方\n我抓住它 那是我想要寻找的语言\n我就要离开着哺育过我的原野\n在寂寥的夜晚 徘徊于灯火陌生的街头\n此后的生活就要从一家落雨的客栈开始\n一扇门扉挡不住青苔上低旋的寒风\n我是误入了不可返归的浮华的想象\n还是来到了不可饶恕的经验乐园\n7、献给黄昏的星\n黄昏的星从大地海洋升起\n我站在黑夜的尽头\n看到黄昏像一座雪白的裸体\n我是天空中唯一一颗发光的星星\n在这艰难的时刻\n我仿佛看到了另一种人类的昨天\n三个相互残杀的事物被怼到了一起\n黄昏，是天空中唯一的发光体\n星，是黑夜的女儿苦闷的床单\n我，是我一生中无边的黑暗\n在这最后的时刻，我竟能梦见\n这荒芜的大地，最后一粒种子\n这下垂的时间，最后一个声音\n这个世界，最后的一件事情，黄昏的星\n8、彗星\n你位临这生长人番的汪洋\n几千日一个轮转 你为何不能遗忘\n这指针一样精确的记忆\n抛进大海它只是一颗颗瘦小的盐粒\n千万颗灰尘 你用其中的一个\n印刻了我们这个默默无闻的球体\n当故国的山河又一次印章一样在下界闪现\n你空茫的内核为之一颤\n万人都已入睡 只有我一人\n瞥见你 在不眠之夜\n神秘之光 箭羽之光\n砂纸一样地灼烧 我侧耳倾听\n今夜过后 你是燃毁于云层\n还是穿越环形的大地 这可怕的意念\n在茫茫的寰宇之中我触及了\n你一年一度的隐痛和焦虑\n人迹罕至 惊人的景象已不多见\n在沉酣如梦的世上 今夜\n这星球之上 只有一双尘世的双眼 望着你\n你寒冷的光芒已渐趋消弱\n多年之后 你运行的海王星的外围\n在椭圆的诡计最疾速易逝的弧段\n你的内心为遥远的一束波光刺痛\n那唯一的目击熬不过今夜 他合上了双眼\n9、鲸鱼\n我只望见你浪头后隆起的尾部\n手掌一样翻起的水面像一片片涌起的屏风\n而你的尾部像一座消逝在海中的山\n我的目眸稍有疲惫，就在那一瞬间我失去了你\n你这海上不平凡的事物\n未来人们不可捉摸的海上奇谈\n你滑过这一片绿色一样的水面\n像一卷落帆，用不上一个崭新的理念\n从闪现到消逝，这个过程缓慢得有一个钟点\n我等待它重新从水面露出\n我的内心从微凉滑到冰凉\n像一个慵倦的形象\n你水晶一样的黑洞和头部柔缓的曲线\n无边的身躯和黝黑的皮肤，我从未遇见\n你属于我们时代正在消逝的事物\n我幻想着，耗尽每一个平凡的夜晚\n10、玫瑰\n我只讲述那另一种玫瑰 在月轮之下\n琥珀的马、人形和神的玫瑰\n那不为人怀念的早晨和夜晚星宿的玫瑰\n有着云的身影和少女一样身段的\n我的目光所及数十里方圆之内\n草丛之上土和泪水 野兽口中阴沉的玫瑰\n这是雪地上五朵梦中的白鹿\n所留下的印迹在月光之中\n像夜晚晦暗的阴谋　应着梦中的节拍\n合二为一 又一分为二\n或是历史书中一个久久不现的鬼魂\n在遥远的空地上吐着鲜红的嘴唇\n这些紫红色的星群 绚丽的镜象\n曾在不多的几个人的一生中闪耀\n魏尔伦的黄昏和一个叫坡的欧洲人\n相似偏僻的康帕斯高原迷惑着花蕊的芳香\n像是寒冷的空气中微小而发抖的殉难者\n以及他们梦想中直通天庭的矮小的回廊\n总会有许多事物将被留下 像海面上\n泡沫的灯盏 昆虫一样蔽日的船舰\n一百年的贵族之战 死亡用红笔\n注销着我 我的姓氏和爵位\n那就是我 一个梦想篡夺大英王位的大臣\n在玫瑰色的早晨 命运给我佩戴了红色的花蕾\n一定有许多只眼睛目睹过这全部的失败过程\n是玫瑰 在原野的胸骨上祷告上苍\n像黄昏之中消逝的花园\n野马弛过天空 草木如灰\n我聆听着迷雾之中花神轻微的合唱\n摧毁我的是那过度的奢望和玫瑰中的月轮\n"
                },
                "share_list": {
                    "wx": {
                        "title": "周末读诗 | 你幽居在哪一座星宿，为何远踞天空的暗处，精心构置着我们尘世的生活",
                        "desc": "文/ONE APP 我们在长夜里浪费了良辰和美景，我们在雨中手扶岁月和灰尘。",
                        "link": "http://h.xiami.com/one-share.html?id=1119377&channel=singlemessage",
                        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
                        "audio": ""
                    },
                    "wx_timeline": {
                        "title": "周末读诗 | 你幽居在哪一座星宿，为何远踞天空的暗处，精心构置着我们尘世的生活",
                        "desc": "文/ONE APP 我们在长夜里浪费了良辰和美景，我们在雨中手扶岁月和灰尘。",
                        "link": "http://h.xiami.com/one-share.html?id=1119377&channel=timeline",
                        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
                        "audio": ""
                    },
                    "weibo": {
                        "title": "ONE一个《周末读诗 | 你幽居在哪一座星宿，为何远踞天空的暗处，精心构置着我们尘世的生活》 文/ONE APP： 我们在长夜里浪费了良辰和美景，我们在雨中手扶岁月… 阅读全文：http://h.xiami.com/one-share.html?id=1119377&channel=weibo 下载ONE一个APP:http://weibo.com/p/100404157874",
                        "desc": "",
                        "link": "http://h.xiami.com/one-share.html?id=1119377&channel=weibo",
                        "imgUrl": "",
                        "audio": ""
                    },
                    "qq": {
                        "title": "你幽居在哪一座星宿，为何远踞天空的暗处，精心构置着我们尘世的生活",
                        "desc": "我们在长夜里浪费了良辰和美景，我们在雨中手扶岁月和灰尘。",
                        "link": "http://h.xiami.com/one-share.html?id=1119377&channel=qq",
                        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
                        "audio": ""
                    }
                },
                "tag_list": [
                    {
                        "id": "24",
                        "title": "周末读诗"
                    }
                ]
            },
            {
                "id": "12264",
                "category": "5",
                "display_category": "1",
                "item_id": "860",
                "title": "即使已看过100遍，但何以解忧？还是唯有《老友记》",
                "forward": "时间值得浪费，也要浪费在让你开心的事物上。",
                "img_url": "http://image.wufazhuce.com/FpyBRcP6YQmV2vGmOeEkQkG7jNQg",
                "like_count": 0,
                "post_date": "2017-06-25 06:00:00",
                "last_update_date": "2017-06-24 22:46:24",
                "author": {
                    "user_id": "0",
                    "user_name": " 小豆",
                    "web_url": "http://image.wufazhuce.com/placeholder-author-avatar.png",
                    "summary": "",
                    "desc": "",
                    "is_settled": "",
                    "settled_type": "",
                    "fans_total": "",
                    "wb_name": ""
                },
                "video_url": "",
                "audio_url": "",
                "audio_platform": 2,
                "start_video": "",
                "volume": 0,
                "pic_info": "",
                "words_info": "",
                "subtitle": "电影:老友记",
                "number": 0,
                "serial_id": 0,
                "serial_list": [],
                "movie_story_id": "3843",
                "ad_id": 0,
                "ad_type": 0,
                "ad_pvurl": "",
                "ad_linkurl": "",
                "ad_makettime": "",
                "ad_closetime": "",
                "ad_share_cnt": "",
                "ad_pvurl_vendor": "",
                "content_id": "860",
                "content_type": "5",
                "content_bgcolor": "#FFFFFF",
                "share_url": "http://m.wufazhuce.com/movie/860",
                "share_info": {
                    "url": "http://m.wufazhuce.com/movie/860",
                    "image": "http://image.wufazhuce.com/FpyBRcP6YQmV2vGmOeEkQkG7jNQg",
                    "title": "「一个」电影: 老友记",
                    "content": "\n前一阵子朱皮突然离婚，我的第一反应是：好想再看一遍《老友记》。\n好像不管发生什么，解药都是看一遍《老友记》。\n我已经看了很多遍《老友记》，从哪儿放都能接上。毕竟这个剧，剧本流畅，既怪咖又主流。真是好神奇。\n不知不觉间，曼哈顿街景在看剧中变得亲切。\n莫妮卡的公寓显然就在华盛顿广场附近，在大大有名的格林威治村。\n那里离纽约大学近，住着很多艺术家。而我们小时候学的课文——欧亨利的《最后一片叶子》，开篇第一句话就是“在华盛顿广场西边的一个小区里……”。\n对，这个故事里的画家们就住在华盛顿广场西边的格林威治村。\n\n\n 《老友记》中处处可见令人眼熟的曼哈顿街景，这里是Ross和他的倒不出来的老爷车\n\n我很快就断断续续地看到了第六季。\nRachel和Ross的关系变得有点儿找抽；Chandler开始胖到方头方脑没脖子（后来证明是演员酗酒所致）；\nMonica突然变漂亮了，原因是她整容了（最近有点整过头了）；Rachel的颜值在高起点上一直稳步上升，绝对是时尚担当；\nJoey越演越出彩，渐渐露出了“续集担当”的意思了；Phoebe我一直摸不着她的门道儿，怪咖芭比和神经大婶儿二合一；\nRoss各方面都最稳定，但该不靠谱的继续不靠谱。\n总之一切都好，笑声不断，除了双子塔在每一集都出现，让人感到刺痛。\n但是在那么多次重看之后，我第一次注意到了一句话。\n那是第六季第四集，Ross去纽约大学讲古生物学。为了搏出位，他强装英国腔，结果Monica和Rachel突然出现在教室惊讶地盯着他，让他完全泄了气。他只好跟学生老实说：“我不是英国人，我来自长岛。”\n\n\n\n 囧爆了Ross坦言自己来自长岛\n\n我在这一句后面按了暂停。\n在《老友记》播出这么多年后，我才突然意识到，原来，这个曼哈顿年轻人逗比故事的欢乐根基，在于长岛啊。\n很多人对《老友记》的设定表示不明白。\n为什么这些年轻人随便当个厨师或者端端咖啡什么的，就住得起曼哈顿的公寓，负担得了那么贵的生活？他们说这是胡编，是不真实的。\n是的，大城市的友谊和爱情，是昂贵的。尤其是在曼哈顿。\n不过，其实所有的解释都在Ross的这句话里：“我来自长岛。”\n长岛是美国有名的富人区，是曼哈顿的后花园，又以学区好而著名。\n\n\n 土豪长岛夜景\n\n长岛的公立学校，比如高中，能在就近入学而非考试选拔的情况下，在全美国近三万学校里排到前30。而排在它前面的，很多都是经过考试选拔的重点学校。\n所以Ross受过良好的教育就比较说得过去，他也自然而然为六个人确立了招人待见的“好孩子”身份。因为他是长岛来的嘛。\n其实长岛也不是人人都那么有钱，可Ross的爸爸Jack Geller开保时捷，他妈则一瞅就知道是阔太太。所以他家在长岛至少是排中上的。\n同样因为“来自长岛”，Ross的妹妹Monica才很自然地有两套曼哈顿公寓可以继承。这可是很值钱的。至于为什么妹妹Monica有公寓继承而哥哥Ross却没有，原因可能有两点。\n第一，Ross也许继承了别的，编剧不是一定得交代得那么清楚；第二，多半只有富人家才能做到这种程度的不重男轻女，把财产都留给女性继承人。如果不是交待了来自长岛的家庭背景，一般人家做这种事就不那么能被轻易理解了。\n然后再说Rachel。\nRachel和Monica是初、高中同学，那她家基本也就是住在长岛。\n\n\n Rachel和Monica的高中时代\n\n上面说过，长岛和曼哈顿、布鲁克林、皇后区都不一样。公立学校是就近入学制，是不用经过考试选拔的。即使上的是私立，但因为Rachel老是腻在Monica家里，两人能从小玩到大，那两家一定离得不远。\nRachel的爸爸是个医生，这一点第一集就交待了。所以Rachel家里有钱，她那时每天的乐子就是跟一群同样有钱的女友们到处购物，是个花钱小专家。\n本来Rachel是要嫁给牙医当阔太太的，谁知她逃婚端咖啡去了。第一集的故事就是这么展开的。\n端了一个月的咖啡，第一个月的工资单下来，Rachel非常非常失望，她不能相信自己一个月忙活地这么累，居然挣的这么少。\n\n\n 第一季时逃婚的Rachel，好美啊\n\n在这里，编剧其实写了一个真实的曼哈顿。曼哈顿就是这样的地方，生活成本很高，可是如果你不是干投行什么的，收入也高不到哪儿去。\n可是，Rachel还是在大家的怂恿下，把她爹给她的信用卡剪了。\n除了自食其力的勇气，悔婚、剪掉信用卡的更深层原因，仍然是因为Ross那一句“我来自长岛”。\n一般来讲，富人家的小孩儿更不怕穷，更有勇气从事自己喜欢干的工作，为爱情冒险。他们没有经历过匮乏，他们有人接盘，他们心里更有底。\n\n\n 痛下决心，准备剪卡的Rachel\n\n对Rachel来讲，虽然要交Monica的房租，可是Monica毕竟是她的中学同学，是她最要好的朋友。大家知根知底，Rechel就是欠房租，对Monica来说，她还能跑到哪里去？\nRachel生病了有医保，她爸就是医生。就算实在付不起房租了，要钱也只是张口的事（她爸还因为她的附属卡突然不消费了吓得上门来找她，以为她出了什么事，惊问“你咋不刷我的卡了？！”）\n至于Chandler，他是Ross的大学室友，虽然没交待到底是啥大学，但应该也还不错。因为Ross是学霸，是Geller家的骄傲（Monica从小就是肥妹+丑小鸭，可是，她继承了天价公寓！兄妹俩扯平了），而Chandler是Ross的朋友，所以他还能差到哪里去。\n\n\n Chandler和Ross的…呃…大学时代\n\nChandler虽然不一定来自长岛，但家里也很有钱。还记得他父母在感恩节当天，在他吃撑了火鸡的时候告诉他离婚的消息。而旁边的佣人则不识趣地盯着他问道：“少爷你要不要再吃点儿火鸡啊？”\n\n\n 听闻父母离婚及其诡异理由的小Chandler ，眼神到位\n\n这让Chandler恨透了感恩节和火鸡。但也说明Chandler家是有佣人的。Chandler的爸爸据说是个同性恋，开了个同性恋俱乐部。他妈妈是个美女作家，看上去经济状况非常不错。\n所以美国的有钱人，除了长岛的，还有很多很多。可Chandler虽然家境好，却有不小的原生家庭创伤，跟家里人很不亲近。也正因为如此，他把朋友当家人，每天跟他们混得不亦乐乎。\n也正因为Ross、Monica、Rachel、Chandler四个人都是有钱人家的小孩儿，这个六人组合才比较稳固——相似的生活背景，父辈强有力的经济基础为他们做了担保。\n一句“我来自长岛”，反映了编剧的世故。\n美国是个最不浪漫的国家，钱在这个国家的地位十分清晰，没有钱虽不是寸步难行，但标准是在那明摆着的。一切都必须以足够的钱为基础，包括美德。所以，《老友记》的编剧非但没有胡扯友谊，瞎编浪漫，反倒是非常现实的。\n编剧甚至让Ross亲口说了两遍“我来自长岛”。第一次是在上面说的第六季第四集，在Ross给纽约大学的学生讲课的时候。第二次则是在第六季第八集。\n在那一集里，Ross把牙齿狠狠漂白去泡妞儿，但因为牙太白，他捂着嘴不好意思说话，最后不得已，扭扭捏捏地跟人自我介绍说“我是在长岛长大的”。\n\n\n Ross不露齿地第二次说出自己来自长岛\n\n可见，这句“我来自长岛”的台词，对剧情很重要。\n但编剧没有让年轻人的友谊变成有钱人的同盟，那样太没意思也太不政治正确了。\n真正的友谊，只要有稳定的经济基础，就是完全可以产生的，也是完全可以不分阶级、阶层、知识、穷富......whatever的。\n（注意，这六个人里有四个是富人的小孩儿，注意这个微妙的比例。）\n所以，就出现了Joey和Phoebe。\n\n\n Joey和Phoebe不像其他四人一样手头宽裕，剧中二人也对此心知肚明\n\nJoey是意裔。他的父母一看就没受过良好教育，家里孩子又多，有一大堆姐姐。\nJoey穷，简直是纽约最吃了上顿没下顿的。他还是个九流演员。而他“艺术家”的身份绝对是现实生活的灾难和制造客观欢乐的小源泉。\nJoey出现在六个人里带点偶然性。Chandler在挑选室友的时候面试过他，但并没有选他。但是另一个被选中的人阴差阳错地没来，Joey才当上了Chandler的室友。\n\n\n Joey在剧中是一个有点脱线又重情重义的…逗比\n\nJoey之所以能持久地和其他人一起生活下去，付房租，分摊披萨、生日party和水电电话费，主要是因为Chandler是做财务的。他不仅挣钱多，还老明里暗里地贴补Joey。\n看来和谐社会的出现，有时还是需要富人的小孩儿多做一点儿努力。\nPhoebe也是个都市穷孩子。她从小被生父生母抛弃，养母又在她小时候自杀，不得不在小小年纪时就自食其力。\n她不仅是六个人里最知道人生疾苦的，也是六个人中最堪称品德高尚的。她从不贪财，还主动借钱给富人家的孩子Monica创业。\n\n\n Phoebe人生中的第一辆自行车，Ross送的\n\n编剧真是太政治正确了，懂事。Phoebe的祖母去世后，编剧体贴地把房子留给了她。要不然的话，Phoebe做体力劳动打工的收入，即使能够应付曼哈顿的生活费用，也是没法长期维持她和其他五个人的交往的。\n还是那句话，大城市的友谊和爱情都是昂贵的。\nMonica继承的两间贵价公寓，给了六个人的曼哈顿友谊一个稳固的屋顶；Ross和Rachel的爱情主线，串起了整个十季的剧集。\n这么一想，恰恰是Ross、Rachel、Monica这三个长岛孩子的背景，给了这段曼哈顿友谊一个支撑。这支撑就是他们背后的钱，和他们所受的教育。\n为什么来自长岛的孩子在编剧看来就更逗比，更好玩，拿着开涮更顺手呢？也许因为长岛的孩子大部分是散漫的。\n长岛的公立学校都离家近，孩子们每天睡到日上三竿。课业压力、通勤压力跟纽约市的孩子比都要小很多。私立学校课业即使重一些，但还是相对舒服的。长岛就是个风景如画的散漫之地，是孩子的天堂。\n此外，也许在编剧看来，只有长岛，才能支撑起六个人在残酷的“大苹果”里建立的温馨友谊，才不至于让他们友谊的小船在金钱世界中说翻就翻。\n（我感觉我像个搞长岛房地产的。）\n最近我看到一篇文章，标题是“《老友记》创造了脑残一代”。我心想“脑残”已经变成夸人的新词儿了吗？因为在我看来，《老友记》显然改变了不止一代的中国人。\n“多嘲笑自己，少折磨别人”，“与其阶级斗争，不如正常放松”，你看这是多好的教育啊。“放过自己和这个世界吧！”。\n我觉得像《老友记》那样每天人畜无害傻呵呵，比天天没事儿老想着怎么祸害社会，要好很多。\n\n\n"
                },
                "share_list": {
                    "wx": {
                        "title": "电影 | 即使已看过100遍，但何以解忧？还是唯有《老友记》",
                        "desc": "文/ 小豆 时间值得浪费，也要浪费在让你开心的事物上。",
                        "link": "http://m.wufazhuce.com/movie/860?channel=singlemessage",
                        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
                        "audio": ""
                    },
                    "wx_timeline": {
                        "title": "电影 | 即使已看过100遍，但何以解忧？还是唯有《老友记》",
                        "desc": "文/ 小豆 时间值得浪费，也要浪费在让你开心的事物上。",
                        "link": "http://m.wufazhuce.com/movie/860?channel=timeline",
                        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
                        "audio": ""
                    },
                    "weibo": {
                        "title": "ONE一个《电影 | 即使已看过100遍，但何以解忧？还是唯有《老友记》》 文/ 小豆： 时间值得浪费，也要浪费在让你开心的事物上。 阅读全文：http://m.wufazhuce.com/movie/860?channel=weibo 下载ONE一个APP:http://weibo.com/p/100404157874",
                        "desc": "",
                        "link": "http://m.wufazhuce.com/movie/860?channel=weibo",
                        "imgUrl": "",
                        "audio": ""
                    },
                    "qq": {
                        "title": "即使已看过100遍，但何以解忧？还是唯有《老友记》",
                        "desc": "时间值得浪费，也要浪费在让你开心的事物上。",
                        "link": "http://m.wufazhuce.com/movie/860?channel=qq",
                        "imgUrl": "http://image.wufazhuce.com/ONE_logo_120_square.png",
                        "audio": ""
                    }
                },
                "tag_list": []
            }
        ]
    }
}
```



