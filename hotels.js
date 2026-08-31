/*
  HOTELS SECTION — FOOD HOTELS ONLY
  =================================
  IMPORTANT:
  In this project, "Hotels" means local food hotels/eateries,
  NOT accommodation or room booking.

  To add another food hotel, only edit hotelsData below:
  1. Copy one hotel object.
  2. Give it a unique id.
  3. Add/edit its items array.
*/

const hotelsData = [
  {
    id: "hotel-001",
    name: "আল্লাহর দান বিরিয়ানি হাউজ",
    image: "assets/hotels/college-gate-grand.svg",
    category: "Hotel's Food",
    location: "College Gate",
    rating: 4.4,
    description: "College Gate-এর জনপ্রিয় আল্লাহর দান বিরিয়ানি হাউজের আসল মেনু থেকে খাবার অর্ডার করুন।",
    items: [
      { id: "hotel-001-item-1", name: "খাসির কাচ্চি (বাসমতি) ডিম ছাড়া — হাফ", price: 200, description: "বাসমতি চালের খাসির কাচ্চি।" },
      { id: "hotel-001-item-2", name: "খাসির কাচ্চি (বাসমতি) ডিম ছাড়া — ফুল", price: 390, description: "বাসমতি চালের খাসির কাচ্চি।" },
      { id: "hotel-001-item-3", name: "গরুর কাচ্চি (বাসমতি) ডিম ছাড়া — হাফ", price: 170, description: "বাসমতি চালের গরুর কাচ্চি।" },
      { id: "hotel-001-item-4", name: "গরুর কাচ্চি (বাসমতি) ডিম ছাড়া — ফুল", price: 340, description: "বাসমতি চালের গরুর কাচ্চি।" },
      { id: "hotel-001-item-5", name: "মোরগ পোলাও রান পিচ (ডিম ছাড়া) — হাফ", price: 150, description: "মোরগের রান দিয়ে পোলাও।" },
      { id: "hotel-001-item-6", name: "মোরগ পোলাও রান পিচ (ডিম ছাড়া) — ফুল", price: 300, description: "মোরগের রান দিয়ে পোলাও।" },
      { id: "hotel-001-item-7", name: "মোরগ পোলাও রান ও সিনা মিলাইয়া (ডিম ছাড়া) — হাফ", price: 140, description: "মোরগের রান ও সিনা দিয়ে পোলাও।" },
      { id: "hotel-001-item-8", name: "মোরগ পোলাও রান ও সিনা মিলাইয়া (ডিম ছাড়া) — ফুল", price: 280, description: "মোরগের রান ও সিনা দিয়ে পোলাও।" },
      { id: "hotel-001-item-9", name: "গরুর তেহেরী — হাফ", price: 120, description: "সুস্বাদু গরুর তেহেরী।" },
      { id: "hotel-001-item-10", name: "গরুর তেহেরী — ফুল", price: 240, description: "সুস্বাদু গরুর তেহেরী।" },
      { id: "hotel-001-item-11", name: "গরুর চাপ পোলাও — হাফ", price: 150, description: "গরুর চাপের সাথে পোলাও।" },
      { id: "hotel-001-item-12", name: "গরুর চাপ পোলাও — ফুল", price: 300, description: "গরুর চাপের সাথে পোলাও।" },
      { id: "hotel-001-item-13", name: "গরুর চাপ খিচুড়ী — হাফ", price: 150, description: "গরুর চাপের সাথে খিচুড়ী।" },
      { id: "hotel-001-item-14", name: "গরুর চাপ খিচুড়ী — ফুল", price: 300, description: "গরুর চাপের সাথে খিচুড়ী।" },
      { id: "hotel-001-item-15", name: "মুরগীর খিচুড়ী (ডিম ছাড়া) — হাফ", price: 140, description: "মুরগির মাংস দিয়ে খিচুড়ী।" },
      { id: "hotel-001-item-16", name: "মুরগীর খিচুড়ী (ডিম ছাড়া) — ফুল", price: 280, description: "মুরগির মাংস দিয়ে খিচুড়ী।" },
      { id: "hotel-001-item-17", name: "ব্রয়লার রেজালা খিচুড়ী — হাফ", price: 100, description: "ব্রয়লার রেজালা ও খিচুড়ী।" },
      { id: "hotel-001-item-18", name: "ব্রয়লার রেজালা খিচুড়ী — ফুল", price: 200, description: "ব্রয়লার রেজালা ও খিচুড়ী।" },
      { id: "hotel-001-item-19", name: "ব্রয়লার রেজালা পোলাও — হাফ", price: 100, description: "ব্রয়লার রেজালা ও পোলাও।" },
      { id: "hotel-001-item-20", name: "ব্রয়লার রেজালা পোলাও — ফুল", price: 200, description: "ব্রয়লার রেজালা ও পোলাও।" },
      { id: "hotel-001-item-21", name: "ডিম পোলাও — হাফ", price: 70, description: "ডিমের সাথে সুস্বাদু পোলাও।" },
      { id: "hotel-001-item-22", name: "ডিম পোলাও — ফুল", price: 140, description: "ডিমের সাথে সুস্বাদু পোলাও।" },
      { id: "hotel-001-item-23", name: "ডিম খিচুড়ী — হাফ", price: 70, description: "ডিমের সাথে খিচুড়ী।" },
      { id: "hotel-001-item-24", name: "ডিম খিচুড়ী — ফুল", price: 140, description: "ডিমের সাথে খিচুড়ী।" },
      { id: "hotel-001-item-25", name: "এক্সটা রাইস (চিনিগুড়া) — হাফ", price: 50, description: "অতিরিক্ত চিনিগুড়া চালের ভাত।" },
      { id: "hotel-001-item-26", name: "এক্সটা রাইস (চিনিগুড়া) — ফুল", price: 100, description: "অতিরিক্ত চিনিগুড়া চালের ভাত।" },
      { id: "hotel-001-item-27", name: "এক্সটা রাইস (বাসমতি) — হাফ", price: 60, description: "অতিরিক্ত বাসমতি চালের ভাত।" },
      { id: "hotel-001-item-28", name: "এক্সটা রাইস (বাসমতি) — ফুল", price: 120, description: "অতিরিক্ত বাসমতি চালের ভাত।" },
      { id: "hotel-001-item-29", name: "এক্সটা ডিম (প্রতি পিচ)", price: 20, description: "অতিরিক্ত ডিম।" },
      { id: "hotel-001-item-30", name: "বোরহানী — ২৫০ মিলি", price: 60, description: "বোরহানী।" },
      { id: "hotel-001-item-31", name: "বোরহানী — প্রতি গ্লাস", price: 50, description: "বোরহানী।" },
      { id: "hotel-001-item-32", name: "বোরহানী — হাফ লিটার", price: 90, description: "বোরহানী।" },
      { id: "hotel-001-item-33", name: "বোরহানী — এক লিটার", price: 180, description: "বোরহানী।" }
    ]
  },
  {
    id: "hotel-002",
    name: "Campus View Food Hotel",
    image: "assets/hotels/campus-view-residence.svg",
    category: "Hotel's Food",
    location: "College Gate",
    rating: 4.6,
    description: "College Gate এলাকার জনপ্রিয় খাবারের হোটেল থেকে আপনার পছন্দের খাবার অর্ডার করুন।",
    items: [
      { id: "hotel-002-item-1", name: "ভাত + চিকেন", price: 130, description: "ভাতের সাথে সুস্বাদু চিকেন।" },
      { id: "hotel-002-item-2", name: "ভাত + বিফ", price: 160, description: "ভাতের সাথে মজাদার বিফ।" },
      { id: "hotel-002-item-3", name: "চিকেন খিচুড়ি", price: 120, description: "গরম ও সুস্বাদু চিকেন খিচুড়ি।" }
    ]
  },
  {
    id: "hotel-003",
    name: "College Gate Family Hotel",
    image: "assets/hotels/college-gate-grand.svg",
    category: "Hotel's Food",
    location: "College Gate",
    rating: 4.5,
    description: "পরিবার ও শিক্ষার্থীদের জন্য জনপ্রিয় স্থানীয় খাবারের হোটেল।",
    items: [
      { id: "hotel-003-item-1", name: "চিকেন ফ্রাই", price: 150, description: "ক্রিস্পি ও সুস্বাদু চিকেন ফ্রাই।" },
      { id: "hotel-003-item-2", name: "ফ্রাইড রাইস", price: 140, description: "ফ্রেশ ও সুস্বাদু ফ্রাইড রাইস।" },
      { id: "hotel-003-item-3", name: "চিকেন নুডলস", price: 130, description: "সবজি ও চিকেন দিয়ে তৈরি নুডলস।" }
    ]
  }
];

