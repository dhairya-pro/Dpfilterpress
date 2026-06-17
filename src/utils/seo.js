/**
 * SEO Utility — DP Filter Press Trading
 * Pan-India + Local keyword banks, schema factories.
 */

/* ─────────────────────────────────────────────────────────────
   1. BUSINESS CONSTANTS
   ───────────────────────────────────────────────────────────── */
export const BUSINESS = {
  name: 'DP Filter Press Trading',
  tagline: 'A House of Filter Press Material & All Type of Hydraulic Parts & Repairing Works',
  phone1: '+91-9099024659',
  phone2: '+91-9824704659',
  email: 'dev.bharuch@gmail.com',
  owner: 'Devang Shah',
  address: {
    street: 'Plot No. 4721, Gala No. 1, Opp. Nilkanth Restaurant, GIDC',
    city: 'Ankleshwar',
    district: 'Bharuch',
    state: 'Gujarat',
    pin: '393002',
    country: 'India',
    countryCode: 'IN',
  },
  geo: { lat: 21.627, lon: 73.002 },
  url: 'https://dpfilterpresstrading.com',
  ogImage: 'https://dpfilterpresstrading.com/images/hero_banner.webp',
}

/* ─────────────────────────────────────────────────────────────
   2. PAN-INDIA CITY / REGION TARGETS
   (Major industrial hubs across India)
   ───────────────────────────────────────────────────────────── */
const INDIA_CITIES = [
  // Gujarat
  'Ankleshwar', 'Bharuch', 'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot',
  'Gandhinagar', 'Vapi', 'Hazira', 'Dahej', 'Valsad', 'Navsari',
  'GIDC Ankleshwar', 'GIDC Bharuch', 'GIDC Vatva', 'GIDC Anand',
  // Maharashtra
  'Mumbai', 'Pune', 'Nashik', 'Aurangabad', 'Nagpur', 'Thane', 'Navi Mumbai',
  'Kolhapur', 'Solapur', 'MIDC Pune', 'MIDC Mumbai',
  // Rajasthan
  'Jaipur', 'Udaipur', 'Jodhpur', 'Kota', 'Alwar', 'Bhilwara',
  // Madhya Pradesh
  'Indore', 'Bhopal', 'Jabalpur', 'Gwalior', 'Pithampur', 'Mandideep',
  // Uttar Pradesh
  'Noida', 'Agra', 'Kanpur', 'Lucknow', 'Ghaziabad', 'Meerut',
  'Greater Noida', 'Mathura',
  // Haryana / Delhi
  'Delhi', 'Gurugram', 'Faridabad', 'Ambala', 'Panipat',
  // Punjab
  'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala',
  // Telangana / Andhra
  'Hyderabad', 'Visakhapatnam', 'Vijayawada', 'Warangal', 'Kakinada',
  // Tamil Nadu
  'Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruppur', 'Hosur',
  // Karnataka
  'Bengaluru', 'Mysuru', 'Hubli', 'Belagavi', 'Mangaluru',
  // West Bengal
  'Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri',
]

// Concise local set for short meta strings
const LOC_SHORT = ['Ankleshwar', 'Bharuch', 'Gujarat', 'India']

/* ─────────────────────────────────────────────────────────────
   3. PRODUCT MODEL KEYWORDS (exact model name searches)
   ───────────────────────────────────────────────────────────── */
