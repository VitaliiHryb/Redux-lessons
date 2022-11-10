/*
const cities = [
  { name: 'Lake Hilmaside', temperature: '78 F' },
  { name: 'Lake Minnieberg', temperature: '8 F' },
  { name: 'East Gerhardshire', temperature: '23 F' },
  { name: 'Port Durward', temperature: '13 F' },
  { name: 'New Ashashai', temperature: '40 F' },
  { name: 'Dayton Town', temperature: '7 F' },
  { name: 'Feesthaven', temperature: '64 F' },
  { name: 'South Arvilla', temperature: '88 F' },
  { name: 'East Dehardshine', temperature: '23 F' },
];
*/

const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

export const fetchWeatherData = () =>
  fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });
