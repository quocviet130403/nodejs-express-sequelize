const express = require('express');
const path = require('path');
const { rootRouter } = require('./routers');
const { sequelize } = require("./models")

const app = express();
app.use(express.json())
const publicPathDirectory = path.join(__dirname,'./public');
app.use('/public',express.static(publicPathDirectory));
app.use("/api/v1", rootRouter)

sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

app.listen(3000,() => {
    console.log('Express Success!!!')
})