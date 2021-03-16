const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

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
    price: {
        type: Currency,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

var Items = mongoose.model('Item', itemSchema);

module.exports = Items;