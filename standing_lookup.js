const axios = require("axios");

StandingsLookup = () => {
  const url = 'https://makers.sd.dazn-dev.com/api/competitions';
  const competitions = axios.get(url)
  .then(response => response.data)
  .then((data) => {
    return data
  })
  return competitions
}

getCompIDs = (competitions) => {
  return competitions.map(competition => {
    return competition.id
  })
}



module.exports.StandingsLookup = StandingsLookup;
module.exports.getCompIDs = getCompIDs;