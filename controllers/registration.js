const UserRegistration = require('../model/UserRegistration')
exports.registerGetController = (req,res)=>{
    res.render('pages/start.ejs',{msg:''})
}

exports.registerPostController = async (req,res)=>{
    const {
        firstName,
        lastName,
        email,
        password,
        phone,
        gender,
        birthDay,
        birthMonth,
        birthdayYear,
        address,
        city,
        postCode,
        district,
        division,
        personType,
        className,
        othersText,
        qualification  
    } = req.body 

    // If the form field is empty, it will serve as a warning message
    if( !firstName||
        !lastName||
        !email||
        !password||
        !phone||
        !gender||
        !birthDay||
        !birthMonth||
        !birthdayYear||
        !address||
        !city||
        !postCode||
        !district||
        !division||
        !personType||
        !className||
        !qualification ){
            return res.render('pages/start.ejs',{msg:'Please provide all field information to complete the registration process'})
        }
        if(className==='others'){
            if(!othersText){
                return res.render('pages/start.ejs',{msg:'If you select other checkbox, you need to provide information with other text field'})
            }
        }
        try{
              // Create a user with user information here
            const userRegistration = new UserRegistration({
                firstName,
                lastName,
                email,
                password,
                phone,
                gender,
                birthDay,
                birthMonth,
                birthdayYear,
                address,
                city,
                postCode,
                district,
                division,
                personType,
                className:className==='others'?othersText:className,
                qualification 
            })
            const saveUserRegInfo  = await userRegistration.save()
            if(!saveUserRegInfo){
                return res.send('<h1 style="text-align:center">Internal server error</h1>')
            }
            return res.redirect('/')
        }catch(e){
            console.log(e)
            return res.send('<h1 style="text-align:center">Internal server error</h1>')
        }
      
}