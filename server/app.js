const express = require('express');
const cors = require('cors');

const { productRoute } = require('./controllers/products');

const app = express();
const PORT = 5000;

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello world!');
});
app.use('/products', productRoute);
app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
