function solve(band, album, song) {
  let duration = (band.length * album.length * song.length) / 2;

  let rotation = Math.ceil(duration / 2.5)

console.log(`The plate was rotated ${rotation} times.`);
  
}
solve("Black Sabbath", "Paranoid", "War Pigs");
solve('Rammstein', 'Sehnsucht', 'Engel')
