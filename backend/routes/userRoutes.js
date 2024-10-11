// const express = require('express');
// const { check } = require('express-validator');
// const router = express.Router();
// const userController = require('../controllers/userController');

// // POST route to create a new user with validation
// router.post(
//   '/',
//   [
//     check('firstName', 'First name is required').not().isEmpty(),
//     check('lastName', 'Last name is required').not().isEmpty(),
//     check('email', 'Email must be valid').isEmail(),
//     check('password', 'Password must be 6 characters or longer').isLength({ min: 6 }),
//     check('streetAddress', 'Street Address is required').not().isEmpty(),
//     check('town', 'Town/City is required').not().isEmpty(),
//     check('state', 'State is required').not().isEmpty(),
//     check('pincode', 'Pincode is required').isLength({ min: 6 }),
//     check('phone', 'Phone number must be valid').isMobilePhone(),
//   ],
//   userController.createUser
// );

// module.exports = router;
const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');

// POST route to create a new user with validation
router.post(
  '/',
  [
    check('firstName', 'First name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('email', 'Email must be valid').isEmail(),
    check('password', 'Password must be 6 characters or longer').isLength({ min: 6 }),
    check('pincode', 'Pincode must be a valid 6-digit code').isLength({ min: 6, max: 6 }),
    check('phone', 'Phone number must be valid').isMobilePhone(),
  ],
  userController.createUser
);

module.exports = router;
