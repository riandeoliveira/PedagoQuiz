/**
 * Declaração de elementos do HTML para acesso pelo JS.
 */
const cardElement = document.getElementById("card");
const cardTituloElement = document.getElementById("card-titulo");
const alternativasListaElement = document.getElementById("alternativas-lista");
const respostaContainerElement = document.getElementById("resposta-container");
const mensagemElement = document.getElementById("mensagem");
const pontosJogador1Element = document.getElementById("pontos-jogador-1");
const pontosJogador2Element = document.getElementById("pontos-jogador-2");
const cardelemento = document.getElementById("vencedor-card");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Lista contendo as perguntas do sistema, suas alternativas e quais estão corretas.
 */
const perguntas = [
  {
    titulo:
      "O pedagogo (professor do 1º ao 5º ano) deve ensinar matérias como Geografia e História durante a alfabetização?",
    alternativas: [
      {
        id: 1,
        titulo:
          "Não, o pedagogo deve focar na alfabetização e língua portuguesa",
        correta: false,
      },
      {
        id: 2,
        titulo: "Sim, mas apenas após a alfabetização estar concluida",
        correta: false,
      },
      {
        id: 3,
        titulo: "Sim, pois deve fazer um trabalho interdisciplinar",
        correta: true,
      },
      {
        id: 4,
        titulo: "Sinceramente não sei",
        correta: false,
      },
    ],
  },
  {
    titulo: "Qual a formação necessária para atuar como pedagogo empresarial?",
    alternativas: [
      {
        id: 1,
        titulo: "Marketing",
        correta: false,
      },
      {
        id: 2,
        titulo: "Licenciatura em Pedagogia",
        correta: true,
      },
      {
        id: 3,
        titulo: "Gestão Empresarial",
        correta: false,
      },
      {
        id: 4,
        titulo: "Recursos Humanos",
        correta: false,
      },
    ],
  },
  {
    titulo: "A licenciatura em Pedagogia permite que o pedagogo atue em:",
    alternativas: [
      {
        id: 1,
        titulo: "Educação infantil e Ensino fundamental apenas.",
        correta: false,
      },
      {
        id: 2,
        titulo: "Ensino fundamental 1º ao 5º ano e EJA",
        correta: false,
      },
      {
        id: 3,
        titulo:
          "Ensino fundamental, educação infantil, coordenação pedagógica e  EJA",
        correta: true,
      },
      {
        id: 4,
        titulo: "Ensino fundamental completo",
        correta: false,
      },
    ],
  },
  {
    titulo: "Quais destes setores empresariais o pedagogo pode estar atuando?",
    alternativas: [
      {
        id: 1,
        titulo: "Treinamento e recrutamento",
        correta: true,
      },
      {
        id: 2,
        titulo: "Coordenação",
        correta: false,
      },
      {
        id: 3,
        titulo: "Financeiro",
        correta: false,
      },
      {
        id: 4,
        titulo: "Vendas",
        correta: false,
      },
    ],
  },
  {
    titulo: " A geografia e a história devem ser trabalhadas...",
    alternativas: [
      {
        id: 1,
        titulo:
          "De forma separada, para que os estudantes possam focar em um conceito por vez",
        correta: false,
      },
      {
        id: 2,
        titulo:
          "Através do que é repassado pelo governo em forma de livros didáticos ",
        correta: false,
      },
      {
        id: 3,
        titulo: "Apenas no Ensino Médio ",
        correta: false,
      },
      {
        id: 4,
        titulo:
          "Como algo unido, já que frequentemente observamos uma mudar/interferir na outra ",
        correta: true,
      },
    ],
  },
  {
    titulo:
      "Quais áreas em comum o curso de Magistério e a Graduação de Pedagogia proporcionam atuação?",
    alternativas: [
      {
        id: 1,
        titulo: "Educação Infantil e Marketing Digital",
        correta: false,
      },
      {
        id: 2,
        titulo: "Educação Especial e Hospitais",
        correta: false,
      },
      {
        id: 3,
        titulo: "Educação Infantil e Anos Iniciais",
        correta: true,
      },
      {
        id: 4,
        titulo: "Gestão de pessoas e Anos Iniciais",
        correta: false,
      },
    ],
  },
  {
    titulo: "A matéria de Ensino Religioso deve...",
    alternativas: [
      {
        id: 1,
        titulo: "Ser banida das escolas",
        correta: false,
      },
      {
        id: 2,
        titulo:
          "Tratar de todas as religiões presentes em sala, demonstrando a diversidade religiosa presente em nossos país",
        correta: true,
      },
      {
        id: 3,
        titulo:
          "Tratar apenas do ensino das religiões evangélica e católica, pois são as mais comuns em nosso país ",
        correta: false,
      },
      {
        id: 4,
        titulo:
          "Realizar não apenas aulas demosntartivas, mas também cultos de casa religião tratada em aula",
        correta: false,
      },
    ],
  },
  {
    titulo: "O pedagogo empresarial atua como mediador em:",
    alternativas: [
      {
        id: 1,
        titulo: "Reuniões, planejamento e gestão",
        correta: false,
      },
      {
        id: 2,
        titulo: "Dar aulas, palestras e coordenar vendas",
        correta: false,
      },
      {
        id: 3,
        titulo: "Reunião, palestras e trabalhos em equipe",
        correta: true,
      },
      {
        id: 4,
        titulo:
          "Criar projetos, trabalhos em grupo e auxiliar em tarefas distintas",
        correta: false,
      },
    ],
  },
  {
    titulo:
      "Qual a postura que o professor de Educação Infantil deve ter sobre o ensino de ciências?",
    alternativas: [
      {
        id: 1,
        titulo: 'Postura de mediador e "trazedor" de experiências',
        correta: true,
      },
      {
        id: 2,
        titulo:
          "Nenhuma, pois as crianças pequenas não possuem desenvolvimento cognitivo para tal",
        correta: false,
      },
      {
        id: 3,
        titulo: "Postura de mediador apenas",
        correta: false,
      },
      {
        id: 4,
        titulo: "Nenhuma, as crianças pequenas devem apenas brincar.",
        correta: false,
      },
    ],
  },
  {
    titulo: "Qual é o principal objetivo da pedagogia na educação infantil?",
    alternativas: [
      {
        id: 1,
        titulo: "Preparar as crianças para o mercado de trabalho",
        correta: false,
      },
      {
        id: 2,
        titulo: "Transmitir conhecimentos",
        correta: false,
      },
      {
        id: 3,
        titulo: "Promover o desenvolvimento integral da criança",
        correta: true,
      },
      {
        id: 4,
        titulo: "Desenvolver habilidades de trabalho em equipe",
        correta: false,
      },
    ],
  },
  {
    titulo: "Em que unidades o pedagogo hospitalar pode atuar?",
    alternativas: [
      {
        id: 1,
        titulo: "Mediador durante atendimentos médicos",
        correta: false,
      },
      {
        id: 2,
        titulo: "Recreação e ensino de internados infantis",
        correta: true,
      },
      {
        id: 3,
        titulo: "Somente recreação hospitalar",
        correta: false,
      },
      {
        id: 4,
        titulo: "Somente com crianças e adolescentes em internação",
        correta: false,
      },
    ],
  },
  {
    titulo: "Quais são os pilares da pedagogia na educação infantil?",
    alternativas: [
      {
        id: 1,
        titulo: "Desenvolvimento da leitura e da escrita",
        correta: false,
      },
      {
        id: 2,
        titulo: "Conhecimento histórico e geográfico",
        correta: false,
      },
      {
        id: 3,
        titulo: "Desenvolvimento físico, cognitivo, social e emocional",
        correta: true,
      },
      {
        id: 4,
        titulo: "Brincar e experimentar",
        correta: false,
      },
    ],
  },
  {
    titulo: "A pedagogia hospitalar se faz importante pois:",
    alternativas: [
      {
        id: 1,
        titulo: "Ensina mais do que o ambiente escolar",
        correta: false,
      },
      {
        id: 2,
        titulo: "Envolve somente atividades de recreação",
        correta: false,
      },
      {
        id: 3,
        titulo:
          "Ameniza o sofrimento e envolve a criança em atividades para educação",
        correta: true,
      },
      {
        id: 4,
        titulo:
          "Promove conhecimento com base no interesse das crianças e adolescentes",
        correta: false,
      },
    ],
  },
  {
    titulo:
      "Pedagogia também é teoria e dados. Qual destes teóricos é estudado para trabalho em educação infantil?",
    alternativas: [
      {
        id: 1,
        titulo: "Maria Montessori",
        correta: true,
      },
      {
        id: 2,
        titulo: "Sigmund Freud",
        correta: false,
      },
      {
        id: 3,
        titulo: "Albert Einstein",
        correta: false,
      },
      {
        id: 4,
        titulo: "Paulo Freire",
        correta: false,
      },
    ],
  },
  {
    titulo: "Desafio!!!!",
    alternativas: [
      {
        id: 1,
        titulo: "O Jogador aceitou o desafio!!!",
        correta: true,
      },
      {
        id: 2,
        titulo: "Ele não quis realizar o desafio...",
        correta: false,
      },
    ],
  },
  {
    titulo: "A pedagogia hospitalar se encaixa em:",
    alternativas: [
      {
        id: 1,
        titulo: "Educação à Distância",
        correta: false,
      },
      {
        id: 2,
        titulo: "Ensino Híbrido",
        correta: false,
      },
      {
        id: 3,
        titulo: "Educação especial",
        correta: true,
      },
      {
        id: 4,
        titulo: "Ensino Tradicional",
        correta: false,
      },
    ],
  },
  {
    titulo:
      "Cursando pedagogia posso entrar no mercado de trabalho da área quando?",
    alternativas: [
      {
        id: 1,
        titulo:
          "Desde o início do curso, mas como titular apenas após a graduação",
        correta: true,
      },
      {
        id: 2,
        titulo: "Apenas ao final da graduação, como na maioria dos cursos",
        correta: false,
      },
      {
        id: 3,
        titulo:
          "Após a realização dos estágio, assim ja tendo adiquirido alguma prática/experiência",
        correta: false,
      },
      {
        id: 4,
        titulo:
          "Se tiver realizado magistério, desde o inicio do curso, caso contrário, apenas após a graduação",
        correta: false,
      },
    ],
  },
  {
    titulo:
      "O pedagogo hospitalar tem as mesmas funções que o pedagogo escolar?",
    alternativas: [
      {
        id: 1,
        titulo:
          "Não, visto que o pedagogo hospitalar também auxilia com apoio terapeutico",
        correta: true,
      },
      {
        id: 2,
        titulo: "Sim, visto que ele também ensina as crianças e adolescentes",
        correta: false,
      },
      {
        id: 3,
        titulo: "Não pois este realiza apenas atividades recreativas",
        correta: false,
      },
      {
        id: 4,
        titulo: "Sim, pois ambos são pedagogos",
        correta: false,
      },
    ],
  },
  {
    titulo: "É papel do professor trazer para sua prática assuntos sociais?",
    alternativas: [
      {
        id: 1,
        titulo:
          "Sim, pois com as urgencias dos dias atuais os pais não tem tempo para este tipo de ensino",
        correta: false,
      },
      {
        id: 2,
        titulo:
          "Não, questões socieis e ideologicas devem ser ensinadas pelos pais",
        correta: false,
      },
      {
        id: 3,
        titulo:
          "Sim, pois além do que ler, escrever e fazer contas, aprender também é conhecer e respeitar o outro e as diversidades",
        correta: true,
      },
      {
        id: 4,
        titulo:
          "Não, pois não existe diversidade nos dias atuais e todos se respeitam",
        correta: false,
      },
    ],
  },
  {
    titulo:
      "Qual a formação necessária para trabalhar como pedagogo hospitalar?",
    alternativas: [
      {
        id: 1,
        titulo: "Apenas cursos da saúde",
        correta: false,
      },
      {
        id: 2,
        titulo: "Alguma graduação e pós-graduação em pedagogia hospitalar",
        correta: false,
      },
      {
        id: 3,
        titulo:
          "Graduação em pedagogia e pós-graduação em pedagogia hospitalar",
        correta: true,
      },
      {
        id: 4,
        titulo: "Graduação em medicina ou enfermagem",
        correta: false,
      },
    ],
  },
  {
    titulo: "Desafio!!!!",
    alternativas: [
      {
        id: 1,
        titulo: "O Jogador aceitou o desafio!!!",
        correta: true,
      },
      {
        id: 2,
        titulo: "Ele não quis realizar o desafio...",
        correta: false,
      },
    ],
  },
  {
    titulo: "Por que devo fazer o curso de pedagogia para poder dar aulas?",
    alternativas: [
      {
        id: 1,
        titulo: "Só precisa quem não realizou curso normal/magistério",
        correta: false,
      },
      {
        id: 2,
        titulo:
          "No curso de pedagogia aprendemos sobre desenvolvimento cognitivo, diferentes metodologias e sobre a ciencia do aprender",
        correta: true,
      },
      {
        id: 3,
        titulo:
          "Não precisa, é apenas conhecimento extra, todos podem dar aulas",
        correta: false,
      },
      {
        id: 4,
        titulo:
          "No curso de pedagogia aprendemos como realizar recuros além do quadro",
        correta: false,
      },
    ],
  },
  {
    titulo:
      "Qual é a diferença entre pedagogo hospitalar e professor hospitalar?",
    alternativas: [
      {
        id: 1,
        titulo: "O pedagogo e professor hospitalar possuem a mesma função.",
        correta: false,
      },
      {
        id: 2,
        titulo:
          "O professor coordena e realiza as atividades e o pedagogo é somente outro nome para chamar o professor hospitalar.",
        correta: false,
      },
      {
        id: 3,
        titulo:
          "O professor coordena a equipe pedagógica e o pedagogo realiza as atividades pedagógicas.",
        correta: false,
      },
      {
        id: 4,
        titulo:
          "O professor ele tem o mesmo papel que o professor escolar e o pedagogo coordena a equipe pedagógica.",
        correta: true,
      },
    ],
  },
  {
    titulo:
      "Durante o ano letivo, os professores devem fazer seu planejamento com base em:",
    alternativas: [
      {
        id: 1,
        titulo:
          "Plano de ensino da escola, habilidades exigidas pela Base Nacional Comum Curricular, PPP e Referencial Curricular de seu estado",
        correta: true,
      },
      {
        id: 2,
        titulo:
          "Plano de ensino da escola, Base Nacional Comum Curricular e na sua experiência com as turmas do ano anterior",
        correta: false,
      },
      {
        id: 3,
        titulo:
          "Livros didáticos oferecidos pelo governo, cartilhas, Base Nacional Comum Curricular e Plano de ensino da escola",
        correta: false,
      },
      {
        id: 4,
        titulo:
          "Base Nacional Comum Curricular. PPP e Referencial Curricular do seu estado",
        correta: false,
      },
    ],
  },
  {
    titulo:
      "Ao ensinar a lingua escrita, o professor deve focar apenas na leitura e escrita. Esta afirmação esta:",
    alternativas: [
      {
        id: 1,
        titulo:
          "Incorreta, pois o professor deve estar atento também a fala da criança",
        correta: false,
      },
      {
        id: 2,
        titulo: "Correta e não necessita de explicações",
        correta: false,
      },
      {
        id: 3,
        titulo:
          "Correta, pois a leitura já basta para que o estudante escreva corretamente",
        correta: false,
      },
      {
        id: 4,
        titulo:
          "Incorreta, pois o professor deve estar atento também à fala e a escuta do estudante",
        correta: true,
      },
    ],
  },
  {
    titulo: "Para compreender de forma profunda um texto, o estudante...",
    alternativas: [
      {
        id: 1,
        titulo:
          "Ler e filtrar as informaçõs contidas no texto, refletindo apenas sobre o que lhe interessa",
        correta: false,
      },
      {
        id: 2,
        titulo:
          "Deve realizar uma leitura crítica e reflexiva, interpretando o que se diz no texto",
        correta: true,
      },
      {
        id: 3,
        titulo: "Deve interpretar o texto, sem necessesidade de uma reflexão. ",
        correta: false,
      },
      {
        id: 4,
        titulo: "Ler e filtrar as informaçõs contidas no texto apenas",
        correta: false,
      },
    ],
  },
  {
    titulo: "Desafio!!!!",
    alternativas: [
      {
        id: 1,
        titulo: "O Jogador aceitou o desafio!!!",
        correta: true,
      },
      {
        id: 2,
        titulo: "Ele não quis realizar o desafio...",
        correta: false,
      },
    ],
  },
];

