const express = require("express");
const cors = require("cors");
const config = require("./config.json");
const firestore = require("./firestoreFunc")

const app = express();
let count = 0

app.use(express.json()).use(cors())

app.post("/washing/:uid/:count",(req,res)=>{
    console.log("hi");
    if(count<100){
        count += req.params.count
        firestore.startProcess(req.params.uid)
    }
})



app.listen(process.env.PORT,function(error){
    if(error){console.log(error)}
    else{ console.log(`Server is now live on 5050`) }
});