export const MODEL_KEYWORDS = [
  // Pallet trucks
  'RE 101', 'RE101', 'RE-101', 'hand pallet truck RE 101', 'RE 101 pallet truck price',
  'RE 102', 'RE102', 'RE-102', 'hand pallet truck 3 ton RE 102',
  'RE 103', 'RE103', 'RE-103', '5 ton pallet truck RE 103',
  'RE 104', 'RE104', 'RE-104', 'low profile pallet truck RE 104',
  'RE 105', 'RE105', 'RE-105', 'scissor pallet truck RE 105',
  'RE 106', 'RE106', 'RE-106', 'electric pallet truck RE 106', 'battery pallet truck RE 106',
  'RE 107', 'RE107', 'RE-107', 'electric pallet truck 3 ton RE 107',
  'RE 108', 'RE108', 'RE-108', 'reel pallet truck RE 108',
  'RE 109', 'RE109', 'RE-109', 'weighing scale pallet truck RE 109',
  'RE 110', 'RE110', 'RE-110', 'stainless steel pallet truck RE 110',
  'RE 111', 'RE111', 'RE-111', 'long fork pallet truck RE 111',
  // Stackers
  'RE 112', 'RE112', 'manual hand stacker RE 112',
  'RE 113', 'RE113', 'manual stacker 1 ton RE 113',
  'RE 114', 'RE114', 'semi electric stacker RE 114',
  'RE 115', 'RE115', 'walkie stacker RE 115',
  'RE 116', 'RE116', 'battery stacker RE 116', 'fully electric stacker RE 116',
  'RE 117', 'RE117', 'reach truck RE 117', 'reach truck stacker',
  'RE 118', 'RE118', 'counter balance stacker RE 118',
  // Drum handling
  'RE 119', 'RE119', 'drum lifter RE 119',
  'RE 120', 'RE120', 'drum trolley RE 120',
  'RE 121', 'RE121', 'drum grabber tilter RE 121',
  'RE 122', 'RE122', 'drum rotator RE 122',
  'RE 123', 'RE123', 'drum stacker RE 123',
  'RE 147', 'RE147', 'battery drum lifter RE 147',
  'RE 148', 'RE148', 'double drum carrier RE 148',
  'RE 149', 'RE149', 'drum pallet truck RE 149',
  'RE 150', 'RE150', 'drum depalletizer RE 150',
  'RE 151', 'RE151', 'drum handling crane RE 151',
  // Forklift
  'RE 124', 'RE124', 'single attachment forklift RE 124',
  'RE 125', 'RE125', 'double attachment forklift RE 125',
  // Scissor lifts
  'RE 126', 'RE126', 'hydraulic scissor lift table RE 126',
  'RE 127', 'RE127', 'mobile scissor lift RE 127',
  'RE 128', 'RE128', 'single mast AWP RE 128', 'aerial work platform 6m',
  'RE 129', 'RE129', 'double mast AWP RE 129', 'aerial work platform 10m',
  'RE 130', 'RE130', 'self propelled scissor lift RE 130',
  // Cranes & hoists
  'RE 131', 'RE131', 'hydraulic floor crane RE 131',
  'RE 132', 'RE132', 'wire rope hoist RE 132',
  'RE 133', 'RE133', 'magnetic lifter RE 133',
  'RE 139', 'RE139', 'chain block manual RE 139',
  'RE 140', 'RE140', 'electric chain hoist RE 140',
  'RE 141', 'RE141', 'lever chain block RE 141',
  'RE 142', 'RE142', 'digital crane scale RE 142',
  // Trolleys
  'RE 134', 'RE134', 'MS platform trolley RE 134',
  'RE 135', 'RE135', 'SS platform trolley RE 135',
  'RE 136', 'RE136', 'plastic platform trolley RE 136',
  'RE 137', 'RE137', 'barrow trolley RE 137',
  'RE 138', 'RE138', 'cylinder trolley RE 138',
  'RE 143', 'RE143', 'foldable trolley RE 143',
  'RE 152', 'RE152', 'cargo trolley RE 152',
  // Loading
  'RE 145', 'RE145', 'mobile loading ramp RE 145',
  'RE 146', 'RE146', 'dock leveler RE 146',
  // Spare parts
  'SP-001', 'SP001', 'hydraulic pump pallet truck',
  'SP-002', 'SP002', 'seal kit standard pallet truck',
  'SP-003', 'SP003', 'seal kit heavy duty',
]

