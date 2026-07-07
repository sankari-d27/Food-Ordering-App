# 🍽️ Food Ordering Website (React)

A modern **E-Commerce Food Ordering Website** built using **React.js**.  

This project allows users to explore food categories, filter dishes, add items to cart, apply automatic discount offers, and complete an order checkout process.
The application focuses on a smooth user experience with reusable React components, Context API state management, and a clean responsive design.

## 🚀 Features
### 🍕 Food Menu Exploration
- Browse different food categories.
- Select categories from the explore menu section.
- View available dishes dynamically.
- Interactive menu navigation.

### 🔍 Food Filtering System
- Filter food items by:
  - Category
  - Rating
  - Price range

### ⭐ Rating Display
- Dynamic star rating system:
  - Full stars
  - Half stars
  - Empty stars

### 🛒 Shopping Cart
- Add food items to cart.
- Increase or decrease quantity.
- Remove items.
- Automatically calculate:
  - Subtotal
  - Delivery charges
  - Discount
  - Final total

### 🎁 Smart Promo Offers
- Automatically detects the user's highest ordered food category.
- Suggests the best available promo code.
- Applies category-based discounts.

### 👤 Login / Signup Modal
- Login and signup interface.
- Password validation.
- Terms and conditions checkbox.
- Modal-based authentication UI.

### 📦 Checkout System
- Delivery information form.
- Order summary.
- Payment success notification.
- Clears cart after successful order placement.

### 📱 Responsive UI
- Mobile-friendly design.
- Clean component-based styling.
- Smooth navigation experience.
---

# 🛠️ Technologies Used
### Frontend
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

### Libraries
- React Router DOM
- React Icons
- SweetAlert2

### State Management
- React Context API
- React Hooks:
  - useState
  - useEffect
  - useContext

# 📂 Project Structure
src
│
├── assets
│   ├── images
│   ├── icons
│   └── food data
│
├── components
│   │
│   ├── Navbar
│   ├── Header
│   ├── Footer
│   ├── Login
│   ├── ExploreMenu
│   ├── FoodDisplay
│   ├── FoodItem
│   └── AppDownload
│
├── context
│   └── StoreContext.jsx
│
├── pages
│   │
│   ├── Home
│   ├── Cart
│   └── PlaceOrder
│
├── App.jsx
├── main.jsx
└── index.css

## 1. Clone the repository
git clone https://github.com/DPsankari27/Food-Ordering-App.git

# 🖥️ Application Flow
Home Page
    |
    |
Explore Menu
    |
    |
Food Display
    |
    |
Add Items To Cart
    |
    |
Apply Discount Offer
    |
    |
Checkout
    |
    |
Order Confirmation

# 🛒 Cart Logic
The cart system is managed using **React Context API**.
Implemented features:
- Global cart state
- Add/remove items
- Quantity management
- Price calculation
- Discount calculation
- Cart clearing after order completion

# 🎯 Main Components
## Navbar
Handles:
- Navigation
- Cart count display
- Login popup trigger

## ExploreMenu
Handles:
- Food category selection
- Active category highlighting

## FoodDisplay
Handles:
- Food listing
- Category filtering
- Price filtering
- Rating filtering

## FoodItem
Handles:
- Individual food card
- Rating stars
- Add/remove cart actions

## Cart
Handles:
- Cart items
- Promo offers
- Order total calculation

## PlaceOrder
Handles:
- Customer information
- Checkout process

# 👨‍💻 Developer

**Sankari Dhakshnamorrthy**

Built with ❤️ using React.js.


# 🙏 Acknowledgment

This project was inspired by a React food ordering tutorial that I used as a learning resource. I customized and extended the project by implementing additional features such as rating and price filtering, automatic promo code suggestions, enhanced cart functionality, form validation, and UI improvements to strengthen my understanding of React and Context API.
