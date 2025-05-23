document.addEventListener('DOMContentLoaded', function() {
const botaoDeAcessibilidade= document.getElementById('botao-acessibilidade')
const opcoesDeAcessibilidade= document.getElementById('opcoes-acessibilidade')
const alternaContraste=document.getElementById('alterna-contraste')

botaoDeAcessibilidade.addEventListener('click',function () {
botaoDeAcessibilidade.classList.toggle('rotacao-botao')
opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

   const botaoSelecionado=botaoDeAcessibilidade.getAttribute('aria-expanded')=== 'true';
   botaoDeAcessibilidade.setAttribute('aria-expanded',!botaoSelecionado)
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
ScrollReveal().reveal('#inicio', { delay: 1000 });
ScrollReveal().reveal('#tropicalia', { delay: 1000 });
ScrollReveal().reveal('#galeria', { delay: 1000 });
ScrollReveal().reveal('#contato', { delay: 1000 });