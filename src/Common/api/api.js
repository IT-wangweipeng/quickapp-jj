import api from './index'

//书城
export function bookMarketIndex(sex = 0, data) {
  return api.bookMarketIndex(sex, data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//书城换一换
export function bookMarketChange(id = 0) {
  return api.bookMarketChange(id)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//书城查看更多
export function bookMarketViewMore(id, size, start) {
  return api.bookMarketViewMore(id, size, start)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//分类
export function bookCategoryApi(id) {
  return api.bookCategoryApi(id)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//分类列表
export function bookCategoryListApi(id, sex, data) {
  return api.bookCategoryListApi(id, sex, data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//书籍详情页
export function bookDetailApi(id = 0) {
  return api.bookDetailApi(id)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//书籍详情页相关推荐
export function bookDetailRelated(id = 0) {
  return api.bookDetailRelated(id)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//搜索页热搜推荐
export function searchRecommend(sex = 0) {
  return api.searchRecommend(sex)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//搜索页搜索
export function search(size, start, keyword) {
  return api.search(size, start, keyword)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//书架推荐图书列表
export function bookShelfRecommendApi(id) {
  return api.bookShelfRecommendApi(id)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//目录列表
export function bookCatalogApi(bookId, pageNum, orderType) {
  return api.bookCatalogApi(bookId, pageNum, orderType)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//图书章节内容
export function bookContentApi(bookId, chapterId) {
  return api.bookContentApi(bookId, chapterId)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//下拉加载图书章节内容（单写是因为需要某些参数做判断）
export function scrollGetBookContentApi(bookId, chapterId) {
  return api.bookContentApi(bookId, chapterId)
    .then((response) => {
      return Promise.resolve(response.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//书城banner
export function bookCityBannerApi(positions) {
  return api.bookCityBannerApi(positions)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}


//爽文
export function shortEssayApi(size, start) {
  return api.shortEssayApi(size, start)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//发送短信
export function sendSmsCodeApi(data) {
  return api.sendSmsCodeApi(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}
// 登录接口
export function userLoginApi(data) {
  return api.userLoginApi(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

// 自动登录接口
export function userAutomaticLoginApi(data) {
  return api.userAutomaticLoginApi(data)
    .then((response) => {
      return Promise.resolve(response.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

// 退出登录接口
export function userLoginOutApi(data) {
  return api.userLoginOutApi(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

// 获取用户信息接口
export function getUserInfoApi(data) {
  return api.getUserInfoApi(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}




// 更新用户信息接口
export function updateUserInfoApi(data) {
  return api.updateUserInfoApi(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}


//意见反馈
export function feedBackApi(data) {
  return api.feedBackApi(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//全部偏好
export function allPreferenceApi() {
  return api.allPreferenceApi()
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//用户之前设置的偏好
export function getUserBeforePreferenceApi(data) {
  return api.getUserBeforePreferenceApi(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//提交用户设置的偏好
export function submitUserPreferenceApi(data) {
  return api.submitUserPreferenceApi(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

// 用户读完总数
export function getUserTotalCompleteApi(data) {
  return api.getUserTotalCompleteApi(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//用户读完书籍列表
export function userCompleteBookListApi(size, start, data) {
  return api.userCompleteBookListApi(size, start, data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//用户读完某本书添加到读完列表
export function userAddCompleteBookApi(data) {
  return api.userAddCompleteBookApi(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//用户今日阅读时长
export function updateUserTodayReadTimesApi(data) {
  return api.updateUserTodayReadTimesApi(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//获取支付宝vip订单远程签名数据
export function getOrderSign(data) {
  return api.getOrderSign(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//验证支付完成后的订单签名数据
export function verifyOrderSign(data) {
  return api.verifyOrderSign(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//获取微信vip订单远程签名数据
export function getWxOrderSign(data) {
  return api.getWxOrderSign(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}
//获取微信vip订单支付结果
export function verifyWxOrderSign(data) {
  return api.verifyWxOrderSign(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//获取微信h5的vip订单远程签名数据
export function getWxH5OrderSign(data) {
  return api.getWxH5OrderSign(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//获取vip购买记录
export function getVipBuyRecord(start, size, data) {
  return api.getVipBuyRecord(start, size, data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//获取书城icon配置接口
export function getBookCityIconApi(sexInt) {
  return api.getBookCityIconApi(sexInt)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//icon模块完本接口
export function iconCompleteListApi(sex, size, start) {
  return api.iconCompleteListApi(sex, size, start)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//icon模块连载接口
export function iconSerialieListApi(sex, type, size, start) {
  return api.iconSerialieListApi(sex, type, size, start)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//icon模块短篇接口
export function iconShortArticleListApi(sex, size, start) {
  return api.iconShortArticleListApi(sex, size, start)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//排行接口
export function rankingListApi(sex, type, size, start) {
  return api.rankingListApi(sex, type, size, start)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//icon下方主编力荐上方可编辑模块
export function configurateModeApi(sex) {
  return api.configurateModeApi(sex)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//用户收藏夹获取
export function bookFavoritesInfoApi(data) {
  return api.bookFavoritesInfoApi(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//用户收藏夹添加或更新一本书
export function bookFavoritesAddApi(data) {
  return api.bookFavoritesAddApi(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//用户收藏夹添加或更新一本书(用作将最近看的书放前面)
export function bookLatelyReadApi(data) {
  return api.bookFavoritesAddApi(data)
    .then((response) => {
      return Promise.resolve(response.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}


//用户收藏夹删除一本书
export function bookFavoritesDelBookApi(data) {
  return api.bookFavoritesDelBookApi(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//用户收藏夹同步
export function bookFavoritesSyncApi(data) {
  return api.bookFavoritesSyncApi(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}





//广告控制接口
//返回参数： ad_type ： 1万族广告 2droi 3乐逗 4迪乐 5玩咖 6金立
//请求参数
// 1书城 2详情页 3阅读页 4列表页 5正文 6章节解锁 7阅读页底部广告 
// 8书城底部广告 9详情页底部广告 10开屏 11章尾 12章尾信息流大图 
// 13阅读页底部 14书架 15分类 16爽文 17精选
export function adControlApi(position) {
  return api.adControlApi(position)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//自留广告接口
//types : 
export function retentionAdApi(type) {
  return api.retentionAdApi(type)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//vip价格接口
export function getVIPPriceApi(tokendata) {
  return api.getVIPPriceApi(tokendata)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//活动弹窗（书架）接口
export function activityPopupApi(data) {
  return api.activityPopupApi(data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}

//小浮标接口
export function smallbuoyApi(sex, position, data) {
  return api.smallbuoyApi(sex, position, data)
    .then((response) => {
      return Promise.resolve(response.data.data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}