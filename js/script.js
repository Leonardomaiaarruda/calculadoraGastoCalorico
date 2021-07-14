
const botaoEnviar = document.querySelector('[data-button="button"]');
const mulher = document.querySelector('[data-sexo="feminino"]');
const homem = document.querySelector('[data-sexo="masculino"]');
const fechar = document.querySelector('[data-fechar="fechar"]');
const button = document.querySelector('button');
const optionTrue = document.querySelector("[data-option='true']")
const user = ['click', 'touchstart'];


function calculoHomem(){
        const idade = document.getElementById('idade').value;
        const altura = document.getElementById('altura').value;
        const peso = document.getElementById('peso').value;
        const resultado = document.querySelector('.resultado');
        
     
        const primeiraSoma = parseFloat(66.47 + (13.75 * peso ))
        const segundaSoma = parseFloat(((5 * altura)) - (6.76 * idade))
        const somaFinal = primeiraSoma + segundaSoma
    
            if(peso !== '' && altura !== '' && peso !== ''){
                resultado.classList.add('active')
                fechar.classList.add('active')
                resultado.innerHTML = `<div> Seu gasto calorico está entre <h2 class="somaFinal">${somaFinal}</h2> e <h2 class="somaFinal">${somaFinal + 300}</h2> calorias diária </br></br>
                 Lembrando que para ter um número mais exato você teria que passar com um profissional da área </div>`;
            }
}

function calculoMulher(){
    const idade = document.getElementById('idade').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.querySelector('.resultado');
 
 
    const primeiraSoma = parseFloat(655.1 + (9.56 * peso ))
    const segundaSoma = parseFloat(((1.85 * altura)) - (4.68 * idade))
    const somaFinal = primeiraSoma + segundaSoma
    const trezentos = 300;

        if(peso !== '' && altura !== '' && peso !== ''){
            resultado.classList.add('active')
            fechar.classList.add('active')
            resultado.innerHTML = `<div> Seu gasto calorico está entre <h2 class="somaFinal">${somaFinal.toFixed(2)}</h2> e <h2 class="somaFinal">${(somaFinal + trezentos).toFixed(2)}</h2> calorias diária </br></br>
             Lembrando que para ter um número mais exato você teria que passar com um profissional da área </div>`;
        }
}





function fecharModal(){
    const resultado = document.querySelector('.resultado');
    resultado.classList.remove('active');
    fechar.classList.remove('active');

    const idade = document.getElementById('idade').value = '';
    const altura = document.getElementById('altura').value = '';
    const peso = document.getElementById('peso').value = '';
}



user.forEach((e) => {
    homem.addEventListener('click', () =>{
        homem.classList.add('active')
        mulher.classList.remove('active')
    });

    mulher.addEventListener('click', () =>{
        mulher.classList.add('active')
        homem.classList.remove('active')
    });

    fechar.addEventListener(e, fecharModal);
})


const btn = document.querySelector('.botao');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(homem.classList.contains('active')){
        calculoHomem()
    }
     if(mulher.classList.contains('active')){
        calculoMulher()
    }
    
    homem.classList.remove('active');
    mulher.classList.remove('active');
})