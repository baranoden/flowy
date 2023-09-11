import { Request, Response } from "express";
import User from "../../models/UserModel";

const register = async (req: Request, res: Response) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
      info: "",
      isAdmin: req.body.isadmin,
    });
    res.status(200).json({ status: "success", canLogin: true, user: newUser });
  } catch (err) {
    if (err) {
      if (err.code === 11000) {
        res.status(400).json({ status: "duplicate", canLogin: false });
      } else {
        res.status(400).json({
          status: "Contact Admin: baranoden@gmail.com",
          canLogin: false,
        });
      }
    }
  }
};

const validated = async (req: Request, res: Response) => {
  try {
    const options = [0, 1, 2, 3];
    if (options.includes(req.body.info) && req.body.username) {
      const updatedUser = await User.findOneAndUpdate(
        { username: req.body.username },
        { info: req.body.info },
        { new: true }
      );
      res
        .status(200)
        .json({ status: "success", canLogin: true, user: updatedUser });
    } else {
      res.status(400).json({ status: "wrong", canLogin: false });
    }
  } catch (err) {
    res.status(400).json({ status: "error", canLogin: false });
  }
};
module.exports = {
  register,
  validated,
};
