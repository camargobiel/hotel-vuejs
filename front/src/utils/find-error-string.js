export const findErrorString = (field, errors) => {
  if (!errors.length) return null
  const error = errors.find((err) => err.path[0] === field)
  if (!error) return null
  return error.message
}