/* ─────────────────────────────────────────────────────────────
   4. PAN-INDIA PRODUCT KEYWORDS (no location — pure product)
   ───────────────────────────────────────────────────────────── */
const PAN_INDIA_PRODUCTS = [
  // Filter Press
  'filter press supplier', 'filter press manufacturer', 'filter press dealer India',
  'buy filter press India', 'filter press price India', 'new filter press sale',
  'used filter press sale', 'old filter press buy sell', 'filter press machine supplier',
  'filter press plate supplier', 'PP filter press rods', 'polypropylene rods supplier',
  'PP rod 10mm', 'PP rod 20mm', 'PP rod 50mm', 'PP rod 100mm',
  'filter press hydraulic system', 'filter press spare parts',

  // Hydraulic
  'hydraulic power pack supplier', 'hydraulic power pack price India',
  'hydraulic power pack manufacturer', 'buy hydraulic power pack',
  'hydraulic cylinder supplier', 'hydraulic cylinder repair service',
  'hydraulic cylinder reconditioning', 'hydraulic seal kit supplier',
  'hydraulic valve supplier India', 'pressure gauge supplier India',
  'hydraulic hose supplier India', 'hydraulic fitting supplier',
  'hydraulic pump supplier India', 'hydraulic power unit supplier',

  // Pallet Trucks — generic
  'hand pallet truck supplier', 'hand pallet truck manufacturer',
  'hand pallet truck price India', 'buy hand pallet truck India',
  'manual pallet truck supplier', 'pallet truck dealer India',
  'hydraulic pallet truck supplier', '2.5 ton pallet truck',
  '3 ton pallet truck', '5 ton pallet truck',
  'electric pallet truck supplier', 'battery operated pallet truck',
  'electric pallet truck price India', 'buy electric pallet truck',
  'low profile pallet truck supplier', 'scissor pallet truck',
  'reel pallet truck', 'weighing scale pallet truck',
  'stainless steel pallet truck supplier', 'long fork pallet truck',
  'food grade pallet truck', 'SS pallet truck India',

  // Stackers
  'electric stacker supplier India', 'manual stacker supplier',
  'stacker manufacturer India', 'buy electric stacker',
  'semi electric stacker supplier', 'walkie stacker supplier',
  'reach truck supplier India', 'counter balance stacker',
  'battery operated stacker India', 'electric reach stacker',
  '1 ton stacker price India', '1.5 ton stacker India',

  // Drum Handling
  'drum lifter supplier India', 'drum handling equipment supplier',
  'drum trolley supplier India', 'drum rotator supplier',
  'drum grabber supplier India', 'battery drum lifter',
  'hydraulic drum lifter', 'drum stacker supplier',
  'double drum carrier supplier', 'drum handling crane',

  // Forklift Attachments
  'forklift attachment supplier India', 'drum forklift attachment',
  'forklift drum grabber supplier',

  // Scissor Lifts
  'scissor lift table supplier India', 'hydraulic scissor lift table',
  'mobile scissor lift table', 'aerial work platform supplier India',
  'AWP supplier India', 'single mast aerial work platform',
  'double mast aerial work platform', 'self propelled scissor lift',
  'scissor lift 1 ton', 'scissor lift 1000 kg',

  // Cranes & Hoists
  'floor crane supplier India', 'hydraulic floor crane',
  'chain hoist supplier India', 'chain block supplier India',
  'electric chain hoist supplier', 'wire rope hoist supplier India',
  'electric hoist manufacturer India', 'magnetic lifter supplier',
  'crane scale supplier India', 'lever chain block supplier',
  'chain block 1 ton', 'chain block 2 ton', 'electric hoist 1 ton',

  // Trolleys
  'platform trolley supplier India', 'MS platform trolley supplier',
  'stainless steel trolley supplier', 'SS trolley India',
  'plastic platform trolley', 'barrow trolley supplier',
  'cylinder trolley supplier', 'foldable trolley supplier',
  'cargo trolley supplier India', 'heavy duty platform trolley',

  // Loading & Docking
  'loading ramp supplier India', 'mobile loading ramp',
  'dock leveler supplier India', 'hydraulic dock leveler',
  'truck loading ramp supplier',

  // Spare Parts
  'pallet truck spare parts supplier India', 'pallet truck hydraulic pump',
  'pallet truck seal kit', 'pallet truck wheel supplier',
  'pallet truck steer wheel', 'pallet truck load wheel',
  'PP wheel pallet truck', 'PU wheel pallet truck', 'nylon wheel pallet truck',
  'pallet truck valve supplier', 'pallet truck spring supplier',
  'battery charger 24V forklift',

  // Cross-category
  'material handling equipment supplier India',
  'material handling equipment manufacturer',
  'industrial equipment supplier India',
  'warehouse equipment supplier India',
  'B2B industrial supplier India',
]

