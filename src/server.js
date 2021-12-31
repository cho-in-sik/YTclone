import express from "express";
import morgan from "morgan";

const PORT = 3000;

const app = express();

const home = (req,res) => {
    console.log("I will respond.");
    return res.send("hello");
};

const login = (req,res) => {
    return res.send("login");
};

app.use(morgan("dev"));
app.get("/", home);
app.get("/login",login);

const handleListening= () => console.log(`Server listening on port https://yt-clone-gnylx.run.goorm.io/`);

app.listen(PORT, handleListening);