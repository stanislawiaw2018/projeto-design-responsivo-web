/*
function fecharMenu(){
    document.querySelector(".menu").style.display="none";
}
function abrirMenu(){
    document.querySelector(".menu").style.display="block";
}
*/
/**/

    //FUNÇÃO DE FECHAR O MENU
    $(".btn-close").click(function(){
        $(".menu").hide();
    });

    //FUNÇÃO DE ABRIR O MENU
    $(".btn-menu").click(function(){
        $(".menu").show();
    });

    // MUDAR COR DO MENU
    var el = document.querySelector('.menu'); // elemento alvo
    var numPx = '120'; // Quantidade de pixels a contar do TOP até definir a cor

    window.addEventListener('scroll', function() {
        if (window.scrollY > numPx) {
            el.classList.add('mudarCor'); // adiciona classe "mudaCor"
        } else {
        el.classList.remove('mudarCor'); // remove classe "mudaCor"
        }
    });
