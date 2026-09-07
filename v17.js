const offerPriceCard = document.querySelector(".offer .buy");
if (offerPriceCard && !offerPriceCard.querySelector(".offer-value")) {
  const purchaseButton = offerPriceCard.querySelector("a.btn");
  offerPriceCard.innerHTML = '<small>VALOR TOTAL DA OFERTA</small><span class="was-price">De R$70,60</span><span class="today">Condição especial disponível apenas nesta oferta</span><strong class="current-price">R$19,90</strong><p class="payment-note">Pagamento único. Sem mensalidade.</p>';
  if (purchaseButton) {
    purchaseButton.textContent = "QUERO ACESSAR POR R$19,90 →";
    offerPriceCard.appendChild(purchaseButton);
    purchaseButton.insertAdjacentHTML("afterend", '<span class="cta-security">Pagamento Seguro • Acesso Imediato • 7 Dias De Garantia</span>');
  }
  offerPriceCard.insertAdjacentHTML("beforeend", '<div class="offer-value"><ul class="offer-includes"><li>Aquário Sem Perdas</li><li>Diário do Aquário — 30 Dias</li><li>SOS — Meu Peixe Está Estranho</li><li>Antes do Próximo Peixe</li></ul><p class="value-close">Tudo incluído no mesmo acesso.</p></div>');
}
