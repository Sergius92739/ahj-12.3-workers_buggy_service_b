const Router = require('koa-router');
const RandomData = require('../../api/RandomData');
const data = new RandomData();
const router = new Router();


router.get('/news', async (ctx) => {
  const random = RandomData.int(1, 4);
  if (random <= 2) {
    ctx.status = 500;
    ctx.response.body = 'Internal Error';
  } else {
    ctx.response.body = {
      status: 'ok',
      data: data.postGenerator(),
    }
  }

});

module.exports = router;
