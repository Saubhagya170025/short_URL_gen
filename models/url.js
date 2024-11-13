const mongoose = require("mongoose");

// ------------------------------------SCHEMA----------------------------

const urlSchema = new mongoose.Schema({
    shortID: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
},
{
    timestamps: true  // Automatically adds createdAt and updatedAt fields
});

// ---------------------------------------------------------------------------------

const URL = mongoose.model("url", urlSchema);  // Create the database model

module.exports = URL;  // Export the model
