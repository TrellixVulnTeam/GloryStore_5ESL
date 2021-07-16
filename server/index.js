const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;
const path =require('path')


app.use(express.json())
app.use(express.static(path.join(__dirname,'/../client/build')))
app.use(express.urlencoded({extended : false}))


app.get('/gamer', (req, res) => {
 db.query('select * from Glory',(err,results)=>{
 if(err) throw err
 res.send(results)
 })
});
app.post('/gamer', (req, res) => {
 db.query('insert into Glory (nickname,games,rankee,image,gamestrophies,priceofhisglory) values (?,?,?,?,?,?) ;',
 [req.body.nickname,req.body.games,req.body.rankee,req.body.image,req.body.gamestrophies,req.body.priceofhisglory,],
 (err)=>{
   if (err) throw err;
   res.send({msg:"gg"})
 })
});
app.delete('/gamer/:id', (req, res) => {
  db.query('delete from Glory where id = ? ;',
 [req.body.id],
 (err,result)=>{
   if (err) throw err;
   res.send(result)
 })
});
app.get('/gamer', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`GloryApp app listening at http://localhost:${port}`);
});