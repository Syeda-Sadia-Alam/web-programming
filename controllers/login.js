const UserRegistration  = require('../model/UserRegistration')
exports.loginGetController = (req,res)=>{
    res.render('pages/login.ejs',{msg:''})
}
exports.loginPostController = async(req,res)=>{
    const { email, password } = req.body
    if(!email|| !password){
        return res.render('pages/login.ejs',{msg:'Please enter email and password to log in'})
    }
    try{
        const hasUser = await UserRegistration.findOne({email})
        if(!hasUser){
            return res.render('pages/login.ejs',{msg:'Not registered user!'})
        }
        if(hasUser.password!==password){
            return res.render('pages/login.ejs',{msg:'Invalid password!'})
        }
        return res.redirect('/')
    }catch(e){
        console.log(e)
        return res.send('<h1 style="text-align:center">Internal Server Error</h1>')
    }
}