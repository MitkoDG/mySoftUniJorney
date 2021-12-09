function playlist(input) {
  class Song {
    constructor(playList, name, time) {
      (this.playList = playList), (this.name = name), (this.time = time);
      this.print = () => console.log(this.name);
    }
  }

  let numberOfSongs = input.shift();
  let disiredPlaylist = input.pop();
  let songs = [];

  for (let i = 0; i < numberOfSongs; i++) {
    let currentInput = input[i];
    let currentArray = currentInput.split("_");
    let currentSong = new Song(
      currentArray[0],
      currentArray[1],
      currentArray[2]
    );
    songs.push(currentSong);
  }

  if (disiredPlaylist === "all") {
    songs.forEach((s) => s.print());
  } else {
    let filteredSongs = songs.filter((s) => s.playList === disiredPlaylist);
    filteredSongs.forEach((s) => s.print());

    // songs
    // .filter(s => s.playList === disiredPlaylist)
    // .forEach(s => s.print())
  }
}
playlist([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);

playlist([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
playlist([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
