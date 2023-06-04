const express = require("express");
const route = express.Router();






const {InsertStudents,ReadStudent,ReadOneStudent,UpdatedOnedata,deleteData} =require("../controllers/students");

route.post("/InsertStudents",InsertStudents);
route.get("/ReadStudent",ReadStudent);
route.get("/ReadOneStudent/:id",ReadOneStudent);
route.put("/UpdatedOnedata/:id",UpdatedOnedata);
route.get("/deleteData/:id",deleteData)

module.exports = route;