function createColour() {
    var hexcodes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var hex = ['#'];
    for (let i = 0; i < 6; i++) {
        var num = Math.floor(Math.random() * 11)
        hex += hexcodes[num]
    }
    let hexcode = hex.toString();
    return hexcode
}

function changePalette() {
    let codes = []
    let firstDiv = document.getElementById('one');
    let secondDiv = document.getElementById('two');
    let thirdDiv = document.getElementById('three');
    let fourthDiv = document.getElementById('four');
    let fifthDiv = document.getElementById('five');
    let divs = [firstDiv, secondDiv, thirdDiv, fourthDiv, fifthDiv]

    for (let i=0; i<5; i++) {
        let hexcode = createColour();
        codes.push(hexcode);
        document.getElementById(`${divs[i].id}`).style.backgroundColor = codes[i];
        document.getElementById(`${divs[i].id}Head`).textContent = `${codes[i]}`
    }
}


