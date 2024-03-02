# Assignment Submission: Creating a Responsive E-commerce Website

## Description:
This assignment involves developing a responsive e-commerce website using React.js and Tailwind CSS. The website includes features such as displaying a list of products, adding products to the cart, incrementing/decrementing product quantities, and displaying a checkout popup.

## Steps to Build and Run the Project:

1. **Clone the Repository:**
\
`git clone <repository-url>`
\
`cd <repository-directory>`


2. **Install Dependencies:**
\
`npm install` or `npm i`


3. **Start the Development Server:**
\
`npm start` or `npm run start`


4. **Access the Website:**
Open your web browser and go to `http://localhost:3000` to view the website.

## Project Structure:

- **components/:** Contains all React components used in the project.
- **Header.js:** Component for the website header with a responsive hamburger menu.
- **ProductList.js:** Component for displaying a list of products with increment/decrement buttons.
- **ProductCard.js:** Component for displaying individual product cards with quantity controls.
- **CheckoutPopup.js:** Component for displaying a popup with the cart summary during checkout.

- **actions/:** Contains Redux action creators for updating product quantities in the cart.

- **reducers/:** Contains Redux reducers for managing the application state.

- **App.js:** Main component file where all other components are rendered.

- **index.js:** Entry point for the React application.

## File Structure
``` text
project-name/
│
├── public/
│   ├── index.html
│   └── index.css
│
├── src/
│   ├── actions/
│   │   └── index.js
│   │
│   ├── components/
│   │   ├── Header.js
│   │   ├── ProductCard.js
│   │   ├── ProductList.js
│   │   └── CheckoutPopup.js
│   │
│   ├── reducers/
│   │   └── index.js
│   │
│   ├── store/
│   │   ├── index.js
│   │   └── InitialProductState.js
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
├── README.md
└── ...
```

## Documentation:

This project aims to create a fully responsive website using React.js and Tailwind CSS. The website consists of several components, including a header with a responsive hamburger menu for mobile devices, a product list component for displaying available products, and individual product cards with quantity controls.

Users can browse through the list of products, increment or decrement the quantity of each product, and view the total price in the checkout popup. The checkout popup is displayed when the user clicks on the "Checkout" button in the header or footer.

To run the project locally, clone the repository, install dependencies, and start the development server. Then, access the website in your web browser at `http://localhost:3000`.

**Note:** Ensure you have Node.js and npm installed on your system before running the project.



