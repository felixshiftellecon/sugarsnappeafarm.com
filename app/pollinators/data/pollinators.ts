// data/pollinators.ts

// Templates

// Pollinator Data

// {
//   title: 'xxx',
//   subtitle: 'xxx',
//   identification: ['xxx', 'xxx', 'xxx', 'xxx'],
//   flowers: ['xxx', 'xxx', 'xxx', 'xxx', 'xxx'],
//   ecological: ['xxx', 'xxx', 'xxx'],
//   habitat: ['xxx', 'xxx', 'xxx'],
//   color: 'xxx',
//   // Optional: image credit for the main pollinator photo
//   photoCredit?: 'Photo by Name / Source',
//   photoCreditUrl?: 'https://link-to-photographer-or-license'
// }

// Bee Pic

// 'xxx':
//   'xxx'

// Flowers Pic

// xxx:
//   'xxxx'

// iNaturalist Link

// 'xxx': 'xxx',

export const pollinators = [
  {
    title: 'Eastern Carpenter Bee',
    subtitle: 'Xylocopa virginica',
    identification: [
      'Large bee (3/4 to 1 inch long)',
      'Shiny black, hairless abdomen, unlike bumblebees',
      'Sawdust piles below perfectly circular holes drilled into wood surfaces',
      'Males have white facial markings'
    ],
    flowers: ['Tomatoes', 'Blueberries', 'Sunflowers', 'Wild bergamot', 'Goldenrod'],
    ecological: [
      'Creates nest holes in wood that can later be used by other wildlife',
      'Helps break down dead and decaying wood',
      'Very long pollination season'
    ],
    habitat: [
      'Nests in softwood by drilling perfectly circular tunnels',
      'Found in gardens, forests, and parks across Maryland',
      'Active from spring through fall, preferring warm sunny days'
    ],
    color: '#8B4513', // SaddleBrown
    photoCredit: 'Credit: etstruckhoff',
    flowerPhotoCredit: 'Credit: Tomato Geek'
  },
  {
    title: 'Rusty-patched Bumble Bee',
    subtitle: 'Bombus affinis',
    identification: [
      'Rusty colored patch on mostly yellow abdomen',
      'Thumb tack shaped black spot between wings',
      'Mostly yellow thorax with black rear',
      'Queens do not have rusty patch'
    ],
    flowers: ['New Jersey tea', 'Milkweed', 'Purple prairie clover', 'Jewelweed', 'Asters'],
    ecological: [
      'Primary pollinators apples, alfalfa, and much more',
      'One of the most efficient natural pollinators',
      'Long pollination period, can withstand cold and see in low light'
    ],
    habitat: [
      'Nests underground, prefers soft soil',
      'Uses grass in nests, grasslands are important',
      'Little is know about hibernation habits'
    ],
    color: '#A65E2E', // Rust Brown
    photoCredit: 'Credit: David Wolfe',
    flowerPhotoCredit: 'Credit: Molly Marquand'
  },
  {
    title: 'Eastern Yellowjacket',
    subtitle: 'Vespula maculifrons',
    identification: [
      'Medium-sized (1/2 inch) black and yellow wasp',
      'Has thicker black bands than other yellowjackets',
      'Color patterns differ between queens, workers, and males',
      'Smooth, not fuzzy body'
    ],
    flowers: ['Goldenrod', 'Asters', 'Late summer wildflowers', "Queen Anne's lace", 'Fruit trees'],
    ecological: [
      'Controls garden pests by hunting caterpillars and flies',
      'Helps break down fallen fruit and carrion',
      'Contributes to natural decomposition cycles'
    ],
    habitat: [
      'Typically nests underground in abandoned rodent burrows',
      'Common in forests, meadows, gardens, and parks',
      'Found throughout Maryland'
    ],
    color: '#E8C15D', // LightGoldenrod
    photoCredit: 'Credit: Johnny N. Dell',
    flowerPhotoCredit: 'Credit: Letícia Almeida'
  },
  {
    title: 'Southern Yellowjacket',
    subtitle: 'Vespula squamosa',
    identification: [
      'Queens are larger and more orange in color',
      'Workers have distinctive yellow stripes on the upper thorax',
      'Slightly larger than Eastern yellowjackets',
      'Has thin black bands'
    ],
    flowers: ['Late wildflowers', 'Goldenrod', 'Asters', 'Fruit trees', 'Garden crops'],
    ecological: [
      'Preys on agricultural and garden pests',
      'Hunts other insects including flies and caterpillars',
      'May take over nests of other yellowjacket species'
    ],
    habitat: [
      'Typically builds nests underground',
      'Often found in disturbed areas like yards, parks, and roadsides',
      'Prefers warmer climates, common in eastern Maryland'
    ],
    color: '#B8860B', // DarkGoldenrod
    photoCredit: 'Credit: Jesse Christopherson',
    flowerPhotoCredit: 'Credit: Helgion'
  },
  {
    title: 'Bald-Faced Hornet',
    subtitle: 'Dolichovespula maculata',
    identification: [
      'Medium to large (5/8 to 3/4 inch) black and white wasp',
      "Distinctive white face ('bald-faced')",
      'Black body with white markings on face, thorax, and abdomen tip',
      'Not a true hornet - actually a type of yellowjacket'
    ],
    flowers: ['Goldenrod', 'Late wildflowers', 'Joe-pye weed', 'Fruit trees', 'Flowering shrubs'],
    ecological: [
      'Controls pest insect populations',
      'Hunts and eats flies, caterpillars, and yellowjackets',
      'Creates elaborate paper nests that shelter other insects after abandonment'
    ],
    habitat: [
      'Builds large paper nests above ground in trees and shrubs',
      'Found in woodlands, meadows, and suburban areas',
      'Widespread across Maryland'
    ],
    color: '#2F4F4F', // DarkSlateGray
    photoCredit: 'Credit: David Cappaert',
    flowerPhotoCredit: 'Credit: Letícia Almeida'
  },
  {
    title: 'Sweat Bee',
    subtitle: 'Family Halictidae',
    identification: [
      'Small bees (1/4 to 1/2 inch)',
      'Many species have metallic green red, purple, or blue bodies',
      'Some species are black with yellow markings',
      'Attracted to human sweat for the salt'
    ],
    flowers: ['Native wildflowers', 'Sunflowers', 'Fruit trees', 'Garden crops', 'Alfalfa'],
    ecological: [
      'Generalist pollinator',
      'Has learned how to access different flower types',
      'Helps improve soil quality through nest-building'
    ],
    habitat: [
      'Most nest underground in bare soil exposed to sun',
      'Some species nest in rotting wood',
      'Found in gardens, meadows, and natural areas across Maryland'
    ],
    color: '#556B2F', // DarkOliveGreen
    photoCredit: 'Credit: Ecoshield Pest',
    flowerPhotoCredit: 'Credit: Keystone Wildflowers'
  },
  {
    title: 'Squash Bee',
    subtitle: 'Subgenus Peponapis',
    identification: [
      'Medium-sized bee (about 1/2 inch)',
      'Black and yellow striped abdomen',
      'Bulkier build than honey bees',
      'Active at dawn when squash flowers open, asleep in flowers by noon'
    ],
    flowers: ['Pumpkins', 'Squash', 'Zucchini', 'Gourds', 'Other cucurbits'],
    ecological: [
      'Specialized pollinator essential for squash production',
      'Creates tunnels in soil that aerate and improve soil health',
      'Supports biodiversity in garden ecosystems'
    ],
    habitat: [
      'Nests in the ground, often right under squash plants',
      'Active very early in the morning when squash flowers open',
      'Prefer non-tilled soil, tilling can hurt them'
    ],
    color: '#A0522D', // Sienna
    photoCredit: 'Credit: Alica Morgan',
    flowerPhotoCredit: 'Credit: Yanely Castro'
  },
  {
    title: 'Mining Bee',
    subtitle: 'Genus Andrena',
    identification: [
      'Small to medium-sized bees (1/4 to 1/2 inch)',
      'Usually dark colored (black or reddish)',
      "Many have facial 'mustaches' below antennae",
      'Often seen in early spring when few other bees are active'
    ],
    flowers: [
      'Spring beauty',
      'Fruit trees',
      'Blueberries',
      'Violets and bloodroot',
      'Early spring wildflowers'
    ],
    ecological: [
      'Aerates soil through nest building',
      'Creates habitat for other insects',
      'First bees active in early spring, only active for a few weeks'
    ],
    habitat: [
      'Nests in the ground in sandy or well-drained soils',
      'Creates small mounds with center holes where females dig',
      'Common in gardens, meadows, and woodland edges'
    ],
    color: '#8B4513', // SaddleBrown
    photoCredit: 'Credit: Encyclopedia Britannica',
    flowerPhotoCredit: 'Credit: Fredlyfish4'
  },
  {
    title: 'Mason Bee',
    subtitle: 'Genus Osmia',
    identification: [
      'Small to medium-sized bees (3/8 to 5/8 inch)',
      'Often metallic blue or green in color',
      'Carries pollen on special hairs under the abdomen',
      'Active in early spring when fruit trees bloom'
    ],
    flowers: [
      'Fruit trees',
      'Blueberries',
      'Early spring wildflowers',
      'Native wildflowers',
      'Berry plants'
    ],
    ecological: [
      'Extremely efficient pollinators (better than honey bees)',
      'Creates habitat for other insects in abandoned nests',
      'Helps decompose dead plant material'
    ],
    habitat: [
      'Nests in hollow reeds, stems, or existing holes in wood',
      'Does not drill holes but uses pre-existing cavities',
      'Uses mud or other "masonry" products in nest construction'
    ],
    color: '#4682B4', // SteelBlue
    photoCredit: 'Credit: Encyclopedia Britannica',
    flowerPhotoCredit: 'Credit: photos-public-domain.com'
  },
  {
    title: 'Cuckoo Bumble Bees',
    subtitle: 'Subgenus Psithyrus',
    identification: [
      'Much bigger than other social bumble bees',
      'Abdomen comes to more of a point',
      'Pointier mandible and longer stinger',
      'Most species are a lighter yellow to white color'
    ],
    flowers: ['Bumble bee nest', 'Parasite Species', 'Benefit Unknown'],
    ecological: [
      'Pollinates but not effective',
      'Lays eggs in nest of other bumble bees',
      'May use scent of host bee to access nest',
      'Does not always kill host queen'
    ],
    habitat: ['Other bumble bee nests'],
    color: '#D1B74D', // EarthYellow
    photoCredit: 'Credit: Pamela Cowart-Rickman',
    flowerPhotoCredit: 'Credit: Ehrlich'
  },
  {
    title: 'Honey Bee',
    subtitle: 'Apis mellifera (Non-native)',
    identification: [
      'Medium-sized bee (1/2 inch)',
      'Golden brown with black stripes on abdomen',
      'Hairy body with pollen baskets on hind legs',
      'Lives in large colonies with thousands of workers'
    ],
    flowers: ['Clover', 'Fruit trees', 'Garden crops', 'Goldenrod', 'Asters'],
    ecological: [
      'Produces honey and beeswax',
      'Major commercial crop pollinator',
      'Not native to Maryland'
    ],
    habitat: [
      'Lives in hives (wild or managed)',
      'Prefers cavities like hollow trees in the wild',
      'Found throughout Maryland in both natural and agricultural areas'
    ],
    color: '#DAA520', // GoldenRod
    photoCredit: 'Credit: Charlotte Anderson',
    flowerPhotoCredit: 'Credit: David Illig'
  }
];

