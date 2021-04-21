import express from "express";

const app = express();

import './database';

app.get("/",(request, response)=>{
    return response.json({
        "message": "Olá mundo!"
    });
});

app.post("/users", (request, response)=>{
    return response.json({
        message:"Usuario cadastrado com sucesso."
    })
});
app.listen(3333, ()=>console.log("O servidor está rodando na porta 3333"));