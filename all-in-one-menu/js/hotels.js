// Hotel data
// Add more hotel objects to this array using the SAME structure as the sample cards below.
const hotelsData = [
  {
    id: "hotel-001",
    name: "College Gate Grand Hotel",
    image: "assets/hotels/college-gate-grand.svg",
    category: "Budget Hotel",
    location: "Main Road, College Gate",
    rating: 4.4,
    pricePerNight: 1200,
    description: "A comfortable and convenient stay option near College Gate with essential guest facilities.",
    facilities: ["Free Wi-Fi", "Attached Bathroom", "24/7 Reception"],
    rooms: [
      { id: "room-101", name: "Standard Single Room", price: 1200, description: "Comfortable room for one guest." },
      { id: "room-102", name: "Deluxe Double Room", price: 1800, description: "Spacious room suitable for two guests." }
    ]
  },
  {
    id: "hotel-002",
    name: "Campus View Residence",
    image: "assets/hotels/campus-view-residence.svg",
    category: "Family Stay",
    location: "College Gate Square",
    rating: 4.6,
    pricePerNight: 1600,
    description: "A clean and family-friendly accommodation option close to the college area.",
    facilities: ["Free Wi-Fi", "Family Rooms", "Parking"],
    rooms: [
      { id: "room-201", name: "Family Room", price: 1600, description: "Comfortable room for a small family." },
      { id: "room-202", name: "Premium Family Suite", price: 2400, description: "Larger suite with extra space for families." }
    ]
  },

  {
    id: "hotel-003",
    name: "Campus View Residence",
    image: "assets/hotels/campus-view-residence.svg",
    category: "Family Stay",
    location: "College Gate Square",
    rating: 4.6,
    pricePerNight: 1600,
    description: "A clean and family-friendly accommodation option close to the college area.",
    facilities: ["Free Wi-Fi", "Family Rooms", "Parking"],
    rooms: [
      { id: "room-201", name: "Family Room", price: 1600, description: "Comfortable room for a small family." },
      { id: "room-202", name: "Premium Family Suite", price: 2400, description: "Larger suite with extra space for families." }
    ]
  }
];

const HOTEL_WHATSAPP_NUMBER = "8801779677819";
const HOTEL_DELIVERY_FEE = Number(PLATFORM_CONFIG?.deliveryFeeBDT || 50);
let activeHotel = null;
let hotelBooking = { hotelId: null, rooms: [] };

function hotelMoney(value) {
  return `৳${Number(value).toFixed(0)}`;
}

function getHotel(id) {
  return hotelsData.find(hotel => hotel.id === id) || null;
}

function buildHotelModal() {
  let modal = document.getElementById("hotel-booking-modal");
  if (modal) return modal;

  modal = document.createElement("div");
  modal.id = "hotel-booking-modal";
  modal.className = "menu-modal hotel-booking-modal";
  document.body.appendChild(modal);
  return modal;
}

function updateHotelModalUI() {
  const modal = document.getElementById("hotel-booking-modal");

  if (!modal || !activeHotel) return;

  // 1. শুধু quantity number update করবে
  activeHotel.rooms.forEach(room => {
    const bookingRoom = hotelBooking.rooms.find(
      item => item.id === room.id
    );

    const quantity = bookingRoom ? bookingRoom.quantity : 0;

    const roomButton = modal.querySelector(
      `[data-room-id="${room.id}"]`
    );

    const actionArea = roomButton?.closest(".menu-item-actions");

    if (actionArea) {
      const quantityDisplay = actionArea.querySelector(
        ".qty-control span"
      );

      if (quantityDisplay) {
        quantityDisplay.textContent = quantity;
      }
    }
  });

  // 2. Subtotal calculate
  const subtotal = hotelBooking.rooms.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 3. Order list update
  const bookingLines = modal.querySelector(
    "#hotel-booking-lines"
  );

  if (bookingLines) {
    bookingLines.innerHTML = hotelBooking.rooms.length
      ? hotelBooking.rooms.map(item => `
          <div class="cart-line">
            <span class="cart-line-name">
              ${item.name} × ${item.quantity}
            </span>

            <span class="cart-line-meta">
              ${hotelMoney(item.price * item.quantity)}
            </span>
          </div>
        `).join("")
      : `
          <p class="cart-empty">
            No item selected yet. Choose an item above.
          </p>
        `;
  }

  // 4. Total update
  const subtotalEl = modal.querySelector(
    "#hotel-subtotal"
  );

  const deliveryEl = modal.querySelector(
    "#hotel-delivery"
  );

  const grandTotalEl = modal.querySelector(
    "#hotel-grand-total"
  );

  if (subtotalEl) {
    subtotalEl.textContent = hotelMoney(subtotal);
  }

  if (deliveryEl) {
    deliveryEl.textContent = hotelMoney(HOTEL_DELIVERY_FEE);
  }

  if (grandTotalEl) {
    grandTotalEl.textContent = hotelMoney(
      subtotal + HOTEL_DELIVERY_FEE
    );
  }

  // 5. WhatsApp button enable/disable
  const whatsappButton = modal.querySelector(
    "#hotel-whatsapp-btn"
  );

  if (whatsappButton) {
    whatsappButton.disabled =
      hotelBooking.rooms.length === 0;
  }
}

