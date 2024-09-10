import Music from '../models/Music.js';

class MusicController {

  static async getMusic (req, res) {
    try {
      const musicList = Music.getMusic();
      res.status(200).json(musicList);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static async getMusicById (req, res) {
    try {
      const id = req.params.id;
      const music = Music.getMusicById(id);
      res.status(200).json(music);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};

export default MusicController;
