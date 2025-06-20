# Node.js + MongoDB User Authentication API

This project is a **RESTful API** built with **Node.js**, **Express**, and **MongoDB**.  
It provides **user authentication features** including:
- ✅ **Signup**
- ✅ **Login**
- ✅ **Logout**
- ✅ **Get Current User Details**

Authentication uses **JWT (JSON Web Tokens)** stored securely in cookies, with password hashing handled by **bcrypt.js**.

---

## 🚀 **Tech Stack**

| Technology | Purpose |
|------------|---------|
| [Node.js](https://nodejs.org/en) | JavaScript runtime |
| [Express](https://expressjs.com/) | Web framework |
| [MongoDB](https://www.mongodb.com/) | NoSQL database |
| [Mongoose](https://mongoosejs.com/) | MongoDB ODM |
| [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) | Token generation & verification |
| [cookie-parser](https://www.npmjs.com/package/cookie-parser) | Cookie handling |
| [bcrypt.js](https://www.npmjs.com/package/bcryptjs) | Password hashing |
| [dotenv](https://www.npmjs.com/package/dotenv) | Environment variable management |

---

## 📌 **Features**

- 🔑 **Signup:** Create an account with hashed password storage.
- 🔑 **Login:** Authenticate with email & password, receive JWT in `httpOnly` cookie.
- 🔑 **Logout:** Clear the JWT cookie.
- 🔑 **Get Current User:** Fetch user data securely, excluding the password.

---

### .env File
<pre>
URI = mongodb+srv://<user>@<password>.mongodb.net/mongo-crud?retryWrites=true&w=majority&appName=database
PORT = PORT
JWT_CODE=SECURE_CODE
</pre>

---

<b>Output Screen's</b>
<table>
  <tr>
    <td><img src="" alt="vid"></td>
    <td><img src="" alt="vid"></td>
    <td><img src="" alt="vid"></td>
    <td><img src="" alt="vid"></td>
  </tr>
</table>
---