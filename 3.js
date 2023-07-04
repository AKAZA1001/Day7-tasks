const countries = [
  {
    name: "India",
    capital: "Delhi",
    flag: "ind",
  },
  {
    name: "United Kingdom",
    capital: "London",
    flag: "🇬🇧",
  },
  {
    name: "united States",
    capital: "Washington D.C",
    flag: "us",
  },
];

countries.forEach((country) => {
  console.log("Name:", country.name);
  console.log("Capital:", country.capital);
  console.log("Flag:", country.flag);
  console.log("------------");
});
