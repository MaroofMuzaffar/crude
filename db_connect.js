require("mongoose").connect("mongodb://localhost:27017/crude")
.then(()=>{
    console.log("Database is Connected SuccessFully")
})
.catch((error)=>{
    console.log(error)
})