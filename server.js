import express from 'express';

const app = express();
app.set("view engine", "ejs");
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, web!');
});

app.get('/hello', (req, res) => {
  res.send('Hello, web!');
});

app.get('/hello/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

app.get('/repeat/:word', (req, res) => {
  res.send(`${req.params.word}`.repeat(3));
});

app.get('/count', (req, res) => {
  const from = req.query.from || '1';
  const to = req.query.to || '10';
  res.send(`Counting from ${from} to ${to}.`);
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get('/api/info', (req, res) => {
  res.json({ course: 'COMPSCI 326', topic: 'Web Programming'});
});

app.get('/api/error', (req, res) => {
  res.status(400).send('Bad request.');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