const HOTEL_WHATSAPP_NUMBER = "8801779677819";
const HOTEL_DELIVERY_FEE = Number(PLATFORM_CONFIG?.deliveryFeeBDT || 50);
let activeHotel = null;
let hotelOrder = { hotelId: null, items: [] };

function hotelMoney(value) {
  return `৳${Number(value).toFixed(0)}`;
}

function getHotel(id) {
  return hotelsData.find(hotel => hotel.id === id) || null;
}

function buildHotelModal() {
  let modal = document.getElementById("hotel-menu-modal");
  if (modal) return modal;

  modal = document.createElement("div");
  modal.id = "hotel-menu-modal";
  modal.className = "menu-modal hotel-menu-modal";
  document.body.appendChild(modal);
  return modal;
}

function setHotelItemQuantity(itemId, quantity) {
  if (!activeHotel) return;
  const item = activeHotel.items.find(entry => entry.id === itemId);
  if (!item) return;

  const existing = hotelOrder.items.find(entry => entry.id === itemId);

  if (quantity <= 0) {
    hotelOrder.items = hotelOrder.items.filter(entry => entry.id !== itemId);
  } else if (existing) {
    existing.quantity = quantity;
  } else {
    hotelOrder.items.push({
      id: item.id,
      name: item.name,
      price: Number(item.price),
      quantity
    });
  }

  updateHotelModalUI();
}

