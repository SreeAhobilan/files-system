import fs from "fs";
import express from "express";
import date  from "date-and-time";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/',(request,response)=>{
    response.send("hello everyone welcome to my page");
});

const now  =  new Date();

const timeStamp = Date.now();

const value = date.format(now,'YYYY/MM/DD HH:mm:ss');

console.log("current date and time : " + value)

const path = `./files/${timeStamp}.txt`;

app.get('/createFiles', (req, res) => {
    fs.writeFile(path, ("" + value), (err) => {
        if (err) {
            console.log(err);
        }
        console.log("success")
    })
    res.send(`<h1>${value}</h1>`)
})

app.listen(PORT,()=>console.log("Server started on port",PORT));