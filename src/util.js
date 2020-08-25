import md5 from 'js-md5'
import storage from '@system.storage'

/**
 * 显示菜单
 */
function showMenu() {
  const prompt = require('@system.prompt')
  const router = require('@system.router')
  const appInfo = require('@system.app').getInfo()
  prompt.showContextMenu({
    itemList: ['添加到桌面', '关于我们'],
    success: function (ret) {
      switch (ret.index) {
        case 0:
          // 保存桌面
          createShortcut()
          break
        case 1:
          // 关于
          router.push({
            uri: 'About',
          })
          break
        default:
          prompt.showToast({
            message: 'error'
          })
      }
    }
  })
}

/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */
function createShortcut(that) {
  const prompt = require('@system.prompt')
  const shortcut = require('@system.shortcut')
  shortcut.hasInstalled({
    success: function (ret) {
      if (ret) {
        prompt.showToast({
          message: '已创建桌面图标'
        })
      } else {
        shortcut.install({
          success: function () {
            prompt.showToast({
              message: '成功创建桌面图标'
            })
          },
          fail: function (errmsg, errcode) {
            // prompt.showToast({
            // 	message: `${errcode}: ${errmsg}`
            // })
          }
        })
      }
    }
  })
}

/**
 * 
 * 判断测试域名和正式域名
 */

function domain() {
  let domain = false //测试是false 正式是true
  let test = "http://188.131.141.249" //测试域名
  // let test = "http://t-nav.gionee.com";//测试域名
  let online = "http://nav.gionee.com" //正式域名
  return domain ? online : test
}
function domainH5() {
  let domain = true; //测试是false 正式是true
  let test = "http://188.131.141.249" //测试域名
  // let test = "http://t-nav.gionee.com";//测试域名
  let online = "http://lockapi.jijiakeji-co.com" //正式域名
  return domain ? online : test
}

function filterDevices() {
  let devices = '["f100","f103","f105","f106","gn3002","gn5001","gn5002","gn5005","gn8001","gn8003"]'
  return devices
}

/**
 * 
 * 导出接口 
 */

/**
 * 签名校验
 */
function sign(t) {
  let v = '1.0.1.9',
    key = 'GIONEE_QUICK_APP'
  let params = v + '&' + t + '&' + key
  return md5(params)
}
/**
 * 版本号
 */
function vertion() {
  let v = '1.0.1.9'
  return v
}

export default {
  showMenu,
  createShortcut,
  domain,
  domainH5,
  sign,
  vertion,
  filterDevices
}
