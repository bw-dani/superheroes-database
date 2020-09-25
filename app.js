const DOMAIN = 'https://superheroapi.com/api'
const ACCESS_TOKEN = '10214601250059755'
const BASE_URL = `${DOMAIN}/${ACCESS_TOKEN}`


//        Select the search form
const input = document.querySelector('.search-crt')
const button = document.querySelector('.submit-button')


//        Add event listener to the button to search user input
button.addEventListener('click', async () => {
  let userInput = input.value;
  const response = await axios.get(`${BASE_URL}/search/${userInput}`); //endpoint able to search character by name
  statsList(response.data.results[0]) // result wanted to get information of the first in the list
});



//        Select the section where the info will be appended to and setting to the variable heroDisplay!
const heroDisplay = document.querySelector('.show-hero')



let statsList = hero => {
  removeHero() // calling the function to remove last search

  let heroContainer = document.createElement('div')
  heroContainer.className = "hero-container";

  const section = document.querySelector('section')
  let heroName = document.createElement('h2');
  heroName.innerHTML = `${hero.name}`;
  section.append(heroName); // append the name to the section element


  //    **** IMAGE ****
  const heroImg = document.createElement('img')
  heroImg.className = "hero-img"
  heroImg.setAttribute('src', hero.image.url)
  heroContainer.appendChild(heroImg) // append the image to the main div


  //     ****  BIOGRAPHY  ****
  const biography = document.createElement('div')
  biography.className = "sh-biography"
  heroContainer.appendChild(biography) // append the biography to the main div

  const biographyKeys = document.createElement('p')
  biographyKeys.className = "biography-entries"

  Object.entries(hero.biography).forEach((key, value) => {
    biographyKeys.innerText += (`${key[0]}: ${key[1]}
    `).split(',').join('\r\n  \r\n')
  }) //loop through each entrie, the api returned a JSON array of objects

  biography.appendChild(biographyKeys) // append the paragraph to the biography div


  //  **** POWERSTATS ****

  const powerStats = document.createElement('div')
  powerStats.className = "power-stats"
  heroContainer.appendChild(powerStats)

  const powerStatsKeys = document.createElement('p');
  powerStatsKeys.className = "powerstats-keys"

  Object.entries(hero.powerstats).forEach((key, value) => {
    powerStatsKeys.innerText += (`${key} \n \n`).split(',').join(':')
  })
  powerStats.appendChild(powerStatsKeys)


  heroDisplay.appendChild(heroContainer) //append the entire heroContainer function to the heroDisplay(main div)

}

function removeHero() { //remove last searched character
  const oldHero = document.querySelector('.show-hero')
  while (oldHero.lastChild) {
    oldHero.removeChild(oldHero.lastChild)
  }
}