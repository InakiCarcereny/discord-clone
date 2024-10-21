import User from "../models/auth.model.js";
import UserInfo from "../models/userInfo.model.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export const getUserInfo = async (req, res) => {
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

    const userInfo = await UserInfo.findOne({ user: userFind._id });

    res.status(200).json(userInfo);
  } catch (err) {
    res.status(401).json({
      message: "Error secure",
    });
  }
};

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

    const { description, state, primaryColor, secondaryColor, name, nickname } =
      req.body;

    const avatarFiles = req.files["avatar"];
    const bannerFiles = req.files["banner"];

    const avatar = avatarFiles ? avatarFiles[0] : null;
    const banner = bannerFiles ? bannerFiles[0] : null;

    if (avatar) {
      userInfo.avatar = {
        data: avatar.buffer,
        contentType: avatar.mimetype,
      };
    }

    if (banner) {
      userInfo.banner = {
        data: banner.buffer,
        contentType: banner.mimetype,
      };
    }

    if (name) userInfo.name = name;
    if (nickname) userInfo.nickname = nickname;
    if (description) userInfo.description = description;
    if (state) userInfo.state = state;
    if (primaryColor) userInfo.primaryColor = primaryColor;
    if (secondaryColor) userInfo.secondaryColor = secondaryColor;

    await userInfo.save();
    res.status(200).json(["Profile updated successfully"]);
  } catch (err) {
    res.status(401).json({ message: "Error secure" });
  }
};
