import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(10).max(80),
    description: z.string().min(50).max(160),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Sonia'),
    niche: z.enum([
      'moto',
      'grwm',
      'hot-girl-summer',
      'ootd',
      'gym-girl',
      'lifestyle-premium',
      'soft-girl-baddie',
      'glow-up',
    ]),
    image: z.string(),
    imageAlt: z.string(),
    tags: z.array(z.string()).default([]),
    keywords: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    readingTime: z.number().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
