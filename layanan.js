// Ambil elemen penting
const cards = document.querySelectorAll(".layanan-card");
const popupOverlay = document.getElementById("popupOverlay");
const popupImg = document.getElementById("popupImg");
const popupTitle = document.getElementById("popupTitle");
const popupDesc = document.getElementById("popupDesc");
const closePopup = document.getElementById("closePopup");

// Fungsi buka popup
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const imgSrc = card.querySelector("img").src;
    const title = card.querySelector("h3").textContent;
    const desc = card.querySelector("p").textContent;

    popupImg.src = imgSrc;
    popupTitle.textContent = title;
    popupDesc.textContent = desc;

    popupOverlay.style.display = "flex";
  });
});

// Tutup popup
closePopup.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});

popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = "none";
  }
});
