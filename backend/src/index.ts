import express, { Request, Response, Application, NextFunction } from 'express';
// import * as dotenv from 'dotenv';
import cors from 'cors';
import Colors = require('colors.ts');
Colors.enable();
import bodyParser from 'body-parser';


const app: Application = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    console.log("hiddeooooooooooooooooooo");
    console.log("hello", process.env.FRONT_END_URL)
    res.send({
        name: "sofi",
        age: 20,
        email: "nnheo@example.com",
        phone: "1234567890",
        address: "dhs",
        url: process.env.FRONT_END_URL,

    });
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`.bg_cyan);
});
