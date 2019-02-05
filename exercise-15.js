//Logic Challenge - Mengelompokkan Hewan

function groupAnimals(animals) {
    // you can only write your code here!

    var temp = [];
    var hasil = [];
    var abjad = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for (var i = 0; i < abjad.length; i++) {
        temp = [];
        for (var j = 0; j < animals.length; j++) {
            if (animals[j][0] === abjad[i]) {
                temp.push(animals[j]);
            }
        }
        if (temp.length !== 0) hasil.push(temp);
    }

    return hasil;

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]