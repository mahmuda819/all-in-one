/*
  OTHERS SECTION — SINGLE-FILE DATA + UI
  ======================================
  To add another card/menu, only edit this file:
  1. Copy one object inside othersData.
  2. Give it a unique id.
  3. Add/edit its items array.
  No HTML/CSS changes are required.
*/

const othersData = [
  {
    id: "other-001",
    name: "College Gate Snacks",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
    category: "Street Food",
    location: "College Gate Area",
    rating: 4.5,
    description: "Popular local snacks and quick bites around College Gate.",
    items: [
      { id: "other-001-item-1", name: "Chicken Burger", price: 120, description: "Freshly prepared chicken burger." },
      { id: "other-001-item-2", name: "French Fries", price: 80, description: "Crispy salted fries." },
      { id: "other-001-item-3", name: "Chicken Roll", price: 100, description: "Spiced chicken filling wrapped fresh." }
    ]
  }
];

const OTHERS_WHATSAPP_NUMBER = "8801779677819";
const OTHERS_DELIVERY_FEE = Number(PLATFORM_CONFIG?.deliveryFeeBDT || 50);
let activeOther = null;
let otherOrder = { otherId: null, items: [] };

function otherMoney(value) {
  return `৳${Number(value).toFixed(0)}`;
}

function getOther(id) {
  return othersData.find(other => other.id === id) || null;
}

function buildOtherModal() {
  let modal = document.getElementById("others-menu-modal");
  if (modal) return modal;

  modal = document.createElement("div");
  modal.id = "others-menu-modal";
  modal.className = "menu-modal others-menu-modal";
  document.body.appendChild(modal);
  return modal;
}

function setOtherItemQuantity(itemId, quantity) {
  if (!activeOther) return;
  const item = activeOther.items.find(entry => entry.id === itemId);
  if (!item) return;

  const existing = otherOrder.items.find(entry => entry.id === itemId);

  if (quantity <= 0) {
    otherOrder.items = otherOrder.items.filter(entry => entry.id !== itemId);
  } else if (existing) {
    existing.quantity = quantity;
  } else {
    otherOrder.items.push({
      id: item.id,
      name: item.name,
      price: Number(item.price),
      quantity
    });
  }

  updateOtherModalUI();
}

function updateOtherModalUI() {
  const modal = document.getElementById("others-menu-modal");
  if (!modal || !activeOther) return;

  activeOther.items.forEach(item => {
    const quantity = otherOrder.items.find(entry => entry.id === item.id)?.quantity || 0;
    const actionArea = modal.querySelector(`[data-other-item-id="${item.id}"]`)?.closest(".menu-item-actions");
    const quantityDisplay = actionArea?.querySelector(".qty-control span");
    if (quantityDisplay) quantityDisplay.textContent = quantity;
  });

  const subtotal = otherOrder.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const lines = modal.querySelector("#other-order-lines");
  const subtotalEl = modal.querySelector("#other-subtotal");
  const deliveryEl = modal.querySelector("#other-delivery");
  const totalEl = modal.querySelector("#other-grand-total");
  const whatsappButton = modal.querySelector("#other-whatsapp-btn");

  if (lines) {
    lines.innerHTML = otherOrder.items.length
      ? otherOrder.items.map(item => `
          <div class="cart-line">
            <span class="cart-line-name">${item.name} × ${item.quantity}</span>
            <span class="cart-line-meta">${otherMoney(item.price * item.quantity)}</span>
          </div>
        `).join("")
      : '<p class="cart-empty">No item selected yet. Choose an item above.</p>';
  }

  if (subtotalEl) subtotalEl.textContent = otherMoney(subtotal);
  if (deliveryEl) deliveryEl.textContent = otherMoney(OTHERS_DELIVERY_FEE);
  if (totalEl) totalEl.textContent = otherMoney(subtotal + OTHERS_DELIVERY_FEE);
  if (whatsappButton) whatsappButton.disabled = otherOrder.items.length === 0;
}

