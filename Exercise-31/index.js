const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
  { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
  { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
  { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

function groupArtistsByInfluence(artistsList) {
  const groupedByInfluence = {};

  for (let artist of artistsList) {
    for (let influence of artist.influences) {
        if (!groupedByInfluence[influence]) {
            groupedByInfluence[influence] = [];
        }
        console.log(`${artist.name} ---> ${influence}`);
        
    
        groupedByInfluence[influence].push(artist.name);
    }
  }

 // console.log(groupedByInfluence);

}
groupArtistsByInfluence(artists);