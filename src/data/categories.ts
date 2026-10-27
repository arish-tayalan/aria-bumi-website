export const categories = [
  'control-systems',
  'power',
  'mechanical',
  'hvac',
  'earthing-lightning',
  'security',
] as const;

export type Category = (typeof categories)[number];
