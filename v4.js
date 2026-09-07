const hero = document.querySelector(".hero");
hero.insertAdjacentHTML("afterend", '<div class="social-proof"><b>+2.500 clientes satisfeitos</b><span>Mais de 2.500 clientes já confiaram em nossos materiais.</span></div>');

const story = document.querySelector(".story");
story.innerHTML = '<span><b>1.</b> Você monta<br>o aquário</span><i>↓</i><span><b>2.</b> Os peixes<br>parecem bem</span><i>↓</i><span><b>3.</b> Um começa a<br>agir estranho</span><i>↓</i><span><b>4.</b> Ele morre</span><i>↓</i><strong><b>5.</b> Você tenta corrigir, compra outro…<br><em>E algum tempo depois acontece novamente.</em></strong>';

const methodCopy = document.querySelector(".method .sub");
if (methodCopy) methodCopy.insertAdjacentHTML("afterend", '<p class="proof-transform">De “não faço ideia do que está acontecendo” para “sei exatamente o que verificar primeiro”.</p>');
const negativeBox = document.querySelector(".method .two aside");
if (negativeBox) negativeBox.remove();

const bonus = document.querySelector(".bonus");
if (bonus) {
  const section = bonus.closest("section");
  section.querySelector("label").textContent = "BÔNUS EXCLUSIVOS DESTA OFERTA";
  section.querySelector("h2").textContent = "Somente nesta oferta, você também recebe";
  section.querySelector(".section-sub").textContent = "Além do protocolo principal, nesta condição especial você também recebe 3 materiais extras sem custo adicional.";
  const items = [
    ["BÔNUS 1", "R$19,90"],
    ["BÔNUS 2", "R$17,90"],
    ["BÔNUS 3", "R$12,90"]
  ];
  bonus.querySelectorAll("article").forEach((card, index) => {
    card.insertAdjacentHTML("afterbegin", '<span class="bonus-card-badge">' + items[index][0] + '</span>');
    card.insertAdjacentHTML("beforeend", '<p class="bonus-price"><del>' + items[index][1] + '</del><strong>GRATUITO</strong></p>');
  });
  section.querySelector(".bonus-foot").textContent = "Hoje, além do protocolo Aquário Sem Perdas, você também recebe estes 3 bônus gratuitamente. Condição especial disponível apenas nesta oferta.";
}

const final = document.querySelector(".final");
final.querySelector("h2").textContent = "Antes de colocar outro peixe no aquário, descubra o que pode estar colocando os atuais em risco.";
const finalParagraphs = final.querySelectorAll("p");
if (finalParagraphs[0]) finalParagraphs[0].textContent = "Não compre outro apenas torcendo para dar certo.";
