import ajax from './ajax,js'

// 1.经纬度
export const reAddress = (geohash) => ajax(`/position/${geohash}`)
// 2. 食品分类
export const reqFoodTypes = () => ajax('/index_category')
// 3. 商品列表
export const reqShops = (longitude, latitude) => ajax('/shops', {longitude, latitude})
// 4.搜索商铺列表
export const reqList = (geohash, keyword) => ajax('/search_shops', {geohash, keyword})
// 5.验证码
export const reqCap = () => ajax('/captcha')
// 6.用户名密码登陆
export const reqLog = (name, pwd, captcha) => ajax('/login_pwd', {name, pwd, captcha}, 'POST')
// 7.发送短信验证码
export const reqSend = (phon) => ajax('/sendcode', {phon})
// 8.手机号码验证登陆
export const reqLogin = (phone, code) => ajax('/login_sms', {phone, code}, 'POST')
// 9.获取用户信息
export const reqUser = () => ajax('/userinfo')
// 10.用户登陆
export const reqLogout = () => ajax('/logout')
