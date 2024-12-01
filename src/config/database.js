const {Sequelize} = require("sequelize");

//create database jokes.sqlite
const sequelize = new Sequelize(
  {
    dialect:"sqlite",
    storage: "./jokes.sqlite",
  }
)


//connect to database
const connectToDb = async ()=>{
  try{
    await sequelize.authenticate()
    console.log("Connected to database")
    } catch (error) {
      console.error("Error connecting to database:", error)
      }
}

module.exports = {sequelize, connectToDb}