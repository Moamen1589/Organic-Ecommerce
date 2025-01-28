# Organic E-Commerce

This is a React-based organic e-commerce platform designed for purchasing fresh produce, organic products, and other food items. The project is live and accessible at [Organic E-Commerce](https://github.com/Moamen1589/Organic-Ecommerce.git).

## Features
- **Product Listings**: Display a variety of organic products with images, descriptions, and prices.
- **Responsive Design**: Optimized for seamless usage across desktop, tablet, and mobile devices.
- **Shopping Cart**: Add items to a shopping cart and view the total price.
- **Smooth Animations**: Enhanced user experience with visually appealing transitions.
- **React Hooks**: Utilized for state and lifecycle management.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **State Management**: React Context API
- **Deployment**: Vercel

## Hooks Used
1. **useState**: For managing component-level states like cart items and user inputs.
2. **useEffect**: For handling side effects such as updating the document title or fetching local data.
3. **useContext**: For sharing state between components without passing props manually.
4. **useNavigate**: TO Navigate To Anthoer Pages.
5. **useLocation**: To Show Details Of Product.

## Installation and Setup
Follow these steps to install and run the project locally:

### Prerequisites
- Node.js and npm (or yarn) installed on your system.
- A terminal or code editor with a built-in terminal (e.g., VS Code).

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Moamen1589/Organic-Ecommerce.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd Organic-Ecommerce
   ```

3. **Install Dependencies**:
   Run the following command to install all the required node modules:
   ```bash
   npm install
   ```
   Or if you prefer yarn:
   ```bash
   yarn install
   ```

4. **Start the Development Server**:
   Run the command below to start the app in development mode:
   ```bash
   npm start
   ```
   Or with yarn:
   ```bash
   yarn start
   ```
   The app will be available at `http://localhost:3000/` in your browser.

5. **Build for Production**:
   To create a production build, use:
   ```bash
   npm run build
   ```
   Or:
   ```bash
   yarn build
   ```

## Folder Structure
- **/src**: Contains all the source code for the React application.
  - **/components**: Reusable UI components.
  - **/pages**: Page-specific components.
  - **/context**: Contains context providers for global state management.
  - **/assets**: Images and other static assets.
- **/public**: Public assets accessible without authentication.
- **/styles**: Tailwind CSS configurations and custom styles.


