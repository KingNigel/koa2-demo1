/**
 * Created by cena on 2016/4/24.
 */
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(3000);