const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());

server.use(express.json());

const books = [
  {
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/812ot79TCsL.jpg",
    title: "Capitães da Areia",
    author: "Jorge Amado",
    price: 12.0,
    year: 2008,
    language: "Português",
    type: "",
    description:
      "Desde o seu lançamento, em 1937, Capitães da Areia causou escândalo: inúmeros exemplares do livro foram queimados em praça pública, por determinação do Estado Novo. Ao longo de sete décadas a narrativa não perdeu viço nem atualidade, pelo contrário: a vida urbana dos meninos pobres e infratores ganhou contornos trágicos e urgentes. Várias gerações de brasileiros sofreram o impacto e a sedução desses meninos que moram num trapiche abandonado no areal do cais de Salvador, vivendo à margem das convenções sociais. Verdadeiro romance de formação, o livro nos torna íntimos de suas pequenas criaturas, cada uma delas com suas carências e suas ambições: do líder Pedro Bala ao religioso Pirulito, do ressentido e cruel Sem-Pernas ao aprendiz de cafetão Gato, do sensato Professor ao rústico sertanejo Volta Seca. Com a força envolvente da sua prosa, Jorge Amado nos aproxima desses garotos e nos contagia com seu intenso desejo de liberdade.",
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/51amKTwzkPL.jpg",
    title: "O Morro dos Ventos Uivantes",
    author: "Emily Brontë",
    price: 35.92,
    year: 2018,
    language: "Português",
    type: "",
    description: "",
  },
  {
    imageUrl:
      "http://lojasaraiva.vteximg.com.br/arquivos/ids/12054945/1002909425.jpg?v=637141927089070000",
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    price: 21.53,
    year: 2020,
    language: "Português",
    type: "",
    description: "",
  },
  {
    imageUrl:
      "https://a-static.mlcdn.com.br/618x463/o-diario-de-anne-frank-livro-edicao-de-luxo-capa-dura-spmix/spmixshop/6246607661/1ff2dbc6ca5728ceabbf260532d92cca.jpg",
    title: "O Diário de Anne Frank",
    author: "Anne Frank",
    price: 20.89,
    year: 2020,
    language: "Português",
    type: "",
    description: "",
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/51XULadddlL.jpg",
    title: "Dom Quixote de La Mancha",
    author: "Miguel de Cervantes",
    price: 7.99,
    year: 1978,
    language: "Português",
    type: "",
    description: "",
  },
  {
    imageUrl:
      "https://f.i.uol.com.br/fotografia/2017/08/11/703323-400x600-1.jpeg",
    title: "Harry Potter e o Enigma do Princípe",
    author: "JK. Rowling",
    price: 17.0,
    year: 2005,
    language: "Português",
    type: "",
    description: "",
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/91rtArfzScL.jpg",
    title: "Alice no País das Maravilhas",
    author: "Lewis Carrol",
    price: 12.81,
    year: 2014,
    language: "Português",
    type: "",
    description: "",
  },
  {
    imageUrl:
      "https://www.tamiresdecarvalho.com/wp-content/uploads/2019/03/91XO-9O58dL.jpg",
    title: "Coleção: Grandes Obras",
    author: "Jane Austen",
    price: 39.9,
    year: 2018,
    language: "Português",
    type: "",
    description: "",
  },
  {
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/617642/a_arte_da_guerra_sun_tzu_10163_1_20190719172751.png",
    title: "A Arte da Guerra",
    author: "Sun Tzu",
    price: 7.5,
    year: 2009,
    language: "Português",
    type: "",
    description: "",
  },
  {
    imageUrl:
      "https://d19qz1cqidnnhq.cloudfront.net/imagens/capas/e46ef4365583e6c89069b2d90eb2683a627fc2d1.jpg",
    title: "Quincas Borba",
    author: "Machado de Asis",
    price: 10.0,
    year: 1997,
    language: "Português",
    type: "",
    description: "",
  },
  {
    imageUrl: "http://i.imgur.com/MbNcr6s.jpg",
    title: "Joyland",
    author: "Stephen King",
    price: 23.9,
    year: 2015,
    language: "Português",
    type: "",
    description: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/61/de/b2/61deb298947cebaaee1751b710413085.jpg",
    title: "Senhora",
    author: "José de Alencar",
    price: 7.9,
    year: 2006,
    language: "Português",
    type: "",
    description: "",
  },
  {
    imageUrl:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2014/10/391946-novelas-ligeras-convertidas-manganime.png?itok=5nWwtbY3",
    type: "Light novel",
    title: "Bakemonogatari - Book 1",
    author: "NISIOISIN",
    description:
      'Bakemonogatari segue a história de Koyomi Araragi, um estudante do terceiro ano do ensino médio que é um "quase-humano" após ter brevemente se tornado um vampiro. Um dia, uma colega de classe chamada Hitagi Senjougahara, que nunca fala com ninguém, cai das escadarias da escola direto nos braços de Koyomi. Ele então descobre que ela pesa quase nada, desafiando as leis da física. Mesmo sendo ameaçado por ela e avisado para que ficasse longe e esquecesse o que presenciou, Koyomi oferece ajuda e a apresenta a Meme Oshino, um estranho homem de meia idade que vive num prédio abandonado, que o fez voltar a ser humano novamente.',
    price: 16.95,
    year: 2006,
    language: "Inglês",
    reviews: [
      {
        title: "Excelente",
        text:
          "É tão único e interessante que praticamente li tudo de uma vez. Do enredo aos personagens, tudo sobre ele foi ótimo. É meu prazer culpado.",
        username: "IceWelder",
        rating: 4.5,
        date: "22/03/2021",
      },
      {
        title: ", 8.3",
        text:
          "Em uma estória por trás simplista e choca, seus diálogos; ação e reação das personagens e originalidade engrandecem e muito o quesito obra",
        username: "Ig0y",
        rating: 4.15,
        date: "22/03/2021",
      },
      {
        title: "Muito bom",
        text:
          "Um show de roteiro. Eu louvo demais o Nisio Isin pelos diálogos absurdos e construção de personagens maravilhosa.",
        username: "AlexandreEsteves",
        rating: 4.5,
        date: "22/03/2021",
      },
    ],
  },
];

server.get("/", (req, res) => {
  return res.status(200);
});

server.get("/books", (req, res) => {
  return res.json(books);
});

server.get("/book/:index", (req, res) => {
  const { index } = req.params;

  return res.json(books[index]);
});

server.listen(process.env.PORT, () => console.log("running"));
