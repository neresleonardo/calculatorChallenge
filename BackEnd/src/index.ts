import express from "express";
import { Request, Response } from "express";

const app = express();

app.use(express.json());

//rota para adi
app.post("/add", (req: Request, res: Response) => {
    const { n1, n2 } = req.body;

    const response = n1 + n2;

    return res.status(200).json({
        response,
    });
});

//rota para sub
app.post("/sub", (req: Request, res: Response) => {
    const { n1, n2 } = req.body;

    const response = n1 - n2;

    return res.status(200).json({
        response,
    });
});

//rota para mul
app.post("/mul", (req: Request, res: Response) => {
    const { n1, n2 } = req.body;

    const response = n1 * n2;

    return res.status(200).json({
        response,
    });
});

//rota para div
app.post("/div", (req: Request, res: Response) => {
    const { n1, n2 } = req.body;

    const response = n1 / n2;
    
    
    return res.status(200).json({
        response,
    });

});

//rota para mod


app.listen(3333, () =>{
    console.log("Porta 3333 On");
});