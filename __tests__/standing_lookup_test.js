const {StandingsLookup, getCompIDs, standings} = require('../standing_lookup')

test('return array of ids from competition lookup', async () => {
  expect(await StandingsLookup()).toEqual(['4oogyu6o156iphvdvphwpck10', '2kwbbcootiqqgmrzs6o5inle5'])
})

test('extracting ids from competitions object', () =>{
  const competitions = [
                        {"id": "1"},
                        {"id": "2"}
                        ]
  expect(getCompIDs(competitions)).toEqual(["1", "2"])
})

test('see data', async () => {
  expect(await standings(['4oogyu6o156iphvdvphwpck10', '2kwbbcootiqqgmrzs6o5inle5'])).not.toBe(undefined)
})