/* ─────────────────────────────────────────────────────────────
   5. MASTER KEYWORD BANKS (local + pan-India merged)
   ───────────────────────────────────────────────────────────── */
export const GLOBAL_KEYWORDS = [
  'DP Filter Press Trading', 'DP Filter Press', 'Devang Shah filter press',
  'filter press trading company India', 'filter press dealer Gujarat India',
  'industrial equipment supplier India', 'material handling equipment supplier India',
  'B2B industrial supplier Gujarat', 'GIDC Ankleshwar industrial dealer',
  ...LOC_SHORT,
]

export const PAGE_KEYWORDS = {
  home: [
    ...GLOBAL_KEYWORDS,
    // Pan-India high-volume
    'filter press supplier India', 'hydraulic parts supplier India',
    'pallet truck supplier India', 'electric stacker supplier India',
    'scissor lift supplier India', 'material handling equipment India',
    'hand pallet truck supplier', 'hydraulic power pack supplier',
    // Local
    'filter press supplier Ankleshwar', 'hydraulic parts Bharuch Gujarat',
    'pallet truck dealer Ankleshwar', 'stacker supplier Gujarat',
    'drum lifter supplier Gujarat', 'crane hoist supplier Gujarat',
    // Models
    'RE 101 pallet truck', 'RE 106 electric pallet truck',
    'RE 115 walkie stacker', 'RE 126 scissor lift table',
    ...MODEL_KEYWORDS.slice(0, 30),
  ],

  products: [
    ...PAN_INDIA_PRODUCTS,
    ...MODEL_KEYWORDS,
    // Local versions
    'filter press Ankleshwar', 'filter press Gujarat',
    'hand pallet truck Ankleshwar', 'electric pallet truck Gujarat',
    'stacker Ankleshwar', 'scissor lift Gujarat',
    'drum lifter Ankleshwar', 'platform trolley Gujarat',
    'chain hoist Ankleshwar', 'dock leveler Gujarat',
    'spare parts pallet truck Ankleshwar',
    // City-wise product combos (auto-generated subset)
    ...['Mumbai', 'Delhi', 'Pune', 'Chennai', 'Hyderabad', 'Kolkata', 'Bengaluru', 'Jaipur', 'Ahmedabad', 'Surat'].flatMap(city => [
      `hand pallet truck ${city}`, `electric stacker ${city}`,
      `scissor lift ${city}`, `material handling equipment ${city}`,
    ]),
  ],

  services: [
    'hydraulic repair service India', 'hydraulic power pack repair',
    'hydraulic cylinder repair service India', 'cylinder reconditioning India',
    'filter press repair service India', 'filter press maintenance India',
    'hydraulic overhauling service', 'piston rod re-chroming India',
    'barrel honing service India', 'hydraulic seal replacement',
    'used filter press buy sell India', 'old filter press dealer India',
    // Local
    'hydraulic repair Ankleshwar', 'hydraulic service Gujarat',
    'filter press repair Gujarat', 'cylinder repair Ankleshwar',
    'hydraulic power pack service Bharuch',
  ],

  about: [
    'DP Filter Press Trading', 'filter press company India',
    'industrial equipment company Gujarat', 'Devang Shah Ankleshwar',
    'filter press trading company Gujarat India',
    'B2B industrial supplier Ankleshwar Gujarat',
    'GIDC Ankleshwar equipment company',
  ],

  contact: [
    'contact DP filter press trading', 'filter press supplier contact India',
    'hydraulic parts enquiry India', '9099024659', '9824704659',
    'dev.bharuch@gmail.com', 'Devang Shah contact',
    'filter press Ankleshwar phone', 'pallet truck enquiry India',
    'material handling equipment enquiry',
  ],
}

