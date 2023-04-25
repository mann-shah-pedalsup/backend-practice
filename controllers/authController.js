const User = require("../models/user");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, "practice");
};

module.exports.signup_post = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({
      name: name,
      email: email,
      password: password,
    });
    const token = createToken(user._id);
    // console.log(token);
    res.status(200).json(user);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    res.status(200).json({ user: user._id });
    res.send(user._id);
  } catch (error) {
    console.log(error);
  }
};
