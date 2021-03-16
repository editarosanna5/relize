const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    locationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location'
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true,
        unique: true
    },
    image: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

var Promos = mongoose.model('Promo', promoSchema);

module.exports = Promos;