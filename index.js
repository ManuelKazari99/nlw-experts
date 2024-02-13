const perguntas = [
  {
    pergunta: "Como posso surpreender meu namorado?",
    respostas: [
      "Cozinhando sua refeição favorita",
      "Lavando seu carro",
      "Comprando um presente que ele sempre quis",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual gesto pode deixar meu namorado feliz?",
    respostas: [
      "Escrever uma carta de amor",
      "Organizar uma noite romântica",
      "Fazer um piquenique ao ar livre",
    ],
    correta: 1,
  },
  {
    pergunta: "Como expressar meu amor pelo meu namorado?",
    respostas: [
      "Dizendo 'Eu te amo' todos os dias",
      "Fazendo um álbum de fotos juntos",
      "Fazendo uma massagem relaxante",
    ],
    correta: 0,
  },
  {
    pergunta: "O que posso fazer para animar meu namorado quando ele estiver triste?",
    respostas: [
      "Assistindo a um filme engraçado juntos",
      "Saindo para uma caminhada",
      "Deixando-o sozinho para se recuperar",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é uma maneira especial de mostrar meu apreço pelo meu namorado?",
    respostas: [
      "Fazendo um jantar romântico em casa",
      "Dando-lhe um dia de spa",
      "Dando-lhe um abraço apertado",
    ],
    correta: 2,
  },
  {
    pergunta: "Como posso demonstrar que valorizo meu relacionamento?",
    respostas: [
      "Fazendo uma viagem juntos",
      "Escrevendo um poema para ele",
      "Fazendo um gesto surpresa inesperado",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é uma maneira criativa de mostrar meu amor pelo meu namorado?",
    respostas: [
      "Organizando um jantar temático",
      "Aprendendo a tocar sua música favorita",
      "Fazendo uma serenata para ele",
    ],
    correta: 1,
  },
  {
    pergunta: "O que pode alegrar o dia do meu namorado?",
    respostas: [
      "Enviando-lhe uma mensagem de texto doce",
      "Fazendo um álbum de fotos personalizado",
      "Cozinhando um café da manhã especial",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é uma maneira simples de mostrar meu afeto pelo meu namorado?",
    respostas: [
      "Deixando-lhe pequenas notas de amor",
      "Planejando uma viagem romântica",
      "Fazendo uma surpresa elaborada",
    ],
    correta: 0,
  },
  {
    pergunta: "O que posso fazer para fazer meu namorado se sentir especial?",
    respostas: [
      "Dando-lhe um presente pensativo",
      "Fazendo um passeio de aventura juntos",
      "Passando um tempo de qualidade juntos",
    ],
    correta: 2,
  },
];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  //loop ou laço de repetição
  //pr. cada item do array Perguntas
  for(const item of perguntas) {
    //cria uma constante para clonar todas as tags dentro ela
    const quizItem = template.content.cloneNode(true)
    //Pesquisa pela tag clonada h3 e substitui pelo valor que consta no objecto no arraz
    quizItem.querySelector('h3').textContent = item.pergunta
    
    //itera cada resposta que existem em cada item
    for(let resposta of item.respostas) {
      //pesquisa e clona os dl dt que tinham cido clonados
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      //dentro de dt pesquisa por span e sustitui as respostas
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      //adiciona os valores substituidos
      quizItem.querySelector('dl').appendChild(dt)
    }
    //Remode o primeiro item da resposta
    quizItem.querySelector('dl dt').remove()
    //Adiciona a pergunta
    quiz.appendChild(quizItem)
  }
  
  