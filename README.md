

# StudyHive Web Application🚀

Welcome to the StudyHive Web Application! This platform allows registered users to collaborate on assignments, complete tasks, and grade each other's submissions in a friendly and interactive environment.

## Features🌟

1. **User Registration and Login**
   - Secure user authentication.
   - Every registered user is automatically a friend of all other users.

2. **Assignment Creation**
   - Users can create assignments with a title, description, and deadline.
   - Assignments are shared with all registered users.

3. **Assignment Completion**
   - Users can submit their work for any active assignment.
   - Submission status and deadlines are clearly displayed.

4. **Peer Grading**
   - Users can view and grade their friends' assignment submissions.
   - Grades and feedback are stored securely and can be reviewed.

5. **Interactive Dashboard**
   - A centralized hub to view:
     - Active assignments
     - Pending submissions
     - Grading tasks

6. **Notifications**
   - Real-time updates for:
     - New assignments
     - Submission deadlines
     - Feedback on graded assignments

7. **Mobile-Friendly Design**
   - Fully responsive layout for seamless use on desktops, tablets, and smartphones.

## Tech Stack✨

- **Frontend**: HTML, CSS, JavaScript, React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling Framework**: Daisy UI
- **Authentication**: JSON Web Tokens (JWT)


## Dependencies 🔧

- **Frontend:**
  - React.js
  - React Router DOM
  - Daisy UI
  - Axios

- **Backend:**
  - Express.js
  - Mongoose
  - JWT (jsonwebtoken)
  - dotenv
  - bcrypt.js
  - cors

---

## Getting Started 🚀

### **Local Setup Guide**

#### Prerequisites:
- **Node.js** (v16 or higher)
- **MongoDB** (Ensure it is installed and running locally or use a cloud-based MongoDB service)

### **Frontend Setup**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/studyhive-client.git
   cd studyhive-client

<ol>
  <li>Install dependencies:<br>
    <code>npm install</code>
  </li>
  <li>Start the development server:<br>
    <code>npm start</code>
  </li>
  <li>The frontend will run on <a href="http://localhost:5000" target="_blank">http://localhost:5000</a> by default.</li>
</ol>


### **Backend Setup**
<ol>
  <li>Clone the repository:<br>
    <code>git clone https://github.com/your-username/studyhive-server.git</code><br>
    <code>cd studyhive-server</code>
  </li>
  <li>Install dependencies:<br>
    <code>npm install</code>
  </li>
  <li>Create a <code>.env</code> file in the root directory and add the following:<br>
    <pre>
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
    </pre>
  </li>
  <li>Start the server:<br>
    <code>npm run start</code>
  </li>
  <li>The backend will run on <a href="http://localhost:5000" target="_blank">http://localhost:5000</a> by default.</li>
</ol>


## Live Link ##🔗

**live(https://assignment-11-client-c292f.web.app/)**

## Server Link ##🔗
**live(https://assignment-11-server-mu-five.vercel.app/)**