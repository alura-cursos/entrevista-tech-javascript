import data from '../../data/users.json' assert { type: "json" };
import Music from '../models/Music.js';

class Users {
  static getUsers() {
    return data;
  }

  static getUserById(id) {
    return data.users.find((user) => user.id === id);
  }

  static getAllSongs(id) {
    const musicList = Music.getMusic();

    const user = this.getUserById(id);

    return user.listened.map((song) => {
      const music = musicList.music.find((music) => music.id === song.songId);
      return music.title;
    })
  }
}

export default Users;
