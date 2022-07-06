const express = require('express')
const app = express()
app.set("view engine", "ejs")

app.get("/" , (req ,res) =>{
    res.render("index.ejs")
})




const port = 8081
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})