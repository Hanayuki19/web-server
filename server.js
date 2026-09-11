import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, web!');
});

app.get('/about', (req, res) => {
  res.send('Long is Long');
});

app.get('/about-me', (req, res) => {
    res.json({
        name: "Tran Duy Long",
        age: 20,
        stuff: "Any math is fine"
    });
});

app.get('/aboutme', (req, res) => {
    res.send(`Minh is Long's friend`);
});

const projects = [
  { name: 'Weather app', tag: 'javascript' },
  { name: 'Portfolio site', tag: 'express' },
  { name: 'Budget tracker', tag: 'python' },
];

app.get('/projects', (req, res) => {
  const tag = req.query.tag;
  const sort_name = req.query.sort;

  if (tag === undefined) {
    res.send("Not found, please specify");
  }
  // filter `projects` here, based on your decision above
  const output = projects.find(item => item.tag === tag)?.name ?? "Not found, please specify the correct path";
  if (sort_name === undefined) 
    res.send(output);
  else {
    let sort_result = undefined;
    if (sort_name === "name") {
      sort_result = projects.sort((a, b) => a.name.localeCompare(b.name));
    }
    else {
      sort_result = projects.sort((a, b) => a.tag.localeCompare(b.tag));
    }
    res.send(sort_result);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
