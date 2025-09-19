import { writeCurrentYear, sendRequest } from './utils.js';
import './../css/style.css';
import './../css/animation.css';
import './../../index.html';

window.addEventListener('DOMContentLoaded', () => {
  // === Footer year ===
  writeCurrentYear();

  // === Contact form handling ===
  const form = document.getElementById('form-contact');
  const status = document.getElementById('form-contact-status');

  function success() {
    form.reset();
    status.style.display = "block";
    status.innerHTML = "Your message has been sent!";
    status.classList.add("success");

    setTimeout(() => {
      status.style.opacity = 0;
      status.style.display = "none";
    }, 5000);
  }

  function error() {
    status.innerHTML = "Oops! An error has occured, please try again";
    status.classList.add("error");
  }

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      let data = new FormData(form);
      sendRequest(form.method, form.action, data, success, error);
    });
  }

  // === Product Price Handling ===
  document.querySelectorAll(".product").forEach(product => {
    const select = product.querySelector(".size");
    const priceTag = product.querySelector(".price");

    if (select && priceTag) {
      // Update price on change
      select.addEventListener("change", () => {
        priceTag.textContent = select.value + " EGP";
      });

      // Set default price
      priceTag.textContent = select.value + " EGP";
    }
  });
  // main.js
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            document.getElementById("location").value = lat + ", " + lng;
        },
        function (error) {
            console.log("Location access denied or unavailable.");
            document.getElementById("location").value = "Location not provided";
        }
    );
} else {
    document.getElementById("location").value = "Geolocation not supported";
}

});
