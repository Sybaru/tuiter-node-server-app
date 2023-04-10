import express from "express";
import cors from "cors";
import UserController from "./controllers/users/users-controller.js";
import HelloController from "./controllers/hello-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
 || 'mongodb+srv://ayz975:<ilovecars>@cluster0.bac1ven.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);
