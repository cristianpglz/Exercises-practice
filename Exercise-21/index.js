const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];


function findAdultUsers(usersList) {
  const adultUsers = [];
  const noAdultUsers = [];
    const ageThreshold = 18;
    for (const user of usersList) {
        if (user.years >= ageThreshold) {
            adultUsers.push(`El usuario ${user.name} es mayor de edad`);
        }
        if (user.years < ageThreshold) {
            noAdultUsers.push(`El usuario ${user.name} es menor de edad`);
        }
    }
    console.log(adultUsers);
    console.log(noAdultUsers);
    
}
findAdultUsers(users);