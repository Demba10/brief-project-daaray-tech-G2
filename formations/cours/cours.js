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

alert(document.body.baseURI);