shuffleArray(perguntas); // Embaralhe o array de perguntas após defini-lo

const MAX_PERGUNTAS = 10;

let indicePerguntaAtual = 0; // Índice da pergunta exibida atualmente
let perguntaAtual = perguntas[indicePerguntaAtual]; // Dados da pergunta atual

let jogadorAtual = 1;
let pontosJogador1 = 0;
let pontosJogador2 = 0;

function alternarJogador() {
  jogadorAtual = jogadorAtual === 1 ? 2 : 1;
  mensagemElement.textContent = `Jogador ${jogadorAtual}, é a sua vez!`;
}

function atualizarPlacar() {
  pontosJogador1Element.textContent = pontosJogador1;
  pontosJogador2Element.textContent = pontosJogador2;
}
function verificarFimDoJogo() {
  if (pontosJogador1 >= pontosNecessarios) {
    mostrarVencedor(1);
  } else if (pontosJogador2 >= pontosNecessarios) {
    mostrarVencedor(2);
  }
}
const pontosNecessarios = 5; // Altere para 5 pontos

function verificarFimDoJogo() {
  if (
    pontosJogador1 >= pontosNecessarios ||
    pontosJogador2 >= pontosNecessarios
  ) {
    const rankingCard = document.getElementById("ranking-card");
    const rankingList = document.getElementById("ranking-list");

    const vencedorItem = document.createElement("li");
    vencedorItem.textContent = `Jogador ${
      pontosJogador1 >= pontosNecessarios ? 1 : 2
    } venceu com ${
      pontosJogador1 >= pontosNecessarios ? pontosJogador1 : pontosJogador2
    } pontos.`;

    rankingList.appendChild(vencedorItem);

    rankingCard.style.display = "block"; // Exibe o card de ranking de vencedor

    // Aqui você pode adicionar qualquer ação adicional que deseja executar quando o jogo terminar.

    // Para impedir que o jogo continue após um jogador vencer, você pode desabilitar os elementos de alternativas e impedir que o jogador avance.
    const alternativasRadio = document.querySelectorAll(
      'input[name="alternativa"]'
    );
    alternativasRadio.forEach((input) => {
      input.disabled = true;
    });

    const proximaPerguntaBotao = document.querySelector(".botao-responder");
    proximaPerguntaBotao.disabled = true;
  }
}

