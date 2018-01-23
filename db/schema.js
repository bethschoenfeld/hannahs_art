const { Schema } = require('mongoose')

const UserSchema = new Schema({
    username: {
        type: String,
        required: false,
        default: 'Shopper'
    },

}, { timestamps: {} })

module.exports = {
    UserSchema
}