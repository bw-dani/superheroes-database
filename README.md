# Project Overview

## Superheroes Database

## Project Description

This website allows you to see your favorite superheroes details such as status,biography,appearance,etc. And the best of it all is compare their power stats.

## API and Data Sample

API used is from Superhero
https://superheroapi.com/index.html

```{
    "response": "success",
    "results-for": "batman",
    "results": [
        {
            "id": "69",
            "name": "Batman",
            "powerstats": {
                "intelligence": "81",
                "strength": "40",
                "speed": "29",
                "durability": "55",
                "power": "63",
                "combat": "90"
            },
            "biography": {
                "full-name": "Terry McGinnis",
                "alter-egos": "No alter egos found.",
                "aliases": [
                    "Batman II",
                    "The Tomorrow Knight",
                    "The second Dark Knight",
                    "The Dark Knight of Tomorrow",
                    "Batman Beyond"
                ],
                "place-of-birth": "Gotham City, 25th Century",
                "first-appearance": "Batman Beyond #1",
                "publisher": "DC Comics",
                "alignment": "good"
            },
            "appearance": {
                "gender": "Male",
                "race": "Human",
                "height": [
                    "5'10",
                    "178 cm"
                ],
                "weight": [
                    "170 lb",
                    "77 kg"
                ],
                "eye-color": "Blue",
                "hair-color": "Black"
            },
            "work": {
                "occupation": "-",
                "base": "21st Century Gotham City"
            },
            "connections": {
                "group-affiliation": "Batman Family, Justice League Unlimited",
                "relatives": "Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)"
            },
            "image": {
                "url": "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
            }
        }
```

## Wireframes

https://wireframe.cc/xGxlO7

### MVP/PostMVP

#### MVP

- Apply API
- Apply select feature
- Allow user to search by name
- return the data image and status

#### PostMVP

- Add second page for character comparison
- link to the first page
- random button on both pages

## Project Schedule

| Day        | Deliverable                                        | Status     |
| ---------- | -------------------------------------------------- | ---------- |
| Sept 18-21 | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| Sept 21    | Project Approval                                   | Complete   |
| Sept 22    | Core Application Structure (HTML, CSS, etc.)       | Complete   |
| Sept 23    | MVP                                                | Complete   |
| Sept 24    | Post MVP/Styling                                   | Complete   |
| Sept 25    | Presentations                                      | Incomplete |

## Priority Matrix

https://imgur.com/P3VFVCJ

## Timeframes

| Component                        | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------- | :------: | :------------: | :-----------: | :---------: |
| HTML                             |    H     |      1hr       |    1:30hr     |   1:30hr    |
| Working with API                 |    H     |      3hrs      |     4hrs      |    4hrs     |
| DOM,Functions, Event listeners   |    H     |      6hrs      |     6hrs      |    6hrs     |
| CSS                              |    H     |      3hrs      |    4:30hrs    |   4:30hrs   |
| Debugging                        |    H     |      4hrs      |     5hrs      |    5hrs     |
| Adding second page               |    M     |      3hrs      |    30mins     |   30mins    |
| Working with API for second page |    M     |      4hrs      |      1hr      |     1hr     |
| Linking pages                    |    M     |      3hrs      |    30mins     |   30mins    |
| Adding Media Query               |    M     |      3hrs      |     2hrs      |    2hrs     |
| Total                            |    H     |     30hrs      |     25hrs     |    25hrs    |

## Code Snippet

````Object.entries(hero.biography).forEach((key, value) => {
    biographyKeys.innerText += (`${key[0]}: ${key[1]}
    `).split(',').join('\r\n  \r\n')
  }) ```


## Change Log
Select and random features where not added because did not make sense with the page flow.
````
