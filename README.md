# StudyBuddy

Suggestion for restructuring the repo in web_server branch.
Suggested file structure:

~~~
/StudyBuddy
|-- /config
|   |-- config.js
|   |-- nginx.conf
|
|-- /src
|   |-- /controllers
|   |   |-- userController.js
|   |   |-- productController.js
|   |
|   |-- /models
|   |   |-- userModel.js
|   |   |-- productModel.js
|   |
|   |-- /routes
|   |   |-- userRoutes.js
|   |   |-- productRoutes.js
|   |
|   |-- /middleware
|   |   |-- authMiddleware.js
|   |   |-- errorHandling.js
|   |
|   |-- /utils
|   |   |-- helper.js
|   |
|   |-- app.js
|
|-- /public
|   |-- /css
|   |   |-- main.css
|   |
|   |-- /js
|   |   |-- main.js
|   |
|   |-- /images
|   |   |-- logo.png
|
|-- /scripts
|   |-- migrate.js
|   |-- seed.js
|
|-- /static
|   |-- /html
|   |   |-- index.html
|   |   |-- user.html
|   |   |-- product.html
|
|-- .env
|-- .gitignore
|-- package.json
|-- package-lock.json
|-- README.md
~~~
