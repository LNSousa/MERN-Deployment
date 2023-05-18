const mongoose = require('mongoose')
 
const StoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minlength: [
            3,
            "Name must be at least 3 characters long."
        ]
    },
    storeNumber: {
        type: Number,
        required: [true, "Store number is required."],
        min: [6, "Store number must be greater than 0."]
    },
    open: {
        type: Boolean
    }
}, {timestamps: true})

const Store = mongoose.model("Store", StoreSchema)
module.exports = Store