const combineRouters = require('koa-combine-routers');
const ping = require('./ping');
const newsRouter = require('./news');

const router = combineRouters(
  ping,
  newsRouter,
);

module.exports = router;
