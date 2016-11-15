import { Router } from 'express';

const router = new Router();

const db = {
  users: [
    { avator: 'http://lorempixel.com/200/200/people', name: 'John', age: 23 },
    { avator: 'http://lorempixel.com/200/200/people', name: 'Amy', age: 18 },
  ]
};

// Write your restful api here:
router.get('/users', (req, res) => {
  res.send(JSON.stringify(db));
});
router.get('/users/:id', (req, res) => {
  if (req.params.id < db.users.length) {
    res.send(JSON.stringify(db.users[req.params.id]));
  } else {
    res.send(JSON.stringify({}));
  }
});

export default router;
