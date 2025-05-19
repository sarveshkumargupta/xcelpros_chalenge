// controllers/authController.js
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('../models/User');

const registerUser = async (req, res) => {
  // Check validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { first_name, last_name, email, password } = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const user = new User({
      first_name,
      last_name,
      email,
      password: hashedPassword
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Register Error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  registerUser
};
