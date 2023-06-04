const { readdirSync, read } = require("fs");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const jwt=require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();


app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({extended:false}));
app.use(morgan("dev"));
app.use(cors());

const port = process.env.PORT || 8000

readdirSync("./routers").map(r => app.use("/api/v1",require(`./routers/${r}`)));

mongoose
    .connect(process.env.DATABASE)
    .then(()=>{
        app.listen(port,()=>{
            console.log(`Server run on port ${port}`);
        });
    })
    .catch((err) => console.log(err));

