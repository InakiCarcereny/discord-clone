import User from "../models/userInfo.model.js";
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

    const userFind = await User.findById(id);

    if (!userFind) {
      return res.status(400).json(["User not found"]);
    }

    const { nickname, avatar, banner, description, state } = req.body;

    if (nickname) {
      userFind.nickname = nickname;
    }

    if (avatar) {
      userFind.avatar = avatar;
    }

    if (banner) {
      userFind.banner = banner;
    }

    if (description) {
      userFind.description = description;
    }

    if (state) {
      userFind.state = state;
    }

    await userFind.save();

    res.staus(200).json(["Profile updated successfully"]);
  } catch (err) {
    res.status(401).json({
      message: "Error secure",
    });
  }
};
