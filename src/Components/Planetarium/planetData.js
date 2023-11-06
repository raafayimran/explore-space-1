export default [
  {
    id: 0,
    planetName: "sun",
    planetLink: "./assets/sun.glb",
    quickFacts: [
      "Mass: 1.989 x 10^30 kg",
      "Diameter: 1.3927 x 10^6 km",
      "Surface Gravity: 274 m/s^2",
      "Mean Temperature: 5,600ºC",
    ],
    description: `The Sun is a massive ball of hot, glowing gas at the center of our solar system, primarily composed of hydrogen and helium. It provides the energy that sustains life on Earth through the process of nuclear fusion. The Sun's core temperature reaches about 15 million degrees Celsius, where hydrogen atoms fuse to form helium, releasing immense amounts of energy in the process.`,
    sizeToSun: 5,
    distance: 0,
  },
  {
    id: 1,
    planetName: "mercury",
    planetLink: "./assets/mercury.glb",
    quickFacts: [
      "Mass: 0.330 x 10^24 kg",
      "Diameter: 4879 km",
      "Surface Gravity: 3.7 m/s^2",
      "Mean Temperature: 167ºC",
      "Length of Day: 4223 hours",
    ],
    description: `Mercury is the closest planet to the Sun and experiences extreme temperature variations, with daytime temperatures reaching up to 800 degrees Fahrenheit (430 degrees Celsius) and nighttime temperatures plummeting to -290 degrees Fahrenheit (-180 degrees Celsius). Despite its proximity to the Sun, some areas of Mercury's polar regions remain permanently shadowed, containing ice.`,
    sizeToEarth: 0.333,
    estSize: 0.5,
    distance: 0.38,
    time: 87.97,
  },
  {
    id: 2,
    planetName: "venus",
    planetLink: "./assets/venus.glb",
    quickFacts: [
      "Mass: 4.87 x 10^24 kg",
      "Diameter: 12,104 km",
      "Surface Gravity: 8.9 m/s^2",
      "Mean Temperature: 464ºC",
      "Length of Day: 2802 hours",
    ],
    description: `Venus has a thick, toxic atmosphere composed mainly of carbon dioxide, with surface pressures about 90 times greater than Earth's. It experiences a greenhouse effect, trapping heat and making it the hottest planet in our solar system, even hotter than Mercury, with surface temperatures soaring to 900 degrees Fahrenheit (475 degrees Celsius). Venus also rotates in the opposite direction to most planets, with a slow, retrograde rotation.`,
    sizeToEarth: 0.85,
    estSize: 0.85,
    distance: 0.72,
    time: 224.7,
  },
  {
    id: 3,
    planetName: "earth",
    planetLink: "./assets/earth.glb",
    quickFacts: [
      "Mass: 5.97 x 10^24 kg",
      "Diameter: 12,756 km",
      "Surface Gravity: 9.8 m/s^2",
      "Mean Temperature: 15ºC",
      "Length of Day: 24 hours",
    ],
    description: `Earth is the only known planet to support life, with a diverse ecosystem that includes a wide variety of species. It has liquid water on its surface, a protective magnetic field, and a breathable atmosphere composed of roughly 21% oxygen. Earth's rotation causes day and night, and it has a unique satellite, the Moon.`,
    sizeToEarth: 0.001,
    estSize: 1,
    distance: 1,
    time: 365.256365,
  },
  {
    id: 4,
    planetName: "mars",
    planetLink: "./assets/mars.glb",
    quickFacts: [
      "Mass: 0.642 x 10^24 kg",
      "Diameter: 6792 km",
      "Surface Gravity: 3.7 m/s^2",
      "Mean Temperature: -65ºC",
      "Length of Day: 24.7 hours",
    ],
    description: `Mars is often called the "Red Planet" due to its reddish appearance, caused by iron oxide (rust) on its surface. It has the largest volcano in the solar system, Olympus Mons, and a vast canyon system known as Valles Marineris. Scientists believe that Mars may have once harbored liquid water and possibly microbial life, making it a prime target for future exploration.`,
    sizeToEarth: 0.5,
    estSize: 0.5,
    distance: 1.5,
    time: 686.93,
  },
  {
    id: 5,
    planetName: "jupiter",
    planetLink: "./assets/jupiter.glb",
    quickFacts: [
      "Mass: 1898 x 10^24 kg",
      "Diameter: 142,984 km",
      "Surface Gravity: 23.1 m/s^2",
      "Mean Temperature: -110ºC",
      "Length of Day: 9.9 hours",
    ],
    description: `Jupiter is the largest planet in the solar system, with a diameter over 11 times that of Earth. It has a powerful magnetic field and more than 75 known moons, including the four largest called the Galilean moons: Io, Europa, Ganymede, and Callisto. Jupiter's Great Red Spot is a massive storm system that has been raging for at least 350 years.`,
    sizeToEarth: 8,
    estSize: 2,
    distance: 5.2,
    time: 4328.9,
  },
  {
    id: 6,
    planetName: "saturn",
    planetLink: "./assets/saturn.glb",
    quickFacts: [
      "Mass: 568 x 10^24 kg",
      "Diameter: 120,536 km",
      "Surface Gravity: 9.0 m/s^2",
      "Mean Temperature: -140ºC",
      "Length of Day: 10.7 hours",
    ],
    description: `Saturn is known for its stunning system of rings, composed mainly of ice particles and debris. These rings are not solid but consist of countless tiny ringlets. Saturn's moon Titan is unique in our solar system, with a thick atmosphere and lakes of liquid methane and ethane on its surface.`,
    sizeToEarth: 7,
    estSize: 1.8,
    distance: 9.5,
    time: 14388.3,
  },
  {
    id: 7,
    planetName: "uranus",
    planetLink: "./assets/uranus.glb",
    quickFacts: [
      "Mass: 86.8 x 10^24 kg",
      "Diameter: 51,118 km",
      "Surface Gravity: 8.7 m/s^2",
      "Mean Temperature: -195ºC",
      "Length of Day: 17.2 hours",
    ],
    description: `Uranus is tilted nearly 90 degrees on its side, making it the only planet in our solar system that rotates "rolling" along its orbital path. It has a pale blue-green color due to the presence of methane in its atmosphere. Uranus also has a system of thin, faint rings and a diverse set of moons.`,
    sizeToEarth: 4,
    estSize: 1.4,
    distance: 19.2,
    time: 30568.75,
  },
  {
    id: 8,
    planetName: "neptune",
    planetLink: "./assets/neptune.glb",
    quickFacts: [
      "Mass: 102 x 10^24 kg",
      "Diameter: 49,528 km",
      "Surface Gravity: 11.0 m/s^2",
      "Mean Temperature: -200ºC",
      "Length of Day: 16.1 hours",
    ],
    description: `Neptune, the farthest known planet from the Sun, has extremely strong winds in its atmosphere, with some reaching speeds of up to 1,200 miles per hour (1,900 kilometers per hour). It is also home to the Great Dark Spot, a storm system similar to Jupiter's Great Red Spot. Neptune's moon Triton orbits in a retrograde direction and may have been captured from the Kuiper Belt.`,
    sizeToEarth: 4,
    estSize: 1,
    distance: 19.2,
    time: 59495,
  },
];
