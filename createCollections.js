const mongoose = require('mongoose')
const testSchema = require('./models/Test')
const questions = require('./tests')


function createPersonalityTestCollection(){
    mongoose.model('PersonalityTest', testSchema).insertMany(questions.personalityTest)
    .then(() => console.log({
        collection: "PersonalityTest",
        message: "Values inserted successfully"
    }))
    .catch((err) => console.log(err))
}

function createBsiTestCollection(){
    mongoose.model('BsiTest', testSchema).insertMany(questions.bsiTest)
    .then(() => console.log({
        collection: "BsiTest",
        message: "Values inserted successfully"
    }))
    .catch((err) => console.log(err))
}

module.exports = {
    createBsiTestCollection,
    createPersonalityTestCollection
}