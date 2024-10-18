import User from "../models/userInfo.model.js";
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

    const userInfo = await UserInfo.findOne({ user: id });

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

    const { name, nickname, description, state, primaryColor, secondaryColor } =
      req.body;

    if (name) {
      userInfo.name = name;
    }

    if (nickname) {
      userInfo.nickname = nickname;
    }

    if (req.files) {
      if (req.files.avatar) {
        const avatarFile = req.files.avatar[0];
        if (["image/png", "image/jpeg"].includes(avatarFile.mimetype)) {
          userInfo.avatar = {
            data: avatarFile.buffer,
            contentType: avatarFile.mimetype,
          };
        } else {
          return res
            .status(400)
            .json([
              "Por favor, sube un archivo PNG o JPG válido para el avatar",
            ]);
        }
      }

      if (req.files.banner) {
        const bannerFile = req.files.banner[0];
        if (["image/png", "image/jpeg"].includes(bannerFile.mimetype)) {
          userInfo.banner = {
            data: bannerFile.buffer,
            contentType: bannerFile.mimetype,
          };
        } else {
          return res
            .status(400)
            .json([
              "Por favor, sube un archivo PNG o JPG válido para el banner",
            ]);
        }
      }
    }

    if (description) {
      userInfo.description = description;
    }

    if (state) {
      userInfo.state = state;
    }

    if (primaryColor) {
      userInfo.primaryColor = primaryColor;
    }

    if (secondaryColor) {
      userInfo.secondaryColor = secondaryColor;
    }

    await userInfo.save();

    res.status(200).json(["Profile updated successfully"]);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Error secure",
    });
  }
};
