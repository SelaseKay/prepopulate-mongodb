require('dotenv').config()

const mongoose = require('mongoose')
const { createPersonalityTestCollection, createBsiTestCollection } = require('./createCollections')

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log({message: err}))


createPersonalityTestCollection()
createBsiTestCollection()

