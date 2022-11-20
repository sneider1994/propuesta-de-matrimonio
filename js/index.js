const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");

yesBtn.addEventListener("click", function () {
  //mostrar mensaje de aceptacion y ocultar el resto de la pregunta
  document.getElementById("aceptacion").style.display = "block";
  document.getElementById("pregunta").style.display = "none";
});

//si se pasa el mouse se mueve el boton por la pagiona
noBtn.addEventListener("mouseover", function () {
  const randomX = parseInt(Math.random() * 100);
  const randomY = parseInt(Math.random() * 100);

  noBtn.style.setProperty("top", randomY + "%");
  noBtn.style.setProperty("left", randomX + "%");
  noBtn.style.setProperty("transform", `translate(-${randomX}%,-${randomY}%)`);
});