function setHotelRoomQuantity(roomId, quantity) {
  if (!activeHotel) return;
  const room = activeHotel.rooms.find(item => item.id === roomId);
  if (!room) return;

  const existing = hotelBooking.rooms.find(item => item.id === roomId);
  if (quantity <= 0) {
    hotelBooking.rooms = hotelBooking.rooms.filter(item => item.id !== roomId);
  } else if (existing) {
    existing.quantity = quantity;
  } else {
    hotelBooking.rooms.push({
      id: room.id,
      name: room.name,
      price: Number(room.price),
      quantity
    });
  }

  updateHotelModalUI();
}

function renderHotelModal() {
  const modal = document.getElementById("hotel-booking-modal");
  if (!modal || !activeHotel) return;

  const bookingMap = new Map(hotelBooking.rooms.map(item => [item.id, item]));
  const subtotal = hotelBooking.rooms.reduce((sum, item) => sum + item.price * item.quantity, 0);

  modal.innerHTML = `
    <div class="menu-modal-backdrop" data-hotel-close></div>
    <div class="menu-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="hotel-modal-title">
      <button type="button" class="menu-modal-close" aria-label="Close hotel details" data-hotel-close>&times;</button>

      <div class="menu-modal-header">
        <span class="badge">Hotel Menu</span>
        <h2 id="hotel-modal-title">${activeHotel.name}</h2>
        <p>${activeHotel.category} • ${activeHotel.location} • ⭐ ${activeHotel.rating}</p>
      </div>

      <div class="hotel-modal-info">
        <p>${activeHotel.description}</p>
        <p><strong>Facilities:</strong> ${activeHotel.facilities.join(" · ")}</p>
      </div>

      <div class="menu-items-list">
        ${activeHotel.rooms.map(room => {
          const qty = bookingMap.get(room.id)?.quantity || 0;
          return `
            <article class="menu-item-card">
              <div class="menu-item-content">
                <h3>${room.name}</h3>
                <p>${room.description}</p>
                <strong>${hotelMoney(room.price)} / night</strong>
              </div>
              <div class="menu-item-actions">
                <div class="qty-control">
                  <button type="button" data-hotel-action="decrease" data-room-id="${room.id}" aria-label="Decrease room quantity">−</button>
                  <span>${qty}</span>
                  <button type="button" data-hotel-action="increase" data-room-id="${room.id}" aria-label="Increase room quantity">+</button>
                </div>
                <button type="button" class="btn btn-primary menu-order-btn hotel-order-btn" data-hotel-action="order-now" data-room-id="${room.id}">
                  Order
                </button>
              </div>
            </article>
          `;
        }).join("")}
      </div>

      <div class="cart-panel">
        <h3>Your Order</h3>
        <div id="hotel-booking-lines">
          ${hotelBooking.rooms.length ? hotelBooking.rooms.map(item => `
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
          <button type="button" class="btn" id="clear-hotel-booking">Clear Order</button>
          <button type="button" class="btn btn-primary" id="hotel-whatsapp-btn" ${hotelBooking.rooms.length ? "" : "disabled"}>Order on WhatsApp</button>
        </div>
      </div>
    </div>
  `;
}

function openHotelDetails(hotelId) {
  const hotel = getHotel(hotelId);
  if (!hotel) return;

  if (hotelBooking.hotelId && hotelBooking.hotelId !== hotel.id && hotelBooking.rooms.length) {
    const shouldClear = window.confirm("Your current booking is from another hotel. Clear it and start a new booking?");
    if (!shouldClear) return;
  }

  if (hotelBooking.hotelId !== hotel.id) {
    hotelBooking = { hotelId: hotel.id, rooms: [] };
  }

  activeHotel = hotel;
  const modal = buildHotelModal();
  renderHotelModal();
  modal.classList.add("is-open");
  document.body.classList.add("menu-modal-open");
  modal.querySelector(".menu-modal-close")?.focus();
}

function closeHotelDetails() {
  const modal = document.getElementById("hotel-booking-modal");
  if (!modal) return;
  modal.classList.remove("is-open");
  document.body.classList.remove("menu-modal-open");
}

async function sendDirectHotelItemOrder(roomId) {
  const hotel = activeHotel;
  if (!hotel) return;

  const room = hotel.rooms.find(entry => entry.id === roomId);
  if (!room) return;

  // Use the quantity selected with +/-. If it is still 0, order one item directly.
  const selected = hotelBooking.rooms.find(entry => entry.id === roomId);
  const quantity = selected?.quantity || 1;
  const subtotal = Number(room.price) * quantity;
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
    `1. ${room.name} × ${quantity} — ${hotelMoney(subtotal)}`,
    "",
    `Subtotal: ${hotelMoney(subtotal)}`,
    `Delivery Fee: ${hotelMoney(delivery)}`,
    `Grand Total: ${hotelMoney(grandTotal)}`,
    "",
    "Please confirm my order."
  ].join("\n");

  await openWhatsAppOrderWithLocation(HOTEL_WHATSAPP_NUMBER, message);
}

async function sendHotelWhatsAppBooking() {
  const hotel = getHotel(hotelBooking.hotelId);
  if (!hotel || !hotelBooking.rooms.length) return;

  const total = hotelBooking.rooms.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const roomLines = hotelBooking.rooms.map((item, index) =>
    `${index + 1}. ${item.name} × ${item.quantity} — ${hotelMoney(item.price * item.quantity)}/night`
  );

  const message = [
    "Assalamu Alaikum,",
    "I would like to make a hotel booking.",
    "",
    `Hotel: ${hotel.name}`,
    `Location: ${hotel.location}`,
    "",
    "Room(s):",
    ...roomLines,
    "",
    `Subtotal: ${hotelMoney(total)}`,
    `Delivery Fee: ${hotelMoney(HOTEL_DELIVERY_FEE)}`,
    `Grand Total: ${hotelMoney(total + HOTEL_DELIVERY_FEE)}`,
    "",
    "Please confirm availability and booking details."
  ].join("\n");

  await openWhatsAppOrderWithLocation(HOTEL_WHATSAPP_NUMBER, message);
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("hotels-list");
  if (!container) return;

  container.innerHTML = hotelsData.map(hotel => `
    <article class="restaurant-card hotel-card">
      <div class="card-img-wrapper">
        <img class="card-img" src="${hotel.image}" alt="${hotel.name}" loading="lazy">
        <span class="card-rating-badge">⭐ ${hotel.rating}</span>
      </div>
      <div class="card-content">
        <h3 class="card-title">${hotel.name}</h3>
        <p class="card-meta">📍 ${hotel.location} • 🏨 ${hotel.category}</p>
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
      openHotelDetails(hotelButton.dataset.hotelId);
      return;
    }

    const actionButton = event.target.closest("[data-hotel-action]");
    if (actionButton) {
      const roomId = actionButton.dataset.roomId;
      const current = hotelBooking.rooms.find(item => item.id === roomId)?.quantity || 0;
      const action = actionButton.dataset.hotelAction;
      if (action === "increase") setHotelRoomQuantity(roomId, current + 1);
      if (action === "decrease") setHotelRoomQuantity(roomId, Math.max(0, current - 1));
      if (action === "order-now") sendDirectHotelItemOrder(roomId);
      return;
    }

    if (event.target.closest("#clear-hotel-booking")) {
      hotelBooking = { hotelId: activeHotel?.id || null, rooms: [] };
      renderHotelModal();
      return;
    }

    if (event.target.closest("#hotel-whatsapp-btn")) {
      sendHotelWhatsAppBooking();
      return;
    }

    if (event.target.closest("[data-hotel-close]")) {
      closeHotelDetails();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeHotelDetails();
  });
});
