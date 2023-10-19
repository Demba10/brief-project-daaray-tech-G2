let f1 = document.getElementById('filter-1');
let f2 = document.getElementById('filter-2');
let desc = document.getElementById('cri-desc-all');
let som = document.getElementById('content-left');

f2.addEventListener('click', function () {
    som.style.display = 'grid';
    desc.style.display = 'none';
    f2.style.color = '#E45923';
    f1.style.color = 'black';
});

f1.addEventListener('click', function () {
    desc.style.display = 'grid';
    som.style.display = 'none';
    f1.style.color = '#E45923';
    f2.style.color = 'black';
});

let note = document.querySelectorAll('.note');
let nom = document.getElementById('nom');
let commentaire = document.getElementById('commentaire');

var c

for (let i = 0; i < note.length; i++) {
    note[i].addEventListener('click', function () {
        for (let j = 0; j < (i +1) ; j++) {
            note[j].style.color = '#E45923';
        }
        for (let j = (i +1); j < note.length; j++) {
            note[j].style.color = 'gray';
        }
    })
}

