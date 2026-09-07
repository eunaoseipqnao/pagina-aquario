// Informação correta e consistente do produto.
const replaceText = (root, find, value) => {
  const walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = []; while (walk.nextNode()) nodes.push(walk.currentNode);
  nodes.forEach(n => { n.nodeValue = n.nodeValue.replace(find, value); });
};
replaceText(document.body, /aproximadamente 60 páginas|60 páginas/gi, "120 páginas");

// Padronização de CTA, preservando hrefs existentes.
document.querySelectorAll("a.btn").forEach(button => {
  button.textContent = button.closest(".offer") ? "QUERO ACESSAR O PROTOCOLO POR R$19,90 →" : "QUERO INVESTIGAR MEU AQUÁRIO AGORA →";
});

// Seção de prova do produto.
const proofSection = document.querySelector(".inside .two");
if (proofSection && proofSection.children.length > 1) {
  const proofCopy = proofSection.children[1];
  const heading = proofCopy.querySelector("h2");
  const body = proofCopy.querySelector(".body");
  const list = proofCopy.querySelector("ul");
  if (heading) heading.textContent = "Veja exatamente o que você recebe";
  if (body) body.textContent = "Não é um material para ler uma vez e esquecer. É um sistema de consulta para saber por onde começar sempre que algo parecer errado no aquário.";
  if (list) list.innerHTML = "<li>120 páginas de conteúdo prático</li><li>diagnóstico inicial e mapa de investigação</li><li>saiba o que medir e o que realmente merece atenção</li><li>protocolo de investigação em 5 etapas</li><li>saiba o que verificar quando um peixe estiver ofegando, escondido ou sem comer</li><li>checklists e protocolo de estabilização</li><li>Diário do Aquário por 30 dias</li><li>SOS — Meu Peixe Está Estranho</li><li>Checklist Antes do Próximo Peixe</li><li>acesso fácil pelo celular</li>";
}

// Bônus: nome + aplicação prática, sem mexer nas capas ou nos valores definidos.
const bonusDescriptions = [
  "Registre parâmetros, alimentação, manutenção e comportamento durante 30 dias para identificar padrões com mais facilidade.",
  "Uma consulta rápida para saber o que observar e o que verificar primeiro quando algum peixe começar a agir diferente.",
  "Um checklist antes da próxima compra para conferir estabilidade, parâmetros, filtragem, espaço e compatibilidade."
];
document.querySelectorAll(".bonus article").forEach((card, i) => {
  const h3 = card.querySelector("h3");
  const description = h3 ? h3.nextElementSibling : null;
  if (description && description.tagName === "P") description.textContent = bonusDescriptions[i];
});
const bonusEnd = document.querySelector(".bonus-foot");
if (bonusEnd) bonusEnd.textContent = "Os 3 materiais extras estão incluídos sem custo adicional na condição atual.";

// Oferta com benefício e preço claramente separados.
const offer = document.querySelector(".offer");
if (offer) {
  const title = offer.querySelector("h2");
  const list = offer.querySelector(".offer-list");
  const priceLabel = offer.querySelector(".buy small");
  const priceDescription = offer.querySelector(".buy p");
  if (title) title.textContent = "Antes de gastar dinheiro com outro peixe, descubra o que está acontecendo no aquário.";
  if (list) list.innerHTML = "<li>Protocolo Aquário Sem Perdas</li><li>120 páginas de conteúdo prático</li><li>Diário do Aquário — 30 dias</li><li>SOS — Meu Peixe Está Estranho</li><li>Checklist Antes do Próximo Peixe</li><li>acesso imediato</li><li>garantia de 7 dias</li>";
  if (priceLabel) priceLabel.textContent = "TUDO ISSO POR";
  if (priceDescription) priceDescription.textContent = "Pagamento único. Sem mensalidade.";
}

// FAQ orientado a decisão.
const objectionAnswers = [
  "Você não precisa dominar fórmulas. O protocolo mostra o que verificar, em que ordem investigar e quais pontos merecem atenção.",
  "Melhor ainda. O protocolo ajuda você a investigar um aquário que já está funcionando e descobrir quais pontos precisam ser verificados.",
  "Não. É um protocolo de consulta: você parte da situação do seu aquário e segue os mapas, checklists e etapas correspondentes.",
  "Não existe uma lista obrigatória de equipamentos extras. Primeiro, o protocolo ajuda a identificar o que precisa ser verificado.",
  "Não substitui diagnóstico veterinário. Ele ajuda a investigar água, filtragem, temperatura, alimentação, população, manutenção e comportamento."
];
document.querySelectorAll(".objections .faq details").forEach((detail, i) => {
  const answer = detail.querySelector("p");
  if (answer && objectionAnswers[i]) answer.textContent = objectionAnswers[i];
});

// Fechamento consistente com a dor central.
const finalBlock = document.querySelector(".final");
if (finalBlock) {
  const paragraphs = finalBlock.querySelectorAll("p");
  if (paragraphs[0]) paragraphs[0].textContent = "Não compre outro apenas torcendo para dar certo. Investigue primeiro o que está acontecendo no aquário.";
  if (!finalBlock.querySelector(".v10-first-step")) {
    const pricing = finalBlock.querySelector("strong");
    if (pricing) pricing.insertAdjacentHTML("beforebegin", '<p class="v10-first-step">Comece hoje pelo primeiro ponto que precisa ser verificado.</p>');
  }
}
