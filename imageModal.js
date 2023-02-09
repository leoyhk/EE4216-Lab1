const buttonPhoto1 = document.getElementById("photo1");
const buttonPhoto2 = document.getElementById("photo2");
const modalImage = document.getElementById("modal-img");
const close = document.getElementById("modal-close");
close.addEventListener("click", closeModal);
buttonPhoto1.addEventListener("click", openModal);
buttonPhoto2.addEventListener("click", openModal);

function closeModal() {
  document.getElementById("modal-image").style.display = "none";
}

function openModal(e) {
  document.getElementById("modal-image").style.display = "flex";
  const URL = e.srcElement.getAttribute("imglink");
  console.log(e.srcElement.getAttribute("imglink"));
  console.log(document.getElementById("modal-img"));
  document.getElementById("modal-img").src = URL;
}
