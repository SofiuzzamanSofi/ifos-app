import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
import express from 'express';
// import * as dotenv from 'dotenv';
import cors from 'cors';
const Colors = __require("colors.ts");
Colors.enable();
import bodyParser from 'body-parser';
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
    console.log("hiddeooooooooooooooooooo");
    console.log("hiddeooooooooooooooooooo");
    console.log("hello", process.env.FRONT_END_URL);
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
