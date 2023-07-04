const countries = [
  { name: "Afghanistan", continent: "Asia" },
  { name: "Bangladesh", continent: "Asia" },
  { name: "China", continent: "Asia" },
  { name: "India", continent: "Asia" },
  { name: "Japan", continent: "Asia" },
  { name: "South Korea", continent: "Asia" },
];

const asianCountries = countries.filter(
  (country) => country.continent === "Asia"
);

console.log(asianCountries.map((country) => country.name));
