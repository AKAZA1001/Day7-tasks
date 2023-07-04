const countries = [
  { name: "India", population: 1352600000 },
  { name: "China", population: 1444216107 },
  { name: "United States", population: 331002651 },
];

const totalPopulation = countries.reduce((accumulator, country) => {
  return accumulator + country.population;
}, 0);

console.log("Total Population:", totalPopulation);
