const dotenv = require("dotenv");
dotenv.config();
const express =  require("express");
const {connectDB} = require("./config/connectDB");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRoutes");

const app =  express();
const PORT = process.env.PORT || 5000;


connectDB();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
// app.use();
app.use(cors({
    origin : "http://localhost:3000",
    credentials : true,
}
))
// app.use(cookieParser());


//Routes
app.use("/api/auth/v1",authRouter);
app.use("/api/user",userRouter);


app.get("/",(req,res)=>{
    res.send("API is running...");
})

app.listen(PORT,()=>{
    console.log("Server is running")
});