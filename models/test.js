const mongoose = require('mongoose')
const {Schema} = mongoose

const testSchema = new Schema({
    category: String,
    questions: [
       String
    ]
})

module.exports = testSchema