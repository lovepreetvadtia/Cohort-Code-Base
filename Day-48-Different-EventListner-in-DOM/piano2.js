let body = document.querySelector('body')
let box = document.querySelectorAll('.piano .box')
let boxx = document.querySelectorAll('.outer .boxx')

let keySoundMap = {
    // Digit row (10 keys)
    Digit1: "28.mp3",
    Digit2: "29.mp3",
    Digit3: "30.mp3",
    Digit4: "31.mp3",
    Digit5: "32.mp3",
    Digit6: "33.mp3",
    Digit7: "34.mp3",
    Digit8: "35.mp3",
    Digit9: "36.mp3",
    Digit0: "37.mp3",

    // Q row (10 keys)
    KeyQ: "38.mp3",
    KeyW: "39.mp3",
    KeyE: "40.mp3",
    KeyR: "41.mp3",
    KeyT: "42.mp3",
    KeyY: "43.mp3",
    KeyU: "44.mp3",
    KeyI: "45.mp3",
    KeyO: "46.mp3",
    KeyP: "47.mp3",

    // A row (9 keys)
    KeyA: "48.mp3",
    KeyS: "49.mp3",
    KeyD: "50.mp3",
    KeyF: "51.mp3",
    KeyG: "52.mp3",
    KeyH: "53.mp3",
    KeyJ: "54.mp3",
    KeyK: "55.mp3",
    KeyL: "56.mp3",

    // Z row (7 keys)
    KeyZ: "57.mp3",
    KeyX: "58.mp3",
    KeyC: "59.mp3",
    KeyV: "60.mp3",
    KeyB: "61.mp3",
    KeyN: "62.mp3",
    KeyM: "63.mp3"
};





body.addEventListener('keydown',function(dets){
let sound = keySoundMap[dets.code]

let audio = new Audio(sound)
audio.play();
})