function renderOtherModal() {
  const modal = document.getElementById("others-menu-modal");
  if (!modal || !activeOther) return;

  const itemMap = new Map(otherOrder.items.map(item => [item.id, item]));
  const subtotal = otherOrder.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  modal.innerHTML = `
    <div class="menu-modal-backdrop" data-other-close></div>
    <div class="menu-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="other-modal-title">
      <button type="button" class="menu-modal-close" aria-label="Close menu" data-other-close>&times;</button>

      <div class="menu-modal-header">
        <span class="badge">${activeOther.category}</span>
        <h2 id="other-modal-title">${activeOther.name}</h2>
        <p>📍 ${activeOther.location} • ⭐ ${activeOther.rating}</p>
      </div>

      <div class="hotel-modal-info">
        <p>${activeOther.description}</p>
      </div>

      <div class="menu-items-list">
        ${activeOther.items.map(item => {
          const qty = itemMap.get(item.id)?.quantity || 0;
          return `
            <article class="menu-item-card">
              <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description || ""}</p>
                <strong>${otherMoney(item.price)}</strong>
              </div>
              <div class="menu-item-actions">
                <div class="qty-control">
                  <button type="button" data-other-action="decrease" data-other-item-id="${item.id}" aria-label="Decrease quantity">−</button>
                  <span>${qty}</span>
                  <button type="button" data-other-action="increase" data-other-item-id="${item.id}" aria-label="Increase quantity">+</button>
                </div>
                <button type="button" class="btn btn-primary menu-order-btn other-order-btn" data-other-action="order-now" data-other-item-id="${item.id}">Order</button>
              </div>
            </article>
          `;
        }).join("")}
      </div>

      <div class="cart-panel">
        <h3>Your Order</h3>
        <div id="other-order-lines">
          ${otherOrder.items.length ? otherOrder.items.map(item => `
            <div class="cart-line">
              <span class="cart-line-name">${item.name} × ${item.quantity}</span>
              <span class="cart-line-meta">${otherMoney(item.price * item.quantity)}</span>
            </div>
          `).join("") : '<p class="cart-empty">No item selected yet. Choose an item above.</p>'}
        </div>
        <div class="cart-total-line"><span>Subtotal</span><strong id="other-subtotal">${otherMoney(subtotal)}</strong></div>
        <div class="cart-total-line"><span>Delivery Fee</span><strong id="other-delivery">${otherMoney(OTHERS_DELIVERY_FEE)}</strong></div>
        <div class="cart-total-line grand"><span>Grand Total</span><strong id="other-grand-total">${otherMoney(subtotal + OTHERS_DELIVERY_FEE)}</strong></div>
        <div class="cart-actions">
          <button type="button" class="btn" id="clear-other-order">Clear Order</button>
          <button type="button" class="btn btn-primary" id="other-whatsapp-btn" ${otherOrder.items.length ? "" : "disabled"}>Order on WhatsApp</button>
        </div>
      </div>
    </div>
  `;
}

function openOtherMenu(otherId) {
  const other = getOther(otherId);
  if (!other) return;

  if (otherOrder.otherId && otherOrder.otherId !== other.id && otherOrder.items.length) {
    if (!window.confirm("Your current order is from another card. Clear it and start a new order?")) return;
  }

  if (otherOrder.otherId !== other.id) {
    otherOrder = { otherId: other.id, items: [] };
  }

  activeOther = other;
  const modal = buildOtherModal();
  renderOtherModal();
  modal.classList.add("is-open");
  document.body.classList.add("menu-modal-open");
  modal.querySelector(".menu-modal-close")?.focus();
}

function closeOtherMenu() {
  const modal = document.getElementById("others-menu-modal");
  if (!modal) return;
  modal.classList.remove("is-open");
  document.body.classList.remove("menu-modal-open");
}

