// Per-country modal projection (Mercator).
//   center: [lon, lat] that the country shape is centered on inside the modal.
//   scale:  d3-geo scale; tuned so the contiguous landmass + visited cities
//           comfortably fit in the 520x520 viewBox. Disconnected territories
//           (e.g. Alaska/Hawaii relative to contiguous US) are intentionally
//           pushed off-frame — treat them as separate entries if you visit.
//
// Cities and dates are PLACEHOLDERS for newly-added countries — replace with
// the real visit data when you have it.

const travels = {
  AT: {
    code: "AT",
    name: "Austria",
    numericId: "040",
    center: [14.55, 47.52],
    scale: 1900,
    lived: null,
    cities: [
      { name: "Vienna", coordinates: [16.3738, 48.2082], date: "2019" },
      { name: "Salzburg", coordinates: [13.0550, 47.8095], date: "2019" },
    ],
    visits: [
      { city: "Vienna", date: "Summer 2019" },
      { city: "Salzburg", date: "Summer 2019" },
    ],
  },
  BA: {
    code: "BA",
    name: "Bosnia & Herzegovina",
    numericId: "070",
    center: [17.6791, 43.9159],
    scale: 1700,
    lived: null,
    cities: [
      { name: "Sarajevo", coordinates: [18.4131, 43.8563], date: "2018" },
      { name: "Mostar", coordinates: [17.8131, 43.3438], date: "2018" },
    ],
    visits: [
      { city: "Sarajevo", date: "2018" },
      { city: "Mostar", date: "2018" },
    ],
  },
  ES_IC: {
    code: "ES_IC",
    name: "Canary Islands",
    numericId: "ES_IC", // not in world-atlas; rendered text-only in modal
    center: [-15.5, 28.3],
    scale: 1400,
    lived: null,
    cities: [
      { name: "Las Palmas", coordinates: [-15.4300, 28.1235], date: "2022" },
      { name: "Tenerife", coordinates: [-16.5, 28.2916], date: "2022" },
    ],
    visits: [
      { city: "Las Palmas", date: "Winter 2022" },
      { city: "Tenerife", date: "Winter 2022" },
    ],
  },
  HR: {
    code: "HR",
    name: "Croatia",
    numericId: "191",
    center: [15.97, 44.5],
    scale: 1500,
    lived: null,
    cities: [
      { name: "Dubrovnik", coordinates: [18.0944, 42.6507], date: "2021" },
      { name: "Split", coordinates: [16.4402, 43.5081], date: "2021" },
    ],
    visits: [
      { city: "Dubrovnik", date: "Summer 2021" },
      { city: "Split", date: "Summer 2021" },
    ],
  },
  CZ: {
    code: "CZ",
    name: "Czech Republic",
    numericId: "203",
    center: [15.47, 49.82],
    scale: 1900,
    lived: null,
    cities: [
      { name: "Prague", coordinates: [14.4378, 50.0755], date: "2019" },
    ],
    visits: [{ city: "Prague", date: "2019" }],
  },
  DK: {
    code: "DK",
    name: "Denmark",
    numericId: "208",
    center: [10.0, 56.0],
    scale: 1800,
    lived: null,
    cities: [
      { name: "Copenhagen", coordinates: [12.5683, 55.6761], date: "2022" },
    ],
    visits: [{ city: "Copenhagen", date: "Spring 2022" }],
  },
  FR: {
    code: "FR",
    name: "France",
    numericId: "250",
    center: [2.21, 46.23],
    scale: 1400,
    lived: null,
    cities: [
      { name: "Paris", coordinates: [2.3522, 48.8566], date: "2018, 2024" },
      { name: "Nice", coordinates: [7.2620, 43.7102], date: "2020" },
      { name: "Lyon", coordinates: [4.8357, 45.7640], date: "2022" },
    ],
    visits: [
      { city: "Paris", date: "Summer 2018 & Spring 2024" },
      { city: "Nice", date: "Summer 2020" },
      { city: "Lyon", date: "2022" },
    ],
  },
  DE: {
    code: "DE",
    name: "Germany",
    numericId: "276",
    center: [10.4515, 51.1657],
    scale: 1500,
    lived: {
      city: "Wiesbaden",
      start: "July 2005",
      end: "March 2006",
      current: false,
    },
    cities: [
      { name: "Wiesbaden", coordinates: [8.2473, 50.0826], date: "July 2005 – March 2006" },
      { name: "Hamburg", coordinates: [9.9937, 53.5511], date: "2005" },
      { name: "Hannover", coordinates: [9.7320, 52.3759], date: "2005" },
    ],
    visits: [
      { city: "Wiesbaden", date: "July 2005 – March 2006" },
      { city: "Hamburg", date: "2005" },
      { city: "Hannover", date: "2005" },
    ],
  },
  GR: {
    code: "GR",
    name: "Greece",
    numericId: "300",
    center: [22.95, 38.27],
    scale: 1500,
    lived: null,
    cities: [
      { name: "Athens", coordinates: [23.7275, 37.9838], date: "2017" },
      { name: "Santorini", coordinates: [25.4615, 36.3932], date: "2017" },
    ],
    visits: [
      { city: "Athens", date: "Summer 2017" },
      { city: "Santorini", date: "Summer 2017" },
    ],
  },
  IT: {
    code: "IT",
    name: "Italy",
    numericId: "380",
    center: [12.57, 42.5],
    scale: 1100,
    lived: null,
    cities: [
      { name: "Rome", coordinates: [12.4964, 41.9028], date: "2019" },
      { name: "Florence", coordinates: [11.2558, 43.7696], date: "2019" },
      { name: "Venice", coordinates: [12.3155, 45.4408], date: "2019" },
      { name: "Dolomites", coordinates: [11.7917, 46.5396], date: "2024" },
    ],
    visits: [
      { city: "Rome", date: "Spring 2019" },
      { city: "Florence", date: "Spring 2019" },
      { city: "Venice", date: "Spring 2019" },
      { city: "Dolomites", date: "Summer 2024" },
    ],
  },
  MC: {
    code: "MC",
    name: "Monaco",
    numericId: "492",
    center: [7.42, 43.74],
    scale: 24000,
    lived: null,
    cities: [
      { name: "Monte Carlo", coordinates: [7.4271, 43.7333], date: "2020" },
    ],
    visits: [{ city: "Monte Carlo", date: "Summer 2020" }],
  },
  NL: {
    code: "NL",
    name: "Netherlands",
    numericId: "528",
    center: [5.29, 52.13],
    scale: 2100,
    lived: null,
    cities: [
      { name: "Amsterdam", coordinates: [4.9041, 52.3676], date: "2022" },
      { name: "Rotterdam", coordinates: [4.4777, 51.9244], date: "2022" },
    ],
    visits: [
      { city: "Amsterdam", date: "2022" },
      { city: "Rotterdam", date: "2022" },
    ],
  },
  PL: {
    code: "PL",
    name: "Poland",
    numericId: "616",
    center: [19.13, 51.92],
    scale: 1600,
    lived: null,
    cities: [
      { name: "Kraków", coordinates: [19.9450, 50.0647], date: "2018" },
      { name: "Warsaw", coordinates: [21.0122, 52.2297], date: "2018" },
    ],
    visits: [
      { city: "Kraków", date: "2018" },
      { city: "Warsaw", date: "2018" },
    ],
  },
  PT: {
    code: "PT",
    name: "Portugal",
    numericId: "620",
    center: [-8.22, 39.4],
    scale: 2000,
    lived: null,
    cities: [
      { name: "Lisbon", coordinates: [-9.1393, 38.7223], date: "2023" },
      { name: "Porto", coordinates: [-8.6291, 41.1579], date: "2023" },
    ],
    visits: [
      { city: "Lisbon", date: "Spring 2023" },
      { city: "Porto", date: "Spring 2023" },
    ],
  },
  SI: {
    code: "SI",
    name: "Slovenia",
    numericId: "705",
    center: [14.99, 46.15],
    scale: 2400,
    lived: null,
    cities: [
      { name: "Ljubljana", coordinates: [14.5058, 46.0569], date: "2021" },
      { name: "Lake Bled", coordinates: [14.1148, 46.3683], date: "2021" },
    ],
    visits: [
      { city: "Ljubljana", date: "2021" },
      { city: "Lake Bled", date: "2021" },
    ],
  },
  ES: {
    code: "ES",
    name: "Spain",
    numericId: "724",
    center: [-3.75, 40.46],
    scale: 1300,
    lived: null,
    cities: [
      { name: "Madrid", coordinates: [-3.7038, 40.4168], date: "2020" },
      { name: "Barcelona", coordinates: [2.1734, 41.3851], date: "2020" },
      { name: "Seville", coordinates: [-5.9845, 37.3891], date: "2022" },
    ],
    visits: [
      { city: "Madrid", date: "2020" },
      { city: "Barcelona", date: "2020" },
      { city: "Seville", date: "2022" },
    ],
  },
  SE: {
    code: "SE",
    name: "Sweden",
    numericId: "752",
    center: [18.64, 60.13],
    scale: 1100,
    lived: null,
    cities: [
      { name: "Stockholm", coordinates: [18.0686, 59.3293], date: "2023" },
    ],
    visits: [{ city: "Stockholm", date: "Summer 2023" }],
  },
  CH: {
    code: "CH",
    name: "Switzerland",
    numericId: "756",
    center: [8.23, 46.82],
    scale: 2400,
    lived: null,
    cities: [
      { name: "Zurich", coordinates: [8.5417, 47.3769], date: "2021" },
      { name: "Geneva", coordinates: [6.1432, 46.2044], date: "2021" },
    ],
    visits: [
      { city: "Zurich", date: "2021" },
      { city: "Geneva", date: "2021" },
    ],
  },
  GB: {
    code: "GB",
    name: "United Kingdom",
    numericId: "826",
    center: [-3.4360, 55.3781],
    scale: 1500,
    lived: {
      city: "London",
      start: "September 2023",
      end: "Present",
      current: true,
    },
    cities: [
      { name: "London", coordinates: [-0.1276, 51.5072], date: "September 2023 – Present" },
      { name: "York", coordinates: [-1.0815, 53.9590], date: "2024" },
      { name: "Edinburgh", coordinates: [-3.1883, 55.9533], date: "2024" },
    ],
    visits: [
      { city: "London", date: "September 2023 – Present" },
      { city: "York", date: "Spring 2024" },
      { city: "Edinburgh", date: "Summer 2024" },
    ],
  },
  OM: {
    code: "OM",
    name: "Oman",
    numericId: "512",
    center: [55.92, 21.51],
    scale: 1300,
    lived: null,
    cities: [
      { name: "Muscat", coordinates: [58.5453, 23.5859], date: "2023" },
    ],
    visits: [{ city: "Muscat", date: "Winter 2023" }],
  },
  TR: {
    code: "TR",
    name: "Türkiye",
    numericId: "792",
    center: [35.2433, 38.9637],
    scale: 850,
    lived: {
      city: "Istanbul",
      start: "May 2006",
      end: "September 2023",
      current: false,
    },
    cities: [
      { name: "Istanbul", coordinates: [28.9784, 41.0082], date: "May 2006 – September 2023" },
      { name: "Izmir", coordinates: [27.1428, 38.4237], date: "ongoing" },
      { name: "Antalya", coordinates: [30.7133, 36.8969], date: "ongoing" },
      { name: "Kocaeli", coordinates: [29.9402, 40.8533], date: "ongoing" },
      { name: "Kayseri", coordinates: [35.4828, 38.7312], date: "ongoing" },
      { name: "Kars", coordinates: [43.0975, 40.6013], date: "2019" },
    ],
    visits: [
      { city: "Istanbul", date: "May 2006 – September 2023" },
      { city: "Izmir", date: "multiple visits" },
      { city: "Antalya", date: "multiple visits" },
      { city: "Kocaeli", date: "multiple visits" },
      { city: "Kayseri", date: "multiple visits" },
      { city: "Kars", date: "Winter 2019" },
    ],
  },
  AE: {
    code: "AE",
    name: "United Arab Emirates",
    numericId: "784",
    center: [54.5, 24.0],
    scale: 2400,
    lived: null,
    cities: [
      { name: "Dubai", coordinates: [55.2708, 25.2048], date: "2022" },
      { name: "Abu Dhabi", coordinates: [54.3773, 24.4539], date: "2022" },
    ],
    visits: [
      { city: "Dubai", date: "2022" },
      { city: "Abu Dhabi", date: "2022" },
    ],
  },
  US: {
    code: "US",
    name: "United States",
    numericId: "840",
    // Centered on contiguous US — Alaska & Hawaii fall outside the viewBox
    // by design (see "Alaska (US)" note above; not visited yet).
    center: [-98.5795, 39.8283],
    scale: 500,
    lived: null,
    cities: [
      { name: "New York", coordinates: [-74.0060, 40.7128], date: "2023" },
      { name: "Philadelphia", coordinates: [-75.1652, 39.9526], date: "2023" },
      { name: "Washington DC", coordinates: [-77.0369, 38.9072], date: "2023" },
      { name: "Miami", coordinates: [-80.1918, 25.7617], date: "2023" },
    ],
    visits: [
      { city: "New York", date: "Spring 2023" },
      { city: "Philadelphia", date: "Spring 2023" },
      { city: "Washington DC", date: "Spring 2023" },
      { city: "Miami", date: "Spring 2023" },
    ],
  },
};

export const TOTAL_COUNTRIES = 195;

export default travels;
