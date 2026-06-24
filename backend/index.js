require("dotenv").config();
let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

let {PositionsModel} = require("./Models/PositionsModel");
let {HoldingsModel} = require("./Models/HoldingsModel");

let app =express();
let PORT = process.env.PORT || 3002;
let url = process.env.MONGO_URL;

app.listen(PORT, ()=>{
    console.log("app start");
    mongoose.connect(url);
    console.log("db connect");
    
});

app.use(cors());
app.use(express.json());
app.use(cookieParser());

  app.get("/allHoldings",async(req,res)=>{
    let allHoldings = await HoldingsModel.find({});
    
res.json(allHoldings);

});

  app.get("/allPositions",async(req,res)=>{
    let allPositions = await PositionsModel.find({});
res.json(allPositions);

});

app.use("/", authRoute);
