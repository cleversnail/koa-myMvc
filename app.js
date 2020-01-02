// const app = new (require('koa'))()
// const { initRouter } = require('./lm-loader')
// app.use(initRouter().routes())

// app.listen(3000)

const Lm = require('./lm')
const app = new Lm()
app.start(3000)