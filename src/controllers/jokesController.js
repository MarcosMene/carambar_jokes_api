const Joke = require("../models/jokesModel.js")

//add new joke
exports.addJoke = async (request, response) => {
  const { text, answer } = request.body
  const newJoke = Joke.build({
    text: text,
    answer: answer,
  })

  try {
    await newJoke.save()
    response.status(201).json(newJoke)
  } catch (error) {
    response.status(500).json({ message: "Error creating joke" })
  }
}

//show all jokes
exports.showJokes = async (request, response) => {
  const jokes = await Joke.findAll()
  if(!jokes.length) return response.status(404).json({message:"No jokes available"})
  response.status(200).json(jokes)
}

//show one joke
exports.showOneJoke = async (request, response) => {
  const joke = await Joke.findOne({
    where: {
      id: request.params.id,
    },
  })
  if(!joke) return response.status(404).json({message: "No joke available"})
  response.status(200).json(joke)
}

//random joke
exports.randomJoke = async (request, response) => {
  try{
    const jokes = await Joke.findAll()
    if(!jokes.length) return response.status(404).json({message:"No jokes available"})

      const randomIndex = Math.floor(Math.random()*jokes.length)
      response.status(200).json(jokes[randomIndex])
  }catch(error){
    response.status(500).json({message:"Failed to fetch random joke"})
  }
}
