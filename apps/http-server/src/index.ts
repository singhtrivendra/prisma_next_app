import express, { Request, Response } from "express";
const { prismaClient } = require('@repo/db/client');

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) =>{
    res.send("Hi there");
})

app.get("/Signup", async (req: Request, res: Response) =>{
    const username = req.body.username;
    const password = req.body.password;
    const user = await  prismaClient .user.create({
        data: {
            username: username,
            password: password,
        }
    })

    res.json({
        message:"Signup successfully",
        id: user.id,
    })
})




app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

