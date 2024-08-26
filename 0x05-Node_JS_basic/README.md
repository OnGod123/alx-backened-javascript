Full Server Project
This project creates a small Express server using ES6 features with Babel. The server handles routes for displaying a list of students and responding with specific messages based on the major parameter.

Project Structure
go
Copy code
full_server/
├── controllers/
│   ├── AppController.js
│   └── StudentsController.js
├── routes/
│   └── index.js
├── utils.js
├── server.js
├── database.csv
└── package.json
Setup
Install Dependencies

Make sure you have Node.js and npm installed. Navigate to the full_server directory and run:

bash
Copy code
npm install
Babel Configuration

Ensure Babel is set up to handle ES6 features. Your .babelrc should contain:

json
Copy code
{
  "presets": ["@babel/preset-env"]
}
Start the Server

If you're running from outside the full_server folder, update the dev script in package.json:

json
Copy code
"scripts": {
  "dev": "nodemon --exec babel-node --presets babel-preset-env ./full_server/server.js ./database.csv",
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node server.js"
}
Start the server with:

bash
Copy code
npm run dev
Endpoints
Homepage

URL: /
Method: GET
Response: Hello Holberton School!
bash
Copy code
curl localhost:1245
List All Students

URL: /students
Method: GET
Response: Lists all students by major
bash
Copy code
curl localhost:1245/students
List Students by Major

URL: /students/:major
Method: GET
Parameters: major (either CS or SWE)
Response: Lists students for the specified major
bash
Copy code
curl localhost:1245/students/SWE
Implementation Details
1. Utils
File: full_server/utils.js

Contains a function readDatabase that reads a CSV file asynchronously and returns a promise. It provides a structured object of student names categorized by fields.

2. Controllers
AppController

File: full_server/controllers/AppController.js

Provides a static method getHomepage to handle requests to the homepage.

StudentsController

File: full_server/controllers/StudentsController.js

Provides methods getAllStudents and getAllStudentsByMajor:

getAllStudents: Lists all students ordered by major.
getAllStudentsByMajor: Lists students filtered by the provided major (CS or SWE).
3. Routes
File: full_server/routes/index.js

Defines the routes for the application:

/ - Uses AppController
/students and /students/:major - Uses StudentsController
4. Server
File: full_server/server.js

Sets up the Express server, configures routes, and listens on port 1245.

Example Responses
Homepage:

bash
Copy code
curl localhost:1245
Output:

Copy code
Hello Holberton School!
All Students:

bash
Copy code
curl localhost:1245/students
Output:

mathematica
Copy code
This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
Students by Major:

bash
Copy code
curl localhost:1245/students/SWE
Output:

makefile
Copy code
List: Guillaume, Joseph, Paul, Tommy
Invalid Major Parameter:

bash
Copy code
curl localhost:1245/students/French
Output:

sql
Copy code
Major parameter must be CS or SWE
Notes
Ensure the database.csv file is present and correctly formatted.
Export your Express app correctly in server.js using export default app;.
Feel free to adjust the README to fit specific details or updates related to your project.
