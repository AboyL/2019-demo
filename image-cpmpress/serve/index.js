const Koa = require('koa');
const fs = require('fs')
const path = require('path')
// 创建一个Koa对象表示web app本身:
const app = new Koa();
const koaBody = require('koa-body');
const router = require('koa-router')();
const cors = require('koa2-cors');
app.use(cors())
router.post('/upload', async (ctx, next) => {
  // 上传单个文件
  const file = ctx.request.files.file; // 获取上传文件
  // 创建可读流
  const reader = fs.createReadStream(file.path);
  const nowTime = Date.now()

  console.log(file);
  let filePath = null
  if (file.name === 'blob') {
    filePath = path.join(__dirname, 'public/upload/') + `/${nowTime}.${file.type.split('/')[1]}`;
  } else {
    filePath = path.join(__dirname, 'public/upload/') + `/${nowTime}-${file.name}`;
  }
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  return ctx.body = "上传成功！";
});
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
  }
}));
app.use(router.routes())
app.listen(8333);