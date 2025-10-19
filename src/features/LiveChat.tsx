import { ChatboxColors, ChatboxPosition, Crisp } from "crisp-sdk-web";
import React from "react";

Crisp.configure(import.meta.env.VITE_CRISP_WEBSITE_ID, {
  locale: "ka",
  autoload: true,
});

Crisp.setZIndex(100);
Crisp.setHideOnAway(true);
Crisp.setColorTheme(ChatboxColors.Black);
Crisp.setPosition(ChatboxPosition.Right);
Crisp.message.showText(
  "გამარჯობა და კეთილი იყოს თქვენი მობრძანება Car Revamp-ზე!"
);
Crisp.message.showText(
  "ჩვენი გუნდი მზად არის, ნებისმიერ დროს გიპასუხოთ თქვენს შეკითხვაზე. მშვიდობიანი მგზავრიბა! 🚦"
);
window.addEventListener("beforeunload", () => {
  Crisp.session.reset();
});

function LiveChat() {
  return <React.Fragment></React.Fragment>;
}

export default LiveChat;
