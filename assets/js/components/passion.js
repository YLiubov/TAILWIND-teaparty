import { create } from "../utils/create.js"
import { set } from "../utils/set.js"

export function passion() {
  const section = create("section")

  // фон как в макете + отступы
  section.className = "bg-[#F1F3E2] py-10"

  // контейнер: на мобилке колонка, на desktop две колонки
  const wrap = create("div")
  wrap.className =
    "px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 items-start"

  // -------- LEFT (TEXT) --------
  const left = create("div")

  const title = create("h2")
  title.textContent = "Passion and pride"
  title.className = "font-customGoogle text-6xl text-[#b4b36a]"

  const p1 = create("p")
  p1.textContent =
    "Working in the world of tea are what drive our constant evolution, and what have allowed us to offer the framework of service and care that this highly appreciated product with over 2,000 years of history deserves."
  p1.className = "mt-4 text-[#4b4b4b] leading-relaxed"

  const p2 = create("p")
  p2.textContent =
    "Since 1990 our knowledge and experience has been geared to the quality of our products, which we treat with respect and meticulousness."
  p2.className = "mt-4 text-[#4b4b4b] leading-relaxed"

  set([title, p1, p2], left)

  // -------- RIGHT (ICON) --------
  const right = create("div")
  right.className = "mt-8 md:mt-0 flex md:justify-center"

  const icon = create("img")
  icon.src = "./assets/img/icon-tea.png"; // mой png
  icon.alt = "Tea icon"
  // модификатор брейкпоинта (media query), означающий min-width
  icon.className = "md:w-90"

  set(icon, right)

  // собираем две колонки
  set([left, right], wrap)
  set(wrap, section)

  return section
}