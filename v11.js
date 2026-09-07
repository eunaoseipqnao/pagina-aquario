// 1. Equilibra a área “Para você que” com um complemento útil.
const targetAudience = [...document.querySelectorAll(".method .two")].find(block => {
  const title = block.querySelector("h2");
  return title && title.textContent.includes("O Aquário Sem Perdas é para você");
});
if (targetAudience && !targetAudience.querySelector(".focus-complement")) {
  targetAudience.insertAdjacentHTML("beforeend", '<aside class="focus-complement"><small>SE ISSO PASSA PELA SUA CABEÇA…</small><blockquote>“Eu faço o que me dizem, mas mesmo assim não sei onde estou errando.”</blockquote><p>O protocolo foi criado justamente para transformar essa dúvida em uma sequência clara de pontos para verificar.</p><div class="focus-path"><span>OBSERVE</span><i>↓</i><span>VERIFIQUE</span><i>↓</i><span>ENTENDA O QUE MERECE ATENÇÃO</span></div></aside>');
}

// 2. Enxuga o checklist pré-compra sem mudar as perguntas.
const prebuy = document.querySelector(".prebuy");
if (prebuy) {
  const eyebrow = prebuy.querySelector("label");
  const title = prebuy.querySelector("h2");
  const quote = prebuy.querySelector(".quote");
  if (eyebrow) eyebrow.textContent = "ANTES DO PRÓXIMO PEIXE";
  if (title) title.textContent = "Antes do próximo peixe, responda estas 6 perguntas.";
  if (quote) {
    const paragraphs = quote.querySelectorAll("p");
    if (paragraphs[0]) paragraphs[0].remove();
    quote.firstChild.nodeValue = "“Se você respondeu ‘não sei’ para qualquer uma dessas perguntas, ainda existe algo importante para investigar antes de adicionar outro peixe.”";
    if (!quote.querySelector(".v11-small")) {
      const small = document.createElement("p");
      small.className = "v11-small";
      small.textContent = "O Aquário Sem Perdas mostra por onde começar.";
      quote.insertBefore(small, quote.querySelector("a"));
    }
  }
}

// 3. Linguagem mais elegante para a garantia.
const guaranteeCopy = document.querySelector(".guarantee .risk-copy");
if (guaranteeCopy) {
  const eyebrow = guaranteeCopy.querySelector("label");
  if (eyebrow) eyebrow.textContent = "GARANTIA DE 7 DIAS";
}
