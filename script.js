let products = [];
let categories = new Set();

function addproductlist() {
    let id = document.getElementById('productid').value;
    let name = document.getElementById('productname').value;
    let price = document.getElementById('productprice').value;
    let category = document.getElementById('productcategory').value;

    if (!id || !name || !price || !category) {
        alert("Please fill all fields!");
        return;
    }

    let product = { id, name, price, category };
    products.push(product);

    if (!categories.has(category)) {
        categories.add(category);
        let option = document.createElement('option');
        option.value = category;
        option.text = category;
        document.getElementById('categoryDropdown').appendChild(option);
    }

    displayproducts(products);

    document.getElementById('productid').value = "";
    document.getElementById('productname').value = "";
    document.getElementById('productprice').value = "";
    document.getElementById('productcategory').value = "";
}

function displayproducts(list) {
    const tbody = document.getElementById("producttablebody");
    tbody.innerHTML = "";
    list.forEach(p => {
        let row = `<tr>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.price}</td>
            <td>${p.category}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function filterbycategory() {
    let selected = document.getElementById('categoryDropdown').value;
    if (selected === "all") {
        displayproducts(products);
    } else {
        let filtered = products.filter(p => p.category === selected);
        displayproducts(filtered);
    }
}
