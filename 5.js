const countries = [
  { name: "United States", currency: "USD" },
  { name: "India", currency: "Rs" },
  { name: "Australia", currency: "AUD" },
];

const countryUsingUSD = countries.find((country) => country.currency === "USD");

if (countryUsingUSD) {
  console.log("Country using US Dollars:", countryUsingUSD.name);
} else {
  console.log("No country uses US Dollars as its currency.");
}
