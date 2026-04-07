import express from "express"
const app = express();

app.get("/", (req, res)=> {
    res.send({
        status: "success", 
        message: "this is route for home page"
    })
})

export {app};