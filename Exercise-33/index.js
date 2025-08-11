const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

var countryQuest = 'spain';
function getCapital(country) {
    if (typeof country !== 'string') {
        return 'Invalid input';
    }
    
    country = country.trim();
    
    if (country === '') {
        return 'Country name cannot be empty';
    }
    
    country = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
    
    if (!capitals.hasOwnProperty(country)) {
        return 'Country not found';
    }
    for (const capital in capitals) {
        if (capital === country) {
        return capitals[capital];
        }
    }
        return 'Capital not found';

}


console.log(getCapital(countryQuest)); // Output: Madrid