const mongoose = require('mongoose');

const UserSchema = new mongoose.Schemma(
    {
        firstName: {
            type: String,
            require: true,
            min: 2,
            max: 50
        },
        lastName: {
            type: String,
            require: true,
            min: 2,
            max: 50
        },
    }
)