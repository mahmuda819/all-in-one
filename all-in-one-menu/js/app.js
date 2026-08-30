// Shared Application Logic
const WHATSAPP_NUMBER = "8801779677819";

console.log("All in One App Initialized.");
console.log(`Delivery Area: ${PLATFORM_CONFIG.serviceArea} | Flat Delivery Charge: ৳${PLATFORM_CONFIG.deliveryFeeBDT}`);

let orderCart = { restaurantId: null, items: [] };
let activeRestaurant = null;

function money(value) {
  return `৳${Number(value).toFixed(0)}`;
}

function getRestaurant(restaurantId) {
  return restaurantsData.find(item => item.id === restaurantId) || null;
}

function buildMenuModal() {
  let modal = document.getElementById("restaurant-menu-modal");
  if (modal) return modal;

  modal = document.createElement("div");
  modal.id = "restaurant-menu-modal";
  modal.className = "menu-modal";
  document.body.appendChild(modal);
  return modal;
}

function renderRestaurantMenu() {
  const modal = document.getElementById("restaurant-menu-modal");
  if (!modal || !activeRestaurant) return;

  const cartItemMap = new Map(orderCart.items.map(item => [item.id, item]));

  modal.innerHTML = `
    <div class="menu-modal-backdrop" data-menu-close></div>
    <div class="menu-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="menu-modal-title">
      <button type="button" class="menu-modal-close" aria-label="Close menu" data-menu-close>&times;</button>

      <div class="menu-modal-header">
        <span class="badge">Restaurant Menu</span>
        <h2 id="menu-modal-title">${activeRestaurant.name}</h2>
        <p>${activeRestaurant.category} • ${activeRestaurant.location}</p>
      </div>

      <div class="menu-items-list">
        ${activeRestaurant.menu.map(item => {
          const qty = cartItemMap.get(item.id)?.quantity || 0;
          return `
            <article class="menu-item-card">
              <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description || ""}</p>
                <strong>${money(item.price)}</strong>
              </div>
              <div class="menu-item-actions">
                <div class="qty-control" aria-label="Quantity for ${item.name}">
                  <button type="button" data-cart-action="decrease" data-item-id="${item.id}" aria-label="Decrease ${item.name}">−</button>
                  <span>${qty}</span>
                  <button type="button" data-cart-action="increase" data-item-id="${item.id}" aria-label="Increase ${item.name}">+</button>
                </div>
                <button type="button" class="btn btn-primary menu-order-btn" data-cart-action="order-now" data-item-id="${item.id}">
                  Order
                </button>
              </div>
            </article>
          `;
        }).join("")}
      </div>

      <div class="cart-panel">
        <h3>Your Order</h3>
        <div id="cart-lines"></div>
        <div class="cart-total-line"><span>Food Subtotal</span><strong id="cart-subtotal">৳0</strong></div>
        <div class="cart-total-line"><span>Delivery Charge</span><strong id="cart-delivery">৳0</strong></div>
        <div class="cart-total-line grand"><span>Grand Total</span><strong id="cart-grand-total">৳0</strong></div>
        <div class="cart-actions">
          <button type="button" class="btn" id="clear-cart-btn">Clear Order</button>
          <button type="button" class="btn btn-primary" id="whatsapp-order-btn" ${orderCart.items.length ? "" : "disabled"}>Order on WhatsApp</button>
        </div>
      </div>
    </div>
  `;

  const subtotal = orderCart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = orderCart.items.length ? Number(PLATFORM_CONFIG.deliveryFeeBDT) : 0;
  const grandTotal = subtotal + delivery;

  const linesEl = modal.querySelector("#cart-lines");
  linesEl.innerHTML = orderCart.items.length
    ? orderCart.items.map(item => `
        <div class="cart-line">
          <span class="cart-line-name">${item.name} × ${item.quantity}</span>
          <span class="cart-line-meta">${money(item.price * item.quantity)}</span>
        </div>
      `).join("")
    : '<p class="cart-empty">No items added yet. Choose items from the menu above.</p>';

  modal.querySelector("#cart-subtotal").textContent = money(subtotal);
  modal.querySelector("#cart-delivery").textContent = money(delivery);
  modal.querySelector("#cart-grand-total").textContent = money(grandTotal);
}
 
