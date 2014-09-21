BSA2014-BackboneJS-underscoreJS
===============================

##Hometask boilerplate for JS group after Backbone lecture.

###How to start the server
- Install the [node.js](http://nodejs.org/)
- Clone this repository
```shell
git clone git@github.com:msemenistyi/BSA2014-BackboneJS-underscoreJS.git
``` 
- Go to folder
```shell
cd BSA2014-BackboneJS-underscoreJS/
```
- Install all the dependencies
```shell
npm install
```
- Run the server
```shell
node app.js
```
- Go to browser and check the API.
```
localhost:3000
```

###What should be done?
Add possibility to add films.
Add possibility to rename films.
Add possibility to remove films.

You should add a button for remove and add action.

Rename can be done within on the same place, where now sits plain text with the name or in a separate place.
Add implies inputs for name and year, id may be generated automatically. 

On item click, view should be changed to display film details with 'back to the list' button. 
Routing should work so that copying link and openning in new tab should open the same view you are in.

