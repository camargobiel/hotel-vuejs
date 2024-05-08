import { z } from 'zod'

export const bookingValidation = z.object({
  identifier: z.string().min(1, "Campo obrigatório"),
  startDate: z.string().min(1, "Campo obrigatório"),
  endDate: z.string().min(1, "Campo obrigatório"),
  guest: z.string().min(1, "Campo obrigatório"),
  status: z.string().min(1, "Campo obrigatório")
})

export const guestValidation = z.object({
  name: z.string().min(1, "Campo obrigatório"),
  cpf: z.string().min(1, "Campo obrigatório"),
  email: z.string().min(1, "Campo obrigatório"),
  phone: z.string().min(1, "Campo obrigatório"),
  address: z.string().min(1, "Campo obrigatório")
})
