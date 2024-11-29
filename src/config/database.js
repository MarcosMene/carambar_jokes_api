const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(
  {
    dialect:"sqlite",
    storage: "./jokes.sqlite",
  }
)

const connectToDb = async ()=>{
  try{
    await sequelize.authenticate()
    console.log("Connected to database")
    } catch (error) {
      console.error("Error connecting to database:", error)
      }
}

module.exports = {sequelize, connectToDb}