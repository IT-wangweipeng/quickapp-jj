var fetch = require('@system.fetch')
var Fly = require('flyio/dist/npm/hap')
var fly = new Fly(fetch)

//----------正式服---------------
var API_ROOT = 'https://read.mjpet.net/3/23/'

//测试服
// var API_ROOT = 'http://10.20.70.219/read/3/23/'

// var API_ROOT = 'http://10.20.70.219/read/4/6/'   //为调试开发阶段快应用暂未在后台配置数据的接口

//本地服
// var API_ROOT = 'http://192.168.16.55:3010/3/23/'



function post(url, data) {
  console.log('********************post-data=', url, data)
  return fly.post(API_ROOT + url, data)
    .then(function (response) {
      // console.log('********************post-data response=', url, data, response)
      return response
    })
    .catch(function (error) {
      // console.log('********************post-data error=')
      return error
    })
}

function get(url, data = null) {
  // console.log('********************get-data', url, data)
  return fly.get(API_ROOT + url, data)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    })
}

export default {
  /**
   * 书城首页
   */
  bookMarketIndex(sex, data) {
    return post('index/' + sex, data)
  },

  /**
   * 书城换一换
   */
  bookMarketChange(id) {
    return get('module/refresh/' + id, null)
  },

  /**
   * 书城查看更多
   */
  bookMarketViewMore(id, size, start) {
    return get('module/list/' + id + '/' + size + '/' + start, null)
  },

  /**
   * 分类一级
   */
  bookCategoryApi(id) {
    return get('category' + id, null)
  },

  /**
   * 分类二级 post
   */
  bookCategoryListApi(id, sex, data) {
    return post('category/list' + '/' + sex + '/' + id, data)
  },

  /**
   * 书籍详情页
   */
  bookDetailApi(id) {
    return get('book/' + id, null)
  },

  /**
   * 书籍详情页相关推荐
   */
  bookDetailRelated(id) {
    return get('book/related/' + id, null)
  },

  /**
   * 搜索页热搜推荐
   */
  searchRecommend(sex) {
    return get('search/recommend/' + sex, null)
  },

  /**
  * 搜索页搜索
  */
  search(size, start, keyword) {
    return get('search/' + size + '/' + start + '/' + keyword, null)
  },


  /**
   * 书架推荐列表
   */
  bookShelfRecommendApi(id) {
    return get('book/bookrack/recommend/' + id, null)

  },

  /**
   * 目录列表
   */
  bookCatalogApi(bookId, pageNum, orderType) {
    return get('quickapp/chapterlist/' + bookId + '/' + pageNum + '/' + orderType, null)
  },

  /**
   * 对应章节阅读内容
   */
  bookContentApi(bookId, chapterId) {
    return get('book/chapter/content/' + bookId + '/' + chapterId, null)
  },

  /**
   * 书城banner 
   */
  bookCityBannerApi(positions) {
    return get('banner/' + positions, null)
  },

  /**
     * 爽文
     */
  shortEssayApi(size, start) {
    return get('third/coolarticle/' + size + '/' + start, null)
  },

  // 我的&&登录部分
  /**
    * 发送短信
    */
  sendSmsCodeApi(data) {
    return post('phone/send', data)
  },
  /**
    * 验证码登录
    */
  userLoginApi(data) {
    return post('login', data)
  },
  /**
    * 自动登录（本地有token）
    */
  userAutomaticLoginApi(data) {
    return post('login/auto', data)
  },
  /**
    * 退出登录
    */
  userLoginOutApi(data) {
    return post('login/out', data)
  },
  /**
    * 获取用户信息
    */
  getUserInfoApi(data) {
    return post('user/info', data)
  },

  /**
    * 更新用户信息
    */
  updateUserInfoApi(data) {
    return post('user/update/info', data)
  },


  /**
    * 意见反馈
    */
  feedBackApi(data) {
    return post('feedback', data)
  },

  /**
    * 全部偏好
    */
  allPreferenceApi() {
    return get('launcher/category')
  },

  /**
    * 用户之前设置的偏好
    */
  getUserBeforePreferenceApi(data) {
    return post('user/preference', data)
  },

  /**
    * 上传用户偏好
    */
  submitUserPreferenceApi(data) {
    return post('user/preference/add', data)
  },
  /**
    * 用户读完总数
    */
  getUserTotalCompleteApi(data) {
    return post('user/read/complete/total', data)
  },

  /**
   * 用户读完书籍列表
   */
  userCompleteBookListApi(size, start, data) {
    return post('user/read/complete/list/' + size + '/' + start, data)
  },
  /**
    * 用户读完某本书添加到读完列表
    */
  userAddCompleteBookApi(data) {
    return post('user/read/complete/add', data)
  },
  /**
    * 用户今日阅读时长
    */
  updateUserTodayReadTimesApi(data) {
    return post('book/favorites/sync', data)
  },
  /** 获取vip订单远程签名数据
   * 
   */
  getOrderSign(data) {
    return post('user/vippay/alisign', data)
  },
  /** 校验vip订单返回的数据
   * 
   */
  verifyOrderSign(data) {
    return post('user/vippay/parsesign', data)
  },
  /**获取微信vip订单数据
   * 
   */
  getWxOrderSign(data) {
    return post('user/vippay/wxsign', data)
  },
  /**获取微信vip订单支付结果
   * 
   */
  verifyWxOrderSign(data) {
    return post('user/vippay/wxresult', data)
  },
  /**获取微信h5的vip订单数据
   * 
   */
  getWxH5OrderSign(data) {
    return post('user/vippay/h5/wxsign', data)
  },
  /**
   * vip购买记录
   */
  getVipBuyRecord(start, size, data) {
    return post('user/vippay/records/' + start + '/' + size, data)
  },
  /**
  * 书城icon配置接口
  */
  getBookCityIconApi(sexInt) {
    return get('index/icon/' + sexInt)
  },

  /**
   * icon模块完本接口
   */
  iconCompleteListApi(sex, size, start) {
    return get('book/complete/' + sex + '/' + size + '/' + start, null)
  },

  /**
   * icon模块连载接口
   */
  iconSerialieListApi(sex, type, size, start) {
    return get('book/uncomplete/rank/' + sex + '/' + type + '/' + size + '/' + start)
  },
  /**
    * icon模块短篇接口
    */
  iconShortArticleListApi(sex, size, start) {
    return get('book/shortessay/' + sex + '/' + size + '/' + start)
  },

  /**
   * 排行接口
   */
  rankingListApi(sex, type, size, start) {
    return get('ranking/' + sex + '/' + type + '/' + size + '/' + start)
  },


  /**
   * icon下方主编力荐上方可编辑模块接口
   */
  configurateModeApi(sex) {
    return get('index/editablemodel/' + sex)
  },

  /**
  * 用户收藏夹获取
  */
  bookFavoritesInfoApi(data) {
    return post('book/favorites/info', data)
  },

  /**
  * 用户收藏夹添加或更新一本书
  */
  bookFavoritesAddApi(data) {
    return post('book/favorites/add', data)
  },

  /**
  * 用户收藏夹删除一本书
  */
  bookFavoritesDelBookApi(data) {
    return post('book/favorites/delete', data)
  },

  /**
  * 用户收藏夹同步
  */
  bookFavoritesSyncApi(data) {
    return post('book/favorites/sync', data)
  },

  /**
  * 广告控制接口
  */
  adControlApi(position) {
    return get('ad/quickapp/' + position)
  },

  /**
  * 自留广告接口
  */
  retentionAdApi(type){
    return get('ad/quickapp/tmp/' + type)
  },
  /**
  * vip价格接口
  */
  getVIPPriceApi(tokendata){
    // return get('vip/pay/price')
    return post('vip/pay/price' ,  tokendata)
  },
  /**
    * 活动弹窗（书架）接口
    */
  activityPopupApi(data) {
    return post('launcher/alertwindow', data)
  },

  /**
    * 浮标接口
    */
  smallbuoyApi(sex, position, data) {
    return post('user/smallbuoy/' + sex + '/' + position, data)
  },
}


