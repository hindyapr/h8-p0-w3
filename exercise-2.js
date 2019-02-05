//Mengakses Nilai Dalam Array

function balikKata(kata) {
    // you can only write your code here!
    var atak = '';

    for (var i = kata.length - 1; i >= 0; i--) atak = atak + kata[i];

    return atak;
}

var kalimat = 'Hello world!';

console.log(balikKata(kalimat));