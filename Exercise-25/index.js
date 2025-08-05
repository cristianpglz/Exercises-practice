const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];


function findMoviesByYear(moviesList) {
    const moviesByYearBefore = [];
    const moviesByYearAfter = [];
    const moviesByYear = [];
    const year = 2000;
    for (const movie of moviesList) {

        if (movie.releaseYear < year) {
            moviesByYearAfter.push(`La película ${movie.title} se estrenó en el año ${movie.releaseYear}`);
        }
        if (movie.releaseYear > year) {
            moviesByYearBefore.push(`La película ${movie.title} se estrenó en el año ${movie.releaseYear}`);
        }
        if (movie.releaseYear === year) {
            moviesByYear.push(`La película ${movie.title} se estrenó en el año ${year}`);
        }
    }

    if (moviesByYearAfter.length > 0) {
        console.log("Películas estrenadas antes del año 2000:", moviesByYearAfter);
    }else {
        console.log("No hay películas estrenadas antes del año 2000.");
    }
    if (moviesByYear.length > 0) {
        console.log("Películas estrenadas en el año 2000:", moviesByYear);
    } else {
        console.log("No hay películas estrenadas en el año 2000.");
    }
    if (moviesByYearBefore.length > 0) {
        console.log("Películas estrenadas después del año 2000:", moviesByYearBefore);
    } else {
        console.log("No hay películas estrenadas después del año 2000.");
    }
}
findMoviesByYear(movies);