function updateHotelModalUI() {
  const modal = document.getElementById("hotel-menu-modal");
  if (!modal || !activeHotel) return;

  activeHotel.items.forEach(item => {
    const quantity = hotelOrder.items.find(entry => entry.id === item.id)?.quantity || 0;
    const actionArea = modal.querySelector(`[data-hotel-item-id="${item.id}"]`)?.closest(".menu-item-actions");
    const quantityDisplay = actionArea?.querySelector(".qty-control span");
    if (quantityDisplay) quantityDisplay.textContent = quantity;
  });

  const subtotal = hotelOrder.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const lines = modal.querySelector("#hotel-order-lines");
  const subtotalEl = modal.querySelector("#hotel-subtotal");
  const deliveryEl = modal.querySelector("#hotel-delivery");
  const totalEl = modal.querySelector("#hotel-grand-total");
  const whatsappButton = modal.querySelector("#hotel-whatsapp-btn");

  if (lines) {
    lines.innerHTML = hotelOrder.items.length
      ? hotelOrder.items.map(item => `
          <div class="cart-line">
            <span class="cart-line-name">${item.name} × ${item.quantity}</span>
            <span class="cart-line-meta">${hotelMoney(item.price * item.quantity)}</span>
          </div>
        `).join("")
      : '<p class="cart-empty">No item selected yet. Choose an item above.</p>';
  }

  if (subtotalEl) subtotalEl.textContent = hotelMoney(subtotal);
  if (deliveryEl) deliveryEl.textContent = hotelMoney(HOTEL_DELIVERY_FEE);
  if (totalEl) totalEl.textContent = hotelMoney(subtotal + HOTEL_DELIVERY_FEE);
  if (whatsappButton) whatsappButton.disabled = hotelOrder.items.length === 0;
}

