const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema(
    {
        product_name: {
            type: String,
            required: true,
            maxLength: 255,
        },
        price: {
            type: Number,
            required: true,
        },
        size: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
            maxLength: 600,
        },
        images: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Product', Product);
