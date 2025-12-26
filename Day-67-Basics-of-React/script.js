import nav from "./nav.js";
import mid from "./mid.js";

let root = document.querySelector('#root')

let mainImg = React.createElement('img',{className:'mainImg',src:'./assets/main.png'})
let container = React.createElement('div',{className:'container'},[nav,mid,mainImg])

let roots  = ReactDOM.createRoot(root)

roots.render(container)