function avancarPergunta() {
  // Limpa os elementos HTML para criar outros com a pergunta atual
  alternativasListaElement.innerHTML = "";
  respostaContainerElement.innerHTML = "";

  if (indicePerguntaAtual + 1 === MAX_PERGUNTAS) {
    // Fim do jogo
    mensagemElement.textContent = "Fim do jogo!";
    cardTituloElement.textContent = "";

    if (pontosJogador1 > pontosJogador2) {
      cardTituloElement.textContent = "O Jogador 1 é o Vencedor!";
    }

    if (pontosJogador2 > pontosJogador1) {
      cardTituloElement.textContent = "O Jogador 2 é o Vencedor!";
    }

    if (pontosJogador1 === pontosJogador2) {
      cardTituloElement.textContent = "Houve um empate!";
    }
  } else {
    indicePerguntaAtual++;

    perguntaAtual = perguntas[indicePerguntaAtual];

    renderizaCard();
    alternarJogador();
  }
}

/**
 * Diferencia visualmente as alternativas incorretas da correta.
 */
function exibeAlternativasResultado() {
  Array.from(alternativasListaElement.children).forEach(
    (alternativaElement, indice) => {
      const inputElement = alternativaElement.children[0];

      inputElement.disabled = true;

      alternativaElement.classList.remove("alternativa-base");

      const alternativaAtual = perguntaAtual.alternativas[indice];

      if (inputElement.checked && alternativaAtual.correta) {
        alternativaElement.classList.add("alternativa-correta");
        if (jogadorAtual === 1) {
          pontosJogador1++;
        } else {
          pontosJogador2++;
        }
      } else if (inputElement.checked && !alternativaAtual.correta) {
        alternativaElement.classList.add("alternativa-incorreta");
      }
    }
  );

  atualizarPlacar();
}

