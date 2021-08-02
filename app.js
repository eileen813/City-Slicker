// const DOMAIN = `https://api.teleport.org/api/`

async function fetchData() {
  try {
      const url = `https://api.teleport.org/api/cities/{?search}`
      const response = await fetch.get(url)
        console.log(response)
      } catch (error) {
        console.error(error)
}
}