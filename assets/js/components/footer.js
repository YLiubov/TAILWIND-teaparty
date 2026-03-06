import { create } from "../utils/create.js"
import { set } from "../utils/set.js"

export function footer() {
  // SECTION
  const section = create("section")
  section.id = "contact"
  section.className = "bg-[#6b4a33] text-white py-10"

  // WRAP: mobile 1 col, desktop 2 col
  const wrap = create("div")
  wrap.className =
    "px-6 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"

  // LEFT: contact info + links
  const left = create("div")

  const title = create("h2")
  title.textContent = "Contact us"
  title.className = "font-customGoogle text-6xl text-[#b4b36a]"

  const address = create("p")
  address.className = "mt-6"
  address.textContent =
    "Styrsgötan 4, 211 24 Malmö, Sweden\n+46 (0) 761688994\nsales@teministeriet.com"

  // делаем переносы строк видимыми
  address.style.whiteSpace = "pre-line"

  const infoBlock = create("div")
  infoBlock.className = "mt-10"

  const infoTitle = create("h3")
  infoTitle.textContent = "Information"
  infoTitle.className = "text-xl font-semibold text-[#b4b36a]"

  const infoLinks = create("div")
  infoLinks.className = "mt-2 flex flex-col gap-1"

  const l1 = smallLink("About Us", "#about")
  const l2 = smallLink("Our Blog", "#")

  set([l1, l2], infoLinks)

  const tcBlock = create("div")
  tcBlock.className = "mt-8"

  const tcTitle = create("h3")
  tcTitle.textContent = "Terms & Conditions"
  tcTitle.className = "text-xl font-semibold text-[#b4b36a]"

  const tcLinks = create("div")
  tcLinks.className = "mt-2 flex flex-col gap-1"

  const t1 = smallLink("Privacy Policy", "#")
  const t2 = smallLink("Contact Us", "#contact")

  set([t1, t2], tcLinks)

  set([infoTitle, infoLinks], infoBlock)
  set([tcTitle, tcLinks], tcBlock)
  set([title, address, infoBlock, tcBlock], left)

  // -------------------------
  // RIGHT: form
  // -------------------------
  const right = create("div")

  const form = create("form")
  form.className = "flex flex-col gap-4"

  // input styles (как на макете: светлые поля)
  const inputBase =
    "w-full bg-[#d7c1b0] text-[#6b4a33] placeholder:text-[#9b7a66] border-2 border-[#a67f67] px-4 py-3 outline-none"

  // required to fill out before sending
  const name = input("text", "Full Name", inputBase)
  name.required = true

  const email = input("email", "E-Mail", inputBase)
  email.required = true

  const phone = input("tel", "Phone Number", inputBase)
  phone.required = true

  // checkboxes row
  const checks = create("div")
  checks.className = "flex items-center gap-10 text-[#d7c1b0]"

  const mailMe = checkbox("Mail me")
  const callMe = checkbox("Call Me")

  set([mailMe.wrap, callMe.wrap], checks)

  // error message box
  const error = create("p")
  error.className = "hidden text-[#ffd6d6] text-sm"
  error.textContent = "Please fill in all fields correctly."

  // send button
  const btn = create("button")
  btn.type = "submit"
  btn.textContent = "SEND"
  btn.className =
    "bg-[#d7c1b0] text-[#a67f67] border-2 border-[#a67f67] py-3 font-semibold tracking-widest"

  // -------------------------
  // VALIDATION
  // -------------------------
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // простые проверки
    const nameOk = name.value.trim().length >= 2;

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())

    const phoneOk = /^[0-9+\-\s]{6,}$/.test(phone.value.trim())

    const oneChecked = mailMe.input.checked || callMe.input.checked

    if (!nameOk || !emailOk || !phoneOk || !oneChecked) {
      error.classList.remove("hidden")

      // подсветим поля, если ошибка
      mark(name, nameOk)
      mark(email, emailOk)
      mark(phone, phoneOk)
      return
    }

    // если всё ок
    error.classList.add("hidden")
    mark(name, true)
    mark(email, true)
    mark(phone, true)

    // минимальный "успех"
    btn.textContent = "SENT ✓"
    setTimeout(() => (btn.textContent = "SEND"), 1200)

    // очистка формы
    form.reset()
  })

  set([name, email, phone, checks, error, btn], form)
  set(form, right)

  // assemble
  set([left, right], wrap)
  set(wrap, section)

  return section
}

// -------------------------
// helpers
// -------------------------
function input(type, placeholder, className) {
  const el = document.createElement("input")
  el.type = type
  el.placeholder = placeholder
  el.className = className
  return el
}

function checkbox(labelText) {
  const wrap = document.createElement("label")
  wrap.className = "flex items-center gap-3 cursor-pointer select-none"

  const input = document.createElement("input")
  input.type = "checkbox"
  input.className =
    "w-6 h-6 accent-[#d7c1b0] border border-[#a67f67]"

  const text = document.createElement("span")
  text.textContent = labelText
  text.className = "text-xl"

  wrap.append(input, text)

  return { wrap, input }
}

function smallLink(text, href) {
  const a = document.createElement("a")
  a.textContent = text
  a.href = href
  a.className = "text-white/90 hover:text-white w-fit"
  return a
}

function mark(inputEl, ok) {
  // если не ок -> красная рамка
  if (!ok) inputEl.classList.add("border-red-400")
  else inputEl.classList.remove("border-red-400")
}