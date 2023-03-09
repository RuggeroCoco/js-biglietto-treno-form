// Sconto 20% per i minorenni
const underageDiscount = 0.8;
// Sconto 40% per gli over 65
const over65Discount = 0.6;
// Prezzo al Km
const priceKm = 0.21;

const submitBtn = document.getElementById("submit-btn");

const calcPrice = (km, age) => {
  let finalPrice = "";
  if (age === "underage") {
    finalPrice = (km * priceKm * underageDiscount).toFixed(2);
  } else if (age === "oldage") {
    finalPrice = (km * priceKm * over65Discount).toFixed(2);
  } else {
    finalPrice = (km * priceKm).toFixed(2);
  }
  console.log(finalPrice);
  return finalPrice;
};

const createTicket = () => {
  const travelKm = document.getElementById("distance").value;
  const ageRange = document.getElementById("age").value;
  const name = document.getElementById("name").value;
  document.getElementById("ticket-name").innerHTML = name;
  document.getElementById("ticket-offer").innerHTML = ageRange;
  document.getElementById("ticket-price").innerHTML = calcPrice(
    travelKm,
    ageRange
  );
  //   document.getElementById("ticket").style.display = "flex";
};

submitBtn.addEventListener("click", createTicket);
