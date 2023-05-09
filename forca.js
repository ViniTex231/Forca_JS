const palavras = [
    palavra001={
        nome:"IRLANDA",
        categoria:"PAISES",
    },
    palavra002={
        nome:"BRASIL",
        categoria:"PAISES",
    },
    palavra003={
        nome:"ARGENTINA",
        categoria:"PAISES",let palavraSecretaCategoria;
let palavraSecretaSorteada;
let listaDinamica = [];
let tentativas = 6;

const palavras = [
    palavra001={
        nome:"IRLANDA",
        categoria:"PAISES",
    },
    palavra002={
        nome:"BRASIL",
        categoria:"PAISES",
    },
    palavra003={
        nome:"ARGENTINA",
        categoria:"PAISES",
    },
    palavra004={
        nome:"PIZZA",
        categoria:"COMIDA",
    },
    palavra005={
        nome:"HAMBURGUER",
        categoria:"COMIDA",
    },
    palavra006={
        nome:"COMPUTADOR",
        categoria:"OBJETOS",
    },
    palavra007={
        nome:"BANANA",
        categoria:"FRUTA",
    },
    palavra008={
        nome:"ABACATE",
        categoria:"FRUTA",
    },
    palavra009={
        nome:"CAVALO",
        categoria:"ANIMAL",
    },
    palavra010={
        nome:"CACHORRO",
        categoria:"ANIMAL",
    },
    palavra011={
        nome:"GATO",
        categoria:"ANIMAL",
    },
];

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaCategoria);
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div"
        }
    }
}

function verificaLetraEscolhida(letra){
    if(tentativas > 0){
        mudarStyleLetra("tecla " + letra);
        comparaListas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#73de14";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();
        //verficar se ainda tem tentativas // mensagem
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true){
        //mensagem ganhou
        tentativas = 0;
    }

    function carregaImagemForca(){
        switch(tentativas){
            case 5:
                document.getElementById("imagem").style.background = "url('./img/forca01.png')";
                break;
            case 4:
                document.getElementById("imagem").style.background = "url('./img/forca02.png')";
                break;   
            case 3:
                document.getElementById("imagem").style.background = "url('./img/forca03.png')";
                break;
            case 2:
                document.getElementById("imagem").style.background = "url('./img/forca04.png')";
                break;
            case 1:
                document.getElementById("imagem").style.background = "url('./img/forca05.png')";
                break;
            case 0:
                document.getElementById("imagem").style.background = "url('./img/forca06.png')";
                break;
            default:
                document.getElementById("imagem").style.background = "url('./img/forca.png)";
                break;
                                 
        }
    }

}


    },
    palavra004={
        nome:"PIZZA",
        categoria:"COMIDA",
    },
    palavra005={
        nome:"HAMBURGUER",
        categoria:"COMIDA",
    },
    palavra006={
        nome:"COMPUTADOR",
        categoria:"OBJETOS",
    },
    palavra007={
        nome:"BANANA",
        categoria:"FRUTA",
    },
    palavra008={
        nome:"ABACATE",
        categoria:"FRUTA",
    },
]
