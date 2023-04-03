
const progressBar = document.getElementsByClassName('progress-Bar')[0];;
const max_width = 90;; 

setInterval(() => {
    const computedStyle = getComputedStyle(progressBar);;
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    if (width < max_width) { 
        progressBar.style.setProperty('--width', width + 0.1);;
    }
}, 5)

setInterval(transfer, 5500);

function transfer() {
    window.location.href="menu_awal.html";;
}