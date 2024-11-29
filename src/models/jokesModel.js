const {sequelize} = require("../config/database");
const {DataTypes} = require("sequelize")


//define model to table jokes
const Joke = sequelize.define("Joke",{
 
  text:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  answer:{
    type: DataTypes.STRING,
    allowNull: false,
  }
});

//create table joke
sequelize.sync()

module.exports = Joke;