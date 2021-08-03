// const DOMAIN = `https://api.teleport.org/api/cities/`
// const DATA_URL = `https://api.teleport.org/api/cities/?search=&embed=city:search-results/city:item/city:country&embed=city:search-results/city:item/city:admin1_division&embed=city:search-results/city:item/city:urban_area&embed=city:search-results/city:item/city:timezone/tz:offsets-now`
// const DETAILS_URL = `https://api.teleport.org/api/urban_areas/slug:${cityname}/details/`
const form = document.querySelector('#city-form')
const cityList = document.querySelector(`#city-data`)
// 
async function getData(cityname) {
  try {
    const cityDetails = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${cityname}/details/`)
    buildElements(cityDetails.data)
    return cityDetails
  } catch (error) {
    console.error(error)
  }
}
// getData('seattle')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#city-search').value
  // console.log(inputValue)
  let sanitizeData = inputValue.trim().replaceAll(" ", '-').toLowerCase()
  console.log(sanitizeData)
  getData(sanitizeData)
})
function buildElements(data) {
  let cityElements = `
  <p>${data}(categories[1].data[0].float_value.Population)population</p>
  `
  document.querySelector('#city-data').insertAdjacentHTML('beforeend', cityElements)

  // data.forEach((city) => {
  // console.log("Build Elements", data)
  // const cityDiv = document.createElement("div")
  //   cityList.append(cityDiv)
    
  // const cityPop = document.createElement("p")
  //   cityPop.textContent = categories[1].data[0].float_value.Population
  //   cityList.append(cityPop)
  // })
  // return data
}