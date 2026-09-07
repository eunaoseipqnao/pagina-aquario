const bonusCards = document.querySelectorAll(".bonus article");
const bonusImages = [
  ["assets/bonus-diario-aquario.png", "Capa do Diário do Aquário"],
  ["assets/bonus-sos-peixe-estranho.png", "Capa SOS Meu Peixe Está Estranho"],
  ["assets/bonus-antes-proximo-peixe.png", "Capa Antes do Próximo Peixe"]
];
bonusCards.forEach((card, index) => {
  const cover = card.querySelector("div");
  if (!cover) return;
  cover.classList.add("bonus-art");
  cover.innerHTML = '<img src="' + bonusImages[index][0] + '" alt="' + bonusImages[index][1] + '">';
});
