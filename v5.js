const productMockup = document.querySelector(".visual .cover");
const diagnosisMockup = document.querySelector(".visual .phone");
if (productMockup) {
  productMockup.classList.add("product-image");
  productMockup.innerHTML = '<img src="assets/produto-aquario-sem-perdas.png" alt="Capa do protocolo Aquário Sem Perdas">';
}
if (diagnosisMockup) {
  diagnosisMockup.classList.add("map-image");
  diagnosisMockup.innerHTML = '<img src="assets/mapa-diagnostico.png" alt="Página Mapa do diagnóstico">';
}
