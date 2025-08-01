const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

function veganFoodFinder(foodList) {
  const veganFoods = [];
  for (const food of foodList) {
    if (food.isVegan) {
      veganFoods.push(`Voy a comer: ${food.name}`);
    } 
  }
  for (const fruit of fruits) {
    veganFoods.push(`Voy a comer: ${fruit}`); 
  }
  console.log(veganFoods);
}
veganFoodFinder(foodSchedule);