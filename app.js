let share = document.getElementById('share-icon');
let hover = document.getElementById('hover-container');
let shareImage = document.getElementById('share-image')
let arrow = document.getElementById('flecha')

share.addEventListener('mouseenter', mostrar);
hover.addEventListener('mouseleave', noMostar);

function mostrar(){
    hover.style.display = 'flex';
}

function noMostar(){
    hover.style.display = 'none';
}