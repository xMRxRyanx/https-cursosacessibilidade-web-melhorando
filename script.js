document.addEventListener('DOMContentLoaded', function() {
const botaoDeAcessibilidade= document.getElementById('botao-acessibilidade')
const opcoesDeAcessibilidade= document.getElementById('opcoes-acessibilidade')
const alternaContraste=document.getElementById('alterna-contraste')

botaoDeAcessibilidade.addEventListener('click',function () {
botaoDeAcessibilidade.classList.toggle('rotacao-botao')
opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
})

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click',function(){
        tamanhoAtualFonte +=0.1;
         document.body.style.fontSize= `${tamanhoAtualFonte}rem`
    })

    diminuirFonteBotao.addEventListener('click',function(){
        tamanhoAtualFonte -=0.1;
         document.body.style.fontSize= `${tamanhoAtualFonte}rem`
    })
alternaContraste.addEventListener('click',function(){
    document.body.classList.toggle('auto-contraste')
})
})