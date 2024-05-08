const { app } = require("./app")

const PORT = 4555

app.listen(PORT, null, () => {
  console.log(`server in port ${PORT}`)
})