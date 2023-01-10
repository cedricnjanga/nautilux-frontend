const fs = require('fs');
const path = require('path');
const express = require('express');
const multer = require('multer');

const upload = multer();
const app = express();

const PORT = process.env.PORT || 3001;
const dataFilePath = path.join(__dirname, './data.json')

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/interventions', (req, res) => {
  const list = fs.readFileSync(dataFilePath);
  res.json(JSON.parse(list));
});

app.post('/interventions', upload.none(), (req, res) => {
  const intervention = req.body;
  const file = fs.readFileSync(dataFilePath);
  const interventionsList = JSON.parse(file);

  const interventionId = interventionsList.length + 1;
  const now = new Date().toISOString()

  const date = now.slice(0, 10);
  const time = now.slice(1, 16);

  const newContent = [
    ...interventionsList,
    { ...intervention, id: interventionId, created_at: `${date} ${time}` }
  ]
  
  fs.writeFileSync(dataFilePath, JSON.stringify(newContent));

  res.setHeader('interventionId', interventionId);
  res.end();
})
