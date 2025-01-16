const starterShores = [
  {
    name: 'Sunset Beach',
    location: 'California',
    length: 2.5
  },
  {
    name: 'Blue Coast',
    location: 'Hawaii',
    length: 3.0
  }
];

const starterTides = [
  {
    tideLevel: 'High',
    time: new Date('2025-01-15T08:00:00Z')
  },
  {
    tideLevel: 'Low',
    time: new Date('2025-01-15T12:00:00Z')
  }
];

const starterWaves = [
  {
    waveHeight: 5.5,
    time: new Date('2025-01-15T08:00:00Z')
  },
  {
    waveHeight: 3.2,
    time: new Date('2025-01-15T12:00:00Z')
  }
];

module.exports= { starterShores,starterTides, starterWaves };
