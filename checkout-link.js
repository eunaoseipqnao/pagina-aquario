const checkoutUrl = "https://pay.cakto.com.br/invyhzb_1091318";
const primaryPurchaseCta = document.querySelector(".offer .buy a.btn");
if (primaryPurchaseCta) primaryPurchaseCta.href = checkoutUrl;
