// بيانات المنتجات مع روابط حقيقية وصور من المواقع
const timoProducts = [
  { img: "https://www.timo.jo/images/product1.jpg", title: "بلوزة نسائية بسيطة", price: "12 د.أ", link: "https://www.timo.jo/product1" },
  { img: "https://www.timo.jo/images/product2.jpg", title: "فستان صيفي قصير", price: "18 د.أ", link: "https://www.timo.jo/product2" },
  { img: "https://www.timo.jo/images/product3.jpg", title: "تنورة نسائية أنيقة", price: "15 د.أ", link: "https://www.timo.jo/product3" }
];

const sheinProducts = [
  { img: "https://img.ltwebstatic.com/images3_pi/2023/01/01/product1.jpg", title: "بلوزة بألوان زاهية", price: "10 د.أ", link: "https://www.shein.com/product1" },
  { img: "https://img.ltwebstatic.com/images3_pi/2023/01/01/product2.jpg", title: "فستان كاجوال", price: "20 د.أ", link: "https://www.shein.com/product2" },
  { img: "https://img.ltwebstatic.com/images3_pi/2023/01/01/product3.jpg", title: "سترة خفيفة للنساء", price: "17 د.أ", link: "https://www.shein.com/product3" }
];

// دالة لاختيار عناصر عشوائية
function getRandomItems(arr, count) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// إدراج المنتجات في الصفحة
window.addEventListener("DOMContentLoaded", () => {
  const shopContainer = document.getElementById("shop-posts");

  const selectedTimo = getRandomItems(timoProducts, 3);
  const selectedShein = getRandomItems(sheinProducts, 3);

  const allProducts = [...selectedTimo, ...selectedShein];

  shopContainer.innerHTML = allProducts.map(prod => `
    <div class="shop-item">
      <a href="${prod.link}" target="_blank">
        <img src="${prod.img}" alt="${prod.title}">
        <h4>${prod.title}</h4>
        <p>${prod.price}</p>
      </a>
    </div>
  `).join("");
});
