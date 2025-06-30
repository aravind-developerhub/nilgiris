# Nilgiris E-Commerce Web App

A standalone e-commerce platform featuring product browsing, secure checkout, and wishlist management.

## Project Structure

nilgiris_app/
├── node_modules/
├── public/
│ ├── css/
│ │ ├── admin_styles.css
│ │ ├── input.css
│ │ └── output.css
│ ├── html/
│ │ ├── account.html
│ │ ├── admin_fullpage.html
│ │ ├── checkout_page.html
│ │ ├── contact_us.html
│ │ ├── login.html
│ │ ├── product_page.html
│ │ └── wishlist.html
│ ├── js/
│ │ ├── admin_script.js
│ │ └── script.js
│ └── images/
├── index.html # Main landing page
├── package.json
└── package-lock.json

## Technologies Used

- **Frontend**: HTML5, Tailwind CSS
- **Scripting**: JavaScript (ES6)
- **Build Tool**: Tailwind CSS CLI
- **Authentication**: OTP-based login

## Pages Overview

### 🏠 Landing Page (`index.html`)

- Responsive navbar with login/cart/wishlist
- Hero carousel section
- Product category browsing
- Featured product cards
- Footer with social links

### 🔐 Login (`login.html`)

- Mobile/email OTP verification
- Secure authentication flow

### 👤 Account (`account.html`)

- User profile management
- Address book functionality

### 🏪 Admin Panel (`admin_fullpage.html`)

- Comprehensive store management interface

### 🛒 Checkout (`checkout_page.html`)

- Order summary
- Real-time cart updates
- Secure checkout process

### 📞 Contact (`contact_us.html`)

- Contact form
- Store location (Google Maps)
- WhatsApp integration

### 📦 Product Page (`product_page.html`)

- Detailed product view
- Add to cart/wishlist
- Related products

### ❤️ Wishlist (`wishlist.html`)

- Saved products management
- Move items to cart

## Getting Started

1. Open `index.html` in your browser (root folder)
2. For admin access, navigate to `public/html/admin_fullpage.html`
3. For login you will get otp in alert box...
