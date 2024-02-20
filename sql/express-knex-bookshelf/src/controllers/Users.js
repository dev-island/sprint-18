import User from '../models/User';

export default {
  getAllUsers: async (req, res) => {
    const users = await User.forge()
      .fetchAll()
      .then(data => (data ? data.toJSON() : null));
    return res.send(users);
  },
};