/* ─────────────────────────────────────────────────────────────
   6. PAN-INDIA CATEGORY SEO OBJECTS
   (Used in Products.jsx for dynamic title/desc/h1)
   ───────────────────────────────────────────────────────────── */
export const CAT_SEO_DATA = {
  'filter-press': {
    title: 'Filter Press Supplier India | New & Used Filter Press | PP Rods 10mm–100mm',
    desc: 'Filter press supplier across India — new filter press, used/old filter press, PP rods 10mm to 100mm, filter press plates & spare parts. Pan-India delivery. DP Filter Press Trading, GIDC Ankleshwar, Gujarat. Call +91 9099024659.',
    h1: 'Filter Press Supplier India — New, Used & PP Rods',
    keywords: [
      'filter press supplier India', 'filter press manufacturer India',
      'buy filter press India', 'new filter press sale India',
      'used filter press sale India', 'old filter press buy sell',
      'PP rods supplier India', 'polypropylene rods 10mm 100mm',
      'filter press spare parts India', 'filter press Ankleshwar Gujarat',
    ],
  },
  'hydraulic-parts': {
    title: 'Hydraulic Power Pack, Cylinder, Valves & Parts Supplier India | DP Filter Press',
    desc: 'Hydraulic power packs, cylinders, valves, pressure gauges, hose & fittings — B2B supplier across India. Sales, service & repair. DP Filter Press Trading, Ankleshwar, Gujarat. Call +91 9099024659.',
    h1: 'Hydraulic Parts Supplier India — Power Pack, Cylinder, Valves & More',
    keywords: [
      'hydraulic power pack supplier India', 'hydraulic cylinder supplier India',
      'hydraulic valve supplier India', 'pressure gauge supplier India',
      'hydraulic hose fittings India', 'hydraulic pump supplier India',
      'buy hydraulic power pack India', 'hydraulic parts dealer India',
    ],
  },
  'pallet-trucks': {
    title: 'Hand Pallet Truck Supplier India | RE 101 RE 102 RE 106 Electric | All Models',
    desc: 'All hand pallet truck models — RE 101 (2.5T), RE 102 (3T), RE 103 (5T), RE 104 (Low Profile), RE 105 (Scissor), RE 106 (Electric 2T), RE 107 (Electric 3T), RE 108 (Reel), RE 109 (Scale), RE 110 (SS Food Grade), RE 111 (Long Fork). Pan-India supply. DP Filter Press Trading. Call +91 9099024659.',
    h1: 'Hand Pallet Truck Supplier India — RE 101 to RE 111 | Manual & Electric',
    keywords: [
      'hand pallet truck supplier India', 'RE 101 pallet truck', 'RE 101 hand pallet truck price',
      'RE 102 pallet truck 3 ton', 'RE 103 pallet truck 5 ton',
      'RE 106 electric pallet truck', 'RE 107 electric pallet truck 3 ton',
      'electric pallet truck supplier India', 'battery pallet truck India',
      'stainless steel pallet truck', 'low profile pallet truck supplier',
      'hydraulic pallet truck supplier India', 'pallet truck all models India',
    ],
  },
  'stackers': {
    title: 'Electric Stacker Supplier India | RE 112–RE 118 | Manual, Semi & Fully Electric',
    desc: 'Manual and electric stackers — RE 112 (Manual 500kg), RE 113 (1T Manual), RE 114 (Semi-Electric), RE 115 (Walkie Electric), RE 116 (Fully Electric), RE 117 (Reach Truck 6m), RE 118 (Counter Balance). Pan-India delivery. Call +91 9099024659.',
    h1: 'Electric Stacker Supplier India — RE 112 to RE 118 | Walkie, Reach & Semi-Electric',
    keywords: [
      'electric stacker supplier India', 'manual stacker supplier India',
      'RE 114 semi electric stacker', 'RE 115 walkie stacker price',
      'RE 116 battery stacker', 'RE 117 reach truck India',
      'walkie stacker supplier India', 'semi electric stacker India',
      'reach truck supplier India', 'stacker 1 ton India',
    ],
  },
  'drum-handling': {
    title: 'Drum Handling Equipment Supplier India | Drum Lifter, Trolley, Rotator | All Models',
    desc: 'Drum lifters, drum trolleys, drum grabbers/tilters, drum rotators, drum stackers, battery drum lifters — RE 119 to RE 151. 200L drum handling equipment. Pan-India supply. DP Filter Press Trading. Call +91 9099024659.',
    h1: 'Drum Handling Equipment Supplier India — Lifter, Trolley, Rotator & Stacker',
    keywords: [
      'drum lifter supplier India', 'drum handling equipment India',
      'drum trolley supplier India', 'drum rotator supplier India',
      'hydraulic drum lifter India', 'battery drum lifter India',
      'RE 119 drum lifter', 'RE 122 drum rotator India',
      '200 litre drum handling equipment India',
    ],
  },
  'scissor-lifts': {
    title: 'Scissor Lift Table & Aerial Work Platform Supplier India | RE 126–RE 130',
    desc: 'Hydraulic scissor lift tables, mobile scissor lifts, single mast AWP (6m), double mast AWP (10m), self-propelled scissor lifts — RE 126 to RE 130. Pan-India supply. DP Filter Press Trading. Call +91 9099024659.',
    h1: 'Scissor Lift Table & Aerial Work Platform (AWP) Supplier India',
    keywords: [
      'scissor lift table supplier India', 'aerial work platform supplier India',
      'hydraulic scissor lift table India', 'AWP supplier India',
      'RE 126 scissor lift table', 'RE 128 single mast aerial work platform',
      'RE 129 double mast AWP 10m India', 'RE 130 self propelled scissor lift',
      'mobile scissor lift India', '1 ton scissor lift India',
    ],
  },
  'cranes-hoists': {
    title: 'Chain Hoist, Electric Hoist & Floor Crane Supplier India | RE 131–RE 142',
    desc: 'Hydraulic floor cranes, electric wire rope hoists, chain blocks, electric chain hoists, magnetic lifters, digital crane scales — RE 131 to RE 142. Pan-India supply. DP Filter Press Trading. Call +91 9099024659.',
    h1: 'Cranes & Hoists Supplier India — Chain Block, Electric Hoist & Floor Crane',
    keywords: [
      'chain hoist supplier India', 'electric chain hoist supplier India',
      'chain block supplier India', 'floor crane supplier India',
      'wire rope hoist supplier India', 'magnetic lifter supplier India',
      'RE 131 hydraulic floor crane', 'RE 132 wire rope hoist India',
      'RE 139 chain block manual India', 'RE 140 electric chain hoist price',
      'crane scale supplier India',
    ],
  },
  'trolleys-platforms': {
    title: 'Platform Trolley Supplier India | MS, SS, Plastic, Foldable & Cargo Trolleys',
    desc: 'MS platform trolleys, stainless steel trolleys, plastic trolleys, barrow trolleys, cylinder trolleys, foldable trolleys, cargo trolleys — RE 134 to RE 152. Pan-India supply. Call +91 9099024659.',
    h1: 'Platform Trolley Supplier India — MS, SS, Plastic, Cargo & Heavy Duty',
    keywords: [
      'platform trolley supplier India', 'MS platform trolley India',
      'stainless steel trolley supplier India', 'plastic platform trolley India',
      'barrow trolley supplier India', 'cargo trolley India',
      'foldable platform trolley India', 'heavy duty trolley India',
      'cylinder trolley supplier', 'RE 134 MS platform trolley',
    ],
  },
  'forklift-attachments': {
    title: 'Forklift Drum Attachment Supplier India | Single & Double | RE 124 RE 125',
    desc: 'Single and double drum forklift attachments for 200L drums — RE 124 (Single, 350kg) and RE 125 (Double, 700kg). Compatible with standard forklifts. Pan-India supply. DP Filter Press Trading. Call +91 9099024659.',
    h1: 'Forklift Drum Attachment Supplier India — Single & Double',
    keywords: [
      'forklift drum attachment supplier India', 'drum forklift attachment India',
      'RE 124 single forklift attachment', 'RE 125 double forklift attachment',
      'forklift attachment supplier India', '200L drum forklift attachment',
    ],
  },
  'loading-docking': {
    title: 'Loading Ramp & Dock Leveler Supplier India | RE 145 Mobile Ramp RE 146 Dock Leveler',
    desc: 'Mobile aluminium loading ramps (3T, 2m length) and hydraulic dock levelers (6T, 2x2m) — RE 145 and RE 146. Pan-India supply. DP Filter Press Trading, GIDC Ankleshwar, Gujarat. Call +91 9099024659.',
    h1: 'Loading Ramp & Dock Leveler Supplier India — RE 145 & RE 146',
    keywords: [
      'loading ramp supplier India', 'mobile loading ramp India',
      'dock leveler supplier India', 'hydraulic dock leveler India',
      'truck loading ramp supplier India', 'RE 145 loading ramp India',
      'RE 146 dock leveler India', 'warehouse loading equipment India',
    ],
  },
  'spare-parts': {
    title: 'Pallet Truck Spare Parts Supplier India | Pump, Seal Kit, Wheels, Valves | SP-001–SP-030',
    desc: 'Complete pallet truck spare parts — hydraulic pumps, seal kits (NBR & PU), PP/Nylon/PU wheels (load & steer), bearings, relief valves, lowering valves, springs, battery chargers 24V — SP-001 to SP-030. Pan-India supply. DP Filter Press Trading. Call +91 9099024659.',
    h1: 'Pallet Truck Spare Parts Supplier India — Pump, Seal Kit, Wheels & Valves',
    keywords: [
      'pallet truck spare parts supplier India', 'hydraulic pump pallet truck India',
      'seal kit pallet truck India', 'pallet truck wheel supplier India',
      'PP load wheel pallet truck', 'PU wheel pallet truck India',
      'nylon wheel pallet truck India', 'relief valve pallet truck',
      'battery charger 24V pallet truck', 'SP-001 hydraulic pump',
      'SP-002 seal kit standard', 'pallet truck parts India',
    ],
  },
}

