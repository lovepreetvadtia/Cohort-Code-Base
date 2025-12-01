let body = document.querySelector('body')
let box = document.querySelectorAll('.piano .box')
let boxx = document.querySelectorAll('.outer .boxx')


let aud28 = new Audio(`./28.mp3`)
let aud29 = new Audio(`./29.mp3`);
let aud30 = new Audio(`./30.mp3`);
let aud31 = new Audio(`./31.mp3`);
let aud32 = new Audio(`./32.mp3`);
let aud33 = new Audio(`./33.mp3`);
let aud34 = new Audio(`./34.mp3`);
let aud35 = new Audio(`./35.mp3`);
let aud36 = new Audio(`./36.mp3`);
let aud37 = new Audio(`./37.mp3`);
let aud38 = new Audio(`./38.mp3`);
let aud39 = new Audio(`./39.mp3`);
let aud40 = new Audio(`./40.mp3`);
let aud41 = new Audio(`./41.mp3`);
let aud42 = new Audio(`./42.mp3`);
let aud43 = new Audio(`./43.mp3`);
let aud44 = new Audio(`./44.mp3`);
let aud45 = new Audio(`./45.mp3`);
let aud46 = new Audio(`./46.mp3`);
let aud47 = new Audio(`./47.mp3`);
let aud48 = new Audio(`./48.mp3`);
let aud49 = new Audio(`./49.mp3`);
let aud50 = new Audio(`./50.mp3`);
let aud51 = new Audio(`./51.mp3`);
let aud52 = new Audio(`./52.mp3`);
let aud53 = new Audio(`./53.mp3`);


console.log('Hello')



body.addEventListener('keydown',function(dets){
        
    if(dets.code == 'KeyZ'){ aud28.play() }
    if(dets.code == 'KeyX'){ aud29.play() }
    if(dets.code == 'KeyC'){ aud30.play() }
    if(dets.code == 'KeyV'){ aud31.play() }
    if(dets.code == 'KeyB'){ aud32.play() }
    if(dets.code == 'KeyN'){ aud33.play() }
if(dets.code == 'KeyM'){ aud34.play() }

if(dets.code == 'KeyA'){ aud35.play() }
if(dets.code == 'KeyS'){ aud36.play() }
if(dets.code == 'KeyD'){ aud37.play() }
if(dets.code == 'KeyF'){ aud38.play() }
if(dets.code == 'KeyG'){ aud39.play() }
if(dets.code == 'KeyH'){ aud40.play() }
if(dets.code == 'KeyJ'){ aud41.play() }
if(dets.code == 'KeyK'){ aud42.play() }
if(dets.code == 'KeyL'){ aud43.play() }

if(dets.code == 'KeyQ'){ aud44.play() }
if(dets.code == 'KeyW'){ aud45.play() }
if(dets.code == 'KeyE'){ aud46.play() }
if(dets.code == 'KeyR'){ aud47.play() }
if(dets.code == 'KeyT'){ aud48.play() }
if(dets.code == 'KeyY'){ aud49.play() }
if(dets.code == 'KeyU'){ aud50.play() }
if(dets.code == 'KeyI'){ aud51.play() }
if(dets.code == 'KeyO'){ aud52.play() }
if(dets.code == 'KeyP'){ aud53.play() }

})