export const pollinatorImages: Record<string, string> = {
  'Eastern Carpenter Bee':
    'https://inaturalist-open-data.s3.amazonaws.com/photos/94190165/medium.jpg',
  'Rusty-patched Bumble Bee': 'https://cdn.davidwolfe.com/wp-content/uploads/2017/01/4-1.jpg',
  'Squash Bee': 'https://facts.net/wp-content/uploads/2021/04/Squash-Bee.jpg',
  'Mason Bee': 'https://cdn.britannica.com/15/240415-050-FFA90839/red-mason-bee.jpg',
  'Mining Bee': 'https://cdn.britannica.com/17/240417-050-D8B8AEC6/tawny-mining-bee.jpg',
  'Sweat Bee': 'https://www.ecoshieldpest.com/hubfs/Sweat%20Bee%20Covered%20in%20Pollen.png',
  'Eastern Yellowjacket':
    'https://entomologytoday.org/wp-content/uploads/2019/03/eastern-yellowjacket-Vespula-maculifrons.jpg',
  'Southern Yellowjacket':
    'https://objects.liquidweb.services/images/201811/jesse_christopherson_45640080302_d863cf3bf4_b.jpg',
  'Bald-Faced Hornet': 'https://bugwoodcloud.org/images/768x512/5403460.jpg',
  'Cuckoo Bumble Bees':
    'https://objects.liquidweb.services/images/202108/inat_1628040932-610a950bdfb6e.jpg',
  'Honey Bee': 'https://carolinahoneybees.com/wp-content/uploads/2022/11/visual-looks-honey-bee.jpg'
};

