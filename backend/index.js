const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();


// Middlware-
app.use(cors());
app.use(express.json());


// Testing API-
app.get("/", async (req, res) => {
    try{
        return res.status(200).json({
            data: "Hello World",
            success: true
        })
    }
    catch(error){
        console.log(error);
    }
})


// Server-
app.listen(8080, async() => {
    try{
        console.log("Server is running on PORT 8080");
    }
    catch(error){
        console.log(error);
    }
})