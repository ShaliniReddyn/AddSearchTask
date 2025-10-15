AddSearchUsers
A full-stack web application to add and search users with secure password storage. Built using Spring Boot for backend and React.js for frontend.

🧑‍💻 Add & Search Users — Full Stack Web App
A full-stack web application to add and search users securely using Spring Boot (Java) and React.js.
It demonstrates real-time search functionality, password encryption, and seamless frontend-backend integration.

🚀 Features
➕ Add new users with details like username, name, and email
🔍 Search users by name, username, or email
🔐 Passwords encrypted using BCryptPasswordEncoder
⚙️ Backend API built with Spring Boot + JPA + MySQL
💡 Frontend built using React.js (Vite) and Axios
🌐 CORS enabled for communication between React and Spring Boot
🧾 Organized service, repository, and controller layers

🏗️ Tech Stack
Frontend: React.js, Axios, HTML, CSS
Backend: Spring Boot, Java, Hibernate (JPA), MySQL
Security: BCrypt Password Encryption
Tools: Postman, VS Code, IntelliJ IDEA, Maven

🏗️ Project Structure
AddSearchTask/
│
├── backend/                     # Spring Boot project
│   ├── src/main/java/com/project/AddSearchUsers/
│   │   ├── Controller/          # REST controllers
│   │   ├── Entity/              # JPA entities
│   │   ├── Repository/          # Spring Data JPA repositories
│   │   ├── Service/             # Business logic
│   │   └── Configuration/       # Security & CORS setup
│   └── pom.xml
│
├── frontend/                    # React project
│   ├── src/
│   │   ├── AddUser.js           # Add user form with validation
│   │   ├── ListUsers.js         # User list + search UI
│   │   └── App.js               # Router setup
│   ├── package.json
│   └── public/
|
│__ screenshot
|
└── README.md

⚙️ Backend Setup (Spring Boot)
1️⃣ Navigate to backend folder
cd backend

2️⃣ Configure Database

Edit your application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/userdb
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update

3️⃣ Run the Backend
mvn spring-boot:run

💻 Frontend Setup (React)
1️⃣ Navigate to frontend folder
cd frontend

2️⃣ Install dependencies
npm install

3️⃣ Start the frontend
npm run dev
