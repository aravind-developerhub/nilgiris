function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

function hideMenuIfShown() {
    const nav = document.querySelector('nav');
    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
    }
}

function scrollLeftt() {
    const section = document.getElementById("hero-section-banner");
    const scrollAmount = section.clientWidth;

    setTimeout(() => {
        section.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }, 300); // 300ms delay
}

function scrollRight() {
    const section = document.getElementById("hero-section-banner");
    const scrollAmount = section.clientWidth;

    setTimeout(() => {
        section.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }, 300); // 300ms delay
}

function scrollLeftSmall() {
    document.getElementById("scroll-images").scrollBy({
        left: -360,
    });
}

function scrollRightSmall() {
    document.getElementById("scroll-images").scrollBy({
        left: 360,
    });
}

function scrollLeftSmall_1() {
    document.getElementById("scroll-images-1").scrollBy({
        left: -360,
    });
}

function scrollRightSmall_1() {
    document.getElementById("scroll-images-1").scrollBy({
        left: 360,
    });
}

document.addEventListener('DOMContentLoaded',()=>{
  const b=document.getElementById("scrollToTopBtn"),c=()=>{
    (window.pageYOffset||document.documentElement.scrollTop)>100
      ?b.classList.replace("hidden","flex")
      :b.classList.replace("flex","hidden")
  };
  c();let t;window.addEventListener('scroll',()=>{clearTimeout(t);t=setTimeout(c,0)});
  b.addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})});
});

