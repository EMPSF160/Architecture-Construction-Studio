/**
 * ARCHITECTURE & CONSTRUCTION STUDIO - PROJECTS DATASET
 * FORM. MATERIAL. STRUCTURE.
 */

const STUDIO_PROJECTS = [
  {
    id: "house-of-limestone",
    number: "01",
    title: "House of Limestone",
    subtitle: "A monolithic sanctuary sculpted from porous travertine and board-formed concrete",
    location: "Chennai, India",
    year: "2027",
    category: "Residential",
    type: "Residential Architecture",
    area: "3,200 SQ FT",
    duration: "14 Months",
    status: "Completed",
    materials: "Limestone / Concrete / Teak Timber",
    heroImage: "image/pexels-83080092-8922815.jpg",
    gallery: [
      "image/pexels-83080092-8922815.jpg",
      "image/pexels-adrien-olichon-1257089-3137047.jpg",
      "image/pexels-felix-haumann-1938529-10143241.jpg",
      "image/piro4d-building-3501667_1920.jpg"
    ],
    concept: "Conceived as a dialogue between coastal humidity and geological weight. The building uses massive load-bearing limestone walls that absorb radiant solar heat by day and gently release ambient coolness across deep courtyard colonnades.",
    stats: {
      siteArea: "7,800 SQ FT",
      floors: "2 Levels + Rooftop Pavilion",
      embodiedCarbon: "38% Below Baseline",
      energyRating: "Net-Zero Thermal Mass"
    },
    structuralDetails: [
      "Hand-chiseled local limestone envelope with 40mm thermal break cavity",
      "Cantilevered board-formed white concrete canopy framing sky portals",
      "Reclaimed Burma teak louvers automated to track tropical sun angles",
      "Subterranean rainwater harvesting basin embedded within foundation rock"
    ]
  },
  {
    id: "concrete-courtyard",
    number: "02",
    title: "Concrete Courtyard",
    subtitle: "Brutalist courtyard residence revolving around a serene rainwater atrium",
    location: "Bengaluru, India",
    year: "2026",
    category: "Residential",
    type: "Courtyard Residence",
    area: "4,650 SQ FT",
    duration: "18 Months",
    status: "Completed",
    materials: "Raw Concrete / Basalt Stone / Fluted Glass",
    heroImage: "image/pexels-adrien-olichon-1257089-3137047.jpg",
    gallery: [
      "image/pexels-adrien-olichon-1257089-3137047.jpg",
      "image/pexels-breaks-30832160.jpg",
      "image/valterm-building-9114701_1920.jpg"
    ],
    concept: "A sequence of introverted spatial layers turning inward from dense urban surroundings. High-performance concrete columns support an open perimeter, blurring thresholds between landscaped gardens and interior chambers.",
    stats: {
      siteArea: "9,200 SQ FT",
      floors: "3 Levels",
      embodiedCarbon: "Self-consolidating slag mix",
      energyRating: "Passive Bioclimatic"
    },
    structuralDetails: [
      "Post-tensioned concrete slabs allowing 9-meter column-free spans",
      "Acoustic basalt stone floor paving integrated with radiant cooling tubes",
      "Custom anodized bronze structural mullions with recessed drain channels"
    ]
  },
  {
    id: "north-pavilion",
    number: "03",
    title: "North Pavilion",
    subtitle: "Civic exhibition hall framed by slender blackened steel portals and glass",
    location: "Kochi, India",
    year: "2026",
    category: "Cultural",
    type: "Cultural Archive & Gallery",
    area: "8,400 SQ FT",
    duration: "20 Months",
    status: "Completed",
    materials: "Oxidized Steel / Laminated Glass / Granite",
    heroImage: "image/pexels-breaks-30832160.jpg",
    gallery: [
      "image/pexels-breaks-30832160.jpg",
      "image/satyaprem-glass-roof-4564418_1920.jpg",
      "image/nonmisvegliate-great-gallery-4293985_1920.jpg"
    ],
    concept: "Designed to house historical maritime archives and contemporary spatial installations. The structural grid is exposed as an aesthetic grammar, celebrating tectonic honesty and precision joinery.",
    stats: {
      siteArea: "15,000 SQ FT",
      floors: "Double-Height Volume",
      embodiedCarbon: "Modular Dry Construction",
      energyRating: "LEED Platinum Standard"
    },
    structuralDetails: [
      "Pre-engineered oxidized weathering steel box sections with CNC connections",
      "Low-iron structural glass fins with hidden point-support stainless hardware",
      "Monolithic polished riverbed granite datum floor throughout"
    ]
  },
  {
    id: "atelier-residence",
    number: "04",
    title: "Atelier Residence",
    subtitle: "Sculptor's workshop and dwelling organized along an extruded daylight axis",
    location: "Pondicherry, India",
    year: "2025",
    category: "Residential",
    type: "Studio & Residence",
    area: "3,800 SQ FT",
    duration: "12 Months",
    status: "Completed",
    materials: "Lime Plaster / Timber Trusses / Kota Stone",
    heroImage: "image/pexels-felix-haumann-1938529-10143241.jpg",
    gallery: [
      "image/pexels-felix-haumann-1938529-10143241.jpg",
      "image/pexels-gamze-nur-zararsiz-75705670-8568610.jpg",
      "image/rottonara-castle-3794681_1920.jpg"
    ],
    concept: "An intimate exploration of artisan lime plaster finishes and exposed joinery. North-facing clerestory glazing distributes glare-free diffused light across the double-height studio.",
    stats: {
      siteArea: "6,400 SQ FT",
      floors: "2 Levels",
      embodiedCarbon: "Locally Sourced Timber",
      energyRating: "Passive Solar"
    },
    structuralDetails: [
      "Traditional mortise-and-tenon timber truss ceiling structure",
      "Hand-burnished breathable lime wash wall finishes without chemical binders",
      "Polished Kota stone flooring with brass expansion inlays"
    ]
  },
  {
    id: "stone-house",
    number: "05",
    title: "Monolith Stone House",
    subtitle: "Heavy dry-stacked masonry dwelling emerging directly from bedrock topography",
    location: "Hyderabad, India",
    year: "2025",
    category: "Residential",
    type: "Hillside Residence",
    area: "5,100 SQ FT",
    duration: "16 Months",
    status: "Completed",
    materials: "Granite Masonry / Cast Bronze / Oiled Oak",
    heroImage: "image/pexels-ishahidsultan-7055821.jpg",
    gallery: [
      "image/pexels-ishahidsultan-7055821.jpg",
      "image/pexels-laura-paredis-1047081-12843084.jpg",
      "image/piro4d-building-3501667_1920.jpg"
    ],
    concept: "Built into a rocky promontory, the house uses granite excavated directly from site footing trenches. Massive masonry piers anchor the building against regional high winds while framing dramatic valley vistas.",
    stats: {
      siteArea: "11,000 SQ FT",
      floors: "Split 3 Levels",
      embodiedCarbon: "Zero-Kilometer Stone",
      energyRating: "High Thermal Inertia"
    },
    structuralDetails: [
      "Rough-hewn 450mm cyclical granite masonry with lime mortar core",
      "Deep recessed window embrasures shielding interior from west sunlight",
      "Continuous cast-bronze perimeter drip edges and rainwater channels"
    ]
  },
  {
    id: "civic-archive",
    number: "06",
    title: "Civic Archive & Library",
    subtitle: "Public research institution celebrating rhythm, timber waffle slabs and natural ventilation",
    location: "Madurai, India",
    year: "2024",
    category: "Cultural",
    type: "Institutional / Public",
    area: "14,200 SQ FT",
    duration: "24 Months",
    status: "Completed",
    materials: "Terracotta Baguettes / Fair-face Concrete / Glass",
    heroImage: "image/pexels-laura-paredis-1047081-12843084.jpg",
    gallery: [
      "image/pexels-laura-paredis-1047081-12843084.jpg",
      "image/pexels-mike-van-schoonderwalt-1884800-5504388.jpg",
      "image/valterm-building-9114701_1920.jpg"
    ],
    concept: "A municipal sanctuary for historical manuscripts. An outer skin of porous extruded terracotta louvers tempers exterior glare while allowing prevailing breezes to circulate through vaulted reading chambers.",
    stats: {
      siteArea: "28,000 SQ FT",
      floors: "4 Levels",
      embodiedCarbon: "Recycled Clinker Concrete",
      energyRating: "GRIHA 5-Star Certified"
    },
    structuralDetails: [
      "Engineered terracotta brise-soleil hung from stainless tension cables",
      "Exposed concrete coffered ceiling system designed for acoustic absorption",
      "Central thermal chimney stack driving passive nighttime building flush"
    ]
  },
  {
    id: "coastal-pavilion",
    number: "07",
    title: "Coastal Research Lab",
    subtitle: "Marine environment testing facility engineered with corrosion-resistant titanium zinc and timber",
    location: "Goa, India",
    year: "2026",
    category: "Research",
    type: "Research & Laboratory",
    area: "6,900 SQ FT",
    duration: "15 Months",
    status: "Under Construction",
    materials: "Titanium Zinc / Mass Timber / Marine Concrete",
    heroImage: "image/pexels-mike-van-schoonderwalt-1884800-5504388.jpg",
    gallery: [
      "image/pexels-mike-van-schoonderwalt-1884800-5504388.jpg",
      "image/pexels-muharrem-alper-428087426-35158313.jpg",
      "image/sakulich-copper-1081825_1920.jpg"
    ],
    concept: "Formed as an aerodynamic wing hugging coastal dunes. Structural glulam timber arches span uninterrupted work bays while pre-patinated zinc roofing deflects salt spray and coastal storms.",
    stats: {
      siteArea: "18,500 SQ FT",
      floors: "2 Levels",
      embodiedCarbon: "Mass Timber Carbon Sink",
      energyRating: "Off-Grid Solar Powered"
    },
    structuralDetails: [
      "CNC-curved glue-laminated Scandinavian pine arches with hidden steel pin joints",
      "Standing-seam pre-weathered zinc skin with integrated standing solar PV panels",
      "Sulphate-resistant silica-fume reinforced maritime concrete piles"
    ]
  },
  {
    id: "monolith-tower",
    number: "08",
    title: "Urban Studio Tower",
    subtitle: "Boutique creative workspace balancing crystalline transparency and tectonic stone fins",
    location: "Mumbai, India",
    year: "2027",
    category: "Commercial",
    type: "Commercial Workspace",
    area: "22,000 SQ FT",
    duration: "26 Months",
    status: "Under Construction",
    materials: "Textured GFRC / High-Span Steel / Triple Glazing",
    heroImage: "image/pexels-muharrem-alper-428087426-35158313.jpg",
    gallery: [
      "image/pexels-muharrem-alper-428087426-35158313.jpg",
      "image/pexels-njeromin-12314551.jpg",
      "image/pexels-quentin-ecrepont-1148362-3818947.jpg"
    ],
    concept: "A slender vertical insertion in a dense metropolitan fabric. External glass-fiber reinforced concrete fins act as solar shading devices while providing acoustic shielding against street noise.",
    stats: {
      siteArea: "12,000 SQ FT",
      floors: "8 Levels",
      embodiedCarbon: "Ultra-High Performance Concrete",
      energyRating: "IGBC Platinum"
    },
    structuralDetails: [
      "External structural diagrid minimizing internal core dimensions",
      "Custom 3D-molded GFRC facade panels with sandblasted mineral finish",
      "Triple-glazed low-emissivity argon-filled curtain wall system"
    ]
  }
];

