import { create } from "../utils/create.js"
import { set } from "../utils/set.js"

export function passion() {

  const section = create("section")
  section.className =
    "py-5 px-6 text-center"

  const title = create("h2")
  title.textContent = "Passion and pride"
  title.className =
    "text-[#b4b36a] text-4xl font-customGoogle m-6"

  const text1 = create("p")
  text1.textContent = "Working in the world of tea are what drive our constant evolution, and what we allowed so to offer the framework of service and care that this highly appreciated product with over 2,000 years of history deserves."
  text1.className = "text-gray-600 text-justify mb-4"

  const text2 = create("p")
  text2.textContent = "Since 1900 our knowledge and experience has been geared to the quality of our products, which we treat with respect and meticulousness."
  text2.className = "text-gray-600 text-justify mb-4"

  const icon = create("img")
  icon.src = "./assets/img/icon-tea.png"
  icon.alt = "Tea icon"
  icon.className = "w-3/4 mx-auto"

  set([title, text1, text2, icon], section)

  return section
}