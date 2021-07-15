const express = require('express')
const app = express()
const mysql =require('mysql2')


const db = mysql.createPool({
   host: "localhost",
   user:  "wael",
   password: "wael",
   database: "glorystore"
})


app.get("/gamer",(req,res)=>{
    const dbgames = "INSERT INTO glorystore (`nickname`, `games`, `rank`, `image`, `games-trophies`, `price-of-his-glory`) VALUES ('hecha', 'valorant', 'diamond', 'tunisian immmge', 'tunisian chonpion', '100000'); "
    db.query(dbgames,(err,gamer)=>{
       if(err){
           res.send(500)
       }else{
           res.json("gggg")
       }
    })
})

app.listen(3000,()=>{
    console.log(' let the game begain')
})

