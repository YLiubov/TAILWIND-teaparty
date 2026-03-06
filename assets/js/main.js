import { create } from './utils/create.js'
import { get } from './utils/get.js'
import { set } from './utils/set.js'

import { header } from "./components/header.js"
import { passion } from "./components/passion.js"
import { about } from "./components/about.js";
import { brands } from './components/brands.js'
import { howto } from './components/howto.js'
import { footer } from "./components/footer.js";

const root = get("#root")

// 1) wrapper страницы (это “лист” по центру)
const page = create("div")
page.className = "max-w-5xl mx-auto"

// 2) складываем секции внутрь page
set([passion(), about(), brands(), howto()], page);

set([header(), page, footer()], root)
