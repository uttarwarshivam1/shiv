const express=require("express");
const app=express();
const path=require("path");
app.get("/",function(req,resp){
resp.send("Hello Welcome to IACSD,Akurdi-Pune(411044)");
});
app.get("/home",function(req,resp){
resp.sendFile(path.join(__dirname,"./public/index.html"));
});
app.listen(8000);
console.log("Server listening on port 8000");