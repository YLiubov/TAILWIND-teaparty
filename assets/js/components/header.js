import { create } from "../utils/create.js"
import { set } from "../utils/set.js"

export function header() {
  const header = create("header")

  // HERO (картинка + заголовок)
  const hero = create("div")
  hero.className = "relative " // важно: чтобы меню позиционировалось внутри hero

  const img = create("img")
  img.src = "./assets/img/Image-Hero-Front.jpg"
  img.alt = "TeaParty hero"
  img.className = "w-full h-[230px] md:h-[480px] object-cover"

  const title = create("h1")
  title.textContent = "TeaParty"
  title.className =
    "text-white text-[max(5rem,9vw)] absolute top-[4vw] left-[4vw] font-customGoogle"

  // MOBILE MENU (внутри HERO справа)
  const navMobile = create("nav")
  // hidden by default (opacity-0 + pointer-events-none)
  // появляется плавно, как панель справа
  navMobile.className =
    "md:hidden absolute right-0 top-0 h-full w-[45%] bg-[#6b4a33]/95 z-40 " +
    "opacity-0 pointer-events-none translate-x-6 " +
    "transition-all duration-500 ease-in-out"

  const mobileList = create("div")
  mobileList.className =
    "h-full flex flex-col justify-center gap-6 px-6 text-[#b4b36a] font-semibold text-xl"

  set(
    [
      navLink("ABOUT US", "#about"),
      navLink("BRANDS", "#brands"),
      navLink("HOW TO", "#howto"),
      navLink("JOIN US", "#contact"),
    ],
    mobileList
  )

  set(mobileList, navMobile)

  set([img, title, navMobile], hero)

  // BAR (коричневая полоска)
  const bar = create("div")
  bar.className =
    "relative z-50 h-12 bg-[#6b4a33] flex items-center justify-end md:justify-center px-4 shadow-xl"

  // DESKTOP NAV (видно только на md+)
  const navDesktop = create("nav")
  navDesktop.className =
    "hidden md:flex gap-10 text-[#b4b36a] text-sm font-semibold"

  set(
    [
      navLink("ABOUT US", "#about"),
      navLink("BRANDS", "#brands"),
      navLink("HOW TO", "#howto"),
      navLink("JOIN US", "#contact"),
    ],
    navDesktop
  )

  // BURGER (видно только на mobile)
  const burger = create("button")
  burger.className = "md:hidden text-[#b4b36a] text-4xl leading-none"
  burger.setAttribute("aria-label", "Menu");
  burger.setAttribute("aria-expanded", "false")
  burger.textContent = "≡"

  // -------------------------
  // ЛОГИКА ОТКРЫТЬ / ЗАКРЫТЬ
  // -------------------------
  function closeMenu() {
    burger.setAttribute("aria-expanded", "false")
    burger.textContent = "≡"

    // прячем панель справа
    navMobile.classList.remove("opacity-100", "pointer-events-auto", "translate-x-0")
    navMobile.classList.add("opacity-0", "pointer-events-none", "translate-x-6")
  }

  function openMenu() {
    burger.setAttribute("aria-expanded", "true")
    burger.textContent = "✕"

    // показываем панель справа
    navMobile.classList.remove("opacity-0", "pointer-events-none", "translate-x-6")
    navMobile.classList.add("opacity-100", "pointer-events-auto", "translate-x-0")
  }

  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true"
    if (isOpen) closeMenu()
    else openMenu()
  })

  // Закрывать меню после клика по пункту
  navMobile.addEventListener("click", (e) => {
    if (e.target.tagName === "A") closeMenu()
  })

  // Собираем bar и весь header
  set([navDesktop, burger], bar)
  set([hero, bar], header)

  return header
}

// маленькая функция для ссылок
function navLink(text, href) {
  const a = document.createElement("a")
  a.textContent = text
  a.href = href
  a.className = "hover:opacity-60"
  return a
}