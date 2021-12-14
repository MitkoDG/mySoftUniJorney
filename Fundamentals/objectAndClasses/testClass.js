class Song {
    constructor(name, song, length) {
        this.namePerson = name,
            this.songName = song,
            this.lengthSong = length
    }
}

let newSongList = new Song('Luchano', 'OmamaMia', 3.58)

let songList = []
songList.push(newSongList)

for (let s1 of songList) {
    for (let s in s1) {
        console.log(`${s}: ${s1[s]}`);
    }
}
