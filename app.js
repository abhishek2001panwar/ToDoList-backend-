const express = require("express");
const mongoose = require("mongoose");
const app = express();


//mongo db connectioni

mongoose.connect("mongodb://localhost:27017/todolist", {
   
    useNewUrlParser: true,
     useUnifiedTopology: true 
});

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs")

//routes
app.use(require("./routes/index"));
app.use(require("./routes/todol"));


app.listen(3000 , ( )=> console.log("server staredt")); 