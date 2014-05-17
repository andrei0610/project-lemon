'use strict';

/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
Feedback = mongoose.model('Feedback'),
_ = require('lodash');

/**
* Get the error message from error object
*/
var getErrorMessage = function(err) {
  var message = '';

  if (err.code) {
    switch (err.code) {
    case 11000:
    case 11001:
      message = 'Feedback already exists';
      break;
    default:
      message = 'Something went wrong';
    }
  } else {
    for (var errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    }
  }

  return message;
};

/**
* Create a Feedback
*/
exports.create = function(req, res) {
  var feedback = new Feedback(req.body);
  feedback.user = req.user;

  feedback.save(function(err) {
    if (err) {
      return res.send(400, {
        message: getErrorMessage(err)
      });
    } else {
      res.jsonp(feedback);
    }
  });
};

/**
* Show the current Feedback
*/
exports.read = function(req, res) {
  res.jsonp(req.feedback);
};

/**
* Update a Feedback
*/
exports.update = function(req, res) {
  var feedback = req.feedback;

  feedback = _.extend(feedback, req.body);

  feedback.save(function(err) {
    if (err) {
      return res.send(400, {
        message: getErrorMessage(err)
      });
    } else {
      res.jsonp(feedback);
    }
  });
};

/**
* Delete an Feedback
*/
exports.delete = function(req, res) {
  var feedback = req.feedback;

  feedback.remove(function(err) {
    if (err) {
      return res.send(400, {
        message: getErrorMessage(err)
      });
    } else {
      res.jsonp(feedback);
    }
  });
};

/**
* List of Feedbacks
*/
exports.list = function(req, res) {
  Feedback.find().sort('-created').populate('user', 'displayName').exec(function(err, feedbacks) {
    if (err) {
      return res.send(400, {
        message: getErrorMessage(err)
      });
    } else {
      res.jsonp(feedbacks);
    }
  });
};

/**
* Feedback middleware
*/
exports.feedbackByID = function(req, res, next, id) {
  Feedback.findById(id).populate('user', 'displayName').exec(function(err, feedback) {
    if (err) return next(err);
    if (!feedback) return next(new Error('Failed to load Feedback ' + id));
    req.feedback = feedback;
    next();
  });
};

/**
* Feedback authorization middleware
*/
exports.hasAuthorization = function(req, res, next) {
  if (req.feedback.user.id !== req.user.id) {
    return res.send(403, {
      message:'User is not authorized'
    });
  }
  next();
};
