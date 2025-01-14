const Employee = require("../models/Employee")

async function home(req, res) {
    try {
        let data = await Employee.find().sort({ _id: -1 })
        res.render("index", { data: data })
    } catch (error) {
        console.log("Internal Server Error")
        res.render("index", { data: [] })
    }
}
async function search(req, res) {
    try {
        let data = await Employee.find({
            $or: [
                { name: { $regex: req.query.search, $options: "i" } },
                { email: { $regex: req.query.search, $options: "i" } },
                { phone: { $regex: req.query.search, $options: "i" } },
                { designation: { $regex: req.query.search, $options: "i" } },
                { city: { $regex: req.query.search, $options: "i" } },
                { state: { $regex: req.query.search, $options: "i" } },
            ]
        }).sort({ _id: -1 })
        res.render("index", { data: data })
    } catch (error) {
        res.redirect("/")
    }
}
async function add(req,res){
    res.render("add",{
        error:{}})
    
}
async function store(req, res) {
    try {
        var data = new Employee(req.body)
        await data.save()
        res.redirect("/")
    } catch (error) {
        let errorMessage = {}
        error.errors?.name?errorMessage.name=error.errors.name.message:null    
        error.errors?.email?errorMessage.email=error.errors.email.message:null    
        error.errors?.phone?errorMessage.phone=error.errors.phone.message:null    
        error.errors?.designation?errorMessage.designation=error.errors.designation.message:null    
        error.errors?.salary?errorMessage.salary=error.errors.salary.message:null    
        res.render("add", {
            error: errorMessage,
            data:data
        })
    }
}

async function deleteRecord(req, res) {
    try {
        let data = await Employee.findOne({ _id: req.params._id })
        if (data)
            await data.deleteOne()
        res.redirect("/")
    } catch (error) {
        res.redirect("/")
    }
}


async function edit(req,res) {
    try {
          let data= await Employee.findOne({_id: req.params._id})
          if (data) {
             
             res.render("edit",{data:data,errorMessage:{}})
          }else{
            res.redirect("/")
          }
    } catch (error) {
     res.redirect("/")
     
    }   
 }
 
async function update(req,res) {
    try {
          let data= await Employee.findOne({_id: req.params._id})
          if (data) {
             data.name=req.body.name
             data.email=req.body.email
             data.phone=req.body.phone
             data.designation=req.body.designation
             data.salary=req.body.salary
             data.city=req.body.city
             data.state=req.body.state             
             await data.save()
          }
          res.redirect("/")
    } catch (error) {
        let errorMessage = {}
        error.errors?.name?errorMessage.name=error.errors.name.message:null    
        error.errors?.email?errorMessage.email=error.errors.email.message:null    
        error.errors?.phone?errorMessage.phone=error.errors.phone.message:null    
        error.errors?.designation?errorMessage.designation=error.errors.designation.message:null    
        error.errors?.salary?errorMessage.salary=error.errors.salary.message:null    
        res.render("edit", {
            error: errorMessage,
            data:data
        })
     
    }   
 }
module.exports = {
    home:home,
    add:add,
    store:store,
    deleteRecord:deleteRecord,
    edit:edit,
    update:update,
    search:search
}