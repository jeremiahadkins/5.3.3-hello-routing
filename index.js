const express = require('express');
const app = express();

const userRouter = express.Router();
const catRouter = express.Router();

app.get('/', (req, res) => {
  res.send('Home');
});

userRouter.get('/details', (req, res) => {
  res.send('my details');
});


userRouter.get('/list', (req, res) => {
  res.send('my user lists');
});

catRouter.get('/details', (req, res) => {
  res.send('meow meow');
});

app.use('/user', userRouter);
app.use('/cat', catRouter);

app.listen(3050, (req, res) => {
  console.log('app is running on port 3050');
});
