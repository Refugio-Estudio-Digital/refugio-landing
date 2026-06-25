import { defineCollection, z } from 'astro:content';

const casos = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      description: z.string(),
      image: image().optional(),
      url: z.string().url().optional(),
      tags: z.array(z.string()).optional(),
      testimonial: z.object({
        text: z.string(),
        author: z.string(),
      }).optional(),
    }),
});

export const collections = { casos };
