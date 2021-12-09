function movieTask(input) {
  let movies = [];

  for (let line of input) {
    if (line.includes("addMovie")) {
      let name = line.split("addMovie ")[1];
      movies.push({ name });
    } else if (line.includes("directedBy")) {
      let [name, director] = line.split(" directedBy ");
      let movie = movies.find((movieObj) => movieObj.name === name);

      if (movie) {
        movie.director = director;
      }
    } else if (line.includes("onDate")) {
      let [name, date] = line.split(" onDate ");
      let movie = movies.find((movieObj) => movieObj.name === name);

      if (movie) {
        movie.date = date;
      }
    }
  }
  movies.forEach((movie) => {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  });
}
movieTask([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);


// alternative

function trackMovie(actions) {
  let movies = {};
  let title = '';
  let date = '';
  let director = '';

  for (let command of actions) {
      if (command.startsWith('addMovie')) {
          title = command.slice(9); // starting index of each title
          movies[title] = {
              name: title,
              director: '',
              date: '',
          }
      }

      if (command.includes('onDate')) {
          command = command.split(' onDate ');
          title = command[0];
          date = command[1];

          if (movies.hasOwnProperty(title)) {
              movies[title].date = date;
          }
      }

      if (command.includes('directedBy')) {
          command = command.split(' directedBy ');
          title = command[0];
          director = command[1];

          if (movies.hasOwnProperty(title)) {
              movies[title].director = director;
          }
      }
  }

  let json = '';

  for (item in movies) {
      if (movies[item].date && movies[item].director) {
          json = JSON.stringify(movies[item]);
          console.log(json);
      }
  }
}