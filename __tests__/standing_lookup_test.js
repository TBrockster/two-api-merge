const {StandingsLookup, getCompIDs} = require('../standing_lookup')

test('return json from lookup', async () => {
  expect(await StandingsLookup()).toBeInstanceOf(Object)
})

test('extracting ids from competitions object', () =>{
  const competitions = [{
    "id": "1"
  },
    {
      "id": "2"
    }]
  expect(getCompIDs(competitions)).toEqual(["1", "2"])
})