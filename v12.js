const uncertaintyChecklist = document.querySelector(".prebuy");
if (uncertaintyChecklist) {
  const eyebrow = uncertaintyChecklist.querySelector("label");
  const headline = uncertaintyChecklist.querySelector("h2");
  const list = uncertaintyChecklist.querySelector(".checklist");
  const box = uncertaintyChecklist.querySelector(".quote");

  if (eyebrow) eyebrow.textContent = "CHECKLIST RÁPIDO";
  if (headline) {
    headline.textContent = "Antes do próximo peixe, você consegue responder estas 6 perguntas?";
    const oldSubtitle = uncertaintyChecklist.querySelector(".prebuy-subtitle");
    if (!oldSubtitle) headline.insertAdjacentHTML("afterend", '<p class="prebuy-subtitle">Se você ainda não consegue responder com segurança, talvez o problema que causou as últimas perdas ainda esteja presente.</p>');
  }
  if (list) list.innerHTML = "<p>Você sabe por que os últimos peixes morreram?</p><p>Sabe qual ponto do aquário deveria investigar primeiro?</p><p>Consegue identificar o que mudou antes do problema começar?</p><p>Sabe se o problema vem da água, do ambiente ou da rotina?</p><p>Sabe se o aquário já está estável para receber outro peixe?</p><p>Se outro peixe começar a agir estranho hoje, você saberia o que fazer primeiro?</p>";
  if (box) {
    const cta = box.querySelector("a");
    box.innerHTML = '<p class="prebuy-main">“Se alguma resposta foi ‘não’, comprar outro peixe agora significa continuar sem saber se o problema que causou as últimas perdas ainda está presente.”</p><p class="prebuy-support">O Aquário Sem Perdas organiza a investigação e mostra o que verificar primeiro, em vez de fazer você testar tudo no escuro.</p>';
    if (cta) box.appendChild(cta);
  }
}
