const { ENGINE_METHOD_PKEY_ASN1_METHS } = require("constants");
const express = require("express");
const app = express();
const port = 3030;
const path = require("path");
app.use(express.static('public'));

app.listen(3030,()=> console.log("servidor corriendo en http://localhost:"+ port));

app.get("/baggage",(req,res) => res.sendFile(path.join(__dirname,"views","baggage.html")));

app.get("/berners-lee",(req,res) => res.sendFile(path.join(__dirname,"views","berners-lee.html")));

app.get("/clarke",(req,res) => res.sendFile(path.join(__dirname,"views","clarke.html")));

app.get("/hamilton",(req,res) => res.sendFile(path.join(__dirname,"views","hamilton.html")));

app.get("/hopper",(req,res) => res.sendFile(path.join(__dirname,"views","hopper.html")));

app.get("/index",(req,res) => res.sendFile(path.join(__dirname,"views","index.html")));

app.get("/lovelace",(req,res) => res.sendFile(path.join(__dirname,"views","lovelace.html")));

app.get("/turing",(req,res) => res.sendFile(path.join(__dirname,"views","turing.html")));




