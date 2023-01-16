let interaction = document.querySelector("a:nth-of-type(12)")

interaction.addEventListener("click", jumpHandler)
interaction.addEventListener("animationend", jumpHandler)

function jumpHandler() {
  interaction.classList.toggle("jump")
}

/* hier komen de javascriptjes van mijn animaties */

/* nombre uno */

let frontend = document.querySelector("a:nth-of-type(1)")
frontend.addEventListener("click", ChangeColor)
frontend.addEventListener("animationend", ChangeColor)
function ChangeColor() {
  frontend.classList.toggle("color-change")
}

/* hombre duo */

let design = document.querySelector("a:nth-of-type(2)")
design.addEventListener("click", Right)
design.addEventListener("animationend", Right)
function Right() {
  design.classList.toggle("walk-right")
}

/* nummer 3 */

let and = document.querySelector("a:nth-of-type(3)")
and.addEventListener("click", Gone)
and.addEventListener("animationend", Gone)
function Gone() {
  and.classList.toggle("disappear")
}

/*number viero */
let development = document.querySelector("a:nth-of-type(4)")
development.addEventListener("click", Left)
development.addEventListener("animationend", Left)
function Left() {
  development.classList.toggle("walk-left")
}

/* nummer 5 */

let sprint_5 = document.querySelector("a:nth-of-type(5)")
sprint_5.addEventListener("click", Squish)
sprint_5.addEventListener("animationend", Squish)
function Squish() {
  sprint_5.classList.toggle("squish")
}

/* nummer 6 */

let fix = document.querySelector("a:nth-of-type(6)")
fix.addEventListener("mousedown", {})
onmousedown = () => {}
fix.addEventListener("animationend", small)
function small() {
  fix.classList.toggle("small")
}