/* ─────────────────────────────────────────────────────────────
   7. SCHEMA FACTORY FUNCTIONS
   ───────────────────────────────────────────────────────────── */

/** LocalBusiness + Store schema with pan-India areaServed */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Store'],
    '@id': `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    alternateName: ['DP Filter Press', 'DP Filter Press Ankleshwar', 'DP Pallet Truck Supplier'],
    description: `${BUSINESS.tagline}. B2B industrial equipment supplier serving pan-India. Filter Press, Hydraulic Parts, Pallet Trucks, Stackers, Scissor Lifts, Cranes & Material Handling Equipment.`,
    url: BUSINESS.url,
    logo: `${BUSINESS.url}/favicon.svg`,
    image: BUSINESS.ogImage,
    telephone: [BUSINESS.phone1, BUSINESS.phone2],
    email: BUSINESS.email,
    priceRange: '$$',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Bank Transfer, UPI, NEFT, RTGS, Cheque',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.pin,
      addressCountry: BUSINESS.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lon,
    },
    founder: { '@type': 'Person', name: BUSINESS.owner },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'State', name: 'Gujarat' },
      { '@type': 'State', name: 'Maharashtra' },
      { '@type': 'State', name: 'Rajasthan' },
      { '@type': 'State', name: 'Madhya Pradesh' },
      { '@type': 'State', name: 'Uttar Pradesh' },
      ...['Ankleshwar','Bharuch','Ahmedabad','Surat','Vadodara','Mumbai','Pune',
          'Delhi','Hyderabad','Chennai','Bengaluru','Kolkata','Jaipur','Indore',
          'Ludhiana','Nagpur','Nashik','Coimbatore'].map(c => ({ '@type': 'City', name: c })),
    ],
    sameAs: [`https://wa.me/${BUSINESS.phone1.replace(/\D/g, '')}`],
    hasMap: 'https://maps.google.com/?q=GIDC+Industrial+Estate+Ankleshwar+Gujarat',
    keywords: [
      'filter press supplier India', 'hand pallet truck supplier India',
      'electric stacker supplier India', 'hydraulic power pack India',
      'scissor lift supplier India', 'drum lifter India',
      'material handling equipment India', 'chain hoist supplier India',
    ].join(', '),
  }
}

