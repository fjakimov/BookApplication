# BookApp
Before running this project, you need to have the following installed on your system:

- Use any of your favourite IDE prefferably [Intelij](https://www.jetbrains.com/idea/download)
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/) (For the frontend)
- [Java 19 or higher](https://openjdk.java.net/) (For the backend)
- [Maven](https://maven.apache.org/) (For the backend)

## How to run it

### Backend 

1. Clone the repository:

   ```bash
   git clone https://github.com/fjakimov/BookApp.git
   cd BookApp/BookAPI
   mvn install
Finally enter
   ```bash
   mvn spring-boot:run
   ```
Now you should be able to view the application in the browser from the following address 
http://localhost:8080
### Frontend 

   2.Next use this command in the terminal
   ```bash
   cd ../Book-Frontend/frontend
   npm install
   npm start
   ```
Now you should be able to view the application in the browser from the following address 
http://localhost:3000

