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
    email: {
        type: String,
        required: false, 
    },
    instagram: {
        type: String,
        required: false,
    },
    website: {
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