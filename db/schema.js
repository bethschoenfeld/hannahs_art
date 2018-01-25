const { Schema } = require('mongoose')

const ArtworkSchema = new Schema ({
    artwork: {
        type: String,
        required: true
    },

    
},
{
    timestamps: {}
}

)

const ContactSchema = new Schema({
    items: {
        type: String,
        required: true, 
    },

    artwork: [ArtworkSchema]
},
{
    timestamps: {}
}
)

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        default: 'Artist'
    },

    contact: [ContactSchema]

},
{ 
    timestamps: {} 
}
)

module.exports = {
    UserSchema,
    ContactSchema,
    ArtworkSchema

}