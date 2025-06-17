const cartList = document.getElementById("cart-list");
const totalPrice = document.getElementById("total-price");

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <span>${item.name} - ${item.price} บ.</span>
      <button onclick="removeItem(${index})">ลบ</button>
    `;
    cartList.appendChild(div);
  });

  totalPrice.textContent = `รวมทั้งหมด: ${total} บ.`;
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

loadCart();
