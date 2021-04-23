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
    price: 12.00,
    year: 2008,
    language: "Português",
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/51amKTwzkPL.jpg",
    title: "O Morro dos Ventos Uivantes",
    author: "Emily Brontë",
    price: 35.92,
    year: 2018,
    language: "Português",
  },
  {
    imageUrl:
      "http://lojasaraiva.vteximg.com.br/arquivos/ids/12054945/1002909425.jpg?v=637141927089070000",
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    price: 21.53,
    year: 2020,
    language: "Português",
  },
  {
    imageUrl:
      "https://a-static.mlcdn.com.br/618x463/o-diario-de-anne-frank-livro-edicao-de-luxo-capa-dura-spmix/spmixshop/6246607661/1ff2dbc6ca5728ceabbf260532d92cca.jpg",
    title: "O Diário de Anne Frank",
    author: "Anne Frank",
    price: 20.89,
    year: 2020,
    language: "Português",
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/51XULadddlL.jpg",
    title: "Dom Quixote de La Mancha",
    author: "Miguel de Cervantes",
    price: 7.99,
    year: 1978,
    language: "Português",
  },
  {
    imageUrl:
      "https://f.i.uol.com.br/fotografia/2017/08/11/703323-400x600-1.jpeg",
    title: "Harry Potter e o Enigma do Princípe",
    author: "JK. Rowling",
    price: 17.0,
    year: 2005,
    language: "Português",
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/91rtArfzScL.jpg",
    title: "Alice no País das Maravilhas",
    author: "Lewis Carrol",
    price: 12.81,
    year: 2014,
    language: "Português",
  },
  {
    imageUrl:
      "https://www.tamiresdecarvalho.com/wp-content/uploads/2019/03/91XO-9O58dL.jpg",
    title: "Coleção: Grandes Obras",
    author: "Jane Austen",
    price: 39.90,
    year: 2018,
    language: "Português",
  },
  {
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/617642/a_arte_da_guerra_sun_tzu_10163_1_20190719172751.png",
    title: "A Arte da Guerra",
    author: "Sun Tzu",
    price: 7.5,
    year: 2009,
    language: "Português",
  },
  {
    imageUrl:
      "https://d19qz1cqidnnhq.cloudfront.net/imagens/capas/e46ef4365583e6c89069b2d90eb2683a627fc2d1.jpg",
    title: "Quincas Borba",
    author: "Machado de Asis",
    price: 10.0,
    year: 1997,
    language: "Português",
  },
  {
    imageUrl: "http://i.imgur.com/MbNcr6s.jpg",
    title: "Joyland",
    author: "Stephen King",
    price: 23.9,
    year: 2015,
    language: "Português",
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/61/de/b2/61deb298947cebaaee1751b710413085.jpg",
    title: "Senhora",
    author: "José de Alencar",
    price: 7.9,
    year: 2006,
    language: "Português",
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

server.listen(80, () => console.log('running'));