function updateRestaurantMenuUI() {
  const modal = document.getElementById("restaurant-menu-modal");
  if (!modal) return;

  // Update quantity display without re-rendering the whole modal
  activeRestaurant.menu.forEach(item => {
    const cartItem = orderCart.items.find(cart => cart.id === item.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    const qtyControl = modal.querySelector(
      `[data-item-id="${item.id}"]`
    )?.closest(".menu-item-actions");

    if (qtyControl) {
      const qtyDisplay = qtyControl.querySelector(".qty-control span");

      if (qtyDisplay) {
        qtyDisplay.textContent = quantity;
      }
    }
  });

  // Update cart summary
  const subtotal = orderCart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const delivery = orderCart.items.length
    ? Number(PLATFORM_CONFIG.deliveryFeeBDT)
    : 0;

  const grandTotal = subtotal + delivery;

  const linesEl = modal.querySelector("#cart-lines");

  if (linesEl) {
    linesEl.innerHTML = orderCart.items.length
      ? orderCart.items.map(item => `
          <div class="cart-line">
            <span class="cart-line-name">
              ${item.name} × ${item.quantity}
            </span>

            <span class="cart-line-meta">
              ${money(item.price * item.quantity)}
            </span>
          </div>
        `).join("")
      : `
          <p class="cart-empty">
            No items added yet. Choose items from the menu above.
          </p>
        `;
  }

  const subtotalEl = modal.querySelector("#cart-subtotal");
  const deliveryEl = modal.querySelector("#cart-delivery");
  const grandTotalEl = modal.querySelector("#cart-grand-total");
  const whatsappBtn = modal.querySelector("#whatsapp-order-btn");

  if (subtotalEl) subtotalEl.textContent = money(subtotal);
  if (deliveryEl) deliveryEl.textContent = money(delivery);
  if (grandTotalEl) grandTotalEl.textContent = money(grandTotal);

  if (whatsappBtn) {
    whatsappBtn.disabled = orderCart.items.length === 0;
  }
}

function setCartQuantity(itemId, quantity) {
  if (!activeRestaurant) return;

  const item = activeRestaurant.menu.find(menuItem => menuItem.id === itemId);
  if (!item || item.available === false) return;

  const modal = document.getElementById("restaurant-menu-modal");
  const dialog = modal?.querySelector(".menu-modal-dialog");
  const pageScrollY = window.scrollY;
  const modalScrollTop = modal?.scrollTop || 0;
  const dialogScrollTop = dialog?.scrollTop || 0;

  const existing = orderCart.items.find(cartItem => cartItem.id === itemId);

  if (quantity <= 0) {
    orderCart.items = orderCart.items.filter(cartItem => cartItem.id !== itemId);
  } else if (existing) {
    existing.quantity = quantity;
  } else {
    orderCart.items.push({
      id: item.id,
      name: item.name,
      price: Number(item.price),
      quantity
    });
  }

  updateRestaurantMenuUI();

}

function addCartItem(itemId) {
  const existing = orderCart.items.find(item => item.id === itemId);
  setCartQuantity(itemId, (existing?.quantity || 0) + 1);
}

function openRestaurantMenu(restaurantId) {
  const restaurant = getRestaurant(restaurantId);
  if (!restaurant) return;

  if (orderCart.restaurantId && orderCart.restaurantId !== restaurant.id && orderCart.items.length) {
    const shouldClear = window.confirm(
      "Your current order is from another restaurant. Clear it and start a new order?"
    );
    if (!shouldClear) return;
    orderCart = { restaurantId: restaurant.id, items: [] };
  } else if (!orderCart.restaurantId) {
    orderCart.restaurantId = restaurant.id;
  }

  activeRestaurant = restaurant;
  const modal = buildMenuModal();
  renderRestaurantMenu();
  modal.classList.add("is-open");
  document.body.classList.add("menu-modal-open");

  modal.querySelector(".menu-modal-close")?.focus();
}

function closeRestaurantMenu() {
  const modal = document.getElementById("restaurant-menu-modal");
  if (!modal) return;
  modal.classList.remove("is-open");
  document.body.classList.remove("menu-modal-open");
}

async function sendDirectItemOrder(itemId) {
  const restaurant = activeRestaurant;
  if (!restaurant) return;

  const item = restaurant.menu.find(menuItem => menuItem.id === itemId);
  if (!item || item.available === false) return;

  // Use the quantity currently selected with +/-.
  // If it is still 0, order exactly one item without changing the UI quantity.
  const selected = orderCart.items.find(cartItem => cartItem.id === itemId);
  const quantity = selected?.quantity || 1;

  const subtotal = Number(item.price) * quantity;
  const delivery = Number(PLATFORM_CONFIG.deliveryFeeBDT);
  const grandTotal = subtotal + delivery;

  const message = [
    "Assalamu Alaikum,",
    "I would like to place an order.",
    "",
    `Restaurant: ${restaurant.name}`,
    "",
    "Items:",
    `1. ${item.name} x ${quantity} — ${money(subtotal)}`,
    "",
    `Food Subtotal: ${money(subtotal)}`,
    `Delivery Charge: ${money(delivery)}`,
    `Grand Total: ${money(grandTotal)}`,
    "",
    `Service Area: ${PLATFORM_CONFIG.serviceArea}`,
    "Please confirm my order."
  ].join("\n");

  await openWhatsAppOrderWithLocation(WHATSAPP_NUMBER, message);
}

async function sendWhatsAppOrder() {
  const restaurant = getRestaurant(orderCart.restaurantId);
  if (!restaurant || !orderCart.items.length) return;

  const subtotal = orderCart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = Number(PLATFORM_CONFIG.deliveryFeeBDT);
  const grandTotal = subtotal + delivery;

  const itemLines = orderCart.items.map((item, index) =>
    `${index + 1}. ${item.name} x ${item.quantity} — ${money(item.price * item.quantity)}`
  );

  const message = [
    "Assalamu Alaikum,",
    "I would like to place an order.",
    "",
    `Restaurant: ${restaurant.name}`,
    "",
    "Items:",
    ...itemLines,
    "",
    `Food Subtotal: ${money(subtotal)}`,
    `Delivery Charge: ${money(delivery)}`,
    `Grand Total: ${money(grandTotal)}`,
    "",
    `Service Area: ${PLATFORM_CONFIG.serviceArea}`,
    "Please confirm my order."
  ].join("\n");

  await openWhatsAppOrderWithLocation(WHATSAPP_NUMBER, message);
}

document.addEventListener("DOMContentLoaded", () => {
  // Dynamic Popular Restaurants Rendering on Homepage
  const featuredContainer = document.getElementById("featured-restaurants-list");

  if (featuredContainer) {
    if (typeof restaurantsData === "undefined" || !restaurantsData.length) {
      featuredContainer.innerHTML = "<p>No restaurants available right now.</p>";
    } else {
      const featuredList = restaurantsData.slice(0, 6);

      featuredContainer.innerHTML = featuredList.map(restaurant => `
        <article class="restaurant-card">
          <div class="card-img-wrapper">
            <img src="${restaurant.image}" alt="${restaurant.name}" class="card-img" onerror="this.src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'">
            <span class="card-rating-badge">⭐ ${restaurant.rating}</span>
          </div>
          <div class="card-content">
            <h3 class="card-title">${restaurant.name}</h3>
            <p class="card-meta">📍 ${restaurant.location} • 🍽️ ${restaurant.category}</p>
            <p class="card-desc">${restaurant.description}</p>
            <div class="card-footer">
              <span class="card-delivery-tag">৳${PLATFORM_CONFIG.deliveryFeeBDT} Delivery Fee</span>
              <button type="button" class="btn btn-primary menu-open-btn" data-restaurant-id="${restaurant.id}">
                View Menu
              </button>
            </div>
          </div>
        </article>
      `).join("");
    }
  }

  document.addEventListener("click", event => {
    const menuButton = event.target.closest(".menu-open-btn");
    if (menuButton) {
      openRestaurantMenu(menuButton.dataset.restaurantId);
      return;
    }

    const cartButton = event.target.closest("[data-cart-action]");
    if (cartButton) {
      const action = cartButton.dataset.cartAction;
      const itemId = cartButton.dataset.itemId;
      const existing = orderCart.items.find(item => item.id === itemId);

      if (action === "increase") {
        addCartItem(itemId);
      } else if (action === "order-now") {
        // Order this item directly without changing the +/- quantity in the cart.
        // If no quantity was selected, send one item as the direct order.
        sendDirectItemOrder(itemId);
      } else if (action === "decrease") {
        setCartQuantity(itemId, Math.max(0, (existing?.quantity || 0) - 1));
      }
      return;
    }

    if (event.target.closest("#clear-cart-btn")) {
      orderCart = { restaurantId: activeRestaurant?.id || null, items: [] };
      renderRestaurantMenu();
      return;
    }

    if (event.target.closest("#whatsapp-order-btn")) {
      sendWhatsAppOrder();
      return;
    }

    if (event.target.closest("[data-menu-close]")) {
      closeRestaurantMenu();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeRestaurantMenu();
  });
});
