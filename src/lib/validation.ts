import { z } from "zod";

export interface ContactValidationMessages {
  name: string;
  email: string;
  message: string;
}

export function createContactSchema(messages: ContactValidationMessages) {
  return z.object({
    name: z
      .string()
      .trim()
      .min(2, messages.name)
      .max(80, messages.name),
    email: z
      .string()
      .trim()
      .min(1, messages.email)
      .max(160, messages.email)
      .email(messages.email),
    company: z.string().trim().max(120).optional().or(z.literal("")),
    message: z
      .string()
      .trim()
      .min(20, messages.message)
      .max(2000, messages.message),
  });
}

export type ContactFormValues = z.infer<
  ReturnType<typeof createContactSchema>
>;
