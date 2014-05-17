'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Feedback Schema
 */
var FeedbackSchema = new Schema({
	title: {
		type: String,
		default: '',
		required: 'Titlul trebuie completat',
		trim: true
	},
  content: {
    type: String,
    default: '',
    trim: true
  },
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Feedback', FeedbackSchema);
