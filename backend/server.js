const mongoose = require("mongoose");
const cors = require ("cors");
const express = require("express");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const todoDoneRoutes = require("./routes/todo-doneRoutes");
app.use("/api/todo-done",todoDoneRoutes);

mongoose
.connect(process.env.MONGO_URI)
.then(()=> console.log('Database connected'))
.catch((err)=>console.log(err));

app.listen(process.env.PORT,()=>{
    console.log("Server running on port"+process.env.PORT);
});