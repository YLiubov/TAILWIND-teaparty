import { create } from "../utils/create.js"
import { set } from "../utils/set.js"

// создаёт всю секцию 
export function howto() {
    // главная секция

    const section = create ("section")
    section.id = "howto"
    section.className = "bg-[#F1F3E2] py-5"

    // заголовок
    const h2 = create ("h2")
    h2.textContent = "How to prepare tea"
    h2.className = "font-customGoogle text-6xl px-6 text-[#7a8c2c]" 

    // TOP BAR
    const topBar = create ("div")
    topBar.className = "mt-4 flex flex-col bg-[url('../img/Image-Hero-Front.jpg')] bg-cover h-auto lg:flex-row lg:justify-between lg:h-30"

    // Левая часть верхней панели
    const infoBox = create("div")


    // Добавляем левую и правую часть в topBar
    set([infoBox], topBar)

    // собираем секцию
    set([h2, topBar], section)

    return section
}