// 1. A quantidade considera o protocolo e os materiais extras.
const replacePageCount = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
const pageCountNodes = [];
while (replacePageCount.nextNode()) pageCountNodes.push(replacePageCount.currentNode);
pageCountNodes.forEach(node => {
  node.nodeValue = node.nodeValue.replace(/120 páginas de conteúdo prático/gi, "120 páginas no total entre protocolo e materiais extras");
});

// 2. Garante o conteúdo e a hierarquia do box complementar do público.
const focusBox = document.querySelector(".focus-complement");
if (focusBox) {
  focusBox.innerHTML = '<small>SE ISSO PASSA PELA SUA CABEÇA…</small><blockquote>“Eu faço o que me dizem, mas mesmo assim não sei onde estou errando.”</blockquote><p>O protocolo foi criado justamente para transformar essa dúvida em uma sequência clara de pontos para verificar.</p><div class="focus-path"><span>OBSERVE</span><i>↓</i><span>VERIFIQUE</span><i>↓</i><span>ENTENDA O QUE MERECE ATENÇÃO</span></div>';
}

// 3. Mantém a lacuna de diagnóstico no checklist rápido.
const questions = document.querySelectorAll(".prebuy .checklist p");
if (questions[3]) questions[3].textContent = "Você consegue identificar qual área do aquário merece atenção primeiro?";

// 4. Evita repetir a mensagem do checklist dentro do bloco de preço.
const priceOffer = document.querySelector(".offer");
if (priceOffer) {
  const offerTitle = priceOffer.querySelector("h2");
  if (offerTitle) offerTitle.textContent = "Descubra o que está acontecendo no seu aquário antes de continuar tentando no escuro.";
}
