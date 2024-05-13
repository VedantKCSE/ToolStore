const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
   eventname: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   type: {
      type: String,
      required: true
   },
   date: {
      type: Date,
      required: true
   },
   image: {
      type: String,
      required: true
   },
   link: {
      type: String,
      required: true
   },
   club: {
      type: Number,
      required: true,
      enum: [0, 1, 2, 3, 4, 5]
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  },
   createdAt: {
      type: Date,
      default: Date.now
   },
   likes: {
      type: Array,
      default: 0
   }
});

module.exports = mongoose.model('Event', eventSchema);


