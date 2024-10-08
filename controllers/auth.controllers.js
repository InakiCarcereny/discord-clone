import User from "../models/auth.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const userFind = await User.findOne({ username });

    if (userFind) {
      return res.status(400).json(["Username already exists"]);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
      email,
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(["Error registering user"]);
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userFind = await User.findOne({ username })

    if (!userFind) {
      return res.status(400).json(["User not found"]);
    }

    const isPasswordCorrect = await bcrypt.compare(password, userFind.password)
  }
};

export const verify = async (req, res) => {};

export const logout = async (req, res) => {};
