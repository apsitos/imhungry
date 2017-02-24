
const getCoords = () => {

  const API_KEY = `AIzaSyC0tw-FgBeIrwwIYl6pf5M_e7IqC92cfx4`;
  const COORDS_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=`;

  fetch(`${COORDS_URL}${this.props.address}&key=${API_KEY}`)
  .then((res) => {
    return res.json()
  }).then((res) => {
    this.setState({
      lat:res.results[0].geometry.location.lat,
      lon:res.results[0].geometry.location.lng
    })
  })
}

export default getCoords;