// Articles Dataset for Journal
const STUDIO_ARTICLES = [
  {
    id: "weight-of-stone",
    category: "Material",
    date: "OCTOBER 2026",
    readTime: "7 MIN READ",
    title: "The Weight of Stone: Tactility in Modern Monoliths",
    excerpt: "Why contemporary digital architecture requires a renewed confrontation with raw geological weight, thermal inertia, and ancient masonry crafts.",
    image: "image/pexels-ishahidsultan-7055821.jpg",
    content: `
      <p class="lead-p">In an era dominated by transient digital images and paper-thin building envelopes, stone reasserts the fundamental reality of gravity. When we build with stone, we do not merely erect partitions; we engage geological time.</p>
      <h3>The Thermal Memory of Sedimentary Strata</h3>
      <p>Limestone and sandstone are not inert commodities. Their micro-porous matrix stores the coolness of night and delays the penetration of solar radiation by up to eight hours. In sub-tropical climates, this natural thermal lag eliminates the need for aggressive mechanical air handling, allowing the building envelope to breathe in synchrony with diurnal rhythms.</p>
      <blockquote>"Architecture begins when two bricks are put together with care. When you cut stone, you must ask what the stone wants to be."</blockquote>
      <h3>Tectonic Honesty vs. Decorative Cladding</h3>
      <p>Too often in commercial development, stone is sliced into 20mm veneers and glued to steel framing—a simulation of permanence. Our studio rejects this superficial treatment. When we specify stone, it functions as a true compressive element: massive lintels, cyclopean corner quoins, and load-bearing piers that celebrate the weight of real tectonic craft.</p>
    `
  },
  {
    id: "drawing-to-structure",
    category: "Construction",
    date: "SEPTEMBER 2026",
    readTime: "5 MIN READ",
    title: "From Drawing to Structure: The Direct Studio-Site Bridge",
    excerpt: "How eliminating the barrier between the drafting table and the concrete pour produces buildings of uncompromised tectonic precision.",
    image: "image/pexels-sunny-li-2152532581-38532228.jpg",
    content: `
      <p class="lead-p">The separation of the architect from the builder was one of modernism's most profound mistakes. By maintaining an integrated construction division, our studio tests full-scale joinery prototypes in our workshop before placing a single footing.</p>
      <h3>The Reality of the 1:1 Mockup</h3>
      <p>Scale models and 3D renders can never simulate how concrete flows around congested rebar or how raw timber oxidizes when exposed to monsoonal rains. We construct 1:1 structural mockups of every crucial junction—timber lap joints, glass pockets, and stone drainage reveals—ensuring tolerances of under two millimeters.</p>
      <h3>Craftsmanship as a Collective Praxis</h3>
      <p>True architectural refinement is not achieved through software alone; it is negotiated on site between the master mason, the structural engineer, and the project architect. This collaboration imbues each surface with human touch and deliberate intentionality.</p>
    `
  },
  {
    id: "space-made-visible",
    category: "Architecture",
    date: "AUGUST 2026",
    readTime: "6 MIN READ",
    title: "Light as Material: Carving Void in High-Density Contexts",
    excerpt: "Exploring daylight not as an accidental illumination, but as a primary structural element that sculpts space across daily cycles.",
    image: "image/pexels-njeromin-12314551.jpg",
    content: `
      <p class="lead-p">Light requires darkness to have meaning. By controlling the depth and orientation of apertures, architecture transforms fleeting solar trajectories into enduring spatial poetry.</p>
      <h3>The Architecture of the Slit and Oculus</h3>
      <p>Instead of ubiquitous glass curtain walls that flood interiors with glare, we use deep reveals, narrow clerestory slits, and sunken courtyards. Light is caught on textured plaster, reflected across shallow water basins, and diffused through louvers to establish calm contemplative atmospheres.</p>
    `
  },
  {
    id: "bioclimatic-vernacular",
    category: "Research",
    date: "JULY 2026",
    readTime: "8 MIN READ",
    title: "Bioclimatic Geometry: Passive Cooling in Tropical Latitudes",
    excerpt: "Synthesizing regional courtyard wisdom with computational fluid dynamics to achieve zero-energy thermal comfort.",
    image: "image/pexels-wal_-172619-2156618639-38867950.jpg",
    content: `
      <p class="lead-p">Centuries before mechanical air conditioning, indigenous tropical architecture utilized stack-effect ventilation, deep verandahs, and water evaporation to maintain comfort. Our research laboratory measures and modernizes these ancient thermodynamic systems.</p>
      <h3>Computational Fluid Dynamics + Vernacular Jali</h3>
      <p>Using parametric airflow simulations, we optimize the perforations and aperture sizes of masonry jali screens. The resulting geometries accelerate gentle sea breezes through interior living volumes while deflecting direct solar radiation.</p>
    `
  },
  {
    id: "concrete-aggregate-studies",
    category: "Material",
    date: "JUNE 2026",
    readTime: "4 MIN READ",
    title: "Aggregates and Texture: Form-work Craft in Board-Formed Concrete",
    excerpt: "Documenting our experimentation with reclaimed timber formwork grains and pozzolanic mineral admixtures.",
    image: "image/pexels-quentin-ecrepont-1148362-3818947.jpg",
    content: `
      <p class="lead-p">Concrete is a liquid stone that faithfully registers the memory of its mold. When rough-sawn pine or cedar is used for formwork, the grain, knots, and imperfections of the timber are permanently cast in stone.</p>
      <h3>Mineral Admixtures and Patina</h3>
      <p>By substituting 40% of standard Portland cement with ground granulated blast-furnace slag and fly ash, we not only reduce the carbon footprint of our structures but also achieve a warm, chalk-like matte finish that ages gracefully over decades.</p>
    `
  },
  {
    id: "structural-clarity",
    category: "Structure",
    date: "MAY 2026",
    readTime: "5 MIN READ",
    title: "Tectonic Clarity: The Art of the Exposed Joint",
    excerpt: "Why the intersection between distinct materials should never be hidden behind plaster trims or mastic caulking.",
    image: "image/sakulich-copper-1081825_1920.jpg",
    content: `
      <p class="lead-p">In our buildings, nothing is disguised. Where steel meets timber, a custom-milled pin connection celebrates the transfer of load. Where glass meets stone, a recessed stainless shadow-gap defines the threshold.</p>
      <h3>The Poetics of the Shadow Gap</h3>
      <p>A shadow gap allows each material to expand and contract freely while creating a distinct line of shade that sharpens the visual geometry of the space. It is in these micro-details that architectural integrity is either won or lost.</p>
    `
  }
];

// Helper to find project by ID
function getProjectById(id) {
  return STUDIO_PROJECTS.find(p => p.id === id) || STUDIO_PROJECTS[0];
}

// Helper to find article by ID
function getArticleById(id) {
  return STUDIO_ARTICLES.find(a => a.id === id) || STUDIO_ARTICLES[0];
}
