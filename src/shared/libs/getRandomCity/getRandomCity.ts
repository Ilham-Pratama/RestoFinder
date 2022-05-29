export const cities = [
  'New York, New York',
  'Austin, Texas',
  'Los Angeles, California',
  'Chicago, Illinois',
  'Phoenix, Arizona',
  'Houston, Texas',
  'Philadelphia, Pennsylvania',
  'Dallas, Texas',
  'San Jose, California',
  'Jacksonville, Florida'
];

const getRandomCity = () => {
  return cities[Math.floor(Math.random() * cities.length)];
};

export default getRandomCity;
