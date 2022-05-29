import CityList from 'shared/jsons/CityList';

const getCityList = (searchQuery: string, limit: number = 20): string[] => {
  // Remove duplicates
  const cities = [
    ...new Set(CityList.map(({ city, state }) => `${city}, ${state}`))
  ];

  return cities
    .filter(
      name =>
        !searchQuery ||
        name.toLocaleLowerCase().startsWith(searchQuery.toLocaleLowerCase())
    )
    .slice(0, limit);
};

export default getCityList;
