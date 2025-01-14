const Router = require("express").Router()
const bodyParser = require("body-parser")
const encoder = new bodyParser.urlencoded()

const {home,add,store, deleteRecord, edit, update, search} = require("../controllers/index")

Router.get("",home)
Router.get("/search",search)
Router.get("/add",add)
Router.post("/store",encoder,store)
Router.get("/delete/:_id",deleteRecord)
Router.get("/edit/:_id",edit)
Router.post("/update/:_id",encoder,update)

module.exports = Router