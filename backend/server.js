const express = require('express');
const data = require('./data/notes')
const app = express();
const dotenv = require('dotenv');

app.get("/",(req,res)=>{
    res.send('api is running..')
})

dotenv.config();

app.get("/api/notes", (req, res) => {
  res.send(data);
});

app.get("/api/notes/:id", (req, res) => {
  const note = data.find((st) => st.id === req.params.id);
  res.send(note);
});

const port = process.env.PORT || 5000;

app.listen(port,console.log(`server started on port ${port}}`));