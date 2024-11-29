const express = require("express")
const jokeController = require("../controllers/jokesController.js")
const router = express.Router()

//SCHEMAS
/**
 * @swagger
 * components:
 *  schemas:
 *    Joke:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: The auto-generated id of the joke
 *        text:
 *          type: string
 *          description: The text of the joke
 *        answer:
 *          type: string
 *          description: The answer of the joke
 * 
 *      example: 
 *        text: Pourquoi les joueurs ne peuvent pas se marier?
 *        answer: Parce qu'ils sont toujours en pause
 */

//TAGS
/**
 * @swagger
 * tags:
 *  name: Jokes
 *  description: Jokes API
 *  
 */

//ROUTE CREATE JOKE POST
/**
 * @swagger
 * /blagues:
 *  post:
 *    summary: Create a new joke
 *    tags: [Jokes]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *          $ref: "#/components/schemas/Joke"
 *    responses:
 *      201:
 *        description: Joke created successfully
 *        content:
 *          application/json:
 *            schema:
 *            $ref: "#/components/schemas/Joke"
 *      500:
 *        description: Some server error
 *            
 */

//route to add a joke
router.post("/blagues", jokeController.addJoke)


//ROUTE ALL JOKES GET
/**
 * @swagger
 * /blagues:
 *  get:
 *    summary: Return the list of all jokes
 *    tags: [Jokes]
 *    responses:
 *      200:
 *        description: The liste of the jokes
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:  
 *                $ref: "#/components/schemas/Joke"
 *            
 */

//route to show all jokes
router.get("/blagues",jokeController.showJokes)



//ROUTE SHOW ONE JOKE
/**
 * @swagger
 * /blague/{id}:
 *  get:
 *    summary: Return a joke by id
 *    tags: [Jokes]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id of the joke
 *    responses:
 *      200:
 *        description: The joke description by id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Joke"
 *      404:
 *        description: The joke was not found
 *            
 */

//route show one joke
router.get("/blague/:id", jokeController.showOneJoke)



//ROUTE RANDOM JOKE
/**
 * @swagger
 * /blagues/random:
 *  get:
 *    summary: Return a random joke
 *    tags: [Jokes]
 *    responses:
 *      200:
 *        description: A random joke
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:  
 *                $ref: "#/components/schemas/Joke"
 *            
 */

//route to show random joke
router.get("/blagues/random", jokeController.randomJoke)


module.exports = router
