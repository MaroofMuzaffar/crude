const express = require("express")
const Router = require("./routes/index")
const hbs= require("hbs")

const app = express()
app.set("view engine","hbs")
// app.set("views","./views") if their is no views folder
app.use("",Router)
app.use(express.static("./views/static")) //use this line to set path of static folder,which contains css etc public files

hbs.registerPartials("./views/partials")
require("./db_connect")


app.listen(8000,console.log(`Server is Running at http://localhost:8000`))
