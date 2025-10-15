🧩 Add & Search User Management System

A full-stack web application built with React and Spring Boot that allows users to be added, searched, edited, and deleted with secure password encryption and database persistence.

🚀 Features

✅ Add new users with validation

🔍 Search users by name, username, or email

✏️ Edit & 🗑️ Delete user functionality

🔐 Passwords are securely stored using BCrypt encryption

💾 Fully integrated with a relational database (e.g., MySQL)

🌐 CORS & API tested with Postman

🧠 Clean and modern UI using plain CSS

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


Server runs at 👉 http://localhost:8080

💻 Frontend Setup (React)
1️⃣ Navigate to frontend folder
cd frontend

2️⃣ Install dependencies
npm install

3️⃣ Start the frontend
npm run dev


Runs on 👉 http://localhost:5173
