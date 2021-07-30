const {  Schema,model } = require('mongoose')

const userRegistrationSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    phone:String,
    gender:String,
    birthDay:String,
    birthMonth:String,
    birthdayYear:String,
    address:String,
    city:String,
    postCode:String,
    district:String,
    division:String,
    personType:String,
    className:String,
    qualification:String
})

const UserRegistrationModel = model('UserInfo',userRegistrationSchema)

module.exports = UserRegistrationModel