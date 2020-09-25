const DOMAIN = 'https://superheroapi.com/api'
const ACCESS_TOKEN = '10214601250059755'
const BASE_URL = `${DOMAIN}/${ACCESS_TOKEN}`

//Add event listener to the button to search user input
const input = document.querySelector('.search-crt')
const button = document.querySelector('.submit-button')


button.addEventListener('click', async () => {
  let userInput = input.value;
  const response = await axios.get(`${BASE_URL}/search/${userInput}`); //endpoint able to search character by name
  console.log(response.data.results[0]);
  statsList(response.data.results[0]) // result wanted to get information of the first in the list

});


const heroDisplay = document.querySelector('.show-hero')

let statsList = hero => {
  removeHero()
  let heroContainer = document.createElement('div')
  heroContainer.className = "hero-container";

  const section = document.querySelector('section')
  let heroName = document.createElement('h2');
  heroName.innerHTML = `${hero.name}`;
  section.append(heroName);


  //    **** IMAGE ****
  const heroImg = document.createElement('img')
  heroImg.className = "hero-img"
  heroImg.setAttribute('src', hero.image.url)

  heroContainer.appendChild(heroImg)



  //     ****  BIOGRAPHY  ****
  const biography = document.createElement('div')
  biography.className = "sh-biography"
  heroContainer.appendChild(biography)

  const biographyKeys = document.createElement('p')
  biographyKeys.className = "biography-entries"
  // const bioKeys = `${Object.keys(hero.biography)}`.split(',').join('\n')
  // console.log(bioKeys);
  // const bioValues = `${Object.values(hero.biography)}`.split(',').join('\n')
  // console.log(bioValues);
  // biographyKeys.innerText = (`${bioKeys}` + `:${bioValues}`)

  Object.entries(hero.biography).forEach((key, value) => {
    // console.log(key, value);
    biographyKeys.innerText += (`${key} `).split(',').join(': ')
    console.log(biographyKeys);

  })



  // biographyKeys.forEach(element => {

  // });

  console.log(biographyKeys);
  biography.appendChild(biographyKeys)


  //  **** POWERSTATS ****

  const powerStats = document.createElement('div')
  powerStats.className = "power-stats"
  heroContainer.appendChild(powerStats)

  const powerStatsKeys = document.createElement('p');
  powerStatsKeys.className = "powerstats-keys"

  Object.entries(hero.powerstats).forEach((key, value) => {
    powerStatsKeys.innerText += (`${key} \n \n`).split(',').join(':  ')
  })
  powerStats.appendChild(powerStatsKeys)
  heroDisplay.appendChild(heroContainer)

}

function removeHero() {
  const oldHero = document.querySelector('.show-hero')
  while (oldHero.lastChild) {
    oldHero.removeChild(oldHero.lastChild)
  }
}