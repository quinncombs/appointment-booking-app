const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookingSchema = new Schema({
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
{ timestamps: true }
);

// module.exports = mongoose.model('booking', bookingSchema);

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking; 