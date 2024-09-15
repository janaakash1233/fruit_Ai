Fruit.ai - Health Management Application
Fruit.ai is a health management application that provides comprehensive information about fruits, including nutritional values and benefits. It features an interactive chatbot for user assistance, an FAQ management system, and other useful tools. The app uses React for the frontend and Flask for the backend, ensuring a user-friendly and robust experience.

Project Structure
Frontend (React)
src/
components/:pages/: Includes page components like LoginPage, HomePage, ChatbotPage, TranslatorPage, FAQPage, and AboutPage.
App.js: The entry point for the React application.
index.js: Renders the React app into the DOM.
styles/: Manages styling using Tailwind CSS.
Backend (Flask)
app/
routes/: Defines API endpoints (e.g., FAQ and fruit management).
models/: Contains database models and schemas.
utils/: Provides utility functions.
**init**.py: Initializes the Flask app and the database connection.
config.py: Stores configuration settings, such as the database URI.
app.py: The main entry point for the backend server.
Frontend Setup

1. Install dependencies:
   bash
   Copy code
   npm install
2. Start the development server:
   bash
   Copy code
   npm run dev
3. Access the app:
   Open the app at http://localhost:5173.

Backend Setup

1. Navigate to the backend directory:
   bash
   Copy code
   cd server-backend
2. Create and activate a virtual environment:
   bash
   Copy code
   python -m venv venv
   source venv/bin/activate # For Windows: venv\Scripts\activate
3. Install dependencies:
   bash
   Copy code
   pip install -r requirements.txt
4. Update the MongoDB URI in config.py:
   python
   Copy code
   class Config:
   MONGO_URI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/faqs?retryWrites=true&w=majority'
5. Start the Flask server:
   bash
   Copy code
   python app.py
6. Access the backend API:
   The API will be available at http://localhost:5000.

Design Considerations
Frontend: Built using React for a dynamic and responsive UI, with Tailwind CSS for modern styling.
Backend: Powered by Flask for managing API requests, with MongoDB Atlas for database storage.
State Management: Authentication is handled using React’s Context API.
Deployment: The frontend will be deployed on Vercel, and the backend will be hosted on Render for production environments.
Repositories
Frontend: GitHub Repository
Backend: GitHub Repository
Contact
For any questions or support, please contact me at maitysouvik46@gmail.com.
