const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// Register user
exports.register = async (req, res) => {
  const {name, email, password} = req.body;
  try {
    const existingUser = await User.findOne({email});
    if (existingUser)
      return res.status(400).json({message: "Email sudah digunakan"});

    const user = await User.create({name, email, password});

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({message: "Pendaftaran gagal", error: err.message});
  }
};

// Login user
exports.login = async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await User.findOne({email});
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({message: "Email atau password salah"});
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({message: "Login gagal", error: err.message});
  }
};
