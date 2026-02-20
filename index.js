const express = require("express")
const app = express()

app.use(express.static("public"))

const APIKEY = "12345"

app.get("/api", (req,res)=>{
if(req.query.key !== APIKEY){
return res.json({status:false,message:"apikey salah"})
}
res.json({status:true,message:"akses diterima"})
})

app.listen(3000,()=>console.log("server jalan"))
