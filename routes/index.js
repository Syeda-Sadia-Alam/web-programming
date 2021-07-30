const registerRoute = require('./registration')
const loginRoute = require('./login')

const routers = [
    {
        path:'/',
        handler:(req,res)=>{
            res.render('pages/index.ejs')
        }
    },
    {
        path:'/start',
        handler:registerRoute
    },
    {
        path:'/login',
        handler:loginRoute
    }
    
]

module.exports =  app=>{
    routers.forEach((r)=>{
        if(r.path==='/'){
            app.get(r.path,r.handler)
        }else{
            app.use(r.path,r.handler)
        }
    })
}
