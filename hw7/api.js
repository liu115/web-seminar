import { Router } from 'express';

const router = new Router();

const db = {
  users: [
    { avatar: '/avatar/0', name: 'John', age: 23 },
    { avatar: '/avatar/1', name: 'Amy', age: 18 },
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
