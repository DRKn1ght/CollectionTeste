# Collection -DEV

## Technologies Used
### Front-End
- Language
  - ReactJS
  - CSS for styling
- Architecture
  - The MVC (Model, View, Controller) model was used
- Design
  - [MUI](https://mui.com/) components were used for site styling
- The Front-End runs on port 3000
### Back-End
- Language
  - NodeJS
- Database
  - MongoDB (note: MongoDB Atlas was used to host the database)
- Routes and API
  - Express was used to create the API routes, and Mongoose for database connection
- The API runs on port 5000

### Notes
- For performance reasons, the API to fetch the list of brands and products from the database is only called once when the homepage is accessed. Two arrays are created for the products, productList (a list with all active products, returned by the API) and productToShow (a list of products that will be shown to the user). This way, you only need to manipulate these arrays for filtering and searching as the user types, avoiding repeated API calls every time the user types something.
- Similarly, when a user deactivates or adds a new product, besides updating the database, the arrays productList and productToShow are updated in real-time, reflecting the added or deactivated products to the user without needing to refresh the page or call the API again to fetch the products.

### Database Structure
- Database Name: testedb
- Collections: products, brands
- Products structure:
  - _id, thumb, description, brand, active, inactive_date
- Brands structure:
  - _id, Name, Description

## How to Run
First, clone the repository:

    git clone https://github.com/DRKn1ght/CollectionTeste.git
    
After cloning the repository, you need to add a file named ".env" to the project root to initialize the environment variable, which is the MongoDB URI.
To do this, create a file named ".env" and add the following line:

    REACT_APP_MONGOURI="MONGO URI HERE"

Then, install the dependencies with:

    npm install

Finally, run the project with:

    npm run start

The API and Front-End should start shortly.

## Demo
![collection(1)](https://github.com/user-attachments/assets/804cb748-1e74-44b2-b15c-edc727b51add)

