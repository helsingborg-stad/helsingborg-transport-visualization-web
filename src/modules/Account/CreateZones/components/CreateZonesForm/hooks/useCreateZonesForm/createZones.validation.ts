import { z } from 'zod';

export const featureCollectionValidation = z.object({
  type: z.literal('FeatureCollection'),
  features: z.array(z.object({
    type: z.literal('Feature'),
    geometry: z.object({
      type: z.literal('Polygon'),
      coordinates: z.array(z.array(z.array(z.number()))),
    }),
    properties: z.object({
      name: z.string().min(1, { message: 'Namn är obligatoriskt' }),
      address: z.string().min(1, { message: 'Adress är obligatoriskt' }),
      area: z.string().min(1, { message: 'Område är obligatoriskt' }),
      type: z.enum(['distribution', 'delivery']),
      gln: z.string().min(1, { message: 'GLN är obligatoriskt' }),
    }),
  })),
});
