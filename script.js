const button = document.querySelector('.barrabot .confirmar');

const disableButton = () => {
    button.disabled = true;

}
let prato;

function selecionar(classPrato){
    const pratoSelecionado = document.querySelector('.pratos .opcao.selecionado');

    if( pratoSelecionado !== null){
        pratoSelecionado.classList.remove('selecionado');
    }
    
    const mudaback = document.querySelector(classPrato);
    mudaback.classList.add('selecionado');

    prato = mudaback.innerHTML;

    fecharPedido();
}
let bebida;

function selecionarBebida(classBebida){
    const bebidaSelecionado = document.querySelector('.refrigerantes .opcao.selecionado');
    
    if( bebidaSelecionado !== null){
        bebidaSelecionado.classList.remove('selecionado');
    }

    const mudaback = document.querySelector(classBebida);
    mudaback.classList.add('selecionado');

    bebida = mudaback.innerHTML;

    fecharPedido();
}
let sobremesa;

function selecionarSobremesa(classSobremesa){
    const sobremesaSelecionado = document.querySelector('.doces .opcao.selecionado');
    if( sobremesaSelecionado !== null){
        sobremesaSelecionado.classList.remove('selecionado');
    }
    
    const mudaback = document.querySelector(classSobremesa);
    mudaback.classList.add('selecionado');

    sobremesa = mudaback.innerHTML;

    fecharPedido();
}
function fecharPedido(){
    if(prato !== undefined && bebida !== undefined && sobremesa !== undefined){
        const pedidoFechado = document.querySelector('.barrabot .confirmar');
        pedidoFechado.classList.add('fecharpedido');
        const mudarTexto = document.querySelector('.barrabot .confirmar a');
        mudarTexto.innerHTML = 'Pedido Fechado';
        button.addEventListener('click', disableButton);
    }
}
function windowOpen(){
    let pratoApp = document.querySelector('.prato1 h3').innerText;

    let bebidaApp = document.querySelector('.sabor1 h3').innerText;

    let pudimApp = document.querySelector('.doce1 h3').innerText; 

    let precoPratoApp = document.querySelector('.prato1 h5').innerText;

    let precobebidaApp = document.querySelector('.sabor1 h5').innerText;

    let precopudimApp = document.querySelector('.doce1 h5').innerText;

    const total = Number(precoPratoApp) + Number(precobebidaApp) + Number(precopudimApp); 
    const mensagem = `Olá, gostaria de fazer o pedido: \n
    - Prato: ${pratoApp} \n
    - Bebida: ${bebidaApp} \n
    - Sobremesa: ${pudimApp} \n
    Total: R$ 27.70 `;
   

    const encode = encodeURIComponent(mensagem);
    window.open(`https://wa.me/998252663?text=${encode}`);
}
