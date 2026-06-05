export const BRAND_BASE_URL =
  'https://raw.githubusercontent.com/marinellibr/creamy-kit-resources/main/brands';

export const BRAND_NAMES = {
  cards: ['visa', 'mastercard', 'elo', 'american_express', 'hipercard', 'pagleve', 'pix'],
  digital: ['apple_pay', 'google_pay', 'google_wallet'],
  tech: ['apple', 'google', 'facebook', 'instagram', 'whatsapp', 'tiktok', 'figma'],
  creamy: [
    'creamy_kit',
    'creamy_kit_positive',
    'creamy_kit_negative',
    'creamy_kit_variant',
    'creamy_positive',
    'creamy_institucional',
    'creamy_transparent',
  ],
  other: ['the_coffee', 'placeholder', 'default'],
} as const;

export const ALL_BRANDS = [
  ...BRAND_NAMES.cards,
  ...BRAND_NAMES.digital,
  ...BRAND_NAMES.tech,
  ...BRAND_NAMES.creamy,
  ...BRAND_NAMES.other,
] as const;

export type BrandType = 'square' | 'horizontal' | 'cardholder';
export type BrandSize = 'small' | 'medium' | 'large';
