const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router(); // eslint-disable-line new-cap

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const people = [{ name: 'Joe', age: 18 }, { name: 'John', age: 22 }];

router.get('/', (req, res) => {
  res.send('<h1>首頁</h1>');
});
router.get('/api/query', (req, res) => {
  res.json(req.query);
});
router.post('/api/body', (req, res) => {
  res.send(JSON.stringify(req.body));
});
router.get('/api/users/:id', (req, res) => {
  const person = {
    id: parseInt(req.params.id, 10),
    name: people[req.params.id - 1].name,
    age: people[req.params.id - 1].age,
  };
  res.json(person);
});
app.use('/', router);
app.use((req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.write('404 Not Found\n');
  res.end();
});
app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
