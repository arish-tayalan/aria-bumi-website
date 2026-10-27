import type { ImageMetadata } from 'astro:assets';

export type GalleryItem = {
  image: ImageMetadata;
  kind: 'photo' | 'collage';
  phase: 'before' | 'after' | null;
  alt: string;
  caption: string;
};

const filename = (image: ImageMetadata) => decodeURIComponent(image.src.split('?')[0].split('/').pop() ?? '');

export const isCollage = (image: ImageMetadata) => filename(image).includes('-collage');

const phaseOf = (image: ImageMetadata): GalleryItem['phase'] => {
  const name = filename(image);
  if (name.includes('-before')) return 'before';
  if (name.includes('-after')) return 'after';
  return null;
};

/** Turns a project's images into gallery items with kind, before/after phase and alt text.
 *  The cover is included once, even if the project's image list omits it. */
export function buildGallery(title: string, cover: ImageMetadata, images: ImageMetadata[]): GalleryItem[] {
  const all = images.some((i) => i.src === cover.src) ? images : [cover, ...images];
  // Number within each before/after group so "before photo 1 of 3" reads naturally.
  const phases = all.map(phaseOf);
  return all.map((image, index) => {
    const kind = isCollage(image) ? 'collage' : 'photo';
    const phase = phases[index];
    const peers = phases.filter((p) => p === phase).length;
    const position = phases.slice(0, index + 1).filter((p) => p === phase).length;
    const what = [phase, kind === 'collage' ? 'photo collage' : 'photo'].filter(Boolean).join(' ');
    const label = `${title}, ${what} ${position} of ${peers}`;
    return { image, kind, phase, alt: label, caption: label };
  });
}

export const hasBeforeAfter = (items: GalleryItem[]) =>
  items.some((i) => i.phase === 'before') && items.some((i) => i.phase === 'after');
