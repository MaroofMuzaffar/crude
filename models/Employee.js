const mongoose = require("mongoose")

const EmployeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Employee Name is Mendatory"]
    },
    email: {
        type: String,
        required: [true, "Employee Email Address is Mendatory"]
    },
    phone: {
        type: String,
        required: [true, "Employee Phone Number is Mendatory"]
    },
    designation: {
        type: String,
        required: [true, "Employee Designation is Mendatory"]
    },
    salary: {
        type: Number,
        required: [true, "Employee Salary is Mendatory"]
    },
    city: {
        type: String
    },
    state: {
        type: String
    }
})
const Employee = mongoose.model("Employee", EmployeeSchema)

module.exports = Employee