async function sendDirectOtherItemOrder(itemId) {
  const other = activeOther;
  if (!other) return;

  const item = other.items.find(entry => entry.id === itemId);
  if (!item) return;

  // Use the quantity selected with +/-. If it is still 0, order one item directly.
  const selected = otherOrder.items.find(entry => entry.id === itemId);
  const quantity = selected?.quantity || 1;
  const subtotal = Number(item.price) * quantity;
  const delivery = Number(OTHERS_DELIVERY_FEE);
  const grandTotal = subtotal + delivery;

  const message = [
    "Assalamu Alaikum,",
    "I would like to place an order.",
    "",
    `Shop/Service: ${other.name}`,
    `Location: ${other.location}`,
    "",
    "Items:",
    `1. ${item.name} × ${quantity} — ${otherMoney(subtotal)}`,
    "",
    `Subtotal: ${otherMoney(subtotal)}`,
    `Delivery Fee: ${otherMoney(delivery)}`,
    `Grand Total: ${otherMoney(grandTotal)}`
  ].join("\n");

  await openWhatsAppOrderWithLocation(OTHERS_WHATSAPP_NUMBER, message);
}

async function sendOtherWhatsAppOrder() {
  const other = getOther(otherOrder.otherId);
  if (!other || !otherOrder.items.length) return;

  const subtotal = otherOrder.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemLines = otherOrder.items.map((item, index) =>
    `${index + 1}. ${item.name} × ${item.quantity} — ${otherMoney(item.price * item.quantity)}`
  );

  const message = [
    "Assalamu Alaikum,",
    "I would like to place an order.",
    "",
    `Shop/Service: ${other.name}`,
    `Location: ${other.location}`,
    "",
    "Items:",
    ...itemLines,
    "",
    `Subtotal: ${otherMoney(subtotal)}`,
    `Delivery Fee: ${otherMoney(OTHERS_DELIVERY_FEE)}`,
    `Grand Total: ${otherMoney(subtotal + OTHERS_DELIVERY_FEE)}`
  ].join("\n");

  await openWhatsAppOrderWithLocation(OTHERS_WHATSAPP_NUMBER, message);
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("others-list");
  if (!container) return;

  if (!othersData.length) {
    container.innerHTML = "<p>No other services are currently available.</p>";
    return;
  }

  container.innerHTML = othersData.map(other => `
    <article class="restaurant-card other-card">
      <div class="card-img-wrapper">
        <img class="card-img" src="${other.image}" alt="${other.name}" loading="lazy">
        <span class="card-rating-badge">⭐ ${other.rating}</span>
      </div>
      <div class="card-content">
        <h3 class="card-title">${other.name}</h3>
        <p class="card-meta">📍 ${other.location} • 🛍️ ${other.category}</p>
        <p class="card-desc">${other.description}</p>
        <div class="card-footer">
          <span class="card-delivery-tag">${otherMoney(OTHERS_DELIVERY_FEE)} Delivery Fee</span>
          <button type="button" class="btn btn-primary other-open-btn" data-other-id="${other.id}">View Menu</button>
        </div>
      </div>
    </article>
  `).join("");

  document.addEventListener("click", event => {
    const openButton = event.target.closest(".other-open-btn");
    if (openButton) {
      openOtherMenu(openButton.dataset.otherId);
      return;
    }

    const actionButton = event.target.closest("[data-other-action]");
    if (actionButton) {
      const itemId = actionButton.dataset.otherItemId;
      const current = otherOrder.items.find(item => item.id === itemId)?.quantity || 0;
      const action = actionButton.dataset.otherAction;
      if (action === "increase") setOtherItemQuantity(itemId, current + 1);
      if (action === "decrease") setOtherItemQuantity(itemId, Math.max(0, current - 1));
      if (action === "order-now") sendDirectOtherItemOrder(itemId);
      return;
    }

    if (event.target.closest("#clear-other-order")) {
      otherOrder = { otherId: activeOther?.id || null, items: [] };
      renderOtherModal();
      return;
    }

    if (event.target.closest("#other-whatsapp-btn")) {
      sendOtherWhatsAppOrder();
      return;
    }

    if (event.target.closest("[data-other-close]")) closeOtherMenu();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeOtherMenu();
  });
});
