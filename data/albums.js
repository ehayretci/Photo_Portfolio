const u = (id, w = 1600, h = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

// Each album has:
//   - quote: a placeholder line shown under the title on the album detail page
//   - photos: array — either a string (URL) or { src, location, year } for
//             per-photo captions. When a photo is a plain string, the caption
//             defaults to the album's own location + year.
const albums = [
  {
    slug: "trails-of-dolomites",
    title: "Trails of Dolomites",
    location: "Dolomites, Italy",
    year: 2024,
    country: "IT",
    quote: "The mountain shows you only what you came to see.",
    quoteAuthor: "Anonymous",
    coverImage: u("1464822759023-fed622ff2c3b"),
    photos: [u("1464822759023-fed622ff2c3b"), u("1454496522488-7a8e488e8606"), u("1506905925346-21bda4d32df4")],
  },
  {
    slug: "after-hours",
    title: "After Hours",
    location: "London, United Kingdom",
    year: 2024,
    country: "GB",
    quote: "Cities reveal themselves once the working day forgets them.",
    quoteAuthor: "Anonymous",
    coverImage: u("1513635269975-59663e0ac1ad"),
    photos: [u("1513635269975-59663e0ac1ad"), u("1520637836862-4d197d17c55a"), u("1533929736458-ca588d08c8be")],
  },
  {
    slug: "feels-like-summer",
    title: "Feels Like Summer",
    location: "Antalya, Türkiye",
    year: 2023,
    country: "TR",
    quote: "Heat slows the world down to a frame rate the eye can keep up with.",
    quoteAuthor: "Anonymous",
    coverImage: u("1505739679850-7adcf83f4f73"),
    photos: [u("1505739679850-7adcf83f4f73"), u("1507525428034-b723cf961d3e"), u("1519046904884-53103b34b206")],
  },
  {
    slug: "the-eastern-front",
    title: "The Eastern Front",
    location: "Istanbul, Türkiye",
    year: 2023,
    country: "TR",
    quote: "Two continents meet inside a single afternoon.",
    quoteAuthor: "Anonymous",
    coverImage: u("1524231757912-21f4fe3a7200"),
    photos: [u("1524231757912-21f4fe3a7200"), u("1541432901042-2d8bd64b4a9b"), u("1518533954129-7774297db60a")],
  },
  {
    slug: "grayscale",
    title: "Grayscale",
    location: "Edinburgh, United Kingdom",
    year: 2024,
    country: "GB",
    quote: "Colour is a luxury. Sometimes light tells the whole story.",
    quoteAuthor: "Anonymous",
    coverImage: u("1506905925346-21bda4d32df4"),
    photos: [u("1506905925346-21bda4d32df4"), u("1519681393784-d120267933ba"), u("1483728642387-6c3bdd6c93e5")],
  },
  {
    slug: "flow-state",
    title: "Flow State",
    location: "Kars, Türkiye",
    year: 2022,
    country: "TR",
    quote: "Stop trying. Then the shutter knows when to fall.",
    quoteAuthor: "Anonymous",
    coverImage: u("1454496522488-7a8e488e8606"),
    photos: [u("1454496522488-7a8e488e8606"), u("1500534314209-a25ddb2bd429"), u("1500382017468-9049fed747ef")],
  },
  {
    slug: "jamais-vu",
    title: "Jamais Vu",
    location: "New York, United States",
    year: 2023,
    country: "US",
    quote: "Familiar places that suddenly remember they are strange.",
    quoteAuthor: "Anonymous",
    coverImage: u("1496442226666-8d4d0e62e6e9"),
    photos: [u("1496442226666-8d4d0e62e6e9"), u("1485871981521-5b1fd3805eee"), u("1518391846015-55a9cc003b25")],
  },
  {
    slug: "labour",
    title: "Labour",
    location: "Kocaeli, Türkiye",
    year: 2022,
    country: "TR",
    quote: "Hands make the country before any flag does.",
    quoteAuthor: "Anonymous",
    coverImage: u("1504280390367-361c6d9f38f4"),
    photos: [u("1504280390367-361c6d9f38f4"), u("1521737711867-e3b97375f902"), u("1495020689067-958852a7765e")],
  },
  {
    slug: "look-up",
    title: "Look Up",
    location: "Washington DC, United States",
    year: 2023,
    country: "US",
    quote: "The interesting stuff is rarely at eye level.",
    quoteAuthor: "Anonymous",
    coverImage: u("1500916434205-0c77489c6cf7"),
    photos: [u("1500916434205-0c77489c6cf7"), u("1448630360428-65456885c650"), u("1486325212027-8081e485255e")],
  },
  {
    slug: "sky-is-the-limit",
    title: "Sky is the Limit",
    location: "Miami, United States",
    year: 2023,
    country: "US",
    quote: "And then the sky started borrowing from the buildings.",
    quoteAuthor: "Anonymous",
    coverImage: u("1502602898657-3e91760cbb34"),
    photos: [u("1502602898657-3e91760cbb34"), u("1500530855697-b586d89ba3ee"), u("1444723121867-7a241cacace9")],
  },
  {
    slug: "the-small-mysteries",
    title: "The Small Mysteries",
    location: "York, United Kingdom",
    year: 2024,
    country: "GB",
    quote: "The biggest stories are usually whispered between the pavers.",
    quoteAuthor: "Anonymous",
    coverImage: u("1499856871958-5b9627545d1a"),
    photos: [u("1499856871958-5b9627545d1a"), u("1467269204594-9661b134dd2b"), u("1471623432079-b009d30b6f06")],
  },
  {
    slug: "tiebreak",
    title: "Tiebreak",
    location: "Wiesbaden, Germany",
    year: 2005,
    country: "DE",
    quote: "Some seasons are won on the in-between points.",
    quoteAuthor: "Anonymous",
    coverImage: u("1519501025264-65ba15a82390"),
    photos: [u("1519501025264-65ba15a82390"), u("1467269204594-9661b134dd2b"), u("1503264116251-35a269479413")],
  },
  {
    slug: "auschwitz",
    title: "Auschwitz",
    location: "Hamburg, Germany",
    year: 2005,
    country: "DE",
    quote: "Silence, photographed, becomes its own kind of testimony.",
    quoteAuthor: "Anonymous",
    coverImage: u("1503264116251-35a269479413"),
    photos: [u("1503264116251-35a269479413"), u("1494522855154-9297ac14b55f"), u("1519501025264-65ba15a82390")],
  },
];

// Helper: normalize a photo entry into { src, caption } for the detail page.
export function photoMeta(album, photo) {
  if (typeof photo === "string") {
    // Format: "Edinburgh, UK - 2024" → derived from album location/year.
    const loc = album.location || "";
    const year = album.year ? ` - ${album.year}` : "";
    return { src: photo, caption: `${loc}${year}` };
  }
  const loc = photo.location || album.location || "";
  const year = photo.year || album.year;
  const yearStr = year ? ` - ${year}` : "";
  return { src: photo.src, caption: `${loc}${yearStr}` };
}

export default albums;
