const cors = require('cors');
const express = require('express');
const rateLimit = require('express-rate-limit');

const { delay } = require('./helpers');

const app = express();
const port = 3000;
const REQUESTS_LIMIT = 50;

const limiter = rateLimit({
  windowMs: 1 * 1000,
  max: REQUESTS_LIMIT
});

app.use(limiter);
app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
  try {
    const index = req.body.index;

    delay(() => res.json({ index }));
  } catch (e) {
    res.statusCode(400);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
