import express from "express";

const PORT = 3000;

const app = express();

app.get("/",(req,res) => {return res.send("<h1>I still love you</h1>")});
app.get("/login", (req,res) => {return res.send("Login here.")});

const handleListening= () => console.log(`Server listening on port https://yt-clone-gnylx.run.goorm.io/`);

app.listen(PORT, handleListening);