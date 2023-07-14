function movieLibrary(input) {
  let movies = [];

  const movieLibrary = {
    addMovie: (command) => {
      const [_, name] = command.split("addMovie ");
      movies.push({ name });
    },
    addDirector: (command) => {
      const [movieName, directorName] = command.split(" directedBy ");
      const movie = movies.find((m) => m.name === movieName);

      if (movie) {
        movie.director = directorName;
      }
    },
    addDate: (command) => {
      const [movieName, date] = command.split(" onDate ");
      const movie = movies.find((m) => m.name === movieName);

      if (movie) {
        movie.date = date;
      }
    },
  };

  input.forEach((command) => {
    if (command.includes("addMovie")) {
      movieLibrary.addMovie(command);
    } else if (command.includes("directedBy")) {
      movieLibrary.addDirector(command);
    } else if (command.includes("onDate")) {
      movieLibrary.addDate(command);
    }
  });

  movies
    .filter((m) => m.name && m.director && m.date)
    .forEach((m) => console.log(JSON.stringify(m)));
}
