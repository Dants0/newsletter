const express = require('express');

const app = express();

app.listen("3030", console.log("server is running on port 3030"));

app.use(express.json());

app.get("/send-email",async (req, res)=>{
    return res.json({
        er:false,
        msg:"E-mail enviado com sucesso"    
    });
});

