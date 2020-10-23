function buttonPushed (ygDitekan) {
    let hasil = document.getElementById("hasil").innerText
    let charTerakhir = hasil[hasil.length-1]
    let tampungan = ''

    // kalau user iseng diawal2 udah pencet operator, keluar aja
    if (hasil == 0 &&
        (ygDitekan === '+' ||
         ygDitekan === '-' ||
         ygDitekan === '*' ||
         ygDitekan === '/' )) {return}

    // kalau user mencet 1 operator setelah sebelumnya pencet operator lain
    if (charTerakhir === '+' ||
        charTerakhir === '-' ||
        charTerakhir === '*' ||
        charTerakhir === '/') {

            if (ygDitekan === '+' ||
                ygDitekan === '-' ||
                ygDitekan === '*' ||
                ygDitekan === '/') {
                    
                    // replace operator yg sebelumnya
                    for (let i = 0; i < (hasil.length - 1); i++) {
                        tampungan += hasil[i]
                    }
                    tampungan += ygDitekan
                    document.getElementById("hasil").innerText = tampungan
                    return
            }
            else {
                document.getElementById("hasil").innerText += ygDitekan
                return
            }
    }

    if (hasil == 0) {
        document.getElementById("hasil").innerText = ygDitekan
    }
    else {
        document.getElementById("hasil").innerText += ygDitekan
    }
}

function resetCalc () {
    document.getElementById("hasil").innerText = 0
}

function goCalc() {
    let ygMauDikalkulasi = document.getElementById("hasil").innerText
    let num1 = ''
    let num2 = ''
    let operator = undefined
    let tampungan = ''
    let angka = '0123456789'

    // kalau user iseng diawal2 udah pencet '='
    if (ygMauDikalkulasi == 0) {return}

    for (let i = 0; i < ygMauDikalkulasi.length; i++) {
        let perKarakter = ygMauDikalkulasi[i]
        console.log (perKarakter)
        
        for (let j = 0; j < angka.length; j++) {
            
            if (perKarakter == angka[j]) {
                tampungan += perKarakter
                break
            }
            else if (perKarakter === '+' ||
                     perKarakter === '-' ||
                     perKarakter === '*' ||
                     perKarakter === '/') {
                // simpan angka-nya & operatornya

                num1 = tampungan
                tampungan = ''
                operator = perKarakter
                break
            }
        }
    }

    // ini dengan asumsi, kalkulator bodoh ini cuma terima 2 angka saja
    num2 = tampungan

    // sekarang lakukan penghitungan
    switch (operator) {
        case '+':
            document.getElementById("hasil").innerText = Number(num1) + Number(num2)
            break;
        case '-':
            document.getElementById("hasil").innerText = Number(num1) - Number(num2)
            break;
        case '*':
            document.getElementById("hasil").innerText = Number(num1) * Number(num2)
            break;
        case '/':
            document.getElementById("hasil").innerText = Number(num1) / Number(num2)
            break;
        default:
            document.getElementById("hasil").innerText = 0
            break;
    }
}

