import getRandomCity, { cities } from './getRandomCity';

describe('getRandomCity', () => {
  it('gets 1 random city', () => {
    const city = getRandomCity();
    expect(cities.includes(city)).toBeTruthy();
  });
});
