module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams: true
    })
    const AdminUser = require('../../model/AdminUser')
    const jwt = require('jsonwebtoken')
    const  assert = require('http-assert')
    router.post('/',async (req, res) => {
        //将大写的转成小写

        const model = await req.Model.create(req.body)
        res.send(model)
    })
    router.put('/:id', async (req, res) => {

        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    router.delete('/:id', async (req, res) => {

        const model = await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            message: "success delete"
        })
    })
    router.get('/', async (req, res, next) => {
        const token = String(req.headers.authorization || ' ').split(' ').pop()
        // assert(token, 401, '请提供jwt token')
        if (!token) {
            return res.status(402).send({
                message: "jwt token"
            })
        }
        const { id } = jwt.verify(token, app.get('secret'))
        // assert(id , 401, '请提供jwt token')
        if (!id) {
            return res.status(402).send({
                message: "jwt id"
            })
        }
        req.user = await AdminUser.findById(id)
        // assert(req.user, 422, '请先登录')
        if (! req.user) {
            return res.status(402).send({
                message: "  !req.user "
            })
        }
        await next()
    },async (req, res) => {
        let queryOptions = {}
        if (req.Model.modelName == 'Category') {
            queryOptions.populate = "parent"
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(20)
        res.send(items)
    })
    router.get('/:id', async (req, res) => {

        const item = await req.Model.findById(req.params.id)
        res.send(item)
    })
    app.use("/admin/api/rest/:resource", async (req, res, next) => {
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../model/${modelName}`)
        next()
    }, router)
    const multer = require('multer')
    const upload = multer({ dest: __dirname + '/../../uploads' })
    app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:4000/uploads/${file.filename}`
        res.send(file)
    })
    app.post('/admin/api/login', async (req, res) => {
        const { username, password } = req.body
        // 
    
        // const AdminUser = require('../../model/AdminUser')
        const user = await AdminUser.findOne({username}).select('password')
        // assert(user, 422, '用户不存在',' ')
        if (!user) {
            return res.status(402).send({
                message: "用户不存在"
            })
        }

        const isValid = require('bcrypt').compareSync(password, user.password)
        // assert(isValid, 422, '密码错误')
        if (!isValid) {
            return res.status(402).send({
                message: "密码错误"
            })
        }
        ///
           const jwt= require('jsonwebtoken')
        const token = jwt.sign({ id: user._id }, app.get('secret'))
           res.send({token})
    })
//错误处理函数
     app.use(async (err,req,res,next)=>{
         console.log(err)
        //   res.status(err.status).send({
        //       message: err.message
        //         })
     })
}