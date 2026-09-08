// Criar corações flutuando

function criarCoracao(){

    const coracao = document.createElement("div");

    coracao.innerHTML = "❤️";

    coracao.style.position = "fixed";
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.bottom = "-20px";

    coracao.style.fontSize =
    Math.random() * 20 + 10 + "px";

    coracao.style.opacity =
    Math.random();


    coracao.style.animation =
    "subir 5s linear";


    document.body.appendChild(coracao);


    setTimeout(() => {

        coracao.remove();

    },5000);

}



setInterval(criarCoracao,800);



// Animação de entrada da carta

window.onload = () => {

    const carta = document.querySelector(".carta");


    carta.style.opacity = "0";

    carta.style.transform =
    "translateY(40px)";


    setTimeout(()=>{

        carta.style.transition =
        "1s";


        carta.style.opacity="1";

        carta.style.transform =
        "translateY(0)";


    },300);

};
function abrirSite() {
    document.getElementById("tela-abertura").classList.add("fechar");
    }