/** Product schema — pan-India offer */
export function productSchema(product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description
      ? `${product.description} Available pan-India. DP Filter Press Trading, Ankleshwar, Gujarat.`
      : `${product.name} — Model ${product.model}. Available across India. Contact DP Filter Press Trading, GIDC Ankleshwar, Gujarat.`,
    sku: product.model,
    mpn: product.model,
    model: product.model,
    image: `${BUSINESS.url}${product.image}`,
    brand: { '@type': 'Brand', name: 'DP Filter Press Trading' },
    manufacturer: { '@type': 'Organization', name: 'DP Filter Press Trading' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'INR',
        description: 'Contact for competitive B2B price',
      },
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: BUSINESS.name,
        telephone: BUSINESS.phone1,
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'IN',
          name: 'Pan India',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          businessDays: { '@type': 'QuantitativeValue', minValue: 3, maxValue: 10 },
        },
      },
      url: `${BUSINESS.url}/products?cat=${product.category}`,
    },
  }
}

/** ItemList schema */
export function categoryItemListSchema(categoryName, productList) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${categoryName} — DP Filter Press Trading India`,
    description: `Complete list of ${categoryName} — available pan-India. DP Filter Press Trading, GIDC Ankleshwar, Gujarat. Call +91 9099024659.`,
    numberOfItems: productList.length,
    itemListElement: productList.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${p.name} (Model: ${p.model})`,
      description: p.description || p.name,
      url: `${BUSINESS.url}/products?cat=${p.category}`,
    })),
  }
}

/** BreadcrumbList schema */
export function breadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${BUSINESS.url}${c.path}`,
    })),
  }
}

/** FAQPage schema */
export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

/** Service schema — pan-India areaServed */
export function serviceSchema(name, desc, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description: desc,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS.name,
      telephone: BUSINESS.phone1,
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.state,
        addressCountry: BUSINESS.address.countryCode,
      },
    },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'State', name: 'Gujarat' },
    ],
    url: `${BUSINESS.url}${url}`,
  }
}

/** Helper — JSON stringify for script injection */
export function schemaToScript(schemaObj) {
  return JSON.stringify(schemaObj, null, 0)
}
