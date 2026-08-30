document.addEventListener("DOMContentLoaded", () => {
  const listContainer = document.getElementById("restaurants-list");
  if (!listContainer) return;

  if (typeof restaurantsData === "undefined" || !restaurantsData.length) {
    listContainer.innerHTML = "<p>No restaurants currently available.</p>";
    return;
  }

  const deliveryFee = Number(PLATFORM_CONFIG?.deliveryFeeBDT || 50);

  listContainer.innerHTML = restaurantsData.map(restaurant => `
    <article class="restaurant-card">
      <div class="card-img-wrapper">
        <img
          src="${restaurant.image}"
          alt="${restaurant.name}"
          class="card-img"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'"
        >
        <span class="card-rating-badge">⭐ ${restaurant.rating}</span>
      </div>

      <div class="card-content">
        <h3 class="card-title">${restaurant.name}</h3>
        <p class="card-meta">📍 ${restaurant.location} • 🍽️ ${restaurant.category}</p>
        <p class="card-desc">${restaurant.description}</p>

        <div class="card-footer">
          <span class="card-delivery-tag">৳${deliveryFee} Delivery Fee</span>

          <button
            type="button"
            class="btn btn-primary menu-open-btn"
            data-restaurant-id="${restaurant.id}"
          >
            View Menu
          </button>
        </div>
      </div>
    </article>
  `).join("");
});
