const posX = document.getElementById('posX')
const posY = document.getElementById('posY')
window.addEventListener('mousemove',(event) => {
    let x =event.screenX
    let y = event.screenY

    posX.innerText = x
    posY.innerText = y
})