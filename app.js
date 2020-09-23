const DOMAIN = 'https://superheroapi.com/api'
const ACCESS_TOKEN = '10214601250059755'
const BASE_URL = `${DOMAIN}/${ACCESS_TOKEN}`

//Add event listener to the button to search user input
const input = document.querySelector('.search-crt')
const button = document.querySelector('.submit-button')


button.addEventListener('click', async () => {
  let userInput = input.value;
  const response = await axios.get(`${BASE_URL}/search/${userInput}`); //endpoint able to search character by name
  console.log(response.data.results[0].Object);
  statsList(response.data.results[0]) // result wanted to get information of the first in the list

});


const heroDisplay = document.querySelector('.show-hero')

let statsList = hero => {
  let heroContainer = document.createElement('div')
  heroContainer.className = "hero-container";

  const section = document.querySelector('section')
  let heroName = document.createElement('h2');
  heroName.innerHTML = `${hero.name}`;
  section.append(heroName);

  const heroImg = document.createElement('img')
  heroImg.className = "hero-img"
  heroImg.setAttribute('src', hero.image.url)

  heroContainer.appendChild(heroImg)

  const biography = document.createElement('div')
  biography.className = "sh-biography"
  heroContainer.appendChild(biography)

  const biographyKeys = document.createElement('p')
  biographyKeys.className = "biography-entries"
  const bioKeys = `${Object.keys(hero.biography)}`.split(',').join('\n')
  console.log(bioKeys);
  const bioValues = `${Object.values(hero.biography)}`.split(',').join('\n')
  console.log(bioValues);
  biographyKeys.innerText = (`${bioKeys}` + `:${bioValues}`)
  // const bioMap = new Map()
  // for (let i = 0; i < bioKeys.length; i++) {
  //   bioMap.set(bioKeys[i], bioValues[i])
  // }
  // console.log(bioMap);

  // for (let key of bioMap.bioKeys()) {
  //   document.write(key + ' = ' + bioMap.get(key) + "<br>")
  // }

  // biographyKeys.innerHTML = `${Object.keys(hero.biography)}`.split(',').join(`${Object.values(hero.biography)}`)
  // biographyKeys.innerHTML = hero.forEach(element => {
  //   `${Object.keys(hero.biography)}`.split(',').join(`<br>:${Object.values(hero.biography)}`)
  // });
  console.log(biographyKeys);
  biography.appendChild(biographyKeys)

  // const biographyValues = document.createElement('p')
  // biographyValues.className = "biography-values"
  // biographyValues.innerHTML = `${Object.values(hero.biography)}`.split(`,`).join('\n ')
  // console.log(biographyValues);
  // biography.appendChild(biographyValues)


  const powerStats = document.createElement('div')
  powerStats.className = "power-stats"

  heroContainer.appendChild(powerStats)

  const powerStatsKeys = document.createElement('p');
  powerStatsKeys.className = "powerstats-keys"
  powerStatsKeys.innerHTML = `${Object.keys(hero.powerstats)}`.split(`,`).join(': \n ')
  // powerStats.innerHTML = `${Object.keys(hero.powerstats)} ${Object.values(hero.powerstats)}`.split(`,`).join('\n')
  // let array = powerStats.innerHTML.split(',').join('\n')
  // let powerStats = array
  // powerStats.append(array)
  powerStats.appendChild(powerStatsKeys)
  // console.log(powerStatsKeys);

  const powerStatsValues = document.createElement('p')
  powerStatsValues.className = "powerstats-values"
  powerStatsValues.innerHTML = `${Object.values(hero.powerstats)}`.split(`,`).join('\n ')
  powerStats.appendChild(powerStatsValues)
  // console.log(powerStatsValues);


  heroDisplay.appendChild(heroContainer)

}