const shoppingCart =[
    {
        id: 1,
        name: "HP laptop",
        price: 250000,
        quantity: 1,
        Image: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg",
    },
    {
        id: 2,
        name: "HP Notebook",
        price: 200000,
        quantity: 1,
        Image: "https://clipart-library.com/images/AibKjAXbT.png",
    },
    {
        id: 3,
        name: "Dell laptop",
        price: 150000,
        quantity: 1,
        Image: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg",
    },
    {
        id: 4,
        name: "Lenovo laptop",
        price: 280000,
        quantity: 1,
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCA1p4fOzhLKgSgiOpIxDdR_CnAgxKimygw5I6reISQ&s",
    },
    {
        id: 5,
        name: "Asus laptop",
        price: 350000,
        quantity: 1,
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSStsflt0vOhuh9CmQRcJEVLry4JoT3x6Ft41KXOuau&s",
    },
    ];
    
    //select your shopping cart container
    const shoppingContainer = document.getElementById("checkoutCon");
    
    const totalPrice = document.getElementById('totalPrice')
    
    function deleteProduct(event){
        let id = event.target.id;
        id = parseInt(id);
    
    
        const product = shoppingCart.find((product)=> product.id === id);
        const index = shoppingCart.indexOf(product);
        shoppingCart.splice(index, 1)
        shoppingContainer.innerHTML = "";
        displayShoppingCart();
    }
    
    function handleIncrement(event){
        const id = parseInt(event.target.id);
        const product = shoppingCart.find((product)=> product.id === id);
        let quantityTag = document.getElementById(product.name);
        product.quantity = product.quantity + 1;
        quantityTag.innerHTML = product.quantity;
        totality()
    
    }

    function handleDecrement(event){
        const id = parseInt(event.target.id);
        const product = shoppingCart.find((product)=> product.id === id);
        let quantityTag = document.getElementById(product.name);
        product.quantity = (product.quantity > 1) ? product.quantity - 1 : product.quantity;
        quantityTag.innerHTML = product.quantity;
        totality()
    
    }
    
    function totality(){
        let totalTag = document.getElementById("totalPrice");
        let totalPrice = 0;
        // loop through product obj and get quantity/price
        shoppingCart.forEach((product) => {
            const price = product.price;
            const quantity = product.quantity;
            const productPrice = price * quantity;
            totalPrice += productPrice
        });
        totalTag.innerHTML = `N${totalPrice}`
    }
    
    function displayShoppingCart(){
                //loop through shopping cart items
            for (product of shoppingCart) {
                const productContainer= document.createElement("div");
                productContainer.setAttribute('class','card');
    
                //create product image
                const productImage = document.createElement("img");
                productImage.setAttribute("src", product.Image);
                productImage.setAttribute("alt", product.name);
    
                //add product image to product container
                productContainer.appendChild(productImage);
    
                //add product container to shopping container
                shoppingContainer.appendChild(productContainer);
    
                //create product info container 
                const productInfo =document.createElement("div");
                productInfo.setAttribute("class", "productInfo");
                const topCon =document.createElement("div");
                topCon.setAttribute("class","topCon");
    
                //create product name and delete btn
                const productName = document.createElement('h3');
                productName.innerHTML = product.name;
                const deleteBtn = document.createElement('button');
                deleteBtn.setAttribute("id", product.id)
                deleteBtn.innerHTML ="Delete";
                //add event listener to delete btn
                deleteBtn.addEventListener('click', (event) => deleteProduct (event));
                
                //add product name and delete Btn
                topCon.appendChild(productName);
                topCon.appendChild(deleteBtn);
    
                //add topCon to product info 
                productInfo.appendChild(topCon)
    
                //add product info to product con
                productContainer.appendChild(productInfo)
    
                //create product price
                const productPrice = document.createElement("p");
                productPrice.setAttribute("class", "price");
                productPrice.innerHTML = `Price: ${product.price}`;
    
                //add product price to product info container
                productInfo.appendChild(productPrice)
    
                //create button container
                const btnContainer = document.createElement("div");
                btnContainer.setAttribute("class", "btnCon");
    
                //create the increment and decrement
                const increment = document.createElement("button");
                increment.innerHTML ="+";
                increment.setAttribute("id", product.id);
                increment.addEventListener("click", (event) => handleIncrement(event))
    
    
                const decrement = document.createElement("button");
                decrement.innerHTML ="-";
                decrement.setAttribute("id",product.id)
                decrement.addEventListener("click", (event) => handleDecrement(event))
    
                //create quantity display 
                const quantity = document.createElement("p")
                quantity.innerHTML = product.quantity;
                quantity.setAttribute("id", product.name);
    
               
                //add increment,decrement and quantity to btn container
                btnContainer.appendChild(increment)
                btnContainer.appendChild(quantity)
                btnContainer.appendChild(decrement)
                
    
                //add btn container to productInfo container
                productInfo.appendChild(btnContainer)
    
                //add product container to shopping container
                shoppingContainer.appendChild(productContainer)
    
                totality()
                
            }
    
            
    }
    displayShoppingCart()
    
        
      