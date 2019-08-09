const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    username: { type: String },
    password:{type:String,
        select:true,
        set(value){
        return   require('bcrypt').hashSync(value,10)
    }}
})
module.exports = mongoose.model("AdminUser", schema)