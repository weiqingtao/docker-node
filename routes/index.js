const router = require('koa-router')()
const db = require("../DB/mysql");
const redis = require("../DB/redis")
router.get('/', async (ctx, next) => {
  const data = await db.query("select * from user");
  await redis.set("user", JSON.stringify(data));
  ctx.body = data
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
