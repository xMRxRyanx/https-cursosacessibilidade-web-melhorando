document.addEventListener('DOMContentLoaded', function () {
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const dimunuirFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click',function(){
        tamanhoAtualFonte +=0.1;
         document.body.style.fontSize= `${tamanhoAtualFonte}rem`
    })

    dimunuirFonteBotao.addEventListener('click',function(){
        tamanhoAtualFonte -=0.1;
         document.body.style.fontSize= `${tamanhoAtualFonte}rem`
    })

})