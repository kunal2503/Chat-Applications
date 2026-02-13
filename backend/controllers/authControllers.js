const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncWrapper = require("../utils/asyncWrapper");

//Register User
const registerUser = asyncWrapper(async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser){
    return res.status(401).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  await newUser.save();
  console.log(newUser);

  const token = jwt.sign({ id: newUser._id,email : newUser.email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  

  res.cookie("token", token, {
    httpOnly : true,
    maxAge : 24 * 60 * 60 * 1000,
    sameSite : "strict",
    secure : process.env.NODE_ENV === "production",
  });
  res.status(201).json({ message: "User registered successfully" });
});

// Login User
const loginUser = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;
  console.log(password);
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const userExists = await User.findOne({ email });
  if (!userExists) {
    return res.status(401).json({ message: "User does not exist" });
  }
  console.log(userExists)

  const isPasswordCorrect = await bcrypt.compare(password, userExists.password);
  if (!isPasswordCorrect) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: userExists._id,email : userExists.email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  

  res.cookie("token", token, {
    httpOnly : true,
    maxAge : 24 * 60 * 60 * 1000,
    sameSite : "strict",
    secure : process.env.NODE_ENV === "production",
  });

  res.status(200).json({ message: "User logged in successfully" });
});

module.exports = { registerUser, loginUser };