import { Request, Response } from "express";
import User from "../../models/UserModel";

const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (!user) {
      return res.status(401).json({ status: "error", user: false });
    } else {
      if (req.body.password === user.password) {
        return res
          .status(200)
          .json({ status: "success", data: { canLogin: true, user: user } });
      }
    }
  } catch (err) {
    res.status(400).json({ status: err, canLogin: false });
  }
};
module.exports = {
  login,
};
