# CARAMBAR'S JOKES :rofl::joy:

Carambar jokes is a API for carambar's jokes.

This API is created with:

 - [Node](https://www.nodejs.tech/ro)
 - [Sequelize](https://sequelize.org/)
 - [Express](https://expressjs.com/)
 - [SQlite](https://www.sqlite.org/index.html)
 - [Swagger](https://swagger.io/)
 - [Render](https://render.com/) to deploy the project
  
  ---
  
  ## Endpoints

This API has 4 endpoints:
- **POST  /blagues:** create new joke
- **GET  /blagues:** to get all jokes
- **GET  /blagues/:id** to get joke by id
- **GET  /blagues/random** to get a random joke

---

## Deploy
This API is deployed on render.com.

---

## Repository API and Swagger
You can find the API documentation on [Repository API](https://dashboard.render.com/web/srv-ct5joqm8ii6s73djtc10)
and the repo on [Swagger](https://app.swaggerhub.com/apis/MENEGHETTIMARCOS_1/carambar/1.0.0#/) - server: ```https://carambar-jokes-api-xbz1.onrender.com - SwaggerHub API Auto Mocking```


---

## Download the project to work on local mode

1- You need to download nodejs.

- [Download Node here](https://www.nodejs.tech/ro/download) and choose the correct plataform (Windows, Linux or Mac).

2- Download the project by cloning the repository with the following command:

```git clone git@github.com:MarcosMene/carambar_jokes_api.git```

2.1- Change the folder:

 ```cd carambar_jokes_api```

3- Install the dependencies with the following command:
```npm install```

4- To run the project on your computer
```npm run dev```

5- To see the api docs open your browser with this link:  `http://localhost:4000/api-docs/`


## API docs (local mode)
To test the API endpoints, you can use Postman [Postman](https://www.postman.com/) 

## With postman

Download Postman here: [Postman](https://www.postman.com/downloads/)

- Open postman and create new requests.

Create a:
-  POST request to create a new joke: `localhost:4000/blagues`
-  GET request to see all jokes: `localhost: 4000/blagues` 
-  GET request to se a joke `localhost:4000/blague/2`
-  GET request to se random jokes `localhost:4000/blagues/random` 
  

#### To create a new POST 
- Click on the button 'Body' and select 'raw'
- add the following JSON

**example:**

{
  "text": "Pourquoi les poissons travaillent-ils illégalement ?",
  "answer": "Parce qu’ils n’ont pas de FISH de paie."
}


- Click on the button 'Send'
#### To see all jokes
1- On **GET** all jokes
- localhost:4000/blagues
- Click on the button 'Send'

2- on **GET** one joke
- localhost:4000/blague/2
- Click on the button 'Send'

3- on **GET** random joke
- localhost:4000/blagues/random
- Click on the button 'Send'

---

## The frontend page
The frontend page is created with [React](https://reactjs.org/).  
The frontend repository is here: [Github front end page](https://github.com/MarcosMene/carambar_jokes_front). 

---

### Download frontend

To play with carambar's jokes, you need to download the frontend page project.
  

To work with the frontend page, you need:

1- to clone the github frontend project.
```git clone git@github.com:MarcosMene/carambar_jokes_front.git```

2- to change to folder project
 ```cd carambar_jokes_front```

3- to install the dependencies with the following command:
```npm install```

4- to work on local mode, you need to make a change on fetch.js file. On this file, change axios.get('http...') to `http://localhost:4000/blagues/random`

5- start the project 
```npm start```

It will open the browser on `http://localhost:3000/carambar_jokes_front`

---

## Final result - Let's play

Let's get play LES BLAGUES CARAMBAR

Visit  - [Carambar jokes](https://marcosmene.github.io/carambar_jokes_front/) - you will see a page with a carambar joke question. 

To get the answer of the joke, just click the button 'La réponse'. To hide the answer, just click again this button.

You can get a random joke by clicking the button 'nouvelle blague'.


