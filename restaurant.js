document.addEventListener("DOMContentLoaded", () => {
  const detailContainer = document.getElementById("restaurant-detail");
  if (!detailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const restaurantId = urlParams.get("id");

  const restaurant = restaurantsData.find(r => r.id === restaurantId);

  if (!restaurant) {
    detailContainer.innerHTML = `
      <h2>Restaurant Not Found</h2>
      <p>The selected restaurant does not exist.</p>
      <a href="restaurants.html" class="btn">Back to Restaurants</a>
    `;
    return;
  }

  detailContainer.innerHTML = `
    <h2>${restaurant.name}</h2>
    <p><strong>Location:</strong> ${restaurant.location} | <strong>Category:</strong> ${restaurant.category}</p>
    <p><strong>Rating:</strong> ⭐ ${restaurant.rating}</p>
    <p class="subtitle">${restaurant.description}</p>
    <hr style="margin: 20px 0; border: none; border-top: 1px solid var(--border);">
    
    <h3>Menu Items</h3>
    <div class="grid-container" style="margin-top: 16px;">
      ${restaurant.menu.map(item => `
        <div class="card">
          <h4>${item.name}</h4>
          <p>${item.description}</p>
          <p><strong>Food Price:</strong> ৳${item.price}</p>
          <p><strong>Delivery Fee:</strong> ৳${PLATFORM_CONFIG.deliveryFeeBDT}</p>
          <p><strong>Total:</strong> ৳${item.price + PLATFORM_CONFIG.deliveryFeeBDT}</p>
        </div>
      `).join('')}
    </div>
  `;
});