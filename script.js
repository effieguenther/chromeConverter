console.log('extension go?')

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt)
    let stockAvail = document.getElementsByClassName('count')
    for (elt of stockAvail) {
        elt.textContent *= 0.9144
        elt.textContent += ' Meters'
    }

    let colData = document.getElementsByClassName('col data')
    for (elt of colData) {
        if (elt.dataset.th === "Max Roll Length") {
            let number = elt.textContent.match(/\d+/)
            number *= 0.9144
            elt.textContent = `${number} Meters`
        }
    }

    let price = document.getElementsByClassName('price')
    for (elt of price) {
        let number = elt.textContent.match(/\d+/)
        number *= 0.9144
        elt.textContent = `$${number}`
    }

    let yard = document.getElementsByClassName('yard')
    for (elt of yard) {
        elt.textContent = '/ Meter'
    }
}