const { Schema } = require('mongoose')

const ProductSchema = new Schema ({
    artwork: {
        type: String,
        required: true
    }
    
},
{
    timestamps: {}
}

)

const TransactionSchema = new Schema({
    items: {
        type: String,
        required: true, 
    }
},
{
    timestamps: {}
}
)

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        default: 'Shopper'
    },

    transactions: [TransactionSchema]

},
{ 
    timestamps: {} 
}
)

module.exports = {
    UserSchema,
    TransactionSchema,
    ProductSchema

}