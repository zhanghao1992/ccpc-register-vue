var express = require('express')
var router = express.Router()
var common = require('./common.js')
router.use('/common', common)
// 列表页
router.get('/get_skider_list', function (req, res, next) {
  res.send(JSON.stringify({
    code: 0,
    name: 'zhanghao'
  }))
})

module.exports = router
