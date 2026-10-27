import heroImage from '../assets/hero/hero.jpg';

// 'split'      : text left, photo in a rounded card right, on solid brand blue. Use for low-res photos.
// 'background' : full-width photo behind the text with a dark overlay. Use once hero.jpg is a wide,
//                high-res photo (aim for 1920px or wider).
// To swap the photo, replace src/assets/hero/hero.jpg (keep the filename) and change this setting.
export const heroLayout: 'split' | 'background' = 'background';

export const hero = {
  image: heroImage,
  alt: 'Factory production line with machinery control system installed by Aria Bumi Resources',
};
