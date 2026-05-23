const travels = {
  DE: {
    code: "DE",
    name: "Germany",
    numericId: "276",
    center: [10.4515, 51.1657],
    zoom: 5,
    lived: {
      city: "Wiesbaden",
      start: "July 2005",
      end: "March 2006",
      current: false,
    },
    cities: [
      { name: "Wiesbaden", coordinates: [8.2473, 50.0826], date: "July 2005 – March 2006" },
      { name: "Hamburg", coordinates: [9.9937, 53.5511], date: "Visited 2005" },
      { name: "Hannover", coordinates: [9.7320, 52.3759], date: "Visited 2005" },
    ],
    visits: ["Wiesbaden — July 2005 – March 2006", "Hamburg — 2005", "Hannover — 2005"],
  },
  TR: {
    code: "TR",
    name: "Türkiye",
    numericId: "792",
    center: [35.2433, 38.9637],
    zoom: 4,
    lived: {
      city: "Istanbul",
      start: "May 2006",
      end: "September 2023",
      current: false,
    },
    cities: [
      { name: "Istanbul", coordinates: [28.9784, 41.0082], date: "May 2006 – September 2023" },
      { name: "Izmir", coordinates: [27.1428, 38.4237], date: "Visited multiple times" },
      { name: "Antalya", coordinates: [30.7133, 36.8969], date: "Visited multiple times" },
      { name: "Kocaeli", coordinates: [29.9402, 40.8533], date: "Visited" },
      { name: "Kayseri", coordinates: [35.4828, 38.7312], date: "Visited" },
      { name: "Kars", coordinates: [43.0975, 40.6013], date: "Visited" },
    ],
    visits: [
      "Istanbul — May 2006 – September 2023",
      "Izmir — multiple visits",
      "Antalya — multiple visits",
      "Kocaeli — visited",
      "Kayseri — visited",
      "Kars — visited",
    ],
  },
  GB: {
    code: "GB",
    name: "United Kingdom",
    numericId: "826",
    center: [-3.4360, 55.3781],
    zoom: 5,
    lived: {
      city: "London",
      start: "September 2023",
      end: "Present",
      current: true,
    },
    cities: [
      { name: "London", coordinates: [-0.1276, 51.5072], date: "September 2023 – Present" },
      { name: "York", coordinates: [-1.0815, 53.9590], date: "Visited" },
      { name: "Edinburgh", coordinates: [-3.1883, 55.9533], date: "Visited" },
    ],
    visits: [
      "London — September 2023 – Present",
      "York — visited",
      "Edinburgh — visited",
    ],
  },
  US: {
    code: "US",
    name: "United States",
    numericId: "840",
    center: [-95.7129, 37.0902],
    zoom: 3,
    lived: null,
    cities: [
      { name: "New York", coordinates: [-74.0060, 40.7128], date: "Visited" },
      { name: "Philadelphia", coordinates: [-75.1652, 39.9526], date: "Visited" },
      { name: "Washington DC", coordinates: [-77.0369, 38.9072], date: "Visited" },
      { name: "Miami", coordinates: [-80.1918, 25.7617], date: "Visited" },
    ],
    visits: [
      "New York — visited",
      "Philadelphia — visited",
      "Washington DC — visited",
      "Miami — visited",
    ],
  },
};

export const TOTAL_COUNTRIES = 195;

export default travels;
