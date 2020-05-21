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
