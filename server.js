// require("dotenv/config");

const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());

server.use(express.json());

const books = [
  {
    id: 1,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/812ot79TCsL.jpg",
    type: "Livro",
    title: "Capitães da Areia",
    author: "Jorge Amado",
    description:
      "Desde o seu lançamento, em 1937, Capitães da Areia causou escândalo: inúmeros exemplares do livro foram queimados em praça pública, por determinação do Estado Novo. Ao longo de sete décadas a narrativa não perdeu viço nem atualidade, pelo contrário: a vida urbana dos meninos pobres e infratores ganhou contornos trágicos e urgentes. Várias gerações de brasileiros sofreram o impacto e a sedução desses meninos que moram num trapiche abandonado no areal do cais de Salvador, vivendo à margem das convenções sociais. Verdadeiro romance de formação, o livro nos torna íntimos de suas pequenas criaturas, cada uma delas com suas carências e suas ambições: do líder Pedro Bala ao religioso Pirulito, do ressentido e cruel Sem-Pernas ao aprendiz de cafetão Gato, do sensato Professor ao rústico sertanejo Volta Seca. Com a força envolvente da sua prosa, Jorge Amado nos aproxima desses garotos e nos contagia com seu intenso desejo de liberdade.",
    price: '12.00',
    year: 2008,
    language: "Português",
    reviews: [
      // {
      //   title: "",
      //   text: "",
      //   username: "",
      //   rating: 0.0,
      //   date: "//",
      // },
    ],
  },
  {
    id: 2,
    imageUrl: "https://m.media-amazon.com/images/I/51amKTwzkPL.jpg",
    type: "Livro",
    title: "O Morro dos Ventos Uivantes",
    author: "Emily Brontë",
    description:
      "O MORRO DOS VENTOS UIVANTES foi publicado em 1847 através do pseudônimo Ellis Bell. Hoje considerado um dos grandes clássicos da literatura universal, caracteriza-se como uma grande história de amor amaldiçoado e de vingança, e visto como a mais intensa história de amor já escrita na língua inglesa, tendo recebido fortes críticas quando de sua publicação no século 19. Um ano antes de seu lançamento, as três irmãs Brontë - Charlotte, Emily e Anne - haviam publicado uma coletânea de poemas sob o nome de ?Currer, Ellis e Acton Bell?. Nos círculos literários ingleses era crença generalizada que as ?Irmãs Brontë? e os ?Irmãos Bell? fossem as mesmas pessoas. No entanto, o simples crédito deu margem a controvérsias: qual das irmãs Brontë seria qual dos irmãos ?Bell? Correntes de críticos afirmavam que os três pseudônimos pertenciam na realidade à Charlotte Brontë; outros sugeriam que os demais pseudônimos ?Bell? não se relacionavam com nenhuma das irmãs, e se referiam a seu Irmão, Branwell. Críticos da época reagiram com indiferença a ?O MORRO DOS VENTOS UIVANTES?, comparando-a desfavoravelmente com ?Jane Eyre?, de Charlotte Brontë, enquanto outros achavam o livro excessivamente mórbido e violento. Finalmente, a reavaliação crítica gradual encabeçada pela própria Charlotte resultou no reconhecimento do gênio de Emily e na aceitação de «O MORRO DOS VENTOS UIVANTES» como uma obra-prima singular, representando um distanciamento radical da tradição vitoriana de romance, uma vez que - é fortemente influenciado pelo estilo de lorde Byron e Percy Shelley, em suas poesias, e pelo ar gótico e rebuscado de Horace Walpole (autor do primeiro romance gótico ?O Castelo de Otranto?) e por Mary Shelley (autora de ?Frankenstein? e ?O Último Homem?).",
    price: '35.92',
    year: 2018,
    language: "Português",
    reviews: [
      // {
      //   title: "",
      //   text: "",
      //   username: "",
      //   rating: 0.0,
      //   date: "//",
      // },
    ],
  },
  {
    id: 3,
    imageUrl:
      "http://lojasaraiva.vteximg.com.br/arquivos/ids/12054945/1002909425.jpg?v=637141927089070000",
    type: "Livro",
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    description:
      'Apesar da presença explícita de dois personagens e do registro de um diálogo entre o aviador e uma criança, diversos aspectos autobiográficos estão presentes nesta narrativa, publicada pela primeira vez em 1945. Através de imagens simbólicas, as passagens de ordem temporal, na vida do autor, estão ali presentes: casamento/separação, profissões, sonhos, decepções. Os dois personagens tornam-se representações do próprio Saint-Exupéry, em um monólogo interior entre o "eu" e o "outro".',
    price: '21.53',
    year: 2020,
    language: "Português",
    reviews: [
      // {
      //   title: "",
      //   text: "",
      //   username: "",
      //   rating: 0.0,
      //   date: "//",
      // },
    ],
  },
  {
    id: 4,
    imageUrl:
      "https://a-static.mlcdn.com.br/618x463/o-diario-de-anne-frank-livro-edicao-de-luxo-capa-dura-spmix/spmixshop/6246607661/1ff2dbc6ca5728ceabbf260532d92cca.jpg",
    type: "Livro",
    title: "O Diário de Anne Frank",
    author: "Anne Frank",
    description: '"12 de junho de 1942 - 1° de agosto de 1944. Ao longo deste período, a jovem Anne Frank escreveu em seu diário toda a tensão que a família Frank sofreu durante a Segunda Guerra Mundial. Ao fim de muitos dias de silêncio e medo aterrorizante, eles foram descobertos pelos nazistas e deportados para campos de concentração. Anne inicialmente segui para Auschwitz e mais tarde para Bergen-belsen."',
    price: '20.89',
    year: 2020,
    language: "Português",
    reviews: [
      // {
      //   title: "",
      //   text: "",
      //   username: "",
      //   rating: 0.0,
      //   date: "//",
      // },
    ],
  },
  {
    id: 5,
    imageUrl: "https://m.media-amazon.com/images/I/51XULadddlL.jpg",
    type: "Livro",
    title: "Dom Quixote de La Mancha",
    author: "Miguel de Cervantes",
    description:
      'Há pouco considerado por uma comissão internacional de escritores como o melhor livro de todos os tempos, Dom Quixote nos chega agora traduzido e adaptado por Ferreira Gullar, que extraiu o melhor sumo do conteúdo poético e humanista dos cinco grossos volumes da edição original da obra de Miguel de Cervantes e, numa linguagem moderna e fluida, a tornou mais acessível aos leitores de nosso tempo. As ilustrações de Gustave Doré com certeza também serão um deleite para os leitores. Dom Quixote certamente vai seguir a trilha do êxito obtido por Gullar no tratamento de dois clássicos da literatura - Fábulas de La Fontaine e As mil e uma noites, ambos ganhadores do prêmio "Altamente Recomendável", dado pela FNLIJ -, também editados pela Revan, que hoje estimulam a imaginação e enchem de beleza os olhos de dezenas de milhares de crianças e adultos em todo o Brasil.A história mostra um ingênuo senhor rural cujo passatempo favorito era a leitura de livros de cavalaria. Na sua obsessão, acreditava literalmente nas aventuras escritas e decide tornar-se um cavaleiro andante. Suas viagens sucedem-se sob a alucinação de que estava vivendo na era da cavalaria; pessoas que encontrava nas estradas pareciam-lhe como cavaleiros em armas, damas em apuros, gigantes e monstros; até moinhos de vento na sua imaginação eram seres vivos. Combatendo as injustiças, o personagem enfrenta situações penosas e ridículas, mantendo, porém, uma figura nobre e patética. Ao final, Dom Quixote volta à razão, renuncia aos romances de cavalaria e morre como piedoso cristão.',
    price: '7.99',
    year: 1978,
    language: "Português",
    reviews: [
      // {
      //   title: "",
      //   text: "",
      //   username: "",
      //   rating: 0.0,
      //   date: "//",
      // },
    ],
  },
  {
    id: 6,
    imageUrl:
      "https://f.i.uol.com.br/fotografia/2017/08/11/703323-400x600-1.jpeg",
    type: "Livro",
    title: "Harry Potter e o Enigma do Princípe",
    author: "JK. Rowling",
    description:
      "É o auge do verão, mas há uma inesperada névoa persistente através da vidraça. Harry Potter está esperando ansiosamente no seu quarto na casa dos Dursley pela visita do Professor Dumbledore em pessoa. Na última vez em que ele o viu foi durante um violento duelo contra Voldemort, e Harry não pode acreditar que o Dumbledore realmente irá aparecer em sua casa. Por que o Professor vai visitá-lo agora? Por que ele não pode esperar até Harry voltar para Hogwarts em algumas semanas? O sexto ano de Harry em Hogwarts começa de uma forma diferente, enquanto o mundo dos trouxas e o mundo da magia se entrelaçam...",
    price: '17.00',
    year: 2005,
    language: "Português",
    reviews: [
      // {
      //   title: "",
      //   text: "",
      //   username: "",
      //   rating: 0.0,
      //   date: "//",
      // },
    ],
  },
  {
    id: 7,
    imageUrl: "https://m.media-amazon.com/images/I/91rtArfzScL.jpg",
    type: "Livro",
    title: "Alice no País das Maravilhas",
    author: "Lewis Carrol",
    description:
      "Chega aos cinemas brasileiros, em abril, a versão do diretor Tim Burton para a obra mais conhecida da literatura infantil. Passados quase 150 anos da publicação original, a clássica história de uma menina chamada Alice, que entra em uma toca atrás de um coelho falante e cai em um mundo de fantasia, continua popular. Essa charmosa edição de bolso, com capa dura e ilustrações originais de John Tenniel, reúne Aventuras de Alice no País das Maravilhas e sua continuação, Através do espelho e o que Alice encontrou por lá. Obra-prima que não pode faltar na sua biblioteca – e com um preço que cabe no seu bolso.",
    price: '12.81',
    year: 2014,
    language: "Português",
    reviews: [
      // {
      //   title: "",
      //   text: "",
      //   username: "",
      //   rating: 0.0,
      //   date: "//",
      // },
    ],
  },
  {
    id: 8,
    imageUrl:
      "https://www.tamiresdecarvalho.com/wp-content/uploads/2019/03/91XO-9O58dL.jpg",
    type: "Livro",
    title: "Coleção: Grandes Obras",
    author: "Jane Austen",
    description:
      "Jane Austen foi uma das romancistas mais populares da literatura mundial. Publicados originalmente no século XIX, seus livros causam encantamento no público até hoje e já ganharam diversas adaptações no cinema e na TV. Neste boxe especial da Nova Fronteira, encontram-se as três obras mais importantes da carreira da escritora inglesa, com as renomadas traduções de Lucio Cardoso e Ivo Barroso. Orgulho e preconceito é uma comédia de costumes em que Jane Austen mostra os perigos do julgamento à primeira vista e evoca as amizades, fofocas e vaidades da classe média provinciana. Em Razão e sentimento, as irmãs Dashwood, após a morte do pai, terão que lidar com as convenções de uma sociedade extremamente rígida, em que sofrerão as desilusões e os desafios da busca pelo amor. Já Emma narra a história de uma menina linda, inteligente e rica que acredita que não precisa de envolvimentos amorosos. Porém, ao tentar resolver a vida romântica dos outros, a inexperiência e os erros de julgamento sobre as próprias emoções rendem a Emma muitas surpresas e decepções. Um boxe imperdível para os fãs de um bom romance.",
    price: '39.90',
    year: 2018,
    language: "Português",
    reviews: [
      // {
      //   title: "",
      //   text: "",
      //   username: "",
      //   rating: 0.0,
      //   date: "//",
      // },
    ],
  },
  {
    id: 9,
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/617642/a_arte_da_guerra_sun_tzu_10163_1_20190719172751.png",
    type: "Livro",
    title: "A arte da guerra",
    author: "Sun Tzu",
    description: "“A arte da guerra”, do guerreiro-filósofo chinês Sun Tzu, escrito cerca de 500 anos a.C., é um dos mais sábios e importantes tratados de estratégia militar da história. Ensinando princípios como: evitar a força e atacar a fraqueza, vencer sem lutar e que o primeiro inimigo a se enfrentar é a si mesmo, este livro milenar é um clássico entre os mais variados tipos de público. E, nos últimos tempos, tornou-se um verdadeiro manual de marketing e estratégias empresariais, que orienta executivos e líderes políticos.",
    price: '7.50',
    year: 2009,
    language: "Português",
    reviews: [
      // {
      //   title: "",
      //   text: "",
      //   username: "",
      //   rating: 0.0,
      //   date: "//",
      // },
    ],
  },
  {
    id: 10,
    imageUrl:
      "https://d19qz1cqidnnhq.cloudfront.net/imagens/capas/e46ef4365583e6c89069b2d90eb2683a627fc2d1.jpg",
    type: "Livro",
    title: "Quincas Borba",
    author: "Machado de Asis",
    description:
      "Publicado pela primeira vez em livro em 1891, depois portanto de Memórias póstumas de Brás Cubas (1881) e antes de Dom Casmurro (1899), Quincas Borba é uma das obras mais marcantes da fase realista de Machado de Assis. Talvez por se situar justamente entre esses dois monumentos da obra machadiana, o romance muitas vezes foi considerado uma realização menor, uma espécie de mera continuação das Memórias póstumas - para irritação de seu autor, que em um raro comentário sobre a própria ficção afirmou que a presença do personagem Quincas Borba era ?o único vínculo? entre os dois livros. Mais do que ao marco inaugural do Realismo no Brasil, porém, Quincas Borba remete ao Machado contista que começava a abordar temas historicamente mais próximos de sua época e a explorar os conflitos psicológicos de seus personagens com sua sofisticada e irônica narrativa em terceira pessoa presente em contos clássicos como ?A cartomante? e ?A causa secreta?. Neste romance da maturidade do autor, a história do provinciano Rubião - herdeiro da fortuna do idiossincrático filósofo Quincas Borba - e dos tipos urbanos da corte que o levam à ruína é narrada com o distanciamento, o ceticismo e o senso de humor implacável de que só Machado de Assis era capaz. Esta edição de Quincas Borba, além de mais uma centena de notas explicativas, traz uma extensa e abrangente introdução do britânico John Gledson, estudioso da obra machadiana e tradutor de Dom Casmurro para o inglês.",
    price: '10.00',
    year: 1997,
    language: "Português",
    reviews: [
      // {
      //   title: "",
      //   text: "",
      //   username: "",
      //   rating: 0.0,
      //   date: "//",
      // },
    ],
  },
  {
    id: 11,
    imageUrl: "http://i.imgur.com/MbNcr6s.jpg",
    type: "Livro",
    title: "Joyland",
    author: "Stephen King",
    description:
      "Carolina do Norte, 1973. O universitário Devin Jones começa um trabalho temporário no parque Joyland, esperando esquecer a namorada que partiu seu coração. Mas é outra garota que acaba mudando seu mundo para sempre - a vítima de um serial killer. Linda Grey foi morta no parque há anos, e diz a lenda que seu espírito ainda assombra o trem fantasma. Não demora para que Devin embarque em sua própria investigação, tentando juntar as pontas soltas do caso. O assassino ainda está à solta, mas o espírito de Linda precisa ser libertado - e para isso Dev conta com a ajuda de Mike, um menino com um dom especial e uma doença séria. O destino de uma criança e a realidade sombria da vida vêm à tona neste eletrizante mistério sobre amar e perder, sobre crescer e envelhecer - e sobre aqueles que sequer tiveram a chance de passar por essas experiências porque a morte lhes chegou cedo demais.",
    price: '23.90',
    year: 2015,
    language: "Português",
    reviews: [
      // {
      //   title: "",
      //   text: "",
      //   username: "",
      //   rating: 0.0,
      //   date: "//",
      // },
    ],
  },
  {
    id: 12,
    imageUrl:
      "https://i.pinimg.com/originals/61/de/b2/61deb298947cebaaee1751b710413085.jpg",
    type: "Livro",
    title: "Senhora",
    author: "José de Alencar",
    description: "José de Alencar, um dos maiores autores do romantismo brasileiro, retrata neste livro a burguesia e seu temas voltados para o público feminino. O dinheiro é sempre um fator que aproxima ou afasta temporariamente os casais. Orgulho, ciúme e paixões bruscas movem os corações de seus personagens. A mulher, sempre bela e frágeil, sabe lutar pelo amor que escolhem até o final. Romance de paixão, amor, ódio, vingança e perdão.",
    price: '7.90',
    year: 2006,
    language: "Português",
    reviews: [
      // {
      //   title: "",
      //   text: "",
      //   username: "",
      //   rating: 0.0,
      //   date: "//",
      // },
    ],
  },
  {
    id: 13,
    imageUrl: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2014/10/391946-novelas-ligeras-convertidas-manganime.png?itok=5nWwtbY3",
    type: "Light novel",
    title: "Bakemonogatari - Book 1",
    author: "NISIOISIN",
    description: 'Bakemonogatari segue a história de Koyomi Araragi, um estudante do terceiro ano do ensino médio que é um "quase-humano" após ter brevemente se tornado um vampiro. Um dia, uma colega de classe chamada Hitagi Senjougahara, que nunca fala com ninguém, cai das escadarias da escola direto nos braços de Koyomi. Ele então descobre que ela pesa quase nada, desafiando as leis da física. Mesmo sendo ameaçado por ela e avisado para que ficasse longe e esquecesse o que presenciou, Koyomi oferece ajuda e a apresenta a Meme Oshino, um estranho homem de meia idade que vive num prédio abandonado, que o fez voltar a ser humano novamente.',
    price: '16.95',
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
  console.log(books[12]);

  const booksPlusRating = books.map((book) => {
    return {
      ...book,
      nreviews: book.reviews.length,
      rating: book.reviews.length > 0 ? book.reviews.map(e => e.rating).reduce((acc, item) => ((acc + item) / book.reviews.length).toString()) : "0.0",
    }
  });

  return res.json(booksPlusRating);
});

server.get("/book/:index", (req, res) => {
  const i = req.params.index;

  const index = Number.parseInt(i) - 1;

  return res.json({
    ...books[index],
    nreviews: books[index].reviews.length,
    rating: books[index].reviews.length > 0 ? books[index].reviews.map(e => e.rating).reduce((acc, item) => ((acc + item) / books[index].reviews.length).toString()) : "0.0",
  });
});

server.listen(process.env.PORT, () => console.log('running'));
