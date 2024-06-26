import { z } from 'zod'
import { validateCPF } from '../../../utils/validate-cpf'
import { validatePhoneNumber } from '../../../utils/validate-phone'

export const bookingValidation = z.object({
  identifier: z.string().min(1, "Campo obrigatório"),
  startDate: z.string().min(1, "Campo obrigatório"),
  endDate: z.string().min(1, "Campo obrigatório"),
  guest: z.string().min(1, "Campo obrigatório"),
  status: z.string().min(1, "Campo obrigatório")
})

export const guestValidation = z.object({
  name: z.string().min(1, "Campo obrigatório"),
  cpf: z.string().min(1, "Campo obrigatório").refine(value => validateCPF(value), { message: "CPF inválido" }),
  email: z.string().email("E-mail inválido").min(1, "Campo obrigatório"),
  phone: z.string().min(1, "Campo obrigatório").refine(value => validatePhoneNumber(value), { message: "Número de telefone inválido" }),
  address: z.string().min(1, "Campo obrigatório")
})
