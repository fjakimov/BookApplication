# BookApp
Before running this project, you need to have the following installed on your system:

- [Git](https://git-scm.com/downloads) (For the BookAPI)
- [Docker](https://docs.docker.com/get-docker/) (For the BookAPI)
- [Docker-Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/) (For the frontend)
## How to run it

### Backend 

1. Clone the repository:

   ```bash
   git clone https://github.com/fjakimov/BookApp.git
   cd BookApp
   ```
Type the following command to start the backend without MVN installation 
   ```bash
   docker-compose up -d --build
   ```
This will download all the dependecies and requirements

Now you should be able to view the application in the browser from the following address 
http://localhost:8080/api/book
### Frontend 

   2.Next use this command in the terminal
   ```bash
   cd ../Book-Frontend/frontend
   npm install
   npm start
   ```
Now you should be able to view the application in the browser from the following address 
http://localhost:3000

