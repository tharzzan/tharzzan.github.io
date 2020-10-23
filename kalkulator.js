function operatorPushed (ygDitekan) {
    let daftarOperator = '+-*/'
    let input = document.getElementById("input").innerText
    let charTerakhir = input[input.length-1]
    let isCharTerakhirOperator = false
    let tampungan = ''

    // kalau user iseng diawal2 udah pencet operator, keluar aja
    if (input == 0) {return}

    // cek dulu, apakah charTerakhir-nya adalah sebuah operator
    for (let i = 0; i < daftarOperator.length; i++) {

        if (charTerakhir === daftarOperator[i]) {

            isCharTerakhirOperator = true
            break
        }
    }

    if (isCharTerakhirOperator) {
        
        // replace operator yg sebelumnya
        for (let j = 0; j < (input.length - 1); j++) {
            tampungan += input[j]
        }
        tampungan += ygDitekan
        document.getElementById("input").innerText = tampungan
        return
    }
    else {
        document.getElementById("input").innerText += ygDitekan
        return
    }
}

function numberPushed (ygDitekan) {
    let ygMauDikalkulasi = document.getElementById("input").innerText // '1+ 8/2'= 5 bukan 4.5
    let hasil = 0
    let operator = '+-*/'
    let adaOperator = false

    if (ygMauDikalkulasi == 0) {
        document.getElementById("input").innerText = ygDitekan
    }
    else {
        document.getElementById("input").innerText += ygDitekan
        ygMauDikalkulasi = document.getElementById("input").innerText
    }
    
    // looping untuk cek apakah user sudah memasukkan operator
    for (let i = 0; i < ygMauDikalkulasi.length; i++) {

        for (let j=0; j < operator.length; j++) {

            if (ygMauDikalkulasi[i] === operator[j]) {
                adaOperator = true
                break
            }
        }

        if (adaOperator === true) {break}
    }

    if (adaOperator === true) {

        hasil = eval(ygMauDikalkulasi)
        document.getElementById("mini-preview").innerText = hasil
    }
}

function resetCalc () {
    document.getElementById("input").innerText = 0
}

function goCalc() {
    let ygMauDikalkulasi = document.getElementById("input").innerText

    // kalau user iseng diawal2 udah pencet '=', keluar aja
    if (ygMauDikalkulasi == 0) {return}

    // replace apa yg ada di input, dgn yg ada di mini-preview
    document.getElementById("input").innerText = document.getElementById("mini-preview").innerText
    document.getElementById("mini-preview").innerText = ''
}
