const StandingsLookup = require('../standing_lookup')

test('returning json from lookup', async () => {
  expect(await StandingsLookup()).toBeInstanceOf(Object)
})