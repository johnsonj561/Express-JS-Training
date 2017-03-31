--------------------------------------------------------------------------------------------

# ExpressJS Tutorial
### Author: Justin Johnson
- minimal and flexible Node.js web application framework
- provides robust set of features for web/mobile applications
- open source and maintained by Node.js foundation
- sample code and examples taken from www.tutorialspoint.com/expressjs/index.html

---------------------------------------------------------------------------------------------

## Overview
- web application framework provides simple API for building websites and applications
- handles the low level protocols and prcesses for you

- express is minimal
- express has many modules available on npm that be be plugged into express
- express was developed by TJ Holowaychuk and is maintained by Node.js

- express has no opinion or best method, it's flexible and accomodates the developer

----------------------------------------------------------------------------------------------

## Routing
- resources (HTML, scrips, images, etc) are provided at different routes
- express defines routes using 
	- app.METHOD(PATH, HANDLER)
- METHOD is HTTP verb GET, SET, PUT, or DELETE
- PATH is the route at which request will run
- HANDLER is callback function that executes when matching request typd is found on relevant route

----------------------------------------------------------------------------------------------------

## CURL
- https://curl.haxx.se/docs/httpscripting.html
- Curl is CLI used for URL manipulations and transfers
- Examples
	- curl http://user:password@example.com/users/1 -XPUT -d"screen_name=batman"
	- curl --data "param1=value1&param2=value2" http://hostname/resource
	- curl -X POST -d @filename http://hostname/resource

------------------------------------------------------------------------------------------------------

## URL Building
- dynamic routes allows us to pass parameters and process based on params
- you can use the req.params object to access all the parameters you pass in the url
- you can use regex to restrict URL parameter matching and validate routes
	- ex that restricts id to be 5 digits long
	  app.get('/thinks/:id[0-9]{5})', function(req, res) { ...
- you can replace the 'cannot get route' error message by catching all routes with:
	- app.get('*', function(req, res) { ...

-------------------------------------------------------------------------------------------------------
## Middleware
- have access to request and response object, and the next middleware function in application's request response cycle
- these functions are used to modify req and res objects for tasks like parsing request bodies and adding response headers
- called on for every request to server, unless a specific route is specified as param1
	- ex middleware called on every request
	   app.use(function(req, res, next) { ...
		...
		...
		next();
	  });
	- ex middleware that is restricted to specific route
	  app.use('/things', function(req, res, next) {
		...
		...
		next();
	  });

### Order Matters
- the order in which middleware is written/icluded is very important
	- see middleware/server.js example

### Third Party Middleware
- full list available http://expressjs.com/en/resources/middleware.html
- Commonly Used:
	- Body-parser - parses body of requests 
	- Cookie-parser - parses cookie header and populates req.cookies
	- Express-session - creates a session with various options

-------------------------------------------------------------------------------------------------------------

## Templating
- Pug is templationg engine for express
- Pug is very powerful templating engine with variety of features - filters, includes, inheritance, interpolation

### Setting Up Pug
- you do not need to 'require' it
- add app.set('view engine', 'pug'); and app.set('views', './views'); to server.js file
- make sure you have a directory called views and insert file first_view.pug
- insert Pug code into file
- add to server.js
	app.get('/first_template', function(req, res) {
		res.render('first_view');
	});
- Pug converts simple markup into HTML. No need to keep track of closing tags, simplified key words

- Pug nests html tags according to indentation
- 3 methods for putting text inside a tag
	- space separated
	  h1 Welcome To Pug
	- Piped text
	  div
		| To insert multiline text,
		| You an use pipe operator
	- div.
	  But that gets tedious if you have a lot of text.
	  You can use '.' at the end of tag to denote block of text.
	  To put tags inside this block, simply enter tag in a new line and indent
- Comments
	- Pug uses same syntax as javascript
- Attributes
	- define attributes using comma separated list in parenthesis
	  div.container.column.main#division(width="100",height="100")
          is equivalent to
	  <div class="container column main" id="division" width="100" height="100"></div>
- Passing values to templates
	- when we render pug template, we can pass it value from route handler
	- value is passed into res.render() in json format
- Conditionals
	- conditional statements and looping constructs using if/else statements allow for dynamic markup
- Include and Components
	- Pug allows creation of components for a web page, like headers and footers


----------------------------------------------------------------------------------------------------

## Express Generator
- https://expressjs.com/en/starter/generator.html
- application generator tool that builds application skeleton and server listening on port 3000

### Auto-generated Structure
- app.js
- bin
	- www
- package.json
- public
	- images
	- javascripts
	- stylesheets
		- style.css
	- routes
		- index.js
		- users.js
	- views
		- error.pug
		- index.pug
		- layout.pug

### To Use
- verify proper installation of node.js and npm
	node -v to get version
	npm -v to get version
- install express-generator package at global scope
	npm install express-generator -g
- create application using express command
	express --view=ejs myapp

------------------------------------------------------------------------------------
