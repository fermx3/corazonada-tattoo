import { z } from 'zod';

export const contactoSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, { message: 'El nombre no puede estar vacío' }),
  email: z.string().trim().email({ message: 'Email inválido' }),
  mensaje: z
    .string()
    .trim()
    .min(1, { message: 'El mensaje no puede estar vacío' }),
});
