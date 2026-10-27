import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

import { categories } from './data/categories';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(categories),
      order: z.number(),
      client: z.string().optional(),
      location: z.string().optional(),
      year: z.number().nullable().optional(),
      featured: z.boolean(),
      cover: image(),
      images: z.array(image()),
    }),
});

export const collections = { projects };
