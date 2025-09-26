# Scriptures Express Server

[![Read on Substack](https://img.shields.io/badge/Substack-Read%20Article-orange)](https://substack.com/home/post/p-169357406)

Backend server for the Scriptures React Project, providing API endpoints for Quran translations, user authentication, and data management.

---

## 🚀 Features

- **User Authentication**: Secure login and registration with JWT and bcrypt.
- **Translation Management**: CRUD operations for storing and retrieving Quran translations.
- **Email Notifications**: Integration with Nodemailer for email functionalities.
- **Environment Configuration**: Utilizes dotenv for environment variable management.
- **Development Tools**: Configured with nodemon for automatic server restarts during development.

---

## 🛠️ Tech Stack

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing translations and user data.
- **Mongoose**: ODM for MongoDB, providing a straightforward way to model data.
- **jsonwebtoken (JWT)**: For secure user authentication.
- **bcrypt**: For hashing passwords.
- **nodemailer**: For sending emails.
- **dotenv**: For managing environment variables.
- **cookie-parser**: For parsing cookies in requests.
- **nodemon**: For automatic server restarts during development.

---

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Waheed-Labib/Scriptures_express_server.git
   cd Scriptures_express_server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EMAIL_HOST=your_email_smtp_host
   EMAIL_PORT=your_email_smtp_port
   EMAIL_USER=your_email_address
   EMAIL_PASS=your_email_password
   ```

   Replace the placeholder values with your actual credentials and configurations.

4. **Start the server:**

   ```bash
   npm run dev
   ```

   The server will run at [http://localhost:5000](http://localhost:5000).

---

## 📁 Project Structure

```
controllers/     # Contains logic for handling requests
db/              # Database connection and configuration
middlewares/     # Custom middleware functions
models/          # Mongoose models for data schemas
routes/          # API route definitions
utils/           # Utility functions and helpers
app.js           # Main application file initializing the server
constants.js     # Configuration constants
```

---

## 🔐 Security Considerations

- Ensure that your `.env` file is included in `.gitignore` to prevent sensitive information from being committed to version control.
- Use strong, unique values for `JWT_SECRET` and email credentials.
- Regularly update dependencies to patch known vulnerabilities.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository, create a new branch for your feature or fix, and submit a pull request.  
Ensure that your code adheres to the project's coding standards and includes appropriate tests.

---

## 📚 Resources & Articles

- [Project Overview on Substack](https://substack.com/home/post/p-169357406)
