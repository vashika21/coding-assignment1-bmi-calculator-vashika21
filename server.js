const bodyparser = require('body-parser')

const express = require('express')
const app = express()

app.use(bodyparser.urlencoded({extended:true}));
const port = 4080



app.get('/', (req, res) => {
  res.sendFile( __dirname + '/bmicalculator.html')
})


 app.post('/',  (req, res) => {
  var heigh = parseFloat(req.body.Height);
  var weigh = parseFloat(req.body.Weight);
  var bmi = weigh / (heigh * heigh);
  req_name = req.body.Name;
//   bmi = bmi.toFixed();
  res.send(  req_name + ' your bmi is ' + bmi);
 })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})