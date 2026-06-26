````markdown
# 🌍 WanderLust Backend

## Overview

WanderLust Backend is the server-side application for the WanderLust travel listing platform. It provides secure authentication, listing management, image uploads, reviews, and RESTful APIs for the React frontend. The backend follows the MVC architecture and integrates MongoDB for data storage and Cloudinary for image hosting.

---

# 🛠 Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication & Security

- Passport.js (Local Strategy)
- Express Session
- Connect-Mongo
- bcrypt

### File Upload & Validation

- Multer
- Cloudinary
- Joi

### Other Tools

- dotenv
- Method Override
- Cookie Parser
- CORS

---

# ✨ Features

- 🔐 User Authentication (Signup, Login & Logout)
- 🏡 Create, Read, Update and Delete Listings (CRUD)
- 📸 Image Upload using Cloudinary
- ⭐ Review and Rating System
- 🛡️ Authorization (Only owner can edit or delete)
- ✅ Server-side Validation using Joi
- 💾 Session Management with MongoDB
- 🌐 RESTful API Integration
- ❌ Centralized Error Handling
- 📂 MVC Project Structure

---

# 📚 Key Learnings

- Built a scalable backend using MVC architecture.
- Developed RESTful APIs for frontend integration.
- Implemented secure authentication using Passport.js.
- Managed user sessions with Express Session and Connect-Mongo.
- Integrated Cloudinary for cloud image storage.
- Used Multer for handling image uploads.
- Applied Joi validation to secure incoming requests.
- Connected MongoDB using Mongoose ODM.
- Deployed backend on Render.

---

# ⚙️ Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/Mk72045/WanderLust_Backend.git

cd WanderLust_Backend
```

### Install Dependencies

```bash
npm install
```

### Create a `.env` file

```env
ATLASDB_URL=YOUR_MONGODB_CONNECTION_STRING

SECRET=YOUR_SESSION_SECRET

CLOUD_NAME=YOUR_CLOUDINARY_NAME

CLOUD_API_KEY=YOUR_CLOUDINARY_API_KEY

CLOUD_API_SECRET=YOUR_CLOUDINARY_API_SECRET

NODE_ENV=development
```

### Start the Server

```bash
npm start
```

or

```bash
node app.js
```

Server runs on

```
http://localhost:8080
```

---

# 📂 Project Structure

```
WanderLust_Backend
│
├── controllers
├── models
├── routes
├── middleware
├── utils
├── init
├── cloudConfig.js
├── schema.js
├── app.js
├── package.json
└── .env
```

---

# 📡 API Modules

### Authentication

- User Registration
- User Login
- User Logout

### Listings

- Create Listing
- Get All Listings
- Get Listing by ID
- Update Listing
- Delete Listing

### Reviews

- Add Review
- Delete Review

---

# 🌐 Deployment

The backend is deployed on **Render** and is connected with the React frontend hosted on **Vercel**.

---

# 📌 Future Improvements

- 🔍 Search and Filtering
- ❤️ Wishlist Feature
- 🗺️ Interactive Maps
- 📍 Location Autocomplete
- 📅 Booking System
- 💬 Real-time Notifications
- 🌍 Multi-language Support
- 🧪 Automated Testing

---

# 🔗 Project Links

### Backend Repository

https://github.com/Mk72045/WanderLust_Backend

### Frontend Repository

https://github.com/Mk72045/WanderLust_Frontend

### Live Website

https://wander-lust-frontend-fawn.vercel.app

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/NewFeature
```

3. Commit your changes.

```bash
git commit -m "Add New Feature"
```

4. Push the branch.

```bash
git push origin feature/NewFeature
```

5. Open a Pull Request.

---

# 👨‍💻 Developer

**Manoj Kumar**

**GitHub:** https://github.com/Mk72045

**LinkedIn:** https://linkedin.com/in/manoj-kumar-063715389

---

# ⭐ Support

If you found this project useful, please consider giving it a **⭐ Star** on GitHub.
````
