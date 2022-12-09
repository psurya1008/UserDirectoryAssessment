var express =require('express');
var routes= require('./routers/user_routes');
const dotenv = require('dotenv');

var app=express();

const bodyParser=require("body-parser");
const userRouter=require('./routers/user_routes')
app.use(bodyParser.json({limit:"50mb"}))

app.use('/users',userRouter);

module.exports=app;

dotenv.config();
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is listening on ${PORT} ...`);
});