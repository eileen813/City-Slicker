# Project Overview

## Project Name

[City Slicker](https://github.com/eileen813/City-Slicker/)

## Project Description

This final project will display city or country data demographics to a user such as timezone, income, population, quality of life, etc.

## API and Data Sample

[Teleport Public APIs](https://developers.teleport.org/api/)

{
    "_links": {
        "city:admin1_division": {
            "href": "https://api.teleport.org/api/countries/iso_alpha2:US/admin1_divisions/geonames:FL/",
            "name": "Florida"
        },
        "city:alternate-names": {
            "href": "https://api.teleport.org/api/cities/geonameid:4174757/alternate_names/"
        },
        "city:country": {
            "href": "https://api.teleport.org/api/countries/iso_alpha2:US/",
            "name": "United States"
        },
        "city:timezone": {
            "href": "https://api.teleport.org/api/timezones/iana:America%2FNew_York/",
            "name": "America/New_York"
        },
        "city:urban_area": {
            "href": "https://api.teleport.org/api/urban_areas/slug:tampa-bay-area/",
            "name": "Tampa Bay Area"
        },
        
        "self": {
            "href": "https://api.teleport.org/api/cities/geonameid:4174757/"
        }
    },
    "full_name": "Tampa, Florida, United States",
    "geoname_id": 4174757,
    "location": {
        "geohash": "dhvqgxew5764t9bp4b6j",
        "latlon": {
            "latitude": 27.94752,
            "longitude": -82.45843
        }
    },
    "name": "Tampa",
    "population": 369075
}

{
    "_links": {
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
            "href": "https://api.teleport.org/api/urban_areas/slug:tampa-bay-area/"
        },
        "ua:admin1-divisions": [
            {
                "href": "https://api.teleport.org/api/countries/iso_alpha2:US/admin1_divisions/geonames:FL/",
                "name": "Florida"
            }
        ],
        "ua:cities": {
            "href": "https://api.teleport.org/api/urban_areas/slug:tampa-bay-area/cities/"
        },
        "ua:continent": {
            "href": "https://api.teleport.org/api/continents/geonames:NA/",
            "name": "North America"
        },
        "ua:countries": [
            {
                "href": "https://api.teleport.org/api/countries/iso_alpha2:US/",
                "name": "United States"
            }
        ],
        "ua:details": {
            "href": "https://api.teleport.org/api/urban_areas/slug:tampa-bay-area/details/"
        },
        "ua:identifying-city": {
            "href": "https://api.teleport.org/api/cities/geonameid:4174757/",
            "name": "Tampa"
        },
        "ua:images": {
            "href": "https://api.teleport.org/api/urban_areas/slug:tampa-bay-area/images/"
        },
        "ua:primary-cities": [
            {
                "href": "https://api.teleport.org/api/cities/geonameid:4174757/",
                "name": "Tampa"
            },
            {
                "href": "https://api.teleport.org/api/cities/geonameid:4171563/",
                "name": "St. Petersburg"
            }
        ],
        "ua:salaries": {
            "href": "https://api.teleport.org/api/urban_areas/slug:tampa-bay-area/salaries/"
        },
        "ua:scores": {
            "href": "https://api.teleport.org/api/urban_areas/slug:tampa-bay-area/scores/"
        }
    },
    "bounding_box": {
        "latlon": {
            "east": -81.8317,
            "north": 28.517,
            "south": 26.8927,
            "west": -82.8864
        }
    },
    "continent": "North America",
    "full_name": "Tampa Bay Area, Florida",
    "is_government_partner": false,
    "name": "Tampa Bay Area",
    "slug": "tampa-bay-area",
    "teleport_city_url": "https://teleport.org/cities/tampa-bay-area/",
    "ua_id": "dhvqg"
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

|  Day | Deliverable | Status
|---|---| ---|
|July 30|  API Research | Complete
|August 1| ReadME, Wireframe, & Priority Matrix | Complete
|August 2| Project Approval, Structure, Pseudocode| Incomplete
|August 3| JS Code Ensuring API Operating  | Incomplete
|August 4| MVP Priorities, More Coding, Debugging | Incomplete
|August 5| PMVP, Styling, & Debugging | Incomplete
|August 6| Presentation Day *Woot Woot*! | Incomplete

## Priority Matrix

![Matrix](https://github.com/eileen813/City-Slicker/blob/main/2%C3%972%20Prioritization%20Matrix.jpg?raw=true)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| API Research | H | 4hrs| 3.5hrs | 3.5hrs |
| Adding HTML Structure/Pseudocode | H | 1hrs| hrs | hrs |
| Add Nav., Form, & Search Bar | H | 2hrs| hrs | hrs |
| Appending City Data | H | 3hrs| hrs | hrs |
| Append City Images | H | 3hrs| hrs | hrs |
| Remove Previous Search Data | H | 1hrs| hrs | hrs |
| Adding Flexbox & Media Query | H | 2hrs| hrs | hrs |
| Style with CSS | H | 3hrs| hrs | hrs |
| Final Touches/Debug | H | 5hrs| hrs | hrs |
| Total | H | 30hrs| 3.5hrs | 3.5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.
