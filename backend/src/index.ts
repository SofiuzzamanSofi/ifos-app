import express, { Request, Response, Application, NextFunction } from 'express';
// import * as dotenv from 'dotenv';
import cors from 'cors';
import Colors = require('colors');
Colors.enable();
import dotenv from 'dotenv';
dotenv.config();


const app: Application = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    console.log("hiddeooooooooooooooooooo");
    console.log("hello", process.env.FRONT_END_URL)
    res.send({
        name: "sofi",
    });
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`.bgCyan);
});
