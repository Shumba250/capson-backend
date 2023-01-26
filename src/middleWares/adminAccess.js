import signup from '../models/signupModule.js';

const adminAccess = async (req, res, next) => {
  try {
    const Admins = await signup.findOne({ _id: req.user._id, role: 'admin' });
    if (!Admins) {
      return res
        .status(401)
        .json({ status: 'blocked', message: 'only admins allowed' });
    }
    console.log(req.user);
    next();
  } catch (error) {
    res.status(500).json(error);
  }
};

export default adminAccess;
