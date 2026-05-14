// Toate datele site-ului - portabilitate maximă
export const SITE_CONFIG = {
  name: 'Lifestyle Feminin',
  domain: 'lifestylefeminin.ro',
  url: 'https://lifestylefeminin.ro',
  description: 'Blog lifestyle feminin premium din România. Articole originale despre frumusețe, modă, fitness, motociclism feminin și încredere în sine.',
  shortDescription: 'Lifestyle premium feminin din România',
  author: {
    name: 'Sonia',
    bio: 'Creator de conținut lifestyle din România, pasionată de motociclism, beauty, fashion și încredere feminină.',
    image: '/images/author.jpg',
    twitter: '',
  },
  partners: {
    sonia11: {
      url: 'https://sonia11.com',
      label: 'Profilul oficial al autoarei',
    },
  },
  social: {
    instagram: 'https://www.instagram.com/sonia.g.11',
    tiktok: 'https://www.tiktok.com/@sonia11.g',
  },
  theme: {
    primaryColor: '#ff0080',
    primaryLight: '#ff6eb4',
    secondaryColor: '#8200ff',
    backgroundColor: '#06040f',
    textColor: '#f0e6ff',
    textMuted: 'rgba(240, 230, 255, 0.55)',
  },
  niches: [
    { slug: 'moto', label: 'Motociclism', shortLabel: 'Moto' },
    { slug: 'grwm', label: 'GRWM - Pregătește-te cu mine', shortLabel: 'GRWM' },
    { slug: 'hot-girl-summer', label: 'Hot Girl Summer', shortLabel: 'Summer' },
    { slug: 'ootd', label: 'OOTD Fashion', shortLabel: 'Fashion' },
    { slug: 'gym-girl', label: 'Gym Girl Fitness', shortLabel: 'Fitness' },
    { slug: 'lifestyle-premium', label: 'Lifestyle Premium', shortLabel: 'Premium' },
    { slug: 'soft-girl-baddie', label: 'Soft Girl și Baddie', shortLabel: 'Aesthetic' },
    { slug: 'glow-up', label: 'Glow Up și Skincare', shortLabel: 'Glow' },
  ],
  locale: 'ro-RO',
  language: 'ro',
} as const;
