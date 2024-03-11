export const generateRandomCoordinatesInEurope = (): {
  latitude: number;
  longitude: number;
} => {
  const minLatitude = 44.4173; // Southernmost point of Ukraine
  const maxLatitude = 52.3778; // Northernmost point of Ukraine
  const minLongitude = 22.5903; // Easternmost point of Ukraine
  const maxLongitude = 36.6288; // Westernmost point of Ukraine

  const randomLatitude =
    Math.random() * (maxLatitude - minLatitude) + minLatitude;
  const randomLongitude =
    Math.random() * (maxLongitude - minLongitude) + minLongitude;

  return { latitude: randomLatitude, longitude: randomLongitude };
};
