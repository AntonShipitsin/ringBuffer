function addition() {
    let a = parseFloat(document.getElementById('plate').value);
    let b = parseFloat(document.getElementById('box').value);
    let c = parseFloat(document.getElementById('speed').value);
    let result = ((a - b) / 2) * 60 / c;

    document.getElementById('calc').innerHTML = result
}


