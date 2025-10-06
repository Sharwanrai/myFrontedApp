const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const Router = require('./routes');

const port = process.env.PORT || 3002;
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send("jkjknk")
})
// app.use('/api/v1', mainRouter)


const startServer = async () => {
  try {
    // await connectdb();   // Wait for DB connection
    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to DB:", error);
    process.exit(1);  // Exit process if DB connection fails
  }
};

startServer();