export const flowerImages: Record<string, string> = {
  Tomatoes: 'https://tomatogeek.com/wp-content/uploads/2021/01/Tomato-Flowers-Closeup.jpg',
  'New Jersey tea':
    'https://gardenerspath.com/wp-content/uploads/2024/09/Grow-New-Jersey-Tea-Feature.jpg',
  Pumpkins:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2020%2F07%2F11%2F16%2F22%2Fflower-5394594_1280.jpg&f=1&nofb=1&ipt=21058c5a02f4685d0d4cf0c515881634535cc0b9e80416cac456eaaaa449abad',
  'Fruit trees':
    'http://www.photos-public-domain.com/wp-content/uploads/2011/04/apple-blossoms-close-up.jpg',
  'Spring beauty':
    'https://eattheplanet.org/wp-content/uploads/2020/04/2560px-Claytonia_virginica_UMFS_1-1024x730.jpg',
  'Native wildflowers':
    'https://www.keystonewildflowers.com/media/Mertensia-virginica-virginia-bluebells.jpg',
  Goldenrod:
    'https://www.thespruce.com/thmb/adYGODvCJjh1gm-YkAU2Q9mF1LM=/6720x4480/filters:no_upscale():max_bytes(150000):strip_icc()/goldenrod-wildflowers-2132951-06-ac848e5f75204d4daf11efd3044d911e.jpg',
  'Late wildflowers': 'https://cdn.pixabay.com/photo/2022/01/14/19/58/chicory-6938101_1280.jpg',
  'Bumble bee nest':
    'https://www.treehugger.com/thmb/NrIwU71sPXGONjExndJ5R6k9itA=/3840x2160/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-916563540-891eb629a7e445b3b0ea559e529c47b5.jpg',
  Clover:
    'https://objects.liquidweb.services/images/201906/david_illig_47960396171_2b81da58f0_b.jpg'
};