function renderHotelModal() {
  const modal = document.getElementById("hotel-menu-modal");
  if (!modal || !activeHotel) return;

  const itemMap = new Map(hotelOrder.items.map(item => [item.id, item]));
  const subtotal = hotelOrder.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  modal.innerHTML = `
    <div class="menu-modal-backdrop" data-hotel-close></div>
    <div class="menu-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="hotel-modal-title">
      <button type="button" class="menu-modal-close" aria-label="Close menu" data-hotel-close>&times;</button>

      <div class="menu-modal-header">
        <span class="badge">${activeHotel.category}</span>
        <h2 id="hotel-modal-title">${activeHotel.name}</h2>
        <p>📍 ${activeHotel.location} • ⭐ ${activeHotel.rating}</p>
      </div>

      <div class="hotel-modal-info">
        <p>${activeHotel.description}</p>
      </div>

      <div class="menu-items-list">
        ${activeHotel.items.map(item => {
          const qty = itemMap.get(item.id)?.quantity || 0;
          return `
            <article class="menu-item-card">
              <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description || ""}</p>
                <strong>${hotelMoney(item.price)}</strong>
              </div>
              <div class="menu-item-actions">
                <div class="qty-control">
                  <button type="button" data-hotel-action="decrease" data-hotel-item-id="${item.id}" aria-label="Decrease quantity">−</button>
                  <span>${qty}</span>
                  <button type="button" data-hotel-action="increase" data-hotel-item-id="${item.id}" aria-label="Increase quantity">+</button>
                </div>
                <button type="button" class="btn btn-primary menu-order-btn hotel-order-btn" data-hotel-action="order-now" data-hotel-item-id="${item.id}">Order</button>
              </div>
            </article>
          `;
        }).join("")}
      </div>

      <div class="cart-panel">
        <h3>Your Order</h3>
        <div id="hotel-order-lines">
          ${hotelOrder.items.length ? hotelOrder.items.map(item => `
            <div class="cart-line">
              <span class="cart-line-name">${item.name} × ${item.quantity}</span>
              <span class="cart-line-meta">${hotelMoney(item.price * item.quantity)}</span>
            </div>
          `).join("") : '<p class="cart-empty">No item selected yet. Choose an item above.</p>'}
        </div>
        <div class="cart-total-line"><span>Subtotal</span><strong id="hotel-subtotal">${hotelMoney(subtotal)}</strong></div>
        <div class="cart-total-line"><span>Delivery Fee</span><strong id="hotel-delivery">${hotelMoney(HOTEL_DELIVERY_FEE)}</strong></div>
        <div class="cart-total-line grand"><span>Grand Total</span><strong id="hotel-grand-total">${hotelMoney(subtotal + HOTEL_DELIVERY_FEE)}</strong></div>
        <div class="cart-actions">
          <button type="button" class="btn" id="clear-hotel-order">Clear Order</button>
          <button type="button" class="btn btn-primary" id="hotel-whatsapp-btn" ${hotelOrder.items.length ? "" : "disabled"}>Order on WhatsApp</button>
        </div>
      </div>
    </div>
  `;
}

function openHotelMenu(hotelId) {
  const hotel = getHotel(hotelId);
  if (!hotel) return;

  if (hotelOrder.hotelId && hotelOrder.hotelId !== hotel.id && hotelOrder.items.length) {
    if (!window.confirm("Your current order is from another hotel. Clear it and start a new order?")) return;
  }

  if (hotelOrder.hotelId !== hotel.id) {
    hotelOrder = { hotelId: hotel.id, items: [] };
  }

  activeHotel = hotel;
  const modal = buildHotelModal();
  renderHotelModal();
  modal.classList.add("is-open");
  document.body.classList.add("menu-modal-open");
  modal.querySelector(".menu-modal-close")?.focus();
}

function closeHotelMenu() {
  const modal = document.getElementById("hotel-menu-modal");
  if (!modal) return;
  modal.classList.remove("is-open");
  document.body.classList.remove("menu-modal-open");
}

