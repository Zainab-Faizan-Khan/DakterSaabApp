import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bloodRoute from "./routes/bloodbank.js";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js"
import requireToken from "./Middlewares/authTokenRequired.js"
import donorRoute from "./routes/donor.js"
import doctorRoute from "./routes/doctor.js"
import OPDRoute from './routes/OPDDoctor.js'

const port = 3000;
const app = express();
dotenv.config();

mongoose.set('strictQuery', false);
//Check database connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

app.use(express.json());
app.use(bodyParser.json());
app.use(authRoutes);
app.use("/api/bloodbank", bloodRoute);
app.use("/api/doctor", doctorRoute);
app.use("/api/OPDDr", OPDRoute)
app.use(donorRoute);

app.get('/', requireToken, (req, res) => {
    console.log(req.user);
    res.send(req.user);
})

app.listen(port, () => {
    connect()
    console.log(`This app is running on ${port}`)
    console.log("backend works")
})