/**
 * Verifica uma alternativa, identificando se é correta ou incorreta.
 */
function verificaAlternativa(alternativa) {
  const respostaMarkElement = document.createElement("strong");
  const respostaCorretaElement = document.createElement("p");
  const proximaPerguntaContainer = document.createElement("div");
  const proximaPerguntaBotao = document.createElement("button");

  respostaMarkElement.classList.add("resposta-mark");

  if (alternativa.correta) {
    respostaMarkElement.textContent = "Certa Resposta!";
    respostaMarkElement.classList.add("texto-correto");
  } else {
    respostaMarkElement.textContent = "Resposta Incorreta! ";
    respostaMarkElement.classList.add("texto-incorreto");

    const alternativaCorretaAtual = perguntaAtual.alternativas.find(
      (item) => item.correta
    );

    respostaCorretaElement.innerHTML = `A resposta certa é <strong>${alternativaCorretaAtual.titulo}</strong>`;
  }

  proximaPerguntaContainer.classList.add("proxima-pergunta-container");

  proximaPerguntaBotao.type = "button";
  proximaPerguntaBotao.textContent = "Avançar";
  proximaPerguntaBotao.classList.add("botao-responder");

  proximaPerguntaBotao.addEventListener("click", avancarPergunta);

  proximaPerguntaContainer.appendChild(proximaPerguntaBotao);

  respostaContainerElement.appendChild(respostaMarkElement);
  respostaContainerElement.appendChild(respostaCorretaElement);
  respostaContainerElement.appendChild(proximaPerguntaContainer);
}

