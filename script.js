const hamburguer = document.querySelector('.hamburguer');
const botaoHamburguer = document.querySelector('.botaoHamburguer');
const imagemHamburguer = document.querySelector('.imagemHamburguer');
const menu = document.querySelector('.menu');

// As variáveis acima selecionam a div 'hamburguer', que contém o botão e o ícone, o menu para telas responsivas, que de início não está revelado na tela, o ÍCONE do hamburguer e o seu botão.


botaoHamburguer.addEventListener('click', () => {
    if (menu.classList.contains('block')) {
        menu.classList.remove('block');
    } else {
        menu.classList.add('block')
    }
})

// Esse código JS acima permite que, ao clicar no botão da div 'hamburguer', o mobile menu apareça na tela. Isso não prejudicará o que está no HTML, pois foram utilizados media-queries para lidar com a responsividade.

botaoHamburguer.addEventListener('click', () => {
    if (imagemHamburguer.src.match('images/menu_white_36dp.svg')) {
        imagemHamburguer.src = 'images/close_white_36dp.svg';
    } else {
        imagemHamburguer.src = 'images/menu_white_36dp.svg'
    }
})

// Esse código JS acima é responsável por alterar o ícone do hamburguer. Ao clicar e aparecer o mobile menu, o ícone se tornará um 'X, ou seja, um outro ícone.
