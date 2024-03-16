const port = 5000
const express = require("express")
const app = express()
const cors = require("cors")
const route = require("./routes/route")


app.use(cors())
app.use(express.json())
app.use(route)





app.listen(port, console.log(`Serveur demarre sur port ${port}`))