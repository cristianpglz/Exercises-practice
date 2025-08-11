const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];
function filterCategories(muviesList){
    const categoriesList = [];
    for (const movie of muviesList) {
        for (const category of movie.categories) {
            if (!categoriesList.includes(category)) {
                categoriesList.push(category);
            }
        }
    }
    console.log("Categorias de Peliculas --->", categoriesList);
};
filterCategories(movies);