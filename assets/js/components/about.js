import { create } from "../utils/create.js";
import { set } from "../utils/set.js";

export function about() {
  const section = create("section");
  section.className = "py-5";

  // Заголовок About us
  const h2 = create("h2");
  h2.textContent = "About us";
  h2.className =
    "font-customGoogle text-6xl px-6 text-[#6b4a33]";

  // Контейнер для карточек
  const list = create("div");
  list.className = "mt-4";

  // --- CARD 1 ---
  const card1 = createCard(
    "./assets/img/About-us-1.jpg",
    "The Team",
    "Meet our dedicated team"
  );

  // --- CARD 2 ---
  const card2 = createCard(
    "./assets/img/About-us-2.jpg",
    "The Brand",
    "TeaParty brands and mixtures"
  );

  // --- CARD 3 ---
  const card3 = createCard(
    "./assets/img/About-us-3.jpg",
    "The Company",
    "Company information and Mission"
  );

  // --- CARD 4 ---
  const card4 = createCard(
    "./assets/img/About-us-4.jpg",
    "The Customers",
    "About the Sippers and Dippers"
  );

  set([card1, card2, card3, card4], list);
  set([h2, list], section);

  return section;
}

// Маленькая функция-помощник (чтобы не повторять одно и то же)
function createCard(imgSrc, titleText, subText) {
  const card = create("a");
  card.href = "#";
  card.className = "relative block overflow-hidden border-t-2 border-white";

  const img = create("img");
  img.src = imgSrc;
  img.alt = titleText;
  img.className = "w-full h-32 object-cover brightness-75";

  const textBox = create("div");
  textBox.className = "absolute top-0 left-0 p-4";

  const title = create("h3");
  title.textContent = titleText;
  title.className = "text-[#b4b36a] text-5xl font-customGoogle leading-none";

  const sub = create("p");
  sub.textContent = subText;
  sub.className = "text-white text-xl";

  set([title, sub], textBox);
  set([img, textBox], card);

  return card;
}