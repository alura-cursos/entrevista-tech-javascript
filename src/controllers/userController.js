import Users from '../models/Users.js';

class UserController {

  static async getUsers (req, res) {
    try {
      const usersList = Users.getUsers()
      res.status(200).json(usersList);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static async getUserById (req, res) {
    try {
      const id = req.params.id;
      const user = Users.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static async getSongsByUser (req, res) {
    try {
      const id = req.params.id;
      const songList = Users.getAllSongs(id);  
      res.status(200).json(songList);  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export default UserController;
