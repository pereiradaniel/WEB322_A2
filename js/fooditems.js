var items = [
    {
        "name": "Spaghetti con vongole",
        "price": 16,
        "imgName": "vongole",
        "topPackage": true
    },
    {
        "name": "Pasta alle sarde",
        "price": 13,
        "imgName": "sarde",
        "topPackage": true
    },
    {
        "name": "Pesce spada arrosto",
        "price": 20,
        "imgName": "spada",
        "topPackage": true
    },
    {
        "name": "Pasta alla Norma",
        "price": 15,
        "imgName": "norma",
        "topPackage": true
    },
    {
        "name": "Roast beef",
        "price": 22,
        "imgName": "beef",
        "topPackage": false
    },
    {
        "name": "Grilled cheese",
        "price": 5,
        "imgName": "cheese",
        "topPackage": false
    },
    {
        "name": "Hamburger",
        "price": 10,
        "imgName": "hamburger",
        "topPackage": false
    },
    {
        "name": "Bacon and eggs",
        "price": 13,
        "imgName": "baconeggs",
        "topPackage": false
    }
]

window.addEventListener("load", function() {
    console.log("loaded");
    
    topMealPackages = document.getElementById("top-meal-packages");
    
    // Add top meal packages to page
    for (var i = 0; i < items.length; i++) {
        
        if (items[i].topPackage === true) {
            // Create new div for food item
            var currentItem = document.createElement("div");

            // Add image
            var itemImg = document.createElement("img");
            itemImg.src = items[i].imgName + ".jpg";
            itemImg.classList.add("item-image");
            currentItem.appendChild(itemImg);

            // Add name
            var nameField = document.createElement('h3');
            var itemName = document.createTextNode(items[i].name);
            nameField.appendChild(itemName);
            currentItem.appendChild(nameField);
            
            // Add price
            var priceField = document.createElement('h4');
            var itemPrice = document.createTextNode("€" + items[i].price);
            priceField.appendChild(itemPrice);
            currentItem.appendChild(priceField);

            currentItem.classList.add("food-item");
            topMealPackages.appendChild(currentItem);
        }
    };
    
    // Add meal packages to list
    for (var i = 0; i < items.length ; i++) {
        // Create new div for food item
        var currentItem = document.createElement("div");

        // Add image
        var itemImg = document.createElement("img");
        itemImg.src = items[i].imgName + ".jpg";
        itemImg.classList.add("item-image");
        currentItem.appendChild(itemImg);

        // Add name
        var nameField = document.createElement('h3');
        var itemName = document.createTextNode(items[i].name);
        nameField.appendChild(itemName);
        currentItem.appendChild(nameField);
        
        // Add price
        var priceField = document.createElement('h4');
        var itemPrice = document.createTextNode("€" + items[i].price);
        priceField.appendChild(itemPrice);
        currentItem.appendChild(priceField);

        currentItem.classList.add("food-item");
        topMealPackages.appendChild(currentItem);
    };

});