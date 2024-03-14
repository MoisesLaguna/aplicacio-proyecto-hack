import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);


app.listen(port, () => {
    console.log(`servidor en el http://localhost:${port}`);
})
