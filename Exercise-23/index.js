const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

function findShortMovies(moviesList) {
  const shortMovies = [];
  const mediumMovies = [];
  const longMovies = [];
  const duration1 = 100;
  const duration2 = 200;

  for (const movie of moviesList) {
    if (movie.durationInMinutes < duration1) {
      shortMovies.push(`La película ${movie.name} dura menos de ${duration1} minutos`);
    }
    if (movie.durationInMinutes >= duration1 && movie.durationInMinutes <= duration2) {
      mediumMovies.push(`La película ${movie.name} dura más de ${duration1} y menos de ${duration2} minutos`);
    }
    if (movie.durationInMinutes > duration2) {
      longMovies.push(`La película ${movie.name} dura más de ${duration2} minutos`);
    }
    }
    console.log("Películas cortas:", shortMovies);
    console.log("Películas medianas:", mediumMovies);
    console.log("Películas largas:", longMovies);
    
}

findShortMovies(movies);

