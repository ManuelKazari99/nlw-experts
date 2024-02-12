const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um tipo de café",
        "Um navegador da web",
      ],
      correta: 0,
    },
    {
      pergunta: "Quais são as formas de declarar uma variável em JavaScript?",
      respostas: [
        "var, let, const",
        "int, string, bool",
        "declarar, var, const",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um bloco de código reutilizável",
        "Um tipo de erro",
        "Uma variável",
      ],
      correta: 2,
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Document Object Model, uma representação da estrutura de uma página web",
        "Uma linguagem de programação",
        "Um tipo de café",
      ],
      correta: 0,
    },
    {
      pergunta: "Como se faz um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de uma linha",
        "/* Este é um comentário de uma linha */",
        "' Este é um comentário de uma linha",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a maneira correta de escrever um loop em JavaScript?",
      respostas: [
        "for (var i = 0; i < 5; i++) {",
        "loop {",
        "if (i < 5) then {",
      ],
      correta: 2,
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Uma estrutura de dados que armazena uma coleção de elementos",
        "Uma função",
        "Um tipo de variável",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Verificar igualdade de valor e tipo",
        "Atribuir um valor a uma variável",
        "Comparar valores",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é uma promessa (Promise) em JavaScript?",
      respostas: [
        "Um objeto usado para processamento assíncrono",
        "Um tipo de erro",
        "Uma variável",
      ],
      correta: 2,
    },
    {
      pergunta: "O que é uma closure em JavaScript?",
      respostas: [
        "Uma função interna que tem acesso ao escopo externo",
        "Um método para fechar uma página da web",
        "Um tipo de estrutura de dados em JavaScript",
      ],
      correta: 0,
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
  
  