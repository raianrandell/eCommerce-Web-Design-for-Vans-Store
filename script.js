// Get products data from JSON file
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    // Get products section
    const productsSection = document.querySelector('.products .row');

    // Generate HTML for each product
    data.forEach((product, index) => {
      // Add title every three cards
      if (index % 6 === 0) {
        let titleHTML = '';
        if (index === 0) {
          titleHTML = `
          <br><br><br id="slip-on">
            <div class="col-12">
              <h4 class="categories" ><b>Slip On</b></h4>
            </div>
          `;
        } else if (index === 6) {
          titleHTML = `
            <div class="col-12">
            <br id="old-skool"><br><br>
              <h4 class="categories"><b>Old Skool</b></h4>
            </div>
          `;
        } else if (index === 12) {
          titleHTML = `
            <div class="col-12">
            <br id="authentic"><br><br>
              <h4 class="categories"><b>Authentic</b></h4>
            </div>
          `;
        }
        productsSection.innerHTML += titleHTML;
      }

      const productHTML = `
        <div class="col-md-4">
          <div class="product" data-bs-toggle="modal" data-bs-target="#productModal" data-id="${product.id}">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3 class="prod" id="prod-name">${product.title}</h3>
            <p class="prod">${product.description}</p>
            <p class="prod" id="prod-price">Price: $${product.price}.00</p>
          </div>
        </div>
      `;
      // Add product HTML to products section
      productsSection.innerHTML += productHTML;
    });

    function generateSizeRadioButtons(sizes, productId) {
      let radioButtonsHTML = '';
      sizes.forEach((size, index) => {
        const sizeId = size.replace(/\s/g, ''); // Remove whitespace from size for ID
        radioButtonsHTML += `
          <input type="radio" id="size_${productId}_${sizeId}" name="size_${productId}" value="${size}">
          <label for="size_${productId}_${sizeId}">${size}</label><br>
        `;
        // Add a line break after the last radio button
        if (index === sizes.length - 1) {
          radioButtonsHTML += '<br>';
        }
      });
      return radioButtonsHTML;
    }
    
    

    // Get product details modal
    const productModal = document.querySelector('#productModal');
    // Get product details modal title
    const productModalTitle = document.querySelector('#productModalLabel');
    // Get product details modal image
    const productModalImage = document.querySelector('#productModalImage');
    // Get product details modal description
    const productModalDescription = document.querySelector('#productModalDescription');
    // Get product details modal price
    const productModalPrice = document.querySelector('#productModalPrice');
    // Get product details modal stocks
    const productModalStocks = document.querySelector('#productModalStocks');

    // Add event listeners to product divs
    const productDivs = document.querySelectorAll('.product');
    productDivs.forEach(productDiv => {
      productDiv.addEventListener('click', () => {
        // Get product ID from data-id attribute
        const productID = productDiv.getAttribute('data-id');
        // Find product in data array
        const product = data.find(product => product.id === productID);
        // Set product details in modal
        productModalTitle.innerHTML = product.title;
        productModalImage.src = product.image;
        productModalImage.alt = product.title;
        productModalDescription.innerHTML = product.description;
        productModalPrice.innerHTML = `Price: $${product.price}.00`;
        productModalStocks.innerHTML = `Stocks: ${product.stocks}`;

        // Clear existing radio buttons
        productModalSizesContainer.innerHTML = '';

        // Create title element for sizes
        const sizesTitle = document.createElement('p');
        sizesTitle.textContent = 'Sizes:';
        productModalSizesContainer.appendChild(sizesTitle);
      
       // Generate radio buttons for sizes
        const sizeRadioButtonsHTML = generateSizeRadioButtons(product.sizes, product.id);
        productModalSizesContainer.innerHTML += sizeRadioButtonsHTML;
      });
    });
  });
 
    // Get product search input and filter button
  const productSearchInput = document.querySelector('#productSearchInput');
  const productFilterButton = document.querySelector('#productFilterButton');

  // Add event listener to product filter button
  productFilterButton.addEventListener('click', () => {
    filterProducts();
  });

  // Add event listener to product search input
  productSearchInput.addEventListener('input', () => {
    
  });

  // Function to filter products based on search input
  function filterProducts() {
    const searchTerm = productSearchInput.value.toLowerCase();

    // Get product divs
    const productDivs = document.querySelectorAll('.product');

    productDivs.forEach(productDiv => {
      const productTitle = productDiv.querySelector('h3').textContent.toLowerCase();
      const productDescription = productDiv.querySelector('p:nth-child(3)').textContent.toLowerCase();

      if (productTitle.includes(searchTerm) || productDescription.includes(searchTerm)) {
        productDiv.style.display = 'block'; // Show matching product
        productDiv.classList.add('zoomIn'); // Apply zoom-in animation
      } else {
        productDiv.style.display = 'none'; // Hide non-matching product
        productDiv.classList.remove('zoomIn'); // Remove zoom-in animation class
      }
    });
  }

 function Login(){
    window.location.href = "index.html";
  }

function login() {
  window.location.href = "login.html";
}

function addToCart(){
  window.location.href = "cart.html";
}

// add to cart prompt
const addCart = document.getElementById("addCartPrompt");

addCart.addEventListener("click", function() {
  alert("Added to cart!");
});


//Display the products in cart tab

function storedProducts(event){
  event.preventDefault();
}






