// ตัวอย่างเมนูสินค้า
const products = [
  { id: 1, name: "ชาไทย", price: 25, image: "assets/cha-thai.png" },
  { id: 2, name: "กาแฟเย็น", price: 30, image: "assets/cha-thai.png" },
  { id: 3, name: "นมชมพู", price: 28, image: "assets/cha-thai.png" },
  { id: 4, name: "โกโก้", price: 30, image: "assets/cha-thai.png" },
  { id: 5, name: "ชาเขียว", price: 30, image: "assets/cha-thai.png" },
  { id: 6, name: "น้ำผึ้งมะนาว", price: 35, image: "assets/cha-thai.png" },
  { id: 7, name: "โอเลี้ยง", price: 20, image: "assets/cha-thai.png" },
  { id: 8, name: "อเมริกาโน่", price: 40, image: "assets/cha-thai.png" },
  { id: 9, name: "ลาเต้", price: 45, image: "assets/cha-thai.png" },
  { id: 10, name: "เอสเพรสโซ่", price: 40, image: "assets/cha-thai.png" }
];

const menuList = document.getElementById("menu-list");
const cartCount = document.getElementById("cart-count");

// โหลดสินค้า
products.forEach(product => {
  const item = document.createElement("div");
  item.className = "card"; // ใช้ class card
  item.innerHTML = `
    <div style="position:relative">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="info">
      <h3>${product.name}</h3>
      <div class="meta">
        <span>⭐ 4.5</span>
        <span>📍 2km</span>
        <span>⏱ 30min</span>
      </div>
      <div class="price">${product.price} บาท</div>
      <button onclick="addToCart(${product.id})">เพิ่มลงตะกร้า</button>
    </div>
  `;
  menuList.appendChild(item);
});

// เพิ่มลงตะกร้า
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === productId);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  cartCount.textContent = cart.length;
}

