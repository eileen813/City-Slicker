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
            "href": "https://api.teleport.org/api/countries/iso_alpha2:US/admin1_divisions/geonames:CA/",
            "name": "California"
        },
        "city:alternate-names": {
            "href": "https://api.teleport.org/api/cities/geonameid:5391959/alternate_names/"
        },
        "city:country": {
            "href": "https://api.teleport.org/api/countries/iso_alpha2:US/",
            "name": "United States"
        },
        "city:timezone": {
            "href": "https://api.teleport.org/api/timezones/iana:America%2FLos_Angeles/",
            "name": "America/Los_Angeles"
        },
        "city:urban_area": {
            "href": "https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/",
            "name": "San Francisco Bay Area"
        },

        "self": {
            "href": "https://api.teleport.org/api/cities/geonameid:5391959/"
        }
    },
    "full_name": "San Francisco, California, United States",
    "geoname_id": 5391959,
    "location": {
        "geohash": "9q8yyk8yuv26emr0cctm",
        "latlon": {
            "latitude": 37.77493,
            "longitude": -122.41942
        }
    },

## Wireframes

https://miro.com/app/board/o9J_l4Mp7Jo=/


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

https://miro.com/app/board/o9J_l4NcoYY=/

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
