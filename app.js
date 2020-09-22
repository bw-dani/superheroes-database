const DOMAIN = 'https://superheroapi.com/api'
const ACCESS_TOKEN = '10214601250059755'
const BASE_URL = `${DOMAIN}/${ACCESS_TOKEN}`

//Add event listener to the button to search user input
const input = document.querySelector('.search-crt')
const button = document.querySelector('.submit-button')


button.addEventListener('click', async () => {
  let userInput = input.value;
  const response = await axios.get(`${BASE_URL}/search/${userInput}`); //endpoint able to search character by name
  // console.log(response.data.results[0]);
  renderList(response.data.results[0]) // result wanted to get information of the first in the list

});


const heroDisplay = document.querySelector('.show-hero')

let renderList = hero => {
  let heroContainer = document.createElement('div')
  heroContainer.className = "hero-container";

  let heroName = document.createElement('h3')
  heroName.innerHTML = `${hero.name}`;
  heroContainer.appendChild(heroName);

  const powerStats = document.createElement('p');
  powerStats.className = "power-stats"
  powerStats.innerHTML = Object.entries(hero.powerstats)
  heroContainer.appendChild(powerStats)
  // console.log(powerStats);

  const heroImg = document.createElement('img')
  heroImg.className = "hero-img"
  heroImg.setAttribute('src', hero.image.url)
  heroContainer.appendChild(heroImg)

  heroDisplay.appendChild(heroContainer)

}