document.addEventListener('DOMContentLoaded', function() {
    const qtyInput = document.getElementById("quantityInput");
    const incrementBtn = document.getElementById("incrementBtn");
    const decrementBtn = document.getElementById("decrementBtn");

    incrementBtn.addEventListener("click", () => {
        qtyInput.value = parseInt(qtyInput.value) + 1;
    });

    decrementBtn.addEventListener("click", () => {
        const currentVal = parseInt(qtyInput.value);
        if (currentVal > 1) {
            qtyInput.value = currentVal - 1;
        }
    });

    qtyInput.addEventListener("input", () => {
        const val = parseInt(qtyInput.value);
        if (isNaN(val) || val < 1) {
            qtyInput.value = 1;
        }
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const stickyBox = document.getElementById("stickyBox");
//     const scrollLimit = 1100; // Stop sticking after this Y scroll

//     window.addEventListener("scroll", function () {
//         if (window.scrollY > scrollLimit) {
//         stickyBox.classList.remove("sticky");
//         stickyBox.classList.add("relative");
//         } else {
//         stickyBox.classList.remove("relative");
//         stickyBox.classList.add("sticky");
//         }
//     });
// });


const productDatabase = {
  "pid-1": {
    id: "pid-1",
    brandName: "LOCAL",
    productName: "Onion Approx 900g-1kg",
    productImage: "https://luluindia-prod-assets.s3.ap-south-1.amazonaws.com/pims/grocery/products-v1/7602_1.png",
    currentPrice: "₹35",
    originalPrice: "₹41.00",
    discount: "14% OFF",
    packageSize: "1kg",
    productType: "Veg",
    description: "Fresh onions with high nutritional value including sulphur compounds and vitamins. Perfect for Indian cooking with strong flavor and aroma. Naturally low in fat and high in water content.",
    barcode: "2200000462510",
    packageSizes: [
      {
        "size": "500g",
        "currentPrice": "₹18",
        "originalPrice": "₹21.00",
        "quantity": 1
      },
      {
        "size": "1kg",
        "currentPrice": "₹35",
        "originalPrice": "₹41.00",
        "quantity": 1
      },
      {
        "size": "2kg",
        "currentPrice": "₹68",
        "originalPrice": "₹80.00",
        "quantity": 1
      }
    ],
    status: { none: 1, wishlist: 0, cart: 0 }
  },
  "pid-2": {
    id: "pid-2",
    brandName: "FIRA",
    productName: "Fira Kerala Coconut Oil 1Ltr Pouch",
    productImage: "https://www.luluhypermarket.in/_next/image?url=https%3A%2F%2Fluluindia-prod-assets.s3.ap-south-1.amazonaws.com%2Fpims%2Fgrocery%2Fproducts-v1%2F2187899_1.png&w=750&q=100",
    currentPrice: "₹329",
    originalPrice: "₹419.00",
    discount: "21% OFF",
    packageSize: "1Ltr",
    productType: "Veg",
    description: "Pure coconut oil extracted through traditional cold-press methods. Rich in healthy fatty acids and perfect for cooking and hair care. Maintains natural flavor and aroma of fresh coconuts.",
    barcode: "2200000462511",
    packageSizes: [
      {
        "size": "500ml",
        "currentPrice": "₹175",
        "originalPrice": "₹210.00",
        "quantity": 1
      },
      {
        "size": "1Ltr",
        "currentPrice": "₹329",
        "originalPrice": "₹419.00",
        "quantity": 1
      },
      {
        "size": "2Ltr",
        "currentPrice": "₹620",
        "originalPrice": "₹800.00",
        "quantity": 1
      }
    ],
    status: { none: 1, wishlist: 0, cart: 0 }
  },
  "pid-3": {
    id: "pid-3",
    brandName: "IH ROASTERY",
    productName: "Cashew Nuts White 320-250g",
    productImage: "https://www.luluhypermarket.in/_next/image?url=https%3A%2F%2Fluluindia-prod-assets.s3.ap-south-1.amazonaws.com%2Fpims%2Fgrocery%2Fproducts-v1%2F7307_1.png&w=750&q=100",
    currentPrice: "₹262",
    originalPrice: "₹300.00",
    discount: "12% OFF",
    packageSize: "250g",
    productType: "Veg",
    description: "Premium quality cashew nuts with creamy texture and rich taste. Carefully selected and roasted to preserve natural goodness. Excellent source of healthy fats and plant-based protein.",
    barcode: "2200000462512",
    packageSizes: [
      {
        "size": "100g",
        "currentPrice": "₹110",
        "originalPrice": "₹120.00",
        "quantity": 1
      },
      {
        "size": "250g",
        "currentPrice": "₹262",
        "originalPrice": "₹300.00",
        "quantity": 1
      },
      {
        "size": "500g",
        "currentPrice": "₹500",
        "originalPrice": "₹580.00",
        "quantity": 1
      }
    ],
    status: { none: 1, wishlist: 0, cart: 0 }
  },
  "pid-4": {
    id: "pid-4",
    brandName: "HOLLAND",
    productName: "Avacado Hass Aprox.500g-600g",
    productImage: "https://www.luluhypermarket.in/_next/image?url=https%3A%2F%2Fluluindia-prod-assets.s3.ap-south-1.amazonaws.com%2Fpims%2Fgrocery%2Fproducts-v1%2F7580_1.png&w=750&q=100",
    currentPrice: "₹212",
    originalPrice: "₹228.00",
    discount: "7% OFF",
    packageSize: "600g",
    productType: "Veg",
    description: "Imported Hass avocados with creamy texture and nutty flavor. Packed with healthy monounsaturated fats and fiber. Perfect for salads, sandwiches and healthy dips.",
    barcode: "2200000462513",
    packageSizes: [
      {
        "size": "300g",
        "currentPrice": "₹110",
        "originalPrice": "₹115.00",
        "quantity": 1
      },
      {
        "size": "600g",
        "currentPrice": "₹212",
        "originalPrice": "₹228.00",
        "quantity": 1
      },
      {
        "size": "1kg",
        "currentPrice": "₹350",
        "originalPrice": "₹380.00",
        "quantity": 1
      }
    ],
    status: { none: 1, wishlist: 0, cart: 0 }
  },
  "pid-5": {
    id: "pid-5",
    brandName: "LOCAL",
    productName: "Beetroot approx. 400g-500g",
    productImage: "https://www.luluhypermarket.in/_next/image?url=https%3A%2F%2Fluluindia-prod-assets.s3.ap-south-1.amazonaws.com%2Fpims%2Fgrocery%2Fproducts-v1%2F7725_1.png&w=750&q=100",
    currentPrice: "₹45",
    originalPrice: "₹51.00",
    discount: "11% OFF",
    packageSize: "500g",
    productType: "Veg",
    description: "Fresh organic beetroots with deep red color and earthy flavor. Rich in antioxidants and essential nutrients like folate. Great for juices, salads and roasted vegetable dishes.",
    barcode: "2200000462514",
    packageSizes: [
      {
        "size": "250g",
        "currentPrice": "₹23",
        "originalPrice": "₹26.00",
        "quantity": 1
      },
      {
        "size": "500g",
        "currentPrice": "₹45",
        "originalPrice": "₹51.00",
        "quantity": 1
      },
      {
        "size": "1kg",
        "currentPrice": "₹85",
        "originalPrice": "₹98.00",
        "quantity": 1
      }
    ],
    status: { none: 1, wishlist: 0, cart: 0 }
  }
};

// Store all products in localStorage
localStorage.setItem('productDatabase', JSON.stringify(productDatabase));

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get product database and selected ID
    const productDatabase = JSON.parse(localStorage.getItem('productDatabase'));
    const selectedProductId = localStorage.getItem('selectedProductId');
    
    // If data exists, populate the page
    if (productDatabase && selectedProductId) {
        const productData = productDatabase[selectedProductId];
        
        if (productData) {
            // Product Image
            document.getElementById('product-image').src = productData.productImage;
            document.getElementById('product-sub-image').src = productData.productImage;

            // Basic Info
            document.getElementById('brand-name').textContent = productData.brandName;
            document.getElementById('brand-sub-name').textContent = productData.brandName;
            document.querySelectorAll('.product-name').forEach(el => {
                el.textContent = productData.productName;
            });
            
            const selectedPackageSize = localStorage.getItem('selectedPackageSize');

            let selectedPackage = productData.packageSizes.find(pkg => pkg.size === selectedPackageSize);

            // If not found, default to the first package size
            if (!selectedPackage) {
                selectedPackage = productData.packageSizes[0];
            }

            // ✅ Update all elements with class "product-price"
            document.querySelectorAll('.product-price').forEach(el => {
                el.textContent = selectedPackage.currentPrice;
            });

            // ✅ Update all elements with class "package-size"
            document.querySelectorAll('.package-size').forEach(el => {
                el.textContent = selectedPackage.size;
            });

            // ✅ Update all elements with original price class
            document.querySelectorAll('.original-price').forEach(el => {
                el.textContent = selectedPackage.originalPrice;
            });

            // 🧹 Optional: Clear used localStorage key
            localStorage.removeItem('selectedPackageSize');


            
            // Product Details
            document.getElementById('product-details').textContent = productData.description;
            document.getElementById('veg-or-non-veg').nextElementSibling.textContent = productData.productType;
            document.getElementById('product-bar-code').nextElementSibling.textContent = productData.barcode;
            
            // Discount (split into percentage and "OFF")
            const discountParts = productData.discount.split(' ');
            document.getElementById('product-offer-percentage').textContent = productData.discountParts[0];
            // const discountParts = productData.discount.split(' ');
            // const discountElements = document.querySelectorAll('svg + span');
            // if (discountElements.length >= 2) {
            //     discountElements[0].textContent = discountParts[0]; // Percentage
            //     discountElements[1].textContent = discountParts[1]; // "OFF"
            // }
            
            // Original Price
            const originalPriceElements = document.querySelectorAll('.text-gray-500.line-through');
            originalPriceElements.forEach(el => {
                el.textContent = productData.originalPrice;
            });
            
        } else {
            console.error('Selected product not found in database');
            showErrorState();
        }
    } else {
        console.error('No product data found in localStorage');
        showErrorState();
    }
});

function showErrorState() {
    document.getElementById('product-name').textContent = 'Product not found';
    document.getElementById('brand-name').textContent = '';
    document.getElementById('product-price').textContent = '--';
    document.getElementById('package-size').textContent = '--';
    // Add more error states as needed
}




function renderProductCards() {
            const productDatabase = JSON.parse(localStorage.getItem('productDatabase'));
            const productsSlider = document.querySelector('.products-slider-1');

            // Clear existing content (if any)
            // productsSlider.innerHTML = '';

            // Loop through each product in the database
            Object.values(productDatabase).slice(0, 5).forEach(product => {
                // Extract discount percentage and text
                const discountParts = product.discount.split('%');
                const discountPercent = discountParts[0];
                const discountText = discountParts[1].trim();

                // Create the product card HTML
                const productCard = `
      <div class="product-card relative min-w-[300px] max-w-[300px] h-[515px] mx-[20px] my-[10px] mb-[30px] bg-white border-[2px] border-solid overflow-hidden transition-all ease-in duration-300 hover:scale-101.5 hover:-translate-y-[5px] hover:shadow-2xl cursor-pointer bk5:h-[484px]" data-product-id="${product.id}">
        <a href="./public/HTML/product_page.html" onclick="
    const select = this.closest('.product-card').querySelector('select');
    const selectedSize = select ? select.value : '';
    localStorage.setItem('selectedProductId', '${product.id}');
    localStorage.setItem('selectedPackageSize', selectedSize);
    return true;">

          <img class="border-b-[2px] border-solid transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
          src="${product.productImage}"
          alt="${product.productName}" class="absolute" >
        </a>
        <i class="fa-regular fa-heart absolute top-2 right-2 text-[1.5rem] text-red-500 cursor-pointer transition-all duration-300 ease-in"
        onclick="
        this.classList.toggle('fa-regular');
        this.classList.toggle('fa-solid');
        this.classList.add('scale-125');
        setTimeout(() => {
          this.classList.remove('scale-125');
        }, 150);
        toggleWishlist('${product.id}');
      "></i>
        <img src="https://openclipart.org/image/2000px/304248" alt="veg-icon"
          class="absolute w-[35px] h-[35px] top-63 left-2">
        <svg width="65" height="47" viewBox="0 0 65 54" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
          class="absolute text-[#00A14B] top-0 left-1 overflow-visible">
          <path
            d="M58.2913 53.0801L32.5049 47.3869L6.71853 53.0801C5.33389 53.3821 3.99795 52.4384 3.99795 51.1488V3.14326C3.99795 2.58337 -0.524046 0.136719 0.0882582 0.136719H64.8846C65.5039 0.136719 60.9979 2.58966 60.9979 3.14326V51.1488C61.0049 52.4384 59.6759 53.3821 58.2913 53.0801Z"
            fill="currentColor" style="filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));" />
        </svg>
        <span class="absolute font-900 text-[0.9rem] tracking-[0.1rem] text-white top-0.5 left-5">${discountPercent}%</span>
        <span class="absolute font-900 text-[0.9rem] tracking-[0.1rem] text-white top-4.5 left-6">${discountText}</span>
        <span class="absolute text-gray-500 text-[1.5rem] top-77 left-2">${product.brandName}</span>
        <span class="absolute text-black font-[600] top-84 left-2">${product.productName}</span>
        <div class="absolute product-quantity w-[280px] h-[40px] left-2 border-[2px] border-gray-600 top-95">
          <select class="w-full h-full px-2 appearance-none bg-transparent focus:outline-none cursor-pointer" onchange="updatePrice(this, '${product.id}')">
            ${getPackageOptions(product)}
          </select>
          <i class="absolute fa-solid fa-caret-down text-[1.5rem] top-1 right-2 pointer-events-none"></i>
        </div>
        <div class="absolute w-[280px] h-[2px] bg-black left-2 top-107"></div>
        <span class="absolute text-[1.5rem] font-[500] top-109 left-3 current-price">${product.currentPrice}</span>
        <span class="absolute text-gray-500 text-[1.2rem] font-[500] line-through top-110 original-price left-${product.currentPrice.length > 3 ? '19' : '15'}">${product.originalPrice}</span>
        <div class="add-to-cart-button absolute w-[280px] h-[35px] top-118 left-2 active:bg-[#0E6F5B] border-[2px] border-green-800 rounded-[3px] transition-all duration-300 ease-in cursor-pointer bk5:top-109 bk5:right-3 bk5:left-auto bk5:w-[100px]"
          onclick="
          
          var icon = this.querySelector('svg');
          var text = this.querySelector('span');

          var isActive = this.classList.contains('bg-[#0E6F5B]');


          this.classList.add('scale-110');
          setTimeout(() => this.classList.remove('scale-110'), 150);

          // Add product to cart
        const productId = '${product.id}'; // Pass your product ID here
        addToCart(productId);
        ">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"
            stroke="#0E6F5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="absolute lucide lucide-shopping-cart-icon lucide-shopping-cart top-1 left-1/3 bk5:left-2">
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
          <span
            class="absolute font-1000 text-[1.3rem] text-[#0E6F5B] left-1/2 translate-x-[-30%] bk5:right-3">Add</span>
        </div>
      </div>
    `;

                // Add the product card to the slider
                productsSlider.insertAdjacentHTML('beforeend', productCard);
            });
        }

        // Helper function to generate package options with prices
        function getPackageOptions(product) {
            let optionsHTML = '';

            product.packageSizes.forEach(pkg => {
                const isSelected = pkg.size === product.packageSize;
                optionsHTML += `
      <option value="${pkg.size}" ${isSelected ? 'selected' : ''} 
        data-current-price="${pkg.currentPrice}" 
        data-original-price="${pkg.originalPrice}">
        ${pkg.size} - ${pkg.currentPrice}
      </option>
    `;
            });

            return optionsHTML;
        }

        // Function to update prices when package size changes
        function updatePrice(selectElement, productId) {
            const selectedOption = selectElement.options[selectElement.selectedIndex];
            const currentPrice = selectedOption.getAttribute('data-current-price');
            const originalPrice = selectedOption.getAttribute('data-original-price');

            const productCard = selectElement.closest('.product-card');
            productCard.querySelector('.current-price').textContent = currentPrice;
            productCard.querySelector('.original-price').textContent = originalPrice;

            // Update left position for original price based on new price length
            const originalPriceElement = productCard.querySelector('.original-price');
            originalPriceElement.classList.remove('left-15', 'left-19');
            originalPriceElement.classList.add(currentPrice.length > 3 ? 'left-19' : 'left-15');
        }


// Global cart state
let cartItems = [];

// Update the addToCart function
function addToCart(productId) {
  const product = productDatabase[productId];
  if (!product) return;

  // Get selected package size and price
  const productCard = document.querySelector(`[data-product-id="${productId}"]`);
  const sizeSelect = productCard.querySelector('select');
  const selectedOption = sizeSelect.options[sizeSelect.selectedIndex];
  const selectedOriginalPrice = selectedOption.dataset.originalPrice; // Get original price from option
  const selectedSize = selectedOption.value;
  const selectedPrice = selectedOption.dataset.currentPrice;
  const priceValue = parseFloat(selectedPrice.replace(/[^\d.]/g, ''));

  // Check if this exact product+size already exists in cart
  const existingItemIndex = cartItems.findIndex(
    item => item.productId === productId && item.size === selectedSize
  );

  if (existingItemIndex >= 0) {
    // Update quantity if already exists
    cartItems[existingItemIndex].quantity += 1;
    cartItems[existingItemIndex].totalPrice = cartItems[existingItemIndex].quantity * priceValue;
  } else {
    // Add new item to cart
    cartItems.push({
      productId,
      name: product.productName,
      image: product.productImage,
      size: selectedSize,
      unitPrice: selectedPrice,
      originalPrice: selectedOriginalPrice, // <-- Add this line
      priceValue,
      quantity: 1,
      totalPrice: priceValue
    });
  }
  productDatabase[productId].status.cart = 1;
  saveProductStatusToStorage(productId);
  // Update cart UI and storage
  updateCartUI();
  saveCartToStorage();
}

function restoreCartFromStorage() {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
        try {
            cartItems = JSON.parse(storedCart);
        } catch (e) {
            console.error("Failed to parse cart from storage:", e);
            cartItems = [];
        }
    }
}

// Update cart UI
function updateCartUI() {
  const cartList = document.querySelector('.side-menu-cart-product-list');
  cartList.innerHTML = '';

  let subtotal = 0;
  let total_original = 0;

  cartItems.forEach((item, index) => {
    subtotal += item.totalPrice;
    
    const cartItemHTML = `
      <div id="cart-item-${index}" class="side-menu-cart-product-item flex flex-row items-center">
        <div class="relative side-menu-cart-product-image w-[70px] h-[120px] m-[20px]">
          <img src="${item.image}" class="absolute mt-[23px]" alt="${item.name}">
        </div>
        <div class="side-cart-product-details flex-flex-col font-[600] text-black text-[1rem]">
          <div><span class="font-bold">${item.name}</span></div>
          <div><span>${item.size}</span></div>
          <div>
            <span class="item-quantity">${item.quantity}</span> x 
            <span class="item-unit-price">${item.unitPrice}</span> = 
            <span class="item-total-price">₹${item.totalPrice.toFixed(2)}</span>
          </div>
          <div class="product-quantity-and-remove-button flex flex-row space-x-4">
            <div class="product-quantity flex flex-row w-[150px] h-[40px] border-2 border-solid">
              <div onclick="updateCartItemQuantity(${index}, -1)"
                  class="w-[50px] h-[37px] bg-[#72E553] border-r-2 flex items-center justify-center cursor-pointer">
                <span class="text-[1.5rem] font-[500] translate-y-[-2px] select-none">−</span>
              </div>
              <div class="w-[50px] h-[37px] bg-[#72E553] flex items-center justify-center">
                <input type="number" min="1" value="${item.quantity}"
                    class="quantity-input text-center text-[1.4rem] font-[500] w-full h-full bg-transparent outline-none border-none appearance-none translate-x-[6px]" 
                    onchange="updateCartItemQuantityFromInput(${index}, this.value)"/>
              </div>
              <div onclick="updateCartItemQuantity(${index}, 1)"
                  class="w-[50px] h-[37px] bg-[#72E553] border-l-2 flex items-center justify-center cursor-pointer">
                <span class="text-[1.5rem] font-[500] translate-y-[-3px] select-none">+</span>
              </div>
            </div>
            <div class="group remove-button hover:scale-110 transition-all ease-in duration-100 flex flex-row items-center cursor-pointer"
                onclick="removeCartItem(${index})">
              <svg width="30" height="35" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="group-hover:scale-110 group-hover:[filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.4))]">
                <path
                    d="M6.48534 16.7998C6.04536 16.7998 5.66871 16.6431 5.35539 16.3298C5.04207 16.0165 4.88541 15.6398 4.88541 15.1998V4.80028H4.08545V3.20036H8.08527V2.40039H12.8851V3.20036H16.8849V4.80028H16.0849V15.1998C16.0849 15.6398 15.9283 16.0165 15.6149 16.3298C15.3016 16.6431 14.925 16.7998 14.485 16.7998H6.48534ZM8.08527 13.5999H9.6852V6.40021H8.08527V13.5999ZM11.2851 13.5999H12.8851V6.40021H11.2851V13.5999Z"
                    fill="#1D1B20" />
              </svg>
              <span>Remove</span>
            </div>
          </div>
        </div>
      </div>
    `;
    cartList.insertAdjacentHTML('beforeend', cartItemHTML);
    renderCartTableItems();
  });

  // Update subtotal
//   document.querySelector('.side-menu-cart-sub-total span:last-child').textContent = `₹${subtotal.toFixed(2)}`;
    document.querySelectorAll('.side-menu-cart-sub-total span:last-child').forEach(span => {
    span.textContent = `₹${subtotal.toFixed(2)}`;
    });
  document.querySelector('.side-menu-cart-sub-total span:first-child').textContent = `Subtotal`;
  document.querySelector('.cart-category').textContent = `Total Products (${cartItems.length} items)`;
  
}

// Cart management functions
function updateCartItemQuantity(index, change) {
  const newQuantity = cartItems[index].quantity + change;
  if (newQuantity < 1) return;
  
  cartItems[index].quantity = newQuantity;
  cartItems[index].totalPrice = newQuantity * cartItems[index].priceValue;
  updateCartUI();
  saveCartToStorage();
}

// function updateCartItemQuantityFromInput(index, value) {
//   const newQuantity = parseInt(value);
//   if (isNaN(newQuantity)) return;
  
//   cartItems[index].quantity = newQuantity;
//   cartItems[index].totalPrice = newQuantity * cartItems[index].priceValue;
//   updateCartUI();
//   saveCartToStorage();
// }

function removeCartItem(index) {
    const productId = cartItems[index].productId;
    productDatabase[productId].status.cart = 0;
    saveProductStatusToStorage(productId);
  cartItems.splice(index, 1);
  saveCartToStorage();
  updateCartUI();
  renderCartTableItems();
}

// Storage functions
function saveCartToStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function loadCartFromStorage() {
  const savedCart = localStorage.getItem('cartItems');
  if (savedCart) {
    cartItems = JSON.parse(savedCart);
    updateCartUI();
  }
}

function saveProductStatusToStorage(productId) {
  // Safely get products or initialize empty object
  const products = JSON.parse(localStorage.getItem('productDatabase')) || {};

  // Ensure product exists in both databases
  if (productDatabase[productId]) {
    products[productId] = products[productId] || {};
    products[productId].status = {
      ...(products[productId].status || {}),  // Fallback empty status
      cart: productDatabase[productId].status.cart
    };
  }

  localStorage.setItem('productDatabase', JSON.stringify(products));
}

        // Call the function when DOM is loaded
        document.addEventListener('DOMContentLoaded', function () {
            // Store the product database in localStorage if not already there
            if (!localStorage.getItem('productDatabase')) {
                localStorage.setItem('productDatabase', JSON.stringify(productDatabase));
            }

            // Render the product cards
            renderProductCards();
            // Store categories in localStorage if not already there
            if (!localStorage.getItem('categoryDatabase')) {
                localStorage.setItem('categoryDatabase', JSON.stringify(categoryDatabase));
            }

            // Render the category cards
            renderCategoryCards();

            loadCartFromStorage();
        });

document.addEventListener('DOMContentLoaded', function () {
    restoreCartFromStorage();
    updateCartUI();
});


function renderCartTableItems() {
  const cartContainer = document.querySelector('.product-list-table');
  if (!cartContainer) return;

  cartContainer.innerHTML = `
    <div class="relative product-list-table-title flex flex-row items-center px-[30px] py-[10px]">
        <span class="font-[700] text-[1.2rem] w-[45%]">Product</span>
        <span class="font-[700] text-[1.2rem] w-[25%]">Price</span>
        <span class="font-[700] text-[1.2rem] w-[20%] pl-[20px]">Quantity</span>
        <span class="font-[700] text-[1.2rem] w-[10%]">Total</span>
    </div>
    <div class="border-[1px] border-solid w-[100%]"></div>
  `;

  cartItems.forEach((item, index) => {
    const html = `
      <div class="product-list-table-item flex flex-col py-[10px]">
        <div class="product-list-table-item-details flex flex-row px-[30px] py-[10px] space-x-4 hover:bg-[#F6F6F6]">
          <div class="product-image-and-name flex flex-row w-[45%] space-x-4">
            <div class="product-image w-[100px] h-[120px]">
              <img src="${item.image}" class="my-[10px]" alt="${item.name}" />
            </div>
            <div class="product-name-and-package flex flex-col space-y-[10px]">
              <span class="font-[600] text-[1.1rem]">${item.name}</span>
              <span class="text-[1rem]">Pack Sizes : <span class="font-semibold">${item.size}</span></span>
            </div>
          </div>
          <div class="product-price flex flex-col w-[25%]">
            <div><span class="font-[500] text-[1.1rem]">${item.unitPrice}</span></div>
            <div><span class="font-[500] text-[1rem] text-gray-400 line-through">₹${(item.priceValue * 1.15).toFixed(2)}</span></div>
            <div><span class="font-semibold text-[#00A14B]">Savings: ₹${(item.priceValue * 0.15).toFixed(2)}</span></div>
          </div>
          <div class="product-quantity w-[20%]">
            <div class="flex flex-row w-[150px] h-[40px] border-[1px] border-solid">
              <div onclick="updateCartItemQuantity(${index}, -1)"
                  class="w-[50px] h-[37px] bg-[#72E553] border-r-2 flex items-center justify-center cursor-pointer">
                <span class="text-[1.5rem] font-[500] translate-y-[-2px] select-none">−</span>
              </div>
              <div class="w-[50px] h-[37px] bg-[#72E553] flex items-center justify-center">
                <input type="number" min="1" value="${item.quantity}"
                    class="quantity-input text-center text-[1.4rem] font-[500] w-full h-full bg-transparent outline-none border-none appearance-none translate-x-[6px]"
                    onchange="updateCartItemQuantityFromInput(${index}, this.value)" />
              </div>
              <div onclick="updateCartItemQuantity(${index}, 1)"
                  class="w-[50px] h-[37px] bg-[#72E553] border-l-2 flex items-center justify-center cursor-pointer">
                <span class="text-[1.5rem] font-[500] translate-y-[-3px] select-none">+</span>
              </div>
            </div>
          </div>
          <div class="product-total-price flex flex-col w-[10%]">
            <div><span class="font-[500] text-[1.1rem]">₹${item.totalPrice.toFixed(2)}</span></div>
          </div>
        </div>
        <div class="product-list-table-item-delivery-details flex flex-row items-center justify-evenly space-x-5">
          <div class="product-delivery-type-and-time flex flex-row items-center space-x-5">
            <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="translate-y-[-10px] xs:w-[24px]">
                <path
                    d="M12.485 39.2513C14.0387 39.2513 15.2981 37.9918 15.2981 36.4381C15.2981 34.8845 14.0387 33.625 12.485 33.625C10.9314 33.625 9.67188 34.8845 9.67188 36.4381C9.67188 37.9918 10.9314 39.2513 12.485 39.2513Z"
                    stroke="#020202" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path
                    d="M29.36 39.2513C30.9137 39.2513 32.1731 37.9918 32.1731 36.4381C32.1731 34.8845 30.9137 33.625 29.36 33.625C27.8064 33.625 26.5469 34.8845 26.5469 36.4381C26.5469 37.9918 27.8064 39.2513 29.36 39.2513Z"
                    stroke="#020202" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path
                    d="M9.67327 36.438H6.46094C5.90865 36.438 5.46094 35.9903 5.46094 35.438V17.7461C5.46094 17.1938 5.90865 16.7461 6.46094 16.7461H29.7644C30.3167 16.7461 30.7644 17.1938 30.7644 17.7461V22.1363C30.7644 22.2915 30.8005 22.4446 30.8699 22.5835L33.44 27.7236C33.5296 27.9028 33.6709 28.051 33.8457 28.1489L35.8794 29.2881C36.1951 29.465 36.3906 29.7987 36.3906 30.1606V35.438C36.3906 35.9903 35.9429 36.438 35.3906 36.438H32.1783"
                    stroke="#020202" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M26.5572 36.4375H15.3047" stroke="#020202" stroke-width="1.5"
                    stroke-miterlimit="10"></path>
                <path
                    d="M33.5722 27.9974H26.1328C25.5805 27.9974 25.1328 27.5496 25.1328 26.9974V23.3711C25.1328 22.8188 25.5805 22.3711 26.1328 22.3711H30.7591"
                    stroke="#020202" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path
                    d="M6.88728 19.4068L7.00524 18.3008H5.89292H4.34786H3.41822L3.35051 19.2279C3.33866 19.3902 3.33594 19.5478 3.33594 19.6895C3.33594 19.8341 3.33867 19.989 3.35051 20.1511L3.4182 21.0783H4.34786H5.89292H7.00524L6.88728 19.9723C6.87929 19.8974 6.8764 19.8089 6.8764 19.6895C6.8764 19.5705 6.87929 19.4817 6.88728 19.4068Z"
                    fill="black" stroke="white" stroke-width="2"></path>
                <path
                    d="M9.11898 15.576L9.16284 15.5464C9.2831 15.4706 9.39815 15.4038 9.50864 15.3473L9.55945 15.3226L10.5229 14.8534L9.98826 13.9246L9.21827 12.587L8.74579 11.7663L7.90056 12.1934C7.6757 12.3071 7.45652 12.4331 7.24391 12.5713L6.44967 13.0878L6.92252 13.9088L7.6929 15.2463L8.2289 16.1769L9.11898 15.576Z"
                    fill="black" stroke="white" stroke-width="2"></path>
                <path
                    d="M4.27952 15.7983L3.85192 16.6437L4.67305 17.1163L6.01098 17.8863L6.87728 18.3849L7.37627 17.5189L7.69994 16.9571L8.19935 16.0903L7.33236 15.5912L5.99409 14.8208L5.17123 14.3472L4.65555 15.1444C4.51919 15.3552 4.39358 15.5728 4.27952 15.7983Z"
                    fill="black" stroke="white" stroke-width="2"></path>
                <path
                    d="M16.1636 21.9036L16.1367 21.9568C16.068 22.0862 16.0025 22.2005 15.9341 22.3047L15.9001 22.3546L15.2928 23.2461L16.2277 23.7843L17.5659 24.5547L18.3887 25.0283L18.9044 24.2312C19.0387 24.0237 19.1628 23.8116 19.2784 23.589L19.7181 22.7414L18.8918 22.263L17.5567 21.49L16.6414 20.9601L16.1636 21.9036Z"
                    fill="black" stroke="white" stroke-width="2"></path>
                <path
                    d="M7.43135 21.9654L7.42756 21.9579L7.42365 21.9504L7.39274 21.8914L6.90944 20.9689L6.00731 21.4892L4.67225 22.2593L3.86096 22.7272L4.27479 23.5674C4.39153 23.8044 4.52306 24.0264 4.65577 24.2314L5.17154 25.0282L5.99414 24.5547L7.33241 23.7843L8.27123 23.2439L7.6576 22.3512L7.62793 22.308C7.55386 22.192 7.48797 22.0781 7.43135 21.9654Z"
                    fill="black" stroke="white" stroke-width="2"></path>
                <path
                    d="M9.55517 24.0543L9.50649 24.0309C9.39716 23.9749 9.28526 23.9097 9.17154 23.8362L9.12639 23.8051L8.23353 23.1906L7.69278 24.13L6.9224 25.4683L6.44977 26.2893L7.24407 26.8056C7.45163 26.9405 7.67027 27.069 7.89919 27.1852L8.74516 27.6143L9.21833 26.7922L9.98832 25.4542L10.5253 24.5211L9.55517 24.0543Z"
                    fill="black" stroke="white" stroke-width="2"></path>
                <path
                    d="M16.6522 13.9088L17.1249 13.0879L16.3309 12.5714C16.121 12.4349 15.9048 12.3091 15.6796 12.1946L14.8355 11.7653L14.361 12.5848L13.5877 13.9202L13.0869 14.7852L13.9516 15.2865L14.5137 15.6123L15.3813 16.1152L15.8818 15.2463L16.6522 13.9088Z"
                    fill="black" stroke="white" stroke-width="2"></path>
                <path
                    d="M10.3984 27.122V28.0363L11.309 28.118C11.4832 28.1336 11.6494 28.1357 11.7868 28.1357C11.9252 28.1357 12.0916 28.1336 12.2656 28.118L13.176 28.0361V27.122V25.5787V25.5625V24.5625H12.176H11.3984H10.3984V25.5625V25.5787V27.122Z"
                    fill="black" stroke="white" stroke-width="2"></path>
                <path
                    d="M13.176 12.2562V11.3418L12.2652 11.2602C12.0929 11.2447 11.9279 11.2422 11.7868 11.2422C11.6467 11.2422 11.4819 11.2447 11.3094 11.2602L10.3984 11.3416V12.2562V13.7995V13.8157V14.8157H11.3984H12.176H13.176V13.8157V13.7995V12.2562Z"
                    fill="black" stroke="white" stroke-width="2"></path>
                <path
                    d="M13.9479 24.095L13.089 24.5978L13.5877 25.4591L14.361 26.7945L14.8418 27.6249L15.6914 27.1787C15.9067 27.0656 16.1194 26.9429 16.3307 26.8056L17.1248 26.2892L16.6523 25.4683L15.8819 24.13L15.3794 23.257L14.51 23.7659L13.9479 24.095Z"
                    fill="black" stroke="white" stroke-width="2"></path>
                <path
                    d="M18.8896 17.1163L19.7118 16.6429L19.2824 15.797C19.1659 15.5674 19.0374 15.3499 18.9045 15.1444L18.3888 14.3472L17.5659 14.8208L16.2277 15.5912L15.3573 16.0923L15.862 16.9605L16.1886 17.5222L16.6891 18.3831L17.5521 17.8863L18.8896 17.1163Z"
                    fill="black" stroke="white" stroke-width="2"></path>
                <path
                    d="M20.2153 19.2279L20.1476 18.3008H19.2179H17.6725H17.6562H16.6562V19.3008V20.0783V21.0783H17.6562H17.6725H19.2179H20.1479L20.2153 20.1508C20.2272 19.9872 20.2294 19.8292 20.2294 19.6895C20.2294 19.5507 20.2273 19.3919 20.2153 19.2279Z"
                    fill="black" stroke="white" stroke-width="2"></path>
                <mask id="path-18-outside-1_7128_55632" maskUnits="userSpaceOnUse" x="0.0625"
                    y="0.0859375" width="24" height="32" fill="black">
                    <rect fill="white" x="0.0625" y="0.0859375" width="24" height="32"></rect>
                    <path
                        d="M21.07 11.4195C21.07 11.4195 21.0279 12.2237 20.2571 12.5661C19.4864 12.9088 18.7157 12.1381 19.8292 11.2814C20.9423 10.4247 20.8567 7.59922 19.8292 6.74253C20.086 7.42765 19.0149 8.36995 18.3305 7.77045C17.645 6.65697 18.3729 4.81554 19.4008 4.30191C18.63 3.70167 16.3603 4.38718 16.3603 5.92902C16.3603 7.15547 16.4031 7.6421 15.3752 7.59927C14.2502 7.55179 15.2044 5.62876 15.3752 5.37191C12.0351 5.84306 13.9193 8.79797 12.6346 8.88324C11.3499 8.9692 12.121 7.59922 12.2066 7.42735C9.9728 7.79884 10.5173 9.19537 8.95997 10.3859C4.96849 11.5954 2.06285 15.3017 2.0625 19.6887C2.06285 25.0577 6.41434 29.4088 11.7829 29.4092C17.1519 29.4088 21.5034 25.0577 21.5037 19.6887C21.5037 18.4482 21.2689 17.2635 20.8456 16.1727C20.9513 14.8667 21.4217 14.0665 21.5792 13.4184C21.9321 11.9683 21.07 11.4195 21.07 11.4195ZM11.7829 28.155C9.44299 28.1547 7.33038 27.2084 5.79644 25.6752C4.26325 24.1409 3.31694 22.0283 3.31664 19.6887C3.31694 17.3485 4.26325 15.2359 5.79644 13.7019C7.33038 12.1687 9.44299 11.2224 11.7829 11.2224C14.1228 11.2224 16.2354 12.1687 17.7698 13.7019C19.303 15.2359 20.2492 17.3485 20.2496 19.6887C20.2492 22.0283 19.303 24.1409 17.7698 25.6752C16.2354 27.2084 14.1228 28.1547 11.7829 28.155Z">
                    </path>
                </mask>
                <path
                    d="M21.07 11.4195C21.07 11.4195 21.0279 12.2237 20.2571 12.5661C19.4864 12.9088 18.7157 12.1381 19.8292 11.2814C20.9423 10.4247 20.8567 7.59922 19.8292 6.74253C20.086 7.42765 19.0149 8.36995 18.3305 7.77045C17.645 6.65697 18.3729 4.81554 19.4008 4.30191C18.63 3.70167 16.3603 4.38718 16.3603 5.92902C16.3603 7.15547 16.4031 7.6421 15.3752 7.59927C14.2502 7.55179 15.2044 5.62876 15.3752 5.37191C12.0351 5.84306 13.9193 8.79797 12.6346 8.88324C11.3499 8.9692 12.121 7.59922 12.2066 7.42735C9.9728 7.79884 10.5173 9.19537 8.95997 10.3859C4.96849 11.5954 2.06285 15.3017 2.0625 19.6887C2.06285 25.0577 6.41434 29.4088 11.7829 29.4092C17.1519 29.4088 21.5034 25.0577 21.5037 19.6887C21.5037 18.4482 21.2689 17.2635 20.8456 16.1727C20.9513 14.8667 21.4217 14.0665 21.5792 13.4184C21.9321 11.9683 21.07 11.4195 21.07 11.4195ZM11.7829 28.155C9.44299 28.1547 7.33038 27.2084 5.79644 25.6752C4.26325 24.1409 3.31694 22.0283 3.31664 19.6887C3.31694 17.3485 4.26325 15.2359 5.79644 13.7019C7.33038 12.1687 9.44299 11.2224 11.7829 11.2224C14.1228 11.2224 16.2354 12.1687 17.7698 13.7019C19.303 15.2359 20.2492 17.3485 20.2496 19.6887C20.2492 22.0283 19.303 24.1409 17.7698 25.6752C16.2354 27.2084 14.1228 28.1547 11.7829 28.155Z"
                    fill="black"></path>
                <path
                    d="M15.0462 15.608C15.0465 15.6076 15.0468 15.6072 15.0472 15.6069L15.0462 15.608ZM14.3498 14.9681L11.6574 17.8442L9.83634 16.5763C9.05096 16.009 8.09712 16.3757 7.65427 16.981L8.46129 17.5714L7.65504 16.9799C7.21072 17.5856 7.15076 18.6032 7.92528 19.1818L10.7893 21.3915L10.841 21.4315L10.8976 21.4643L10.9372 21.4873L10.9547 21.4975L10.9726 21.507L10.9833 21.5126C11.7022 21.9055 12.5032 21.6477 12.9701 21.1546L12.9727 21.152L13.0064 21.119L13.0368 21.0831L16.5499 16.9266C17.0202 16.3875 17.1631 15.4251 16.4662 14.8052L16.4654 14.8044C15.7669 14.1845 14.8285 14.4425 14.3498 14.9681Z"
                    fill="black" stroke="white" stroke-width="2"></path>
            </svg>
            <span class="font-[500] text-[1.1rem]">Slot : 25th June (07:00 - 13:00)</span>
          </div>
          <div class="product-remove-button flex flex-row items-center space-x-10">
            <div class="group flex flex-row items-center space-x-2 cursor-pointer" onclick="removeCartItem(${index})">
              <svg width="30" height="35" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="group-hover:scale-110 group-hover:[filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.4))]">
                    <path
                        d="M6.48534 16.7998C6.04536 16.7998 5.66871 16.6431 5.35539 16.3298C5.04207 16.0165 4.88541 15.6398 4.88541 15.1998V4.80028H4.08545V3.20036H8.08527V2.40039H12.8851V3.20036H16.8849V4.80028H16.0849V15.1998C16.0849 15.6398 15.9283 16.0165 15.6149 16.3298C15.3016 16.6431 14.925 16.7998 14.485 16.7998H6.48534ZM8.08527 13.5999H9.6852V6.40021H8.08527V13.5999ZM11.2851 13.5999H12.8851V6.40021H11.2851V13.5999Z"
                        fill="#1D1B20" />
                </svg>
              <span class="underline">Remove</span>
            </div>
          </div>
        </div>
      </div>
      <div class="border-[1px] border-solid w-[100%]"></div>
    `;

    cartContainer.insertAdjacentHTML('beforeend', html);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  restoreCartFromStorage();
  renderCartTableItems();
});

// Simplified Add to Cart function
function addCurrentProductToCart() {
  const productId = localStorage.getItem('selectedProductId');
  if (!productId) return;

  const quantity = parseInt(document.getElementById('quantityInput').value) || 1;
  const productDatabase = JSON.parse(localStorage.getItem('productDatabase'));
  const product = productDatabase[productId];
  if (!product) return;

  // Get selected package size (default to first if no selector exists)
  const packageSelector = document.querySelector('.package-selector');
  const selectedSize = packageSelector ? packageSelector.value : product.packageSizes[0].size;
  const selectedPackage = product.packageSizes.find(pkg => pkg.size === selectedSize);
  if (!selectedPackage) return;

  const priceValue = parseFloat(selectedPackage.currentPrice.replace(/[^\d.]/g, ''));

  // Check if item exists in cart
  const existingIndex = cartItems.findIndex(item => 
    item.productId === productId && item.size === selectedSize
  );

  if (existingIndex >= 0) {
    // Update quantity if exists
    cartItems[existingIndex].quantity += quantity;
    cartItems[existingIndex].totalPrice = cartItems[existingIndex].quantity * priceValue;
  } else {
    // Add new item if not exists
    cartItems.push({
      productId,
      name: product.productName,
      image: product.productImage,
      size: selectedSize,
      unitPrice: selectedPackage.currentPrice,
      priceValue,
      quantity,
      totalPrice: quantity * priceValue
    });
  }

  // Silent save (no UI updates)
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateCartUI();
}

document.addEventListener('DOMContentLoaded', () => {
    // Check login status
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

    // Update UI based on login status
    updateLoginUI(isLoggedIn, currentUser);

    // Logout functionality
    document.querySelector('.logout')?.addEventListener('click', function(e) {
        e.preventDefault();
        logoutUser();
    });
});

function updateLoginUI(isLoggedIn, user) {
    const newUserSection = document.getElementById('new-user');
    const profileSection = document.getElementById('profile-section');
    const userGreeting = document.getElementById('userGreeting');

    // Toggle sections based on login status
    if (newUserSection) {
        newUserSection.classList.toggle('hidden', isLoggedIn);
    }
    if (profileSection) {
        profileSection.classList.toggle('hidden', !isLoggedIn);
    }

    // Update greeting if available
    if (userGreeting && isLoggedIn) {
        userGreeting.textContent = user.name ? `Hi, ${user.name}` : 'My Profile';
    }
}

function logoutUser() {
    // Update user login status
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    currentUser.isLoggedIn = false;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Set global login flag
    localStorage.setItem('isLoggedIn', 'false');
    
    // Refresh to update UI
    window.location.href = 'http://127.0.0.1:5500/index.html';
}

// Wishlist functions
const wishlistDatabase = JSON.parse(localStorage.getItem('wishlist')) || [];

function toggleWishlist(productId) {
  const product = productDatabase[productId];
  if (!product) return;

  const index = wishlistDatabase.findIndex(item => item.productId === productId);
  
  if (index >= 0) {
    // Remove from wishlist
    wishlistDatabase.splice(index, 1);
    product.status.wishlist = 0;
  } else {
    // Add to wishlist
    const selectedSize = document.querySelector(`[data-product-id="${productId}"] select`).value;
    wishlistDatabase.push({
      productId,
      size: selectedSize,
      addedAt: new Date().toISOString()
    });
    product.status.wishlist = 1;
  }
  
  saveWishlistToStorage();
  saveProductStatusToStorage(productId);
}

function saveWishlistToStorage() {
  localStorage.setItem('wishlist', JSON.stringify(wishlistDatabase));
}

function getWishlistProducts() {
  return wishlistDatabase.map(item => {
    const product = productDatabase[item.productId];
    return {
      ...product,
      selectedSize: item.size
    };
  });
}

function saveForLater(productId) {
    if (!productId) {
        alert('No product selected');
        return;
    }

    const product = productDatabase[productId];
    if (!product) {
        alert('Product not found');
        return;
    }

    // Get selected size from localStorage or use first available
    const selectedSize = localStorage.getItem('selectedPackageSize') || product.packageSizes[0].size;
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Check if already in wishlist
    if (wishlist.some(item => item.productId === productId)) {
        alert('This item is already in your wishlist!');
        return;
    }

    // Add to wishlist
    wishlist.push({
        productId,
        size: selectedSize,
        addedAt: new Date().toISOString()
    });
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    // Update product status
    product.status.wishlist = 1;
    saveProductStatusToStorage(productId);

    // Visual feedback
    const button = event.currentTarget;
    button.classList.add('bg-green-600');
    setTimeout(() => button.classList.remove('bg-green-600'), 300);

    alert('Item saved to wishlist!');
}

// In your initialization code (should run when page loads)
function initializeWishlist() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Update heart icons for wishlisted products
    wishlist.forEach(item => {
        const productCard = document.querySelector(`[data-product-id="${item.productId}"]`);
        if (productCard) {
            const heartIcon = productCard.querySelector('.fa-heart');
            if (heartIcon) {
                heartIcon.classList.remove('fa-regular');
                heartIcon.classList.add('fa-solid');
            }
        }
    });
}

// Call this when page loads
document.addEventListener('DOMContentLoaded', initializeWishlist);

