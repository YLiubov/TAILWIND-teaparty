import { create } from "../utils/create.js"
import { set } from "../utils/set.js"

// Главная функция секции About Она создаёт всю секцию и возвращает её в index.js
export function about() {

  // создаём секцию
  const section = create("section")
  section.id = "about"
  section.className = "bg-[#F1F3E2] py-5"


  // SECTION TITLE

  const h2 = create("h2")
  h2.textContent = "About us"

  // кастомный шрифт + цвет + размер
  h2.className =
    "font-customGoogle text-6xl px-6 text-[#7a8c2c]"



  // GRID CONTAINER

  const list = create("div")

  // grid layout
  // mobile → 1 колонка
  // desktop → 2 колонки
  list.className =
    "mt-4 grid grid-cols-1 md:grid-cols-2 gap-2"



  // CARDS
  const card1 = createCard(
    "./assets/img/About-us-1.jpg",
    "The Team",
    "Meet our dedicated team"
  )

  const card2 = createCard(
    "./assets/img/About-us-2.jpg",
    "The Brand",
    "TeaParty brands and mixtures"
  )

  const card3 = createCard(
    "./assets/img/About-us-3.jpg",
    "The Company",
    "Company information and Mission"
  )

  const card4 = createCard(
    "./assets/img/About-us-4.jpg",
    "The Customers",
    "About the Sippers and Dippers"
  )


  // добавляем карточки в grid
  set([card1, card2, card3, card4], list)

  // добавляем заголовок и grid в секцию
  set([h2, list], section)

  return section
}


// -------------------------
// ФУНКЦИЯ СОЗДАНИЯ КАРТОЧКИ
// -------------------------

function createCard(imgSrc, titleText, subText) {

  // карточка (ссылка)
  const card = create("a")
  card.href = "#"

  // relative → чтобы overlay и текст можно было позиционировать
  // group → нужен для hover внутри карточки
  card.className =
    "relative block overflow-hidden border-t-2 border-white group"

  // IMAGE
  const img = create("img")
  img.src = imgSrc
  img.alt = titleText

  // mobile высота меньше
  // desktop выше
  img.className =
    "w-full h-50 md:h-56 object-cover"


  // DARK OVERLAY
  const overlay = create("div")

  // overlay затемняет изображение
  // mobile → всегда тёмное
  // desktop hover → затемнение исчезает
  overlay.className =
    "absolute inset-0 bg-black/50 opacity-100 transition-opacity duration-300 md:group-hover:opacity-0"



  // TEXT CONTAINER
  const textBox = create("div")

  // z-10 чтобы текст был поверх overlay
  textBox.className =
    "absolute top-0 left-0 p-4 z-10"



  // CARD TITLE
  const title = create("h3")
  title.textContent = titleText

  title.className =
    "text-[#b4b36a] text-5xl font-customGoogle leading-none"



  // CARD SUBTITLE
  const sub = create("p")
  sub.textContent = subText

  sub.className =
    "text-white text-xl"

  // добавляем текст в контейнер
  set([title, sub], textBox)

  // добавляем элементы в карточку
  set([img, overlay, textBox], card)

  return card
}