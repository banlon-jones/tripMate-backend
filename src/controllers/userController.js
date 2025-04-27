import User from "../models/user";

export const createUser = async (req, res) => {
  const {name, email, phoneNumber, uid } = req.body;
  try {
    const user = new User(
      {
        name,
        email,
        phoneNumber,
        uid
      });
    await user.save();
    res.status(201).json(user);
  }
  catch (e) {
    res.status(500).json({message: e.message});
  }
}
