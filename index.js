const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const json = require('koa-json')

router.get('/', ctx => {
  console.log(ctx);
  console.log(ctx.request);
  ctx.body = "Hello World!"
})
router.get('/api', ctx => {
  console.log(ctx);
  console.log(ctx.request);
  ctx.body = "Hello Api!"
})
// router.post('/post', async(ctx) => {
//   let {body} = ctx.request
//   console.log(body);
//   console.log(ctx.request);
//   ctx.body = {
//     ...body
//   }
// })

app.use(koaBody())
app.use(cors())
app.use(router.routes())
    .use(router.allowedMethods())
app.listen(3000)