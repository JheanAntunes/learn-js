const endpoint = "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10";
const response = fetch(endpoint);
response.then((data) => {
  data.json().then((data) => console.log(data.results));
});
