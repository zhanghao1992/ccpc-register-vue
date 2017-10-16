let express = require('express')
let router = express.Router()
let axios = require('axios')
axios.defaults.baseURL = 'http://172.21.122.192:7073'
// 列表页
router.get('/getCityList', function (req, res) {
  // GET /admin/getCityList
  console.log(req.query)
  axios.get('/admin/getCityList', {
    params: req.query
  }).then(json => {
    // console.log(json)
    res.send(json.data)
  })
})

module.exports = router
