const axios = require("axios");

StandingsLookup = () => {
  const url = 'https://makers.sd.dazn-dev.com/api/competitions';
  return axios.get(url)
  .then(response => response.data)
  .then((data) => {
    return data
  })
}

// function StandingsLookup(competition){
//   axios({
//     url: 'https://makers.sd.dazn-dev.com/api/competitions',
//     method: 'get'
//   }).then

//   console.log(response)
// }

module.exports = StandingsLookup;