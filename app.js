const DOMAIN = `https://api.teleport.org/api/cities/`;
const submitButton = document.querySelector("#get-city")


async function getData() {
  try {
    const findCity = document.querySelector("#city-search").value
      // console.log(findCity)
    const response = await axios.get(`${DOMAIN}?search=${findCity}`)
      console.log(response.data)
  } catch (error) {
      console.error(error)
  }
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault()
  getData()
})