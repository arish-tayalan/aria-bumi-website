// Single source of truth for company facts. Never hard-code these in components.
// Do NOT add IC numbers, TIN, bank details or personal certificate scans (see CLAUDE.md).

export type Phone = { label: string; number: string; whatsapp: string };

export type Service = {
  slug: string;
  icon: string; // lucide icon name
  title: string;
  description: string;
  clients: ('home' | 'shop' | 'factory')[];
};

export type TeamMember = {
  role: string;
  name: string;
  showName: boolean;
  qualifications?: string[];
};

export const company = {
  name: 'Aria Bumi Resources',
  formerName: 'Aria Electro Mech',
  ssmNo: '202303048036 (JM0979498-D)',
  incorporated: '2023-02-20',
  tagline: 'Electrical & Mechanical Engineering Contractor in Johor Bahru',
  address: {
    lines: ['Arked Johor Jaya, G-27-01', 'Jalan Dedap 14, Taman Johor Jaya'],
    postcode: '81100',
    city: 'Johor Bahru',
    state: 'Johor',
    country: 'MY',
    // Approximate centre of Taman Johor Jaya; verify against Google Maps before launch
    geo: { lat: 1.5434, lng: 103.7967 },
  },
  email: 'ariabumi23@gmail.com',
  phones: [
    { label: 'Mr. Tayalan (Project Manager)', number: '012-712 0232', whatsapp: '60127120232' },
    { label: 'Elina (Admin)', number: '011-1073 9004', whatsapp: '601110739004' },
  ] satisfies Phone[],
  primaryWhatsapp: '60127120232', // confirmed as the lead number
  whatsappMessage: 'Hello Aria Bumi Resources, I would like to enquire about your services.',
  registeredWith: ['Suruhanjaya Tenaga', 'CIDB Malaysia', 'Tenaga Nasional Berhad'],
  areaServed: ['Johor Bahru', 'Johor'],
  hours: null as string | null, // TODO: confirm business hours
  vision:
    'To achieve uncompromising customer satisfaction across every business, engineering, education and service sector we serve.',
  mission:
    'To deliver dependable, high-quality engineering services in electrical installation to every client, while developing skilled technicians through hands-on job training.',
};

export const services: Service[] = [
  {
    slug: 'control-systems',
    icon: 'cpu',
    title: 'Control Systems',
    description: 'PLC, hydraulic and electro-mechanical machinery control, including control panel fabrication and installation.',
    clients: ['factory'],
  },
  {
    slug: 'electrical-wiring',
    icon: 'zap',
    title: 'Electrical Wiring',
    description: '240V to 415V wiring for houses, shops, and small and large factories.',
    clients: ['home', 'shop', 'factory'],
  },
  {
    slug: 'door-sensor-wiring',
    icon: 'door-open',
    title: 'Safety & Glass Door Sensors',
    description: 'Safety door and glass door sensor wiring and installation.',
    clients: ['shop', 'factory'],
  },
  {
    slug: 'cctv-alarm',
    icon: 'cctv',
    title: 'CCTV & Alarm',
    description: 'CCTV and alarm system installation for houses, shops and factories.',
    clients: ['home', 'shop', 'factory'],
  },
  {
    slug: 'compressor-aircond',
    icon: 'wind',
    title: 'Air Compressor & Air-Con',
    description: 'Air compressor and air-conditioner service and installation.',
    clients: ['home', 'shop', 'factory'],
  },
  {
    slug: 'earthing-lightning',
    icon: 'cloud-lightning',
    title: 'Earthing & Lightning Protection',
    description: 'Earthing and lightning protection systems for houses, shops and factories.',
    clients: ['home', 'shop', 'factory'],
  },
];

export const certificates = {
  st: {
    issuer: 'Suruhanjaya Tenaga (Energy Commission)',
    title: 'Registered Electrical Contractor',
    class: 'Class C',
    regNo: 'ST(SJB)JHR/C/KE/02019/2024',
    validUntil: '11/12/2026', // TODO: renew before this date and update
  },
  cidb: {
    issuer: 'CIDB Malaysia',
    regNo: '0120260120-JH166479',
    validFrom: '20/01/2026',
    validUntil: '19/01/2028',
    grades: [
      { grade: 'G3', category: 'B', codes: ['B04'] },
      { grade: 'G3', category: 'CE', codes: ['CE21'] },
      {
        grade: 'G3',
        category: 'ME',
        codes: ['E01', 'E02', 'E03', 'E06', 'E10', 'E11', 'E16', 'E17', 'E21', 'E32', 'M15'],
      },
      { grade: 'G2', category: 'ME', codes: ['E04'] },
    ],
  },
  other: [
    { title: 'MBJB business licence: Electrical & Mechanical Contractor', validUntil: '06/01/2027' },
    { title: 'JKKP certificate of fitness: truck-mounted crane', validUntil: '07/08/2027' },
  ],
};

// showName: false => show role and qualifications only. Confirm names with family before enabling.
export const team: TeamMember[] = [
  { role: 'Director', name: 'Sivagami A/P Subramaniam', showName: true },
  {
    role: 'Project Manager',
    name: 'Tayalan A/L V. Tanggapan',
    showName: true,
    qualifications: ['ST Competency: Wireman PW4 (since 2002)', 'Machine Operator / Penjaga Jentera A4 (since 2006)'],
  },
  {
    role: 'AO Chargeman',
    name: 'Hamidi Bin Samion',
    showName: false,
    qualifications: ['ST Competency: Wireman PW4', 'ST Competency: Chargeman A0'],
  },
  {
    role: 'Software Engineering',
    name: 'Arish A/L Tayalan',
    showName: false,
    qualifications: ['BSc (Hons) Software Engineering, APU / De Montfort University'],
  },
  { role: 'Supervisor', name: 'Bahar Bin Hassan', showName: false },
  {
    role: 'Foreman',
    name: 'Ghali Guitang Bin Kassim',
    showName: false,
    qualifications: ['Trained Person in Working at Height'],
  },
  {
    role: 'Technician',
    name: 'Mahmood Asad',
    showName: false,
    qualifications: ['Trained Person in Working at Height'],
  },
  { role: 'Admin Clerk', name: 'Norelina Binti Ramli', showName: false },
];

// Helpers
export const waLink = (message: string = company.whatsappMessage, number: string = company.primaryWhatsapp) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export const telHref = (number: string) => `tel:+6${number.replace(/[^\d]/g, '')}`;

export const primaryPhone = company.phones.find((p) => p.whatsapp === company.primaryWhatsapp) ?? company.phones[0];

export const formatAddress = () =>
  [...company.address.lines, `${company.address.postcode} ${company.address.city}, ${company.address.state}`].join(', ');
