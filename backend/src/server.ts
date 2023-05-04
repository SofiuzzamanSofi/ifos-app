import express, { Request, Response, Express, NextFunction } from 'express';
import cors from 'cors';
import Colors = require('colors.ts');
Colors.enable();
import bodyParser from 'body-parser';


const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    console.log("hidden, hitted, fffffff")
    res.send({
        name: "sofi",
        age: 3000,
        email: "envkt@example.com",
        password: "123456"
    });
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`.bg_cyan);
});
