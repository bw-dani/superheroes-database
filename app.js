const DOMAIN = 'https://superheroapi.com/api'
const ACCESS_TOKEN = '10214601250059755'
const BASE_URL = `${DOMAIN}/${ACCESS_TOKEN}`

//Add event listener to the button to search user input
const input = document.querySelector('.search-crt')
const button = document.querySelector('.submit-button')

button.addEventListener('click', async () => {
  let userInput = input.value;
  const response = await axios.get(`${BASE_URL}/search/${userInput}`); //endpoint able to search character by name
  // console.log(response.data.results[0].image);
  renderList(response.data.results[0]) // result wanted to get information of the first in the list
})

const displayHero = document.querySelector('.show-hero')
// console.log(displayHero);

// const renderList = hero => {
//   hero.forEach(hero => {
//     const heroContainer = document.createElement('div');
//     heroContainer.className = "hero-container";

//   });
// }

// async function fetchData(superhero) {
//   try {
//     const response = await axios.get(`${BASE_URL}/search/batman`);
//     console.log(response);
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   }
// }
// fetchData()