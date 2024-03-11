# BACKEND

I started my project by having server up and running using NodeJS, ExpressJS and other needed dependencies.

I decided to go with folders structure from which I can navigate through my project quick and easy.

For the start, I provided JSON file with some listed products, which I want to add to my database, and from which I constructed my productSchema in model.

I'm using Express Router for my routes.

I'm using express-async-errors package for error handling through my project. I understand that this package does all the work for me, meaning using the asynchronous
code structure it catches error using middleware, instead of always typing try..catch.. blocks all throughout my code. For this purpose, I provided two error middlewares,
error-middleware to catch all different errors that can happen, and not-found middleware that provides 404 error

Database populated with products.json

Use map-reduce for price sum https://www.mongodb.com/docs/manual/tutorial/map-reduce-examples/