async function sendDirectHotelItemOrder(itemId) {
  const hotel = activeHotel;
  if (!hotel) return;

  const item = hotel.items.find(entry => entry.id === itemId);
  if (!item) return;

  const selected = hotelOrder.items.find(entry => entry.id === itemId);
  const quantity = selected?.quantity || 1;
  const subtotal = Number(item.price) * quantity;
  const delivery = Number(HOTEL_DELIVERY_FEE);
  const grandTotal = subtotal + delivery;

  const message = [
    "Assalamu Alaikum,",
    "I would like to place an order.",
    "",
    `Hotel: ${hotel.name}`,
    `Location: ${hotel.location}`,
    "",
    "Items:",
    `1. ${item.name} × ${quantity} — ${hotelMoney(subtotal)}`,
    "",
    `Subtotal: ${hotelMoney(subtotal)}`,
    `Delivery Fee: ${hotelMoney(delivery)}`,
    `Grand Total: ${hotelMoney(grandTotal)}`,
    "",
    "Please confirm my order."
  ].join("\n");

  await openWhatsAppOrderWithLocation(HOTEL_WHATSAPP_NUMBER, message);
}

async function sendHotelWhatsAppOrder() {
  const hotel = getHotel(hotelOrder.hotelId);
  if (!hotel || !hotelOrder.items.length) return;

  const subtotal = hotelOrder.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemLines = hotelOrder.items.map((item, index) =>
    `${index + 1}. ${item.name} × ${item.quantity} — ${hotelMoney(item.price * item.quantity)}`
  );

  const message = [
    "Assalamu Alaikum,",
    "I would like to place an order.",
    "",
    `Hotel: ${hotel.name}`,
    `Location: ${hotel.location}`,
    "",
    "Items:",
    ...itemLines,
    "",
    `Subtotal: ${hotelMoney(subtotal)}`,
    `Delivery Fee: ${hotelMoney(HOTEL_DELIVERY_FEE)}`,
    `Grand Total: ${hotelMoney(subtotal + HOTEL_DELIVERY_FEE)}`,
    "",
    "Please confirm my order."
  ].join("\n");

  await openWhatsAppOrderWithLocation(HOTEL_WHATSAPP_NUMBER, message);
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("hotels-list");
  if (!container) return;

  if (typeof hotelsData === "undefined" || !hotelsData.length) {
    container.innerHTML = "<p>No hotels currently available.</p>";
    return;
  }

  container.innerHTML = hotelsData.map(hotel => `
    <article class="restaurant-card hotel-card">
      <div class="card-img-wrapper">
        <img
          src="${hotel.image}"
          alt="${hotel.name}"
          class="card-img"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'"
        >
        <span class="card-rating-badge">⭐ ${hotel.rating}</span>
      </div>

      <div class="card-content">
        <h3 class="card-title">${hotel.name}</h3>
        <p class="card-meta">📍 ${hotel.location} • 🍽️ ${hotel.category}</p>
        <p class="card-desc">${hotel.description}</p>

        <div class="card-footer">
          <span class="card-delivery-tag">৳${HOTEL_DELIVERY_FEE} Delivery Fee</span>
          <button type="button" class="btn btn-primary hotel-open-btn" data-hotel-id="${hotel.id}">View Menu</button>
        </div>
      </div>
    </article>
  `).join("");

  document.addEventListener("click", event => {
    const hotelButton = event.target.closest(".hotel-open-btn");
    if (hotelButton) {
      openHotelMenu(hotelButton.dataset.hotelId);
      return;
    }

    const actionButton = event.target.closest("[data-hotel-action]");
    if (actionButton) {
      const itemId = actionButton.dataset.hotelItemId;
      const current = hotelOrder.items.find(item => item.id === itemId)?.quantity || 0;
      const action = actionButton.dataset.hotelAction;
      if (action === "increase") setHotelItemQuantity(itemId, current + 1);
      if (action === "decrease") setHotelItemQuantity(itemId, Math.max(0, current - 1));
      if (action === "order-now") sendDirectHotelItemOrder(itemId);
      return;
    }

    if (event.target.closest("#clear-hotel-order")) {
      hotelOrder = { hotelId: activeHotel?.id || null, items: [] };
      renderHotelModal();
      return;
    }

    if (event.target.closest("#hotel-whatsapp-btn")) {
      sendHotelWhatsAppOrder();
      return;
    }

    if (event.target.closest("[data-hotel-close]")) {
      closeHotelMenu();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeHotelMenu();
  });
});
