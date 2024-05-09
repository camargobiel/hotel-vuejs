const { z } = require("zod")
const { validateCPF } = require("./utils/validate-cpf")
const { validatePhoneNumber } = require("./utils/validate-phone")

const bookingSchema = {
  identifier: z.string().min(1, "Campo obrigatório"),
  startDate: z.string().min(1, "Campo obrigatório"),
  endDate: z.string().min(1, "Campo obrigatório"),
  guest: z.string().min(1, "Campo obrigatório"),
  status: z.string().min(1, "Campo obrigatório")
}

const createBookingSchema = z.object(bookingSchema)
const updateBookingSchema = z.object({
  id: z.number().min(1, "Campo obrigatório"),
  ...bookingSchema
})

const guestSchema = {
  name: z.string().min(1, "Campo obrigatório"),
  cpf: z.string().min(1, "Campo obrigatório").refine(value => validateCPF(value), { message: "CPF inválido" }),
  email: z.string().email("E-mail inválido").min(1, "Campo obrigatório"),
  phone: z.string().min(1, "Campo obrigatório").refine(value => validatePhoneNumber(value), { message: "Número de telefone inválido" }),
  address: z.string().min(1, "Campo obrigatório")
}

const createGuestSchema = z.object(guestSchema)

const updateGuestSchema = z.object({
  id: z.number().min(1, "Campo obrigatório"),
  ...guestSchema,
})

module.exports = {
  createBookingSchema,
  updateBookingSchema,
  createGuestSchema,
  updateGuestSchema
}
