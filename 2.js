const countries = [
  { name: "India", population: 1352600000 },
  { name: "Pakistan", population: 225199937 },
  { name: "Bangladesh", population: 168065920 },
  { name: "Sri Lanka", population: 21803000 },
  { name: "Maldives", population: 530953 },
];

const countriesWithLessPopulation = countries.filter(
  (country) => country.population < 200000
);

console.log(countriesWithLessPopulation.map((country) => country.name));
