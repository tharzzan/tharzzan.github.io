// let numberPushed = document.getElementsByClassName("keypad number")

// numberPushed.onclick = function () {
//     console.log (numberPushed)
// }

function buttonPushed (nomorYgDitekan) {
    let hasil = document.getElementById("hasil").innerText
    // let masihNol = true

    // console.log (hasil)

    if (hasil == 0) {
        // masihNol = false
        document.getElementById("hasil").innerText = nomorYgDitekan
    }
    else {
        document.getElementById("hasil").innerText += nomorYgDitekan
    }

    console.log (hasil)
}

function resetCalc () {
    document.getElementById("hasil").innerText = 0
}

function goCalc() {  // '12+3'
    let ygMauDikalkulasi = document.getElementById("hasil").innerText
    let num1 = 0
    let num2 = 0
    let operator = undefined
    let tampungan = ''
    let daftarOperator = '/*-+'
    let angka = '0123456789'

    for (let i = 0; i < ygMauDikalkulasi.length; i++) {
        let perKarakter = ygMauDikalkulasi[i]
        // console.log (perKarakter)
        
        for (let j = 0; j < angka.length; j++) {
            tampungan = ''
            
            if (perKarakter === angka[j]) {
                tampungan += perKarakter
                break
                
            }
            else {
                // simpan angka-nya & operatornya

                num1 = Number(tampungan)
                tampungan = ''
                operator = perKarakter
            }
        }
    }

    // ini dengan asumsi, kalkulator bodoh ini cuma terima 2 angka saja
    num2 = tampungan

    console.log ('num1', num1)
    console.log ('num2', num2)
    console.log ('operator', operator)

    // sekarang lakukan penghitungan
    switch (operator) {
        case '+':
            document.getElementById("hasil").innerText = num1 + num2
            break;
        case '-':
            document.getElementById("hasil").innerText = num1 - num2
            break;
        case '*':
            document.getElementById("hasil").innerText = num1 * num2
            break;
        case '/':
            document.getElementById("hasil").innerText = num1 / num2
            break;
        default:
            document.getElementById("hasil").innerText = 0
            break;
    }


}

