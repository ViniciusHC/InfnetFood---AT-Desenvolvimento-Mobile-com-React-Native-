import { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
 
  const [categorias, setCategorias] = useState([
    {
      id: 1,
      nome: 'Lanches',
      url: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop',
      produtos: [
        {
          id: 101,
          nome: 'X-Burger',
          preco: 25.9,
          descricao: 'Pão artesanal, blend bovino 150g e queijo derretido.',
          url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
        },
        {
          id: 102,
          nome: 'X-Salada',
          preco: 28.5,
          descricao:
            'Hambúrguer com alface fresca, tomate, cebola e maionese especial.',
          url: 'https://s2-receitas.glbimg.com/MBXXThem86JdWaXz95KsIv_swfc=/0x0:1024x576/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/C/9/qcgPqQTNSYuN0M8qR9hg/x-salada-caseiro.jpg',
        },
        {
          id: 103,
          nome: 'Hot Dog',
          preco: 18.0,
          descricao:
            'Salsicha premium, purê de batata, vinagrete e batata palha.',
          url: 'https://www.perdigao.com.br/assets/_images/2f0f25ba8b0b919ad3f3ea6ffb1c1289974de16e.webp',
        },
        {
          id: 104,
          nome: 'X-Bacon',
          preco: 32.0,
          descricao:
            'O clássico X-Burger turbinado com fatias crocantes de bacon.',
          url: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400',
        },
        {
          id: 105,
          nome: 'Misto Quente',
          preco: 12.0,
          descricao:
            'Presunto e queijo muçarela prensados no pão de forma na chapa.',
          url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400',
        },
      ],
    },
    {
      id: 2,
      nome: 'Bebidas',
      url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop',
      produtos: [
        {
          id: 201,
          nome: 'Coca-Cola',
          preco: 7.5,
          descricao: 'Lata 350ml, refrescante e gelada.',
          url: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400',
        },
        {
          id: 202,
          nome: 'Suco Laranja',
          preco: 12.0,
          descricao: 'Suco natural da fruta, sem adição de conservantes.',
          url: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400',
        },
        {
          id: 203,
          nome: 'Água Mineral',
          preco: 5.0,
          descricao: 'Garrafa 500ml, com ou sem gás.',
          url: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?w=400',
        },
        {
          id: 204,
          nome: 'Cerveja Lata',
          preco: 9.0,
          descricao: 'Pilsen gelada, ideal para acompanhar seu lanche.',
          url: 'https://images.unsplash.com/photo-1584225064785-c62a8b43d148?w=400',
        },
        {
          id: 205,
          nome: 'Café Expresso',
          preco: 6.5,
          descricao:
            'Grãos selecionados, moídos na hora para um sabor intenso.',
          url: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400',
        },
      ],
    },
    {
      id: 3,
      nome: 'Sobremesas',
      url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&auto=format&fit=crop',
      produtos: [
        {
          id: 301,
          nome: 'Petit Gateau',
          preco: 24.0,
          descricao: 'Bolo quente de chocolate com recheio cremoso e sorvete.',
          url: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400',
        },
        {
          id: 302,
          nome: 'Pudim',
          preco: 15.0,
          descricao:
            'O clássico pudim de leite condensado com calda de caramelo.',
          url: 'https://static.itdg.com.br/images/640-400/d1307a2e17cda187df76b78cfd3ac464/shutterstock-2322251819-1-.jpg',
        },
        {
          id: 303,
          nome: 'Sorvete',
          preco: 18.0,
          descricao: 'Duas bolas de sorvete à sua escolha com cobertura.',
          url: 'https://polosulsc.com.br/wp-content/webp-express/webp-images/uploads/2018/03/Tr%C3%AAs-tipos-e-sabores-de-sorvete-diferentes-1.jpg.webp',
        },
        {
          id: 304,
          nome: 'Brownie',
          preco: 16.5,
          descricao: 'Massa densa de chocolate com nozes, servido morno.',
          url: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400',
        },
        {
          id: 305,
          nome: 'Mousse Choc.',
          preco: 14.0,
          descricao:
            'Textura leve e aerada com raspas de chocolate meio amargo.',
          url: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=400',
        },
      ],
    },
    {
      id: 4,
      nome: 'Pratos Feitos',
      url: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&auto=format&fit=crop',
      produtos: [
        {
          id: 401,
          nome: 'PF de Frango',
          preco: 32.9,
          descricao: 'Filé de frango grelhado, arroz, feijão, fritas e salada.',
          url: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400',
        },
        {
          id: 402,
          nome: 'PF de Carne',
          preco: 35.0,
          descricao:
            'Bife acebolado servido com arroz branco e feijão caseiro.',
          url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400',
        },
        {
          id: 403,
          nome: 'Feijoada',
          preco: 45.0,
          descricao: 'Completa com arroz, couve, farofa e laranja.',
          url: 'https://i.panelinha.com.br/i1/bk-9097-39-panelinha-12-02-200635.webp',
        },
        {
          id: 404,
          nome: 'Peixe Frito',
          preco: 38.0,
          descricao: 'Filé de peixe empanado acompanhado de purê e arroz.',
          url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400',
        },
        {
          id: 405,
          nome: 'Omelete',
          preco: 26.0,
          descricao:
            'Três ovos, queijo, tomate e ervas finas. Leve e nutritivo.',
          url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/FoodOmelete.jpg',
        },
      ],
    },
    {
      id: 5,
      nome: 'Saudáveis',
      url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop',
      produtos: [
        {
          id: 501,
          nome: 'Salada Caesar',
          preco: 29.0,
          descricao: 'Alface americana, croutons, parmesão e molho caesar.',
          url: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400',
        },
        {
          id: 502,
          nome: 'Bowl Vegano',
          preco: 34.0,
          descricao: 'Mix de grãos, legumes assados, abacate e sementes.',
          url: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=400',
        },
        {
          id: 503,
          nome: 'Wrap Integral',
          preco: 22.0,
          descricao: 'Massa integral recheada com ricota e vegetais.',
          url: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400',
        },
        {
          id: 504,
          nome: 'Poke Havaiano',
          preco: 42.0,
          descricao: 'Salmão fresco em cubos, arroz de sushi e frutas.',
          url: 'https://images.unsplash.com/photo-1546069901-eacef0df6022?w=400',
        },
        {
          id: 505,
          nome: 'Sopa detox',
          preco: 20.0,
          descricao: 'Creme de legumes com gengibre e cúrcuma.',
          url: 'https://www.brfoodsalimentacao.com.br/adm/upload/site-17328881886749c67c427d2.jpg',
        },
      ],
    },
  ]);

  const [restaurantes, setRestaurantes] = useState([
  {
    id: 1,
    nome: 'Carioca Grill',
    descricao: 'Churrasco brasileiro',
    lat: -22.9035,
    lng: -43.2096,
    pratoPrincipal: 'Picanha na Brasa com Arroz Carreteiro'
  },
  {
    id: 2,
    nome: 'Sabor do Porto',
    descricao: 'Frutos do mar',
    lat: -22.9042,
    lng: -43.2101,
    pratoPrincipal: 'Moqueca de Garoupa'
  },
  {
    id: 3,
    nome: 'Pizza Centro',
    descricao: 'Pizzaria',
    lat: -22.9028,
    lng: -43.2087,
    pratoPrincipal: 'Pizza Rio Antigo (Lombo com Catupiry)'
  },
  {
    id: 4,
    nome: 'Temaki RJ',
    descricao: 'Comida japonesa',
    lat: -22.9051,
    lng: -43.2079,
    pratoPrincipal: 'Combinado de Salmão Maçaricado'
  },
  {
    id: 5,
    nome: 'Bistrô Carioca',
    descricao: 'Comida contemporânea',
    lat: -22.9019,
    lng: -43.2092,
    pratoPrincipal: 'Risoto de Aspargos com Queijo Brie'
  },
  {
    id: 6,
    nome: 'Veg Rio',
    descricao: 'Vegano',
    lat: -22.903,
    lng: -43.2068,
    pratoPrincipal: 'Moqueca de Banana da Terra'
  },
  {
    id: 7,
    nome: 'Burger Central',
    descricao: 'Hambúrguer artesanal',
    lat: -22.9047,
    lng: -43.2083,
    pratoPrincipal: 'Monumental Burguer (Cheddar e Bacon)'
  },
  {
    id: 8,
    nome: 'Café do Centro',
    descricao: 'Cafeteria',
    lat: -22.9025,
    lng: -43.2104,
    pratoPrincipal: 'Pão de Queijo Recheado com Café Coado'
  },
  {
    id: 9,
    nome: 'Massas da Lapa',
    descricao: 'Comida italiana',
    lat: -22.9038,
    lng: -43.2072,
    pratoPrincipal: 'Fettuccine à Putanesca'
  },
  {
    id: 10,
    nome: 'Sabores da Bahia',
    descricao: 'Comida baiana',
    lat: -22.9015,
    lng: -43.2089,
    pratoPrincipal: 'Acarajé Completo'
  }
]);

  return (
    <ProductContext.Provider
      value={{
        categorias,
        setCategorias,
        restaurantes,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;