/**
 * Renderiza automaticamente a pergunta atual e todas as suas alternativas no card.
 */
function renderizaCard() {
  const perguntaTitulo = `Pergunta ${indicePerguntaAtual + 1}: ${
    perguntaAtual.titulo
  }`;

  cardTituloElement.textContent = perguntaTitulo;

  const letrasAlternativas = ["(A)", "(B)", "(C)", "(D)"];

  /**
   * Loop para navegar na lista de alternativas da pergunta atual, criando um HTML dinâmico para cada uma.
   */
  perguntaAtual.alternativas.forEach((alternativa, indice) => {
    const listElement = document.createElement("li");
    const inputElement = document.createElement("input");
    const labelElement = document.createElement("label");

    const alternativaId = `alternativa-${alternativa.id}`;

    listElement.classList.add("alternativa", "alternativa-base");

    inputElement.type = "radio";
    inputElement.id = alternativaId;
    inputElement.name = "alternativa";

    labelElement.setAttribute("for", alternativaId);
    labelElement.classList = "alternativa-texto";
    labelElement.textContent = `${letrasAlternativas[indice]}. ${alternativa.titulo}`;

    // Ao clicar em uma alternativa...
    inputElement.addEventListener("click", () => {
      exibeAlternativasResultado();
      verificaAlternativa(alternativa);
    });

    alternativasListaElement.appendChild(listElement);
    listElement.appendChild(inputElement);
    listElement.appendChild(labelElement);
  });
}

// Inicialização
renderizaCard();
mensagemElement.textContent = "Jogador 1, é a sua vez!";
