// const DOMAIN = `https://api.teleport.org/api/cities/`
// const DATA_URL = `https://api.teleport.org/api/cities/?search=&embed=city:search-results/city:item/city:country&embed=city:search-results/city:item/city:admin1_division&embed=city:search-results/city:item/city:urban_area&embed=city:search-results/city:item/city:timezone/tz:offsets-now`
// const DETAILS_URL = `https://api.teleport.org/api/urban_areas/slug:${cityname}/details/`
const form = document.querySelector('#city-form')
const cityList = document.querySelector(`#city-data`)
// 
async function getData(cityName) {
  removeElement(cityList)
  try {
    const cityDetails = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${cityName}/details/`)
    const cityScores = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${cityName}/scores/`)
    buildElements(cityDetails.data.categories)
    buildElements(cityScores.data)
    console.log(cityScores)
    return cityDetails
    return cityScores
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

function buildElements(cityData) {
console.log("Build Elements", cityData)
const cityDiv = document.createElement("div")
  cityList.append(cityDiv)

  const cityPop = document.createElement("p")
  cityPop.textContent = `Urban area population in millions is ${cityData[1].data[0].float_value}`
  cityDiv.append(cityPop)

  const cityHigh = document.createElement("p")
  cityHigh.textContent = `Average high temperature (celsius) is ${cityData[2].data[5].string_value}`
  cityDiv.append(cityHigh)

  const cityLow = document.createElement("p")
  cityLow.textContent = `Average low temperature (celsius) is ${cityData[2].data[6].string_value}`
  cityDiv.append(cityLow)

  const cityApt = document.createElement("p")
  cityApt.textContent = `Average large apartment rent in USD is ${cityData[8].data[0].currency_dollar_value}`
  cityDiv.append(cityApt)

  const cityStartupJobs = document.createElement("p")
  cityStartupJobs.textContent = `Startup jobs available is ${cityData[10].data[3].int_value}`
  cityDiv.append(cityStartupJobs)

  const cityStartupSal = document.createElement("p")
  cityStartupSal.textContent = `Average startup salary in USD is ${cityData[10].data[6].currency_dollar_value}`
  cityDiv.append(cityStartupSal)

  const citySum = document.createElement("p")
  citySum.textContent = `Summary:${cityData.summary}`
  cityDiv.append(citySum)


  // let cityElements = `
  // <p>${data}(categories[1].data[0].float_value.Population)population</p>
  // `
  // document.querySelector('#city-data').insertAdjacentHTML('beforeend', cityElements)

  // data.forEach((city) => {
    
  // const cityPop = document.createElement("p")
  //   cityPop.textContent = categories[1].data[0].float_value.Population
  //   cityList.append(cityPop)
  // })
  return cityData
}

function removeElement(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}