/*
  College Gate delivery-area verification
  --------------------------------------
  - Requests the customer's current browser location.
  - Checks it against the College Gate delivery polygon.
  - Returns a Google Maps link only when the customer is inside the area.
  - No address is typed manually.
*/

const COLLEGE_GATE_DELIVERY_POLYGON = [
  { lat: 23.912174, lng: 90.396121 },
  { lat: 23.9091796, lng: 90.3871152 },
  { lat: 23.906811, lng: 90.387535 },
  { lat: 23.9065948, lng: 90.3926451 },
  { lat: 23.90458, lng: 90.3958435 },
  { lat: 23.9066836, lng: 90.3977265 },
  { lat: 23.908446, lng: 90.397182 }
];

function isPointOnDeliveryBoundary(point, polygon, epsilon = 1e-10) {
  for (let i = 0; i < polygon.length; i += 1) {
    const a = polygon[i];
    const b = polygon[(i + 1) % polygon.length];
    const cross = (point.lng - a.lng) * (b.lat - a.lat) -
      (point.lat - a.lat) * (b.lng - a.lng);

    if (Math.abs(cross) > epsilon) continue;

    const withinLat = point.lat >= Math.min(a.lat, b.lat) - epsilon &&
      point.lat <= Math.max(a.lat, b.lat) + epsilon;
    const withinLng = point.lng >= Math.min(a.lng, b.lng) - epsilon &&
      point.lng <= Math.max(a.lng, b.lng) + epsilon;

    if (withinLat && withinLng) return true;
  }

  return false;
}

function isInsideCollegeGateDeliveryArea(point) {
  if (isPointOnDeliveryBoundary(point, COLLEGE_GATE_DELIVERY_POLYGON)) return true;

  let inside = false;
  const { lat, lng } = point;

  for (
    let i = 0, j = COLLEGE_GATE_DELIVERY_POLYGON.length - 1;
    i < COLLEGE_GATE_DELIVERY_POLYGON.length;
    j = i, i += 1
  ) {
    const current = COLLEGE_GATE_DELIVERY_POLYGON[i];
    const previous = COLLEGE_GATE_DELIVERY_POLYGON[j];
    const intersects =
      ((current.lat > lat) !== (previous.lat > lat)) &&
      (lng < ((previous.lng - current.lng) * (lat - current.lat)) /
        (previous.lat - current.lat) + current.lng);

    if (intersects) inside = !inside;
  }

  return inside;
}

function getCurrentCustomerLocation() {
  return new Promise((resolve, reject) => {
    if (!window.isSecureContext || !navigator.geolocation) {
      reject(new Error("LOCATION_UNAVAILABLE"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy
        });
      },
      error => reject(error),
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0
      }
    );
  });
}

function showLocationError(error) {
  if (error?.message === "LOCATION_OUTSIDE_DELIVERY_AREA") {
    window.alert("Sorry, delivery is currently available only inside the College Gate delivery area.");
    return;
  }

  if (error?.code === 1) {
    window.alert("Location permission was denied. Please allow location access to place your order.");
    return;
  }

  if (error?.code === 2) {
    window.alert("Your current location could not be determined. Please check your location/GPS and try again.");
    return;
  }

  if (error?.code === 3) {
    window.alert("Getting your location took too long. Please try again.");
    return;
  }

  window.alert("Your location is unavailable. Please open the website over HTTPS and allow location access.");
}

async function getVerifiedCustomerLocation() {
  try {
    const location = await getCurrentCustomerLocation();

    if (!isInsideCollegeGateDeliveryArea(location)) {
      throw new Error("LOCATION_OUTSIDE_DELIVERY_AREA");
    }

    const mapsLink = `https://www.google.com/maps?q=${location.lat},${location.lng}`;

    return {
      ...location,
      mapsLink
    };
  } catch (error) {
    showLocationError(error);
    return null;
  }
}

async function openWhatsAppOrderWithLocation(phoneNumber, message) {
  const location = await getVerifiedCustomerLocation();
  if (!location) return false;

  const messageWithLocation = [
    message,
    "",
    "📍 Customer Current Location:",
    location.mapsLink
  ].join("\n");

  window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageWithLocation)}`;
  return true;
}
