var img = window.document.getElementById("img")
var img_ = 0
var imagens = []
var intervalo;


imagens[0] = "./imgs/vermelho.png"
imagens[1] = "./imgs/amarelo.png"
imagens[2] = "./imgs/verde.png"



function vermelho(){
    pararTrocaAutomatica();
    img.src = "./imgs/vermelho.png"
}
function amarelo(){
    pararTrocaAutomatica();
    img.src = "./imgs/amarelo.png"
}
function verde(){
    pararTrocaAutomatica();
    img.src = "./imgs/verde.png"
}

function automatico(){
    img_ = (img_ + 1) % imagens.length;
    document.getElementById("img").src = imagens[img_]; 
    
}

function iniciarTrocaAutomatica() {
    intervalo = setInterval(automatico, 1000); 
}

function pararTrocaAutomatica() {
    clearInterval(intervalo);
}



