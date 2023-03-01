const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema= new Schema({
    name: {
        type: String,
        required: true //by default false
    },
    author: {
        type: String,
        required: true //by default false
    },
    desc: {
        type: String,
        required: true //by default false
    },
    price: {
        type: Number,
        required: true //by default false
    },
    available: {
        type: Boolean,
        required: true //by default false
    },
    author: {
        type: String,
        required: true //by default false
    },
    author: {
        type: String,
        // required: true //by default false
    },
    image:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Book", bookSchema);