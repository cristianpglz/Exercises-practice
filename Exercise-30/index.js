const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

function groupTracksByGenre(tracksList) {
    const groupedByGenre = {};

    for (let track of tracksList) {
        const genre = track.genre;

        if (!groupedByGenre[genre]) {
            groupedByGenre[genre] = [];
        }

        groupedByGenre[genre].push(track.title);
    }

    console.log(groupedByGenre);
}
groupTracksByGenre(tracks);