export const getPollinatorInfoURL = (scientificName: string): string => {
  const infoURLs: Record<string, string> = {
    'Xylocopa virginica': 'https://www.inaturalist.org/taxa/51110-Xylocopa-virginica',
    'Bombus affinis': 'https://www.inaturalist.org/taxa/121519-Bombus-affinis',
    'Vespula maculifrons': 'https://www.inaturalist.org/taxa/119994-Vespula-maculifrons',
    'Vespula squamosa': 'https://www.inaturalist.org/taxa/233560-Vespula-squamosa',
    'Dolichovespula maculata': 'https://www.inaturalist.org/taxa/52911-Dolichovespula-maculata',
    'Family Halictidae': 'https://www.inaturalist.org/taxa/49707-Halictidae',
    'Subgenus Peponapis': 'https://www.inaturalist.org/taxa/578138-Peponapis',
    'Genus Andrena': 'https://www.inaturalist.org/taxa/57669-Andrena',
    'Genus Osmia': 'https://www.inaturalist.org/taxa/57674-Osmia',
    'Subgenus Psithyrus': 'https://www.inaturalist.org/taxa/538893-Psithyrus',
    'Apis mellifera (Non-native)': 'https://www.inaturalist.org/taxa/47219-Apis-mellifera'
  };

  // Return the URL if found, or a default search URL if not found
  return (
    infoURLs[scientificName] ||
    `https://www.inaturalist.org/search?q=${encodeURIComponent(scientificName)}`
  );
};
