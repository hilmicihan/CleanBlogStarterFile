const express = require("express")
var app = express();

const blog = { id: 1, title: "Blog title", description: "Blog description" };
app.get('/',(req,res)=> {
    res.send(blog)
})
const port = 3000;
app.listen(3000,()=> `port ${port} is listening`)