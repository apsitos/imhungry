
const getCoords = (address) => {

  const API_KEY = `AIzaSyC0tw-FgBeIrwwIYl6pf5M_e7IqC92cfx4`;
  const COORDS_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=`;

  fetch(`${COORDS_URL}${address}&key=${API_KEY}`)
  .then((res) => {
    console.log(res)
    return res.json()
  }).then((res) => {
    this.setState({
      lat:res.results[0].geometry.location.lat,
      lon:res.results[0].geometry.location.lng
    }).catch(() => {
      console.log('location, please');
    })
  })
}

export default getCoords;
