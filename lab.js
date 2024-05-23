characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];

// 1. Get first name that has blue eyes.
let blueEyes = characters.find(character => character.eye_color === "blue").name;

// 2. Get first gender that has mass over 50.
let genderMass = characters.find(character => character.mass > 50).gender;

// 3. Get characters with height less than 200.
let heightLess = characters.filter(character => character.height < 200);

// 4. Get all male characters.
let maleCha = characters.filter(character => character.gender === "male");

// 5. Get array of all names only.
let allNames = characters.map(character => character.name);

// 6. Get array of al++++++++++++++l heights only.
let allHeights = characters.map(character => character.height);

// 7. Sort by mass (low to high).
let sortedByMass = [...characters].sort((a, b) => a.mass - b.mass);

// 8. Sort by height (high to low).
let sortedByHeight = [...characters].sort((a, b) => b.height - a.height);

// 9. Does every character have mass more than 40?
let everyMassMT = characters.every(character => character.mass > 40);

// 10. Is every character shorter than 200?
let everyST = characters.every(character => character.height < 200);

// 11. Is there at least one character with blue eyes?
let leastOBl = characters.some(character => character.eye_color === "blue");

// 12. Is there at least one character taller than 210?
let leastOTT = characters.some(character => character.height > 210);

console.log("First name with blue eyes:", blueEyes);
console.log("First gender with mass over 50:", genderMass);
console.log("Characters with height less than 200:", heightLess);
console.log("All male characters:", maleCha);
console.log("Array of all names:", allNames);
console.log("Array of all heights:", allHeights);
console.log("Sorted by mass (low to high):", sortedByMass);
console.log("Sorted by height (high to low):", sortedByHeight);
console.log("Every character has mass more than 40:", everyMassMT);
console.log("Every character is shorter than 200:", everyST);
console.log("At least one character with blue eyes:", leastOBl);
console.log("At least one character taller than 210:", leastOTT);