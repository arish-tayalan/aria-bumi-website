// All UI strings live here so a Bahasa Malaysia version can be added later (src/i18n/ms.ts).
export const t = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    projects: 'Projects',
    certifications: 'Certifications',
    contact: 'Contact',
    menu: 'Open menu',
    closeMenu: 'Close menu',
  },
  cta: {
    whatsapp: 'WhatsApp',
    whatsappUs: 'WhatsApp Us',
    call: 'Call Us',
    viewProjects: 'View Projects',
    viewAllProjects: 'View all projects',
    getQuote: 'Get a quote',
    floatingWhatsapp: 'Chat on WhatsApp',
  },
  hero: {
    headline: 'Electrical & Mechanical Engineering Contractor in Johor Bahru',
    sub: 'Control panels, industrial wiring, generator sets, air compressors and lightning protection for factories, shops and homes across Johor.',
  },
  trust: {
    prefix: 'Registered with',
    items: ['Suruhanjaya Tenaga', 'CIDB G3', 'TNB'],
  },
  services: {
    title: 'What we do',
    sub: 'Electrical installation, repair and modification, plus mechanical services, done by qualified people.',
  },
  projects: {
    title: 'Featured projects',
    sub: 'A selection of recent work from factories and commercial sites.',
  },
  why: {
    title: 'Why Aria Bumi',
    items: [
      { icon: 'badge-check', title: 'Licensed contractor', text: 'Registered electrical contractor with Suruhanjaya Tenaga and CIDB.' },
      { icon: 'hard-hat', title: 'Qualified people', text: 'Our team includes a qualified chargeman and wireman.' },
      { icon: 'factory', title: 'Industrial and residential', text: 'Experience from production lines to homes and shops.' },
      { icon: 'map-pin', title: 'Based in Johor', text: 'Local team in Johor Bahru, close to our clients.' },
    ],
  },
  ctaBand: {
    title: 'Have a project? Get a quote',
    text: 'Tell us what you need on WhatsApp or give us a call. We reply quickly.',
  },
  footer: {
    contact: 'Contact',
    links: 'Quick links',
    ssm: 'SSM No.',
    rights: 'All rights reserved.',
  },
  stub: {
    title: 'Coming soon',
    text: 'This page is being built. In the meantime, reach us on WhatsApp.',
  },
  categories: {
    'control-systems': 'Control Systems',
    power: 'Power',
    mechanical: 'Mechanical',
    hvac: 'HVAC',
    'earthing-lightning': 'Earthing & Lightning',
    security: 'Security',
  },
  skipToContent: 'Skip to content',
} as const;
