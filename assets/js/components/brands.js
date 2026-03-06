import { create } from "../utils/create.js"
import { set } from "../utils/set.js"

export function brands() {
  // главная секция
  const section = create("section")
  section.id = "brands"
  section.className = "bg-[#F1F3E2] py-5"

  // заголовок
  const h2 = create("h2")
  h2.textContent = "Our Brands"
  h2.className = "font-customGoogle text-6xl px-6 text-[#7a8c2c]"

  // grid для картинок
  const grid = create("div")
  grid.className = "mt-4 grid grid-cols-2 lg:grid-cols-3 gap-2"

  // картинки
  const img1 = brandImg("./assets/img/Brands-Green.jpg", "Green tea")
  const img2 = brandImg("./assets/img/Brands-Black.jpg", "Black tea")
  const img3 = brandImg("./assets/img/Brands-Herbal.jpg", "Herbal tea")
  const img4 = brandImg("./assets/img/Brands-Organic.jpg", "Organic tea")
  const img5 = brandImg("./assets/img/Brands-Rooibos.jpg", "Rooibos tea")
  const img6 = brandImg("./assets/img/Brands-White.jpg", "White tea")

  // собираем grid
  set([img1, img2, img3, img4, img5, img6], grid)

  // собираем секцию
  set([h2, grid], section)

  return section
}

// маленькая helper-функция для картинок
function brandImg(src, alt) {
  const img = create("img")
  img.src = src
  img.alt = alt
  img.className = "w-full aspect-square object-cover"
  return img
}