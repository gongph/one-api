/**
 * 更多用法见API: https://github.com/gongph/one-api
 * author: gongph
 */

import path from 'path'

/**
 * Root
 */

const ROOT = 'http://v3.wufazhuce.com:8000'

/**
 * 首页
 */

// 获取前十天的图文列表
const idlist = path.join(ROOT, '/api/onelist/idlist')
// 根据id获取某一天的图文列表
const hpdetail = path.join(ROOT, '/api/onelist/{id}/0')

/**
 * 阅读
 */

// 获取最新10条阅读
const toptenreading = path.join(ROOT, '/api/channel/reading/more/0')
// 上拉刷新获取下一页阅读
const nextreading = path.join(ROOT, '/api/channel/reading/more/{id}')

// 短文
// 根据id获取短文详情
const essaydetail = path.join(ROOT, '/api/essay/{id}')

// 连载
// 根据id获取连载详情
const serialdetail = path.join(ROOT, '/api/serialcontent/{id}')

// 问答
// 根据id获取问答详情
const questiondetail = path.join(ROOT, '/api/question/{id}')

/**
 * 音乐
 */

// 获取最新10条音乐
const toptenmusic = path.join(ROOT, '/api/channel/music/more/0')
// 上拉刷新获取下一页音乐
const nextmusic = path.join(ROOT, '/api/channel/music/more/{id}')
// 根据 item_id 获取音乐详情
cont musicdetail = path.join(ROOT, '/api/music/detail/{item_id}')

/**
 * 影视
 */

// 获取最新10条影视
const toptenmovie = path.join(ROOT, '/api/channel/movie/more/0')
// 上拉刷新获取下一页影视
const nextmovie = path.join(ROOT, '/api/channel/movie/more/{id}')
// 根据id获取影视详情
const moviedetail = path.join(ROOT, '/api/movie/{id}/story/1/0')
// 根据id获取头部滚动的五张图片和电影海报信息
const posterdetail = path.join(ROOT, '/api/movie/detail/{id}')

/**
 * 搜索
 */

// 根据频道类型和关键字搜索
const searchBychannelAndkeyword = path.join(ROOT, '/api/search/{channel}/{keyword}')
// 根据类型和月份搜索
const searchBytypeAndmonth = path.join(ROOT, '/api/{type}/bymonth/{month}')

/**
 * 评论
 */

// 根据类型和id获取评论列表
const getCommentBytypeAndid = path.join(ROOT, '/api/comment/praiseandtime/{category}/{id}/0')
// 上拉获取下一页评论
const getNextPageComment = path.join(ROOT, '/api/comment/praiseandtime/{category}/{id}/{lastcommentid}')