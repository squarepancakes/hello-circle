const app = require("./app")
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Hello circle ci listening on port ${port}!`))