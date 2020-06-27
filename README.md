***To run this webiste:***

1. go to the json-server folder and run: 
	
   json-server --watch db.json -d 2000 -p 3001
	
   => *connect the server to get/post data*

2. go to the React/confusion fold and run: 

   npm start
	
   => *run the website*


**Deployment:**

1. Run "npm build" and copy all the files in the React/confusion/build folder to the server.

   Or alternatively,

2. Host the website on the JSON server: move all the files in the React/confusion/build folder the json-server/public folder, then run 
   
   "json-server --watch db.json -d 2000 -p 3001". 

   The website will be hosted on: http://localhost:3001.