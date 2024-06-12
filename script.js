const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
      enunciado: "assim que você saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as duvidas que uma pessoa pode ter, ele também gera imagens e aúdios super realistas. Qual o seu primeiro pensamento?",
      alternativas: [
        "Isso é assustador",
        "Isso é maravilhoso"
      ]
    },

    {
      enunciado: "Com a descoberta desta tecnologia, chamda inteligencia artifical (IA), uma prfessora de tecnoloogia de uma escola decidiu fazer muma sequência de aulas sobre essa ferramenta. No fim de uma aula ela pede que você escreva uma trabalho sobre o uso da IA em sala de aula. Qual atitude você toma?",
      alternativas: [
        "utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique em uma linguagem que facilite o entendimnto.",
        "escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos proprios sobre o tema."
      ]
    },

    {
      enunciado: "Pergunta 3",
      alternativas: [
        "Resposta 1",
        "Resposta 2"
      ]
    },

    {
      enunciado: "Pergunta 4",
      alternativas: [
        "Resposta 1",
        "Resposta 2"
      ]
    },

    {
      enunciado: "Pergunta 5",
      alternativas: [
        "Resposta 1",
        "Resposta 2"
      ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}


function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}

mostraPergunta();