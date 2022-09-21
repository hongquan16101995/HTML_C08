let products = ["Sony Xperia", "Iphone 14", "Samsung Galaxy"]

function displayAllProduct() {
    let table = "<table>"
    table += "<tr>"
    table += "<td><b>Product name</b></td>"
    table += "<td colspan='2' style='color: red; text-align: right'>" + products.length + " products</td>"
    table += "</tr>"
    for (let i = 0; i < products.length; i++) {
        table += "<tr>"
        table += "<td>" + products[i] + "</td>"
        table += "<td><button onclick='updateProduct(" + i + ")'>Edit</button></td>"
        table += "<td><button onclick='deleteProduct(" + i + ")'>Delete</button></td>"
        table += "</tr>"
    }
    table += "</table>"
    document.getElementById("display").innerHTML = table
}

function createProduct() {
    let newProduct = document.getElementById("input").value
    products.push(newProduct)
    document.getElementById("input").value = ""
    displayAllProduct()
}

function deleteProduct(index) {
    if (confirm("Bạn chắc chắc muốn xóa sản phẩm này?")) {
        products.splice(index, 1)
        displayAllProduct()
    }
}

function updateProduct(index) {
    let updateProduct = prompt("Nhập tên sản phẩm muốn sửa: ")
    if (updateProduct !== "" && updateProduct != null ) {
        products[index] = updateProduct
    }
    displayAllProduct()
}

displayAllProduct()
