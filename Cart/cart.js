function getCart() {
    let cart = JSON.parse(localStorage.getItem("cartList"));
    let total = 0;

    const container = document.getElementById("cartProducts");
    container.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
        container.innerHTML += `
            <tr style="margin: 10px;">
                <td class="title-txt">${cart[i].title}</td>
                <td>$${cart[i].price}</td>
                <td style="text-align: center;"><img src="${cart[i].image}" style="max-height: 30px;"></td>
                <td style="text-align: center;"><button onclick="removeProduct(${i})" class="rmv-btn"><i class="fa fa-trash"></i></button></td>
            </tr>
        `;
        total += parseFloat(cart[i].price);
    }
    total = total.toFixed(2);
    const totalDiv = document.getElementById("totals");
    totalDiv.innerHTML="";
    totalDiv.innerHTML = `Total: $${total}`;
}

function removeProduct(itemPosition) {
    let cart = JSON.parse(localStorage.getItem("cartList"));
    console.log(cart[itemPosition]);
    cart.splice(itemPosition, 1);
    localStorage.setItem("cartList", JSON.stringify(cart));
    getCart();  
}

function proceedToDetails(){
    console.log("Här");
    window.location.href="../Order/order.html"
}

getCart();