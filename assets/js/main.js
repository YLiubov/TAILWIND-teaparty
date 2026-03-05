import { create } from './utils/create.js'
import { get } from './utils/get.js'
import { set } from './utils/set.js'

import { header } from "./components/header.js"
import { passion } from "./components/passion.js"
import { about } from "./components/about.js";
// позже добавим: import { footer } from "./components/footer.js";

const root = get("#root")
set([header(), passion(), about()], root)
