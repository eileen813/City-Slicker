// Global Query Selectors to make a request for form and API data:
const form = document.querySelector('#city-form')
const cityList = document.querySelector(`#city-data`)

// async await catch function:
async function getData(cityName) {
  removeElement(cityList)
  try {
    const cityDetails = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${cityName}/details/`)
    const cityScores = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${cityName}/scores/`)

    buildElements(cityDetails.data.categories, cityScores.data)
    return cityDetails

  } catch (error) {
    document.querySelector('#city-data').textContent = "City not found.  Try searching the urban area i.e. 'Tampa Bay Area'."
    console.error(error)
  }
}

// Submit button event listener with replacing user input spaces and capitalization:
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#city-search').value
  let sanitizeData = inputValue.trim().replaceAll(" ", '-').toLowerCase()
})

// API elements function:
function buildElements(cityDetails) {

  const cityDiv = document.createElement("div")
  cityList.append(cityDiv)

  const cityPop = document.createElement("p")
  cityPop.textContent = `Urban area population in millions is: ${cityDetails[1].data[0].float_value}`
  cityDiv.append(cityPop)

  const cityHigh = document.createElement("p")
  cityHigh.textContent = `Average high temperature (celsius) is: ${cityDetails[2].data[5].string_value}`
  cityDiv.append(cityHigh)

  const cityLow = document.createElement("p")
  cityLow.textContent = `Average low temperature (celsius) is: ${cityDetails[2].data[6].string_value}`
  cityDiv.append(cityLow)

  const cityApt = document.createElement("p")
  cityApt.textContent = `Average large apartment rent in USD is: ${cityDetails[8].data[0].currency_dollar_value}`
  cityDiv.append(cityApt)

  const cityStartupJobs = document.createElement("p")
  cityStartupJobs.textContent = `Startup jobs available is: ${cityDetails[10].data[3].int_value}`
  cityDiv.append(cityStartupJobs)

  const cityStartupSal = document.createElement("p")
  cityStartupSal.textContent = `Average startup salary in USD is: ${cityDetails[10].data[6].currency_dollar_value}`
  cityDiv.append(cityStartupSal)

  return cityDetails
}

// Removing user search to find new city data:
function removeElement(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}