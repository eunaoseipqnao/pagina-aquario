const priceCard = document.querySelector(".offer .buy");
if (priceCard && !priceCard.querySelector(".price-included")) {
  const accessNotice = priceCard.querySelector("small:last-child");
  const included = document.createElement("div");
  included.className = "price-included";
  included.innerHTML = '<label>INCLUÍDO NO ACESSO</label><ul><li>Protocolo Aquário Sem Perdas</li><li>3 materiais extras</li><li>Acesso imediato</li><li>Garantia de 7 dias</li></ul><span class="price-footer">Pagamento único • Sem mensalidade • Acesso digital</span>';
  if (accessNotice) accessNotice.insertAdjacentElement("afterend", included);
  else priceCard.appendChild(included);
}
