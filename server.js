const express = require('express');
const rootRoute = require('./routers');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('vexere', 'root', 'vietdz1304', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3308',
});
const app = express();

app.use(express.json())
app.use(rootRoute)

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