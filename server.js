const express = require('express')
const app = express()
app.set("view engine", "ejs")

app.get("/" , (req ,res) =>{
    res.render("index.ejs" , {
      numberOfItterations: 50
    })

})


const notes= [
  {
    id: 1,
    title: "my First Note",
    timestamp: Date.now(),
    contents: 
    "asta am eu de facut frate"
  },
  {
  id: 2,
  title: "my Second Note",
  timestamp: Date.now(),
  contents: 
  "asta am eu de facut dupa ce fac prima"
}
]

app.get("/notes" , (req,res) => {
  res.render("notes.ejs", {
    notes,
  });
})


app.use(express.static("public"))

const port = 8083
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})