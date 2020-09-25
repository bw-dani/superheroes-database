const DOMAIN = 'https://cors-anywhere.herokuapp.com/superheroapi.com/api'
const ACCESS_TOKEN = '10214601250059755'
const BASE_URL = `${DOMAIN}/${ACCESS_TOKEN}`


// **** SEARCH BUTTON 1 ****

const input1 = document.querySelector('.search-crt1')
const button1 = document.querySelector('.submit-button1')


button1.addEventListener('click', async () => {
  let userInput = input1.value;
  const response = await axios.get(`${BASE_URL}/search/${userInput}`);
  statsList1(response.data.results[0])

});
const heroDisplay1 = document.querySelector('.show-hero1')

let statsList1 = hero => {
  removeHero1()
  let heroContainer1 = document.createElement('div')
  heroContainer1.className = "hero-container1";

  const section1 = document.querySelector('.show-hero1')
  let heroName1 = document.createElement('h2');
  heroName1.innerHTML = `${hero.name}`;
  section1.append(heroName1);


  //    **** IMAGE ****
  const heroImg1 = document.createElement('img')
  heroImg1.className = "hero-img1"
  heroImg1.setAttribute('src', hero.image.url)
  heroContainer1.appendChild(heroImg1)

  // **** POWERSTATS ****

  const powerStats1 = document.createElement('div')
  powerStats1.className = "power-stats1"
  heroContainer1.appendChild(powerStats1)

  const powerStatsKeys1 = document.createElement('p');
  powerStatsKeys1.className = "powerstats-keys1"

  Object.entries(hero.powerstats).forEach((key, value) => {
    powerStatsKeys1.innerHTML += (`<p>${key}</p>`)
  })
  powerStats1.appendChild(powerStatsKeys1)
  heroDisplay1.appendChild(heroContainer1)

}

function removeHero1() {
  const oldHero1 = document.querySelector('.show-hero1')
  while (oldHero1.lastChild) {
    oldHero1.removeChild(oldHero1.lastChild)
  }
}




//    ***** SEARCH BUTTON 2 *****



const input2 = document.querySelector('.search-crt2')
const button2 = document.querySelector('.submit-button2')


button2.addEventListener('click', async () => {
  let userInput = input2.value;
  const response = await axios.get(`${BASE_URL}/search/${userInput}`);
  statsList2(response.data.results[0])
})

const heroDisplay2 = document.querySelector('.show-hero2')

let statsList2 = hero => {
  removeHero2()
  let heroContainer2 = document.createElement('div')
  heroContainer2.className = "hero-container2";

  const section2 = document.querySelector('.show-hero2')
  let heroName2 = document.createElement('h2');
  heroName2.innerHTML = `${hero.name}`;
  section2.append(heroName2);


  //    **** IMAGE ****
  const heroImg2 = document.createElement('img')
  heroImg2.className = "hero-img1"
  heroImg2.setAttribute('src', hero.image.url)
  heroContainer2.appendChild(heroImg2)

  // **** POWERSTATS ****

  const powerStats2 = document.createElement('div')
  powerStats2.className = "power-stats2"
  heroContainer2.appendChild(powerStats2)

  const powerStatsKeys2 = document.createElement('p');
  powerStatsKeys2.className = "powerstats-keys2"

  Object.entries(hero.powerstats).forEach((key, value) => {
    powerStatsKeys2.innerHTML += (`<p>${key}</p>`)
  })
  powerStats2.appendChild(powerStatsKeys2)
  heroDisplay2.appendChild(heroContainer2)

}

function removeHero2() {
  const oldHero2 = document.querySelector('.show-hero2')
  while (oldHero2.lastChild) {
    oldHero2.removeChild(oldHero2.lastChild)
  }
}