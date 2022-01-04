import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouther from "./routers/videoRouter";

const PORT = 3000;

const app = express();

app.set("view engine","pug");
app.set("views",process.cwd() + "/src/views");
app.use(morgan("dev"));
app.use("/",globalRouter);
app.use("/video",videoRouther);
app.use("/users",userRouter);



const handleListening= () => console.log(`Server listening on port https://yt-clone-gnylx.run.goorm.io/`);

app.listen(PORT, handleListening);