import { create } from "../utils/create.js"
import { set } from "../utils/set.js"

export function howto() {
  // главная секция
  const section = create("section")
  section.id = "howto"
  section.className = "bg-[#F1F3E2]"

  // Заголовок секции
  const h2 = create("h2")
  h2.textContent = "How to prepare tea"
  h2.className = "font-customGoogle text-6xl px-6 text-[#d39a7d]"

  // TOP BAR
  const topBar = create("div")
  topBar.className =
    "mt-4 px-6 flex flex-col bg-[url('../img/Form-Base.jpg')] bg-cover h-50 lg:flex-row lg:justify-between lg:h-30 grid grid-cols-1 md:grid-cols-2 gap-2 items-center"

  // Левая часть верхней панели
  const infoBox = create("div")

  const topTitle = create("h3")
  topTitle.textContent = "Make a nice cup of tea"
  topTitle.className = "text-[#d39a7d] text-3xl font-semibold"

  const topText = create("p")
  topText.textContent = "Choose your brand and learn how to prepare."
  topText.className = "text-sm text-white/80"

  set([topTitle, topText], infoBox)

  // Правая часть верхней панели (select)
  const select = create("select")
  select.className =
    "w-full bg-[#e6c7b3] text-[#d39a7d] border border-[#c18f74] px-4 py-2 outline-none"

  // DATA
  const brandsArray = [
    {
      value: "Green Tea",
      img: "./assets/img/Brands-Green.jpg",
      headline: "Green Tea",
      p1: "Choose your brand and learn how to prepare.",
      p2: "Fresh and vegetal, green teas are plucked, withered and rolled. Heat is applied to stop oxidation.",
      p3: "Water Temperature: 80°C / 180°F",
      p4: "Brewing Time: 2 - 3 min.",
    },
    {
      value: "Black Tea",
      img: "./assets/img/Brands-Black.jpg",
      headline: "Black Tea",
      p1: "Choose your brand and learn how to prepare.",
      p2: "Black tea has a stronger flavour and full oxidation gives it a richer character.",
      p3: "Water Temperature: 95°C / 203°F",
      p4: "Brewing Time: 3 - 5 min.",
    },
    {
      value: "Herbal Tea",
      img: "./assets/img/Brands-Herbal.jpg",
      headline: "Herbal Tea",
      p1: "Choose your brand and learn how to prepare.",
      p2: "Herbal infusions are aromatic and usually caffeine-free.",
      p3: "Water Temperature: 100°C / 212°F",
      p4: "Brewing Time: 5 - 7 min.",
    },
    {
      value: "Rooibos",
      img: "./assets/img/Brands-Rooibos.jpg",
      headline: "Rooibos",
      p1: "Choose your brand and learn how to prepare.",
      p2: "Rooibos is smooth and naturally sweet with no caffeine.",
      p3: "Water Temperature: 100°C / 212°F",
      p4: "Brewing Time: 5 - 7 min.",
    },
    {
      value: "White Tea",
      img: "./assets/img/Brands-White.jpg",
      headline: "White Tea",
      p1: "Choose your brand and learn how to prepare.",
      p2: "White tea is delicate and should be brewed gently.",
      p3: "Water Temperature: 75°C / 167°F",
      p4: "Brewing Time: 2 - 4 min.",
    },
    {
      value: "Organic Tea",
      img: "./assets/img/Brands-Organic.jpg",
      headline: "Organic Tea",
      p1: "Choose your brand and learn how to prepare.",
      p2: "Organic blends are grown and prepared with natural methods.",
      p3: "Water Temperature: 90°C / 194°F",
      p4: "Brewing Time: 3 - 5 min.",
    },
  ]

  // Добавляем dropdown options в select
  brandsArray.forEach((tea) => {
    const option = create("option")
    option.value = tea.value
    option.textContent = tea.value
    select.appendChild(option)
  })

  // Добавляем левую и правую часть в topBar
  set([infoBox, select], topBar)

  // CARD AREA
  const card = create("div")
  card.className =
    " bg-[#d39a7d] grid grid-cols-1 md:grid-cols-2"

  const cardImg = create("img")
  cardImg.className = "w-full h-full object-cover"

  const cardText = create("div")
  cardText.className = "p-6 text-[#6b4a33]"

  const cardHeadline = create("h3")
  cardHeadline.className = "text-4xl"

  const text1 = create("p")
  text1.className = "text-sm mt-1"

  const text2 = create("p")
  text2.className = "text-sm mt-2"

  const text3 = create("p")
  text3.className = "text-sm mt-6"

  const text4 = create("p")
  text4.className = "text-sm mt-4"

  set([cardHeadline, text1, text2, text3, text4], cardText)
  set([cardImg, cardText], card)

  // FUNCTION TO UPDATE CARD
  function renderTea(tea) {
    cardImg.src = tea.img
    cardImg.alt = tea.headline

    cardHeadline.textContent = tea.headline
    text1.textContent = tea.p1
    text2.textContent = tea.p2
    text3.textContent = tea.p3
    text4.textContent = tea.p4
  }

  // Первый чай по умолчанию
  renderTea(brandsArray[0])

  // Когда меняется select → меняется карточка
  select.addEventListener("change", (e) => {
    const selectedTea = brandsArray.find(
      (tea) => tea.value === e.target.value
    )

    if (selectedTea) {
      renderTea(selectedTea)
    }
  })

  // Собираем секцию
  set([h2, topBar, card], section)

  return section
}