import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'

export function header() {
  const header = create("header")

  // 1) HERO (картинка + заголовок)
  const hero = create("div")
  hero.className = "relative"

  const img = create("img")
  img.src = "./assets/img/Image-Hero-Front.jpg"
  img.alt = "TeaParty hero"
  img.className = "w-full h-[230px] object-cover"

  const title = create("h1")
  title.textContent = "TeaParty"
  title.className =
    "text-white text-[max(6rem,10vw)] absolute top-[3vw] left-[3vw] font-customGoogle"

  set([img, title], hero)

  // 2) BAR (коричневая полоска)
  const bar = create("div")
  bar.className = "h-12 bg-[#6b4a33] flex items-center justify-end px-4"

  // 3) Burger (простой символ)
  const burger = create("button")
  burger.className = "text-[#b4b36a] text-6xl leading-none"
  burger.setAttribute("aria-label", "Open menu")
  burger.textContent = "≡"

  set(burger, bar)

  // 4) Собираем header
  set([hero, bar], header)

  return header
}