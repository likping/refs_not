const mongoose = require('mongoose')
const schema = new mongoose.Schema({
   
    title: { type: String },
    categories:[{type:mongoose.Schema.ObjectId,ref:"Category"}],
    body:{type:String}
   
})
module.exports = mongoose.model("Article", schema)