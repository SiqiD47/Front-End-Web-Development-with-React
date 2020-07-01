## To run this webiste:

1. In the React/confusion folder, run 

   **npm install** 
  
   => to install all the required packages.

2. Go to the json-server folder and run: 
	
   **json-server --watch db.json -d 2000 -p 3001**
	
   => to connect to the JSON server to get/post data.

3. Finally, go to the React/confusion folder and run: 

   **npm start**
	
   => to run the website.


## Deployment:

1. Run **npm build** and copy all the files in the React/confusion/build folder to the server.

   Or alternatively,

2. Host the website on the JSON server: 

   move all the files in the React/confusion/build folder to the json-server/public folder, then run **json-server --watch db.json -d 2000 -p 3001**. 

   The website will be hosted on: http://localhost:3001.
