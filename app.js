const DOMAIN = `https://api.teleport.org/api/cities/`
// const DATA_URL = `https://api.teleport.org/api/cities/?search=&embed=city:search-results/city:item/city:country&embed=city:search-results/city:item/city:admin1_division&embed=city:search-results/city:item/city:urban_area&embed=city:search-results/city:item/city:timezone/tz:offsets-now`
// const DETAILS_URL = `https://api.teleport.org/api/urban_areas/slug:{CITY HERE}/details/`

const submitButton = document.querySelector("#get-city")

async function getData() {
  try {
    const findCity = document.querySelector("#city-search").value
    // console.log(findCity)
    const response = await axios.get(`${DOMAIN}?search=${findCity}`)
    // console.log(response.data)
    const cityData = response.data
    showCityData(cityData)
    
    return cityData
  } catch (error) {
    console.error(error)
  }
  // document.getElementById(`#city-search`) = findCity.data
  }

  // function showCityData(data) {
  //     // console.log(data)
  //   const cityDiv = document.createElement("div")
  //   findCity.append(cityDiv)
  // }

submitButton.addEventListener("click", (e) => {
  e.preventDefault()
  getData()
})