import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    continent: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    instruction: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model('Food', foodSchema);
