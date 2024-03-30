// Import the required modules
import express from 'express';
import ProductRoutes from '../Routes/Route.js'; // Corrected import statement

// Create an Express app
const app = express();
const PORT = 3000;
app.use(express.json());
// Define a route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Use the ProductRoutes middleware
app.use('/createUser', ProductRoutes); // Corrected middleware usage

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
