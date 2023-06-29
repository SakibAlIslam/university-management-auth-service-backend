import { z } from 'zod';

//req validation using ZOD
//body --> object
//data --> object
const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is mustly required',
    }),
    password: z.string().optional(),
  }),
});
// await createUserZodSchema.parseAsync(req)

export const UserValidation = {
  createUserZodSchema,
};
