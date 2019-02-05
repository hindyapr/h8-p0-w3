//Menggunakan Built-in Function pada Array

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(masukan) {

    masukan.splice(4, 1, "Pria", "SMA Internasional Metro");

    masukan[1] = masukan[1] + ' Elsharawy';
    masukan[2] = 'Provinsi ' + masukan[2];

    var coba = masukan[3];

    var tanggalLahir = coba.substring(6, 10);
    var bulanLahir = coba.substring(3, 5);
    var tahunLahir = coba.substring(0, 2);

    switch (bulanLahir) {
        case '01':
            var namaBulan = 'Januari';
            break;
        case '02':
            var namaBulan = 'Februari';
            break;
        case '03':
            var namaBulan = 'Maret';
            break;
        case '04':
            var namaBulan = 'April';
            break;
        case '05':
            var namaBulan = 'Mei';
            break;
        case '06':
            var namaBulan = 'Juni';
            break;
        case '07':
            var namaBulan = 'Juli';
            break;
        case '08':
            var namaBulan = 'Agustus';
            break;
        case '09':
            var namaBulan = 'September';
            break;
        case '10':
            var namaBulan = 'Oktober';
            break;
        case '11':
            var namaBulan = 'November';
            break;
        case '12':
            var namaBulan = 'Desember';
            break;
        default:
            var namaBulan = '';
            break;
    }

    var arrayTanggalLahir = coba.split("/")
    var bentukTTL = arrayTanggalLahir.join('-');


    arrayTanggalLahir.sort(function(value1, value2) { return value2 - value1 })

    var nama = masukan[1].slice(0, 15);

    console.log(masukan);
    console.log(namaBulan);
    console.log(arrayTanggalLahir);
    console.log(bentukTTL);
    console.log(nama);



}

dataHandling2(input);