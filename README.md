# Project Overview

## Project Name

[City Slicker](https://eileen813.github.io/City-Slicker/)

## Project Description

This final project will display city or country data demographics to a user such as timezone, income, population, quality of life, etc.

## API and Data Sample

[Teleport Public APIs](https://developers.teleport.org/api/)

[Teleport Score Sample](https://api.teleport.org/api/urban_areas/slug:seattle/scores)

[Teleport Image Sample](https://api.teleport.org/api/urban_areas/slug:paris/images/)

{
"\_links": {
"curies": [
{
"href": "https://developers.teleport.org/api/resources/Location/#!/relations/{rel}/",
"name": "location",
"templated": true
},
{
"href": "https://developers.teleport.org/api/resources/City/#!/relations/{rel}/",
"name": "city",
"templated": true
},
{
"href": "https://developers.teleport.org/api/resources/UrbanArea/#!/relations/{rel}/",
"name": "ua",
"templated": true
},
{
"href": "https://developers.teleport.org/api/resources/Country/#!/relations/{rel}/",
"name": "country",
"templated": true
},
{
"href": "https://developers.teleport.org/api/resources/Admin1Division/#!/relations/{rel}/",
"name": "a1",
"templated": true
},
{
"href": "https://developers.teleport.org/api/resources/Timezone/#!/relations/{rel}/",
"name": "tz",
"templated": true
}
],
"self": {
"href": "https://api.teleport.org/api/urban_areas/slug:new-york/scores/"
}
},
"categories": [
{
"color": "#f3c32c",
"name": "Housing",
"score_out_of_10": 1.0
},
{
"color": "#f3d630",
"name": "Cost of Living",
"score_out_of_10": 2.342
},
{
"color": "#f4eb33",
"name": "Startups",
"score_out_of_10": 10.0
},
{
"color": "#d2ed31",
"name": "Venture Capital",
"score_out_of_10": 10.0
},
{
"color": "#7adc29",
"name": "Travel Connectivity",
"score_out_of_10": 6.675
},
{
"color": "#36cc24",
"name": "Commute",
"score_out_of_10": 5.5192499999999995
},
{
"color": "#19ad51",
"name": "Business Freedom",
"score_out_of_10": 8.671
},
{
"color": "#0d6999",
"name": "Safety",
"score_out_of_10": 7.022
},
{
"color": "#051fa5",
"name": "Healthcare",
"score_out_of_10": 8.501666666666665
},
{
"color": "#150e78",
"name": "Education",
"score_out_of_10": 8.0935
},
{
"color": "#3d14a4",
"name": "Environmental Quality",
"score_out_of_10": 5.233749999999999
},
{
"color": "#5c14a1",
"name": "Economy",
"score_out_of_10": 6.5145
},
{
"color": "#88149f",
"name": "Taxation",
"score_out_of_10": 3.9205
},
{
"color": "#b9117d",
"name": "Internet Access",
"score_out_of_10": 7.0985
},
{
"color": "#d10d54",
"name": "Leisure & Culture",
"score_out_of_10": 10.0
},
{
"color": "#e70c26",
"name": "Tolerance",
"score_out_of_10": 6.7125
},
{
"color": "#f1351b",
"name": "Outdoors",
"score_out_of_10": 5.7475
}
],
"summary": "<p>\n The New York metropolitan area is one of the most populated cities in the world. New York City itself is an <b>international center for numerous industries</b> including finance, theater, television, film, arts, and technology. It is also home to an astonishing 37% of foreign-born residents. Costs are high, but so are the energy levels and <b>ambitious spirit</b>. Whether you're visiting or planning to move, the \"Big Apple\" has <b>something to offer for everyone</b>.\n</p>\n\n\n <p>New York is one of the top ten city matches for 13.9% of Teleport users.</p>\n",
"teleport_city_score": 67.27513513513514
}

{
"\_links": {
"curies": [
{
"href": "https://developers.teleport.org/api/resources/Location/#!/relations/{rel}/",
"name": "location",
"templated": true
},
{
"href": "https://developers.teleport.org/api/resources/City/#!/relations/{rel}/",
"name": "city",
"templated": true
},
{
"href": "https://developers.teleport.org/api/resources/UrbanArea/#!/relations/{rel}/",
"name": "ua",
"templated": true
},
{
"href": "https://developers.teleport.org/api/resources/Country/#!/relations/{rel}/",
"name": "country",
"templated": true
},
{
"href": "https://developers.teleport.org/api/resources/Admin1Division/#!/relations/{rel}/",
"name": "a1",
"templated": true
},
{
"href": "https://developers.teleport.org/api/resources/Timezone/#!/relations/{rel}/",
"name": "tz",
"templated": true
}
],
"self": {
"href": "https://api.teleport.org/api/urban_areas/slug:paris/images/"
}
},
"photos": [
{
"attribution": {
"license": "Attribution, ShareAlike",
"photographer": "Rob Potvin",
"site": "Unsplash",
"source": "https://unsplash.com/robpotvin"
},
"image": {
"mobile": "https://d13k13wj6adfdf.cloudfront.net/urban_areas/paris-0ae0bb626e.jpg",
"web": "https://d13k13wj6adfdf.cloudfront.net/urban_areas/paris_web-0a3c7314a5.jpg"
}
}
]
}

## Wireframes

![Wireframe](https://github.com/eileen813/City-Slicker/blob/main/Website%20Wireframing.jpg?raw=true)

#### MVP

- Use the Teleport Public API for city specifics worldwide
- Render city information on browser
- Display other city data such as cost of living, income, quality of life, etc.
- Remove previous city data with new search

#### PostMVP

- Add second API for weather
- Add city image returned with city results
- Add comparing city results

## Project Schedule

| Day      | Deliverable                             | Status   |
| -------- | --------------------------------------- | -------- |
| July 30  | API Research                            | Complete |
| August 1 | ReadME, Wireframe, & Priority Matrix    | Complete |
| August 2 | Project Approval, Structure, Pseudocode | Complete |
| August 3 | JS Code Ensuring API Operating          | Complete |
| August 4 | MVP Priorities, More Coding, Debugging  | Complete |
| August 5 | PMVP, Styling, & Debugging              | Complete |
| August 6 | Live Deployment Launch                  | Complete |

## Priority Matrix

![Matrix](https://github.com/eileen813/City-Slicker/blob/main/2%C3%972%20Prioritization%20Matrix.jpg?raw=true)

## Timeframes

| Component                        | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------- | :------: | :------------: | :-----------: | :---------: |
| API Research                     |    H     |     4 hrs      |    3.5 hrs    |   3.5 hrs   |
| Adding HTML Structure/Pseudocode |    H     |      1 hr      |     1 hr      |    1 hr     |
| Add Nav., Form, & Search Bar     |    H     |      1 hr      |     1 hr      |    1 hr     |
| Appending City Data              |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Append City Images               |    H     |      1 hr      |     1 hr      |    1 hr     |
| Remove Previous Search Data      |    H     |      1 hr      |     1 hr      |   30 min    |
| Adding Flexbox & Media Query     |    H     |     2 hrs      |     1 hr      |    1 hr     |
| Style with CSS                   |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Final Touches/Debug              |    H     |    3.5 hrs     |     2 hrs     |    2 hrs    |
| Total                            |    H     |    18.5 hrs    |    19 hrs     |   15 hrs    |

## Code Snippet

I am proud of the code below as I found my API a little difficult to sort through its multitude of arrays to choose specific data. Just getting started on the code below helped the rest of my project flow smoothly:

```
function buildElements(cityDetails) {
  const cityDiv = document.createElement("div")
  cityList.append(cityDiv)

  const cityPop = document.createElement("p")
  cityPop.textContent = `Urban area population in millions is ${cityDetails[1].data[0].float_value}`
  cityDiv.append(cityPop)

  return cityDetails
}
```

## Change Log

I did not include a navigation bar. Since I did not have a second API, I did not believe the navigation bar was needed at the time.
