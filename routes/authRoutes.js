// routes/authRoutes.js
const express = require('express');
const { body } = require('express-validator');
const { registerUser } = require('../controllers/authController');

const router = express.Router();

router.post(
  '/register',
  [
    body('first_name').notEmpty().withMessage('First name is required'),
    body('last_name').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password')
      .isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
  ],
  registerUser
);

module.exports = router;
