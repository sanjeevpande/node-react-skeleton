# README #

### How do I set up ? ###

* Install webpack               : npm install webpack -g
* or Install webpack-dev-server : npm install -g webpack-dev-server
* Install NodeJS                : sudo apt-get install nodejs

### How do I start the application ? ###

* Build       : webpack --progress --colors -p --watch
* Dev Build   : webpack-dev-server --progress --colors --port 8090
* Run         : npm start
* Navigate to : http://localhost:3000/

### How do I debug the application ? ###

* Install node-inspector         : sudo npm install -g node-inspector
* Run							 : node-debug bin/www
* Run							 : npm start (in another terminal)
* Navigate to 					 : http://127.0.0.1:8080/?ws=127.0.0.1:8080&port=5858