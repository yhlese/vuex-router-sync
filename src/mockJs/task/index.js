const Mock = require('mockjs');
let data = Mock.mock(/\/prize_wheel\/omc\/configs\/listings/, 'post', options => {
  return Mock.mock({
    'status|0-1': 1,
    'msg|4-10': 'msg',
    'tips|6-10': {
      "total_page|10": 1,
      "page|1": 1,
      "data|5-10": [{
        "account|1": "@string",
        "member_id|+1": 100,
        "nickname": "@cname",
        "level|1-10": 0,
        "login_times|1-100": 1,
        "enter_panda_times|1-100": 1,
        "exchange_times|1-100": 1,
        "award_amount|1-100": 1,
        "coins|1-100": 1
      }]
    }
  })
})
