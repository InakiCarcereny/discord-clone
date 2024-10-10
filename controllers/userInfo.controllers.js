import User from "../models/userInfo.model.js";
import UserInfo from "../models/userInfo.model.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export const updateInfo = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json(["Unauthorized"]);
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);

    const { id } = data;

    const userInfo = await UserInfo.findOne({ user: id });

    if (!userInfo) {
      return res.status(400).json(["User not found"]);
    }

    const { nickname, avatar, banner, description, state } = req.body;

    if (nickname) {
      userInfo.nickname = nickname;
    }

    if (avatar) {
      userInfo.avatar = avatar;
    }

    if (banner) {
      userInfo.banner = banner;
    }

    if (description) {
      userInfo.description = description;
    }

    if (state) {
      userInfo.state = state;
    }

    await userInfo.save();

    res.staus(200).json(["Profile updated successfully"]);
  } catch (err) {
    res.status(401).json({
      message: "Error secure",
    });
  }
};
