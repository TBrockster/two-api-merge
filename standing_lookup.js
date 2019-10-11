const axios = require("axios");

StandingsLookup = () => {
  const url = 'https://makers.sd.dazn-dev.com/api/competitions';
  const comp_ids = axios.get(url)
  .then(response => response.data)
  .then((data) => {
    return getCompIDs(data.competition)
  })
  return comp_ids
}

getCompIDs = (competitions) => {
  return competitions.map(competition => {
    return competition.id
  })
}



module.exports.StandingsLookup = StandingsLookup;
module.exports.getCompIDs = getCompIDs;