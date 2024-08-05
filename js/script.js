
let productNameInput = document.getElementById('productNameInput');
let productPriceInput = document.getElementById('productPriceInput');
let productCategoryInput = document.getElementById('productCategoryInput');
let productDescriptionInput = document.getElementById('productDescriptionInput');
let buttonUpdate = document.getElementById('btnProduct');
let mood ="create";
let temp;

let productList=[];

if(localStorage.getItem('products')!=null)
{
    productList=JSON.parse(localStorage.getItem("products"));
    displayProducts()
}


function addProduct(){
    
    let product={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        desc:productDescriptionInput.value
    }
    if(mood === "create"){
        productList.push(product);
    }
    else{
        productList[temp]=product;
        mood = "create";
        buttonUpdate.innerHTML="create"

    }
    localStorage.setItem("products",JSON.stringify(productList));
    
    displayProducts();
    console.log(product);
    clearForm();
    
}
function clearForm(){
    
    productNameInput.value = ""
    productPriceInput.value ="";
    productCategoryInput.value ="";
    productDescriptionInput.value ="";

}
function displayProducts(){
    let box=``;
    for(let i=0 ; i < productList.length;i++){
        box +=`<tr>
                <td>${i}</td>
                <td>${productList[i].name}</td>
                <td>${productList[i].price}</td>
                <td>${productList[i].category}</td>
                <td>${productList[i].desc}</td>
                <td><button onclick="deleteProduct(${i});" class="btn btn-outline-danger btn-sm">Delete</button></td>
                <td><button  onclick="updateProduct(${i});"class="btn btn-outline-warning btn-sm">Update</button></td>
            </tr>`
    }
    document.getElementById('TableBody').innerHTML = box;

}
function deleteProduct(deletedIndex){
    productList.splice(deleteProduct,1);
    localStorage.setItem("products",JSON.stringify(productList));
    displayProducts();

}
function updateProduct(i){
    productNameInput.value = productList[i].name;
    productPriceInput.value = productList[i].price;
    productCategoryInput.value = productList[i].category;
    productDescriptionInput.value=productList[i].desc;

    buttonUpdate.innerHTML= "Update";
    mood ='update';
    temp =i;
    
}
function searchProduct(term){
    let box=``;
    for(let i=0 ; i < productList.length;i++)
        {
            if(productList[i].name.toLowerCase().includes(term.toLowerCase())===true);{
                box +=`<tr>
                <td>${i}</td>
                <td>${productList[i].name}</td>
                <td>${productList[i].price}</td>
                <td>${productList[i].category}</td>
                <td>${productList[i].desc}</td>
                <td><button onclick="deleteProduct(${i});" class="btn btn-outline-danger btn-sm">Delete</button></td>
                <td><button onclick="updateProduct();" class="btn btn-outline-warning btn-sm">Update</button></td>
            </tr>`
            }
        }
        document.getElementById('TableBody').innerHTML = box;


}