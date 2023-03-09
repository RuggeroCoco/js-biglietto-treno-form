// Calcolare tot prezzo viaggio con queste INFO:
// Prezzo al Km 0.21€
const priceKm = 0.21;
const submitBtn = document.getElementById("submit-btn");
const calcPrice = () => {
  const travelKm = document.getElementById("distance").value;
  const userAge = document.getElementById("age").value;
  console.log(travelKm, userAge);
};
submitBtn.addEventListener("click", calcPrice);

// Sconto 20% per i minorenni
const underageDiscount = 0.8;
// Sconto 40% per gli over 65
const over65Discount = 0.6;

// Controllare le risposte dell'utente

// Prezzo finale
let finalPrice = "";
if (userAge < 18) {
  finalPrice = (travelKm * priceKm * underageDiscount).toFixed(2);
} else if (userAge >= 65) {
  finalPrice = (travelKm * priceKm * over65Discount).toFixed(2);
} else {
  finalPrice = (travelKm * priceKm).toFixed(2);
}
console.log(finalPrice);

// Stampare prezzo finale con controllo risposte utente
if (isNaN(travelKm) || travelKm < 1) {
  document.getElementById("error").innerHTML =
    "Errore. Ricaricare la pagina e compilare il form con dei numeri";
} else if (isNaN(userAge) || travelKm < 1) {
  document.getElementById("error").innerHTML =
    "Errore. Ricaricare la pagina e compilare il form con dei numeri";
} else {
  document.getElementById(
    "pricedisplay"
  ).innerHTML = `Grazie utente. Il prezzo del suo biglietto è ${finalPrice}€`;
}
