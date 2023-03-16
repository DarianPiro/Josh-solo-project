import User from '../model/User';
import { Request, Response } from 'express';

const getUser = async (req: Request, res: Response) => {
  try {
    const foundUser = await User.find({ email: req.body.user.email });
    if (foundUser.length === 0) {
      const data = new User({
        email: req.body.user.email,
        name: req.body.user.name ? req.body.user.name : req.body.user.nickname,
        picture: req.body.user.picture,
      });
      await data.save();
      res.send(data);
      res.status(201);
    } else {
      res.send(foundUser);
      res.status(200);
    }
  } catch (error) {
    res.status(500).send({ error });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const foundUser = await User.find({ _id: req.body.id });
    res.send(foundUser);
    res.status(200);
  } catch (error) {
    res.status(500).send({ error });
  }
};


const updateUser = async (req: Request, res: Response) => {
  try {
    const foundUser = await User.find({ email: req.body.email });
    if (foundUser.length === 0) {
      const data = new User(req.body);
      await data.save();
      res.send(data);
      res.status(201);
    } else {
      let data;
      if (req.body.picture && req.body.name === '') {
        data = await User.findOneAndUpdate(
          { email: req.body.email },
          { picture: req.body.picture },
          { new: true }
        );
      } else if (req.body.name !== '' && req.body.picture === undefined) {
        data = await User.findOneAndUpdate(
          { email: req.body.email },
          { name: req.body.name },
          { new: true }
        );
      } else if (req.body.name !== '' && req.body.picture !== undefined) {
        data = await User.findOneAndUpdate(
          { email: req.body.email },
          { name: req.body.name, picture: req.body.picture },
          { new: true }
        );
      }
      res.send(data);
      res.status(200);
    }
  } catch (error) {
    res.status(500).send({ error });
  }
};

export default { getUser, updateUser, getUserById };
