import data from '../../data/music.json' assert { type: "json" };

class Music {
  static getMusic() {
    return data;
  }

  static getMusicById(id) {
    return data.music.find((music) => music.id === id);
  }
}

export default Music;
