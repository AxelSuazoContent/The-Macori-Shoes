const products = [
  {
    id: 1,
    name: 'Cree',
    cat: 'sandalias',
    price: 700,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia elegante con detalles en dorado.',
    colors: [
      { name: 'Café', hex: '#7a4a2a', photos: ['Img/zapatos/cree.jpeg'] },
      { name: 'Gold', hex: '#c9a84c', photos: ['Img/zapatos/cree.jpeg'] },
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/cree.jpeg'] },
      { name: 'Rosita', hex: '#F898B8', photos: ['Img/zapatos/cree.jpeg'] }
    ]
  },
  {
    id: 2,
    name: 'Calliope',
    cat: 'sandalias',
    price: 790,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia con diseño único y colores vibrantes.',
    colors: [
      { name: 'Azul', hex: '#2c5f8a', photos: ['Img/zapatos/calliope azul.jpeg'] },
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/calliope.jpeg'] },
      { name: 'Caramelo', hex: '#c49a6c', photos: ['Img/zapatos/calliope.jpeg'] },
      { name: 'Rojo', hex: '#c0392b', photos: ['Img/zapatos/calliope.jpeg'] }
    ]
  },
  {
    id: 3,
    name: 'Celine',
    cat: 'sandalias',
    price: 740,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia clásica con acabado en piel.',
    colors: [
      { name: 'Rojo', hex: '#c0392b', photos: ['Img/zapatos/celine rojo .jpeg'] },
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/celine negro.jpeg'] },
      { name: 'Leopardo', hex: '#d4a88a', photos: ['Img/zapatos/celine leopardo .jpeg'] },
      { name: 'Piel', hex: '#d4a88a', photos: ['Img/zapatos/celine leopardo .jpeg'] },
      { name: 'Blanco', hex: '#f5f0eb', photos: ['Img/zapatos/celine rojo .jpeg'] }
    ]
  },
  {
    id: 4,
    name: 'Antonia',
    cat: 'sandalias',
    price: 1390,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: 'Especial',
    desc: 'Sandalia de lujo con diseño exclusivo.',
    colors: [
      { name: 'Rojo y Café', hex: '#7a4a2a', photos: ['Img/zapatos/antonia burgundy .jpeg'] }
    ]
  },
  {
    id: 5,
    name: 'Constantine',
    cat: 'sandalias',
    price: 780,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia versátil con combinación de colores.',
    colors: [
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/constantine beige .jpeg'] },
      { name: 'Blanco', hex: '#f5f0eb', photos: ['Img/zapatos/constantine blanco .jpeg'] },
      { name: 'Caramelo', hex: '#c49a6c', photos: ['Img/zapatos/constantine beige .jpeg'] },
      { name: 'Café', hex: '#7a4a2a', photos: ['Img/zapatos/constantine cafe .jpeg'] }
    ]
  },
  {
    id: 6,
    name: 'Kataleya',
    cat: 'sandalias',
    price: 700,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia con detalles metálicos.',
    colors: [
      { name: 'Gold', hex: '#c9a84c', photos: ['Img/zapatos/kataleya beige .jpeg'] },
      { name: 'Silver', hex: '#aab0b8', photos: ['Img/zapatos/kataleya silver .jpeg'] },
      { name: 'Beige', hex: '#d4a88a', photos: ['Img/zapatos/kataleya beige .jpeg'] },
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/kataleya negro.jpeg'] }
    ]
  },
  {
    id: 7,
    name: 'Hila',
    cat: 'sandalias',
    price: 720,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia con estampado de leopardo.',
    colors: [
      { name: 'Leopardo', hex: '#d4a88a', photos: ['Img/zapatos/hila leopardo .jpeg'] }
    ]
  },
  {
    id: 8,
    name: 'Harinder',
    cat: 'sandalias',
    price: 720,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia básica en color negro.',
    colors: [
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/harinder negro .jpeg'] }
    ]
  },
  {
    id: 9,
    name: 'Hannia',
    cat: 'sandalias',
    price: 780,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia con detalles dorados.',
    colors: [
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/hannia negro.jpeg'] },
      { name: 'Gold', hex: '#c9a84c', photos: ['Img/zapatos/hannia gold .jpeg'] }
    ]
  },
  {
    id: 10,
    name: 'Heidy',
    cat: 'sandalias',
    price: 750,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia con combinación de colores cálidos.',
    colors: [
      { name: 'Café', hex: '#7a4a2a', photos: ['Img/zapatos/heidy cafe.jpeg'] },
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/heidy negro.jpeg'] },
      { name: 'Gold', hex: '#c9a84c', photos: ['Img/zapatos/heidy gold.jpeg'] }
    ]
  },
  {
    id: 11,
    name: 'Candelaria',
    cat: 'sandalias',
    price: 750,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia con múltiples opciones de color.',
    colors: [
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/candelaria negro.jpeg'] },
      { name: 'Gold', hex: '#c9a84c', photos: ['Img/zapatos/candelaria negro.jpeg'] },
      { name: 'Caramel', hex: '#c49a6c', photos: ['Img/zapatos/candelaria caramel.jpeg'] },
      { name: 'Blanco', hex: '#f5f0eb', photos: ['Img/zapatos/candelaria blanco.jpeg'] },
      { name: 'Silver', hex: '#aab0b8', photos: ['Img/zapatos/candelaria silver .jpeg'] }
    ]
  },
  {
    id: 12,
    name: 'Masie',
    cat: 'sandalias',
    price: 780,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia elegante con tonos neutros.',
    colors: [
      { name: 'Beige', hex: '#d4a88a', photos: ['Img/zapatos/masie beige .jpeg'] },
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/masie negro .jpeg'] },
      { name: 'Silver', hex: '#aab0b8', photos: ['Img/zapatos/masie silver .jpeg'] }
    ]
  },
  {
    id: 13,
    name: 'Fiorella',
    cat: 'sandalias',
    price: 790,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia con colores contrastantes.',
    colors: [
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/fiorella negro.jpeg'] },
      { name: 'Rojo', hex: '#c0392b', photos: ['Img/zapatos/fiorella rojo .jpeg'] },
      { name: 'Blanco', hex: '#f5f0eb', photos: ['Img/zapatos/fiorella blanco .jpeg'] }
    ]
  },
  {
    id: 14,
    name: 'Harlow',
    cat: 'sandalias',
    price: 790,
    emoji: '👡',
    sizes: ['7', '7.5', '8', '8.5', '9', '10', '11'],
    badge: null,
    desc: 'Sandalia para tallas grandes.',
    colors: [
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/harlow negro.jpeg'] },
      { name: 'Beige', hex: '#d4a88a', photos: ['Img/zapatos/harlow beige.jpeg'] },
      { name: 'Cefe', hex: '#d4a88a', photos: ['Img/zapatos/harlow cafe.jpeg'] }
    ]
  },
  {
    id: 15,
    name: 'Carmella',
    cat: 'sandalias',
    price: 750,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia con tonos tierra.',
    colors: [
      { name: 'Café', hex: '#7a4a2a', photos: ['Img/zapatos/carmellia cafe .jpeg'] },
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/carmelia negro .jpeg'] },
      { name: 'Burgundy', hex: '#722f37', photos: ['Img/zapatos/carmelia vino .jpeg'] }
    ]
  },
  {
    id: 16,
    name: 'Vincentina',
    cat: 'sandalias',
    price: 750,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia con combinación clásica.',
    colors: [
      { name: 'Negro y Café', hex: '#7a4a2a', photos: ['Img/zapatos/vincentina negro .jpeg'] }
    ]
  },
  {
    id: 17,
    name: 'Candes',
    cat: 'sandalias',
    price: 750,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia con estampado de vaca.',
    colors: [
      { name: 'Negro y Cow', hex: '#1a1a18', photos: ['Img/zapatos/candes negro .jpeg'] }
    ]
  },
  {
    id: 18,
    name: 'Harmonie',
    cat: 'sandalias',
    price: 750,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia en tonos café y negro.',
    colors: [
      { name: 'Negro y Café', hex: '#7a4a2a', photos: ['Img/zapatos/harmonie negro .jpeg'] }
    ]
  },
  {
    id: 19,
    name: 'Euphemie',
    cat: 'sandalias',
    price: 680,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: 'Oferta',
    oldPrice: 850,
    desc: 'Sandalia económica con estilo.',
    colors: [
      { name: 'Negro y Café', hex: '#7a4a2a', photos: ['Img/zapatos/euphemie negro .jpeg'] }
    ]
  },
  {
    id: 20,
    name: 'Coraline',
    cat: 'sandalias',
    price: 790,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia con colores vibrantes.',
    colors: [
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/caroline negro.jpeg'] },
      { name: 'Rojo', hex: '#c0392b', photos: ['Img/zapatos/celine rojo .jpeg'] },
      { name: 'Blanco', hex: '#f5f0eb', photos: ['Img/zapatos/caroline blanco .jpeg'] }
    ]
  },
  {
    id: 21,
    name: 'Estefania',
    cat: 'sandalias',
    price: 750,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia con tonos neutros.',
    colors: [
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/estefania negro .jpeg'] },
      { name: 'Beige', hex: '#d4a88a', photos: ['Img/zapatos/estefania beige .jpeg'] },
      { name: 'Blanco', hex: '#f5f0eb', photos: ['Img/zapatos/estefania blanco .jpeg'] }
    ]
  },
  {
    id: 22,
    name: 'Carmia',
    cat: 'sandalias',
    price: 790,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia con estampados animales.',
    colors: [
      { name: 'Rojo', hex: '#c0392b', photos: ['Img/zapatos/carmia rojo.jpeg'] },
      { name: 'Leopardo', hex: '#d4a88a', photos: ['Img/zapatos/carmia leopardo .jpeg'] },
      { name: 'Cow', hex: '#1a1a18', photos: ['Img/zapatos/carmia cow .jpeg'] }
    ]
  },
  {
    id: 23,
    name: 'Cleva',
    cat: 'sandalias',
    price: 790,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia clásica en negro.',
    colors: [
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/cleva negro.jpeg'] }
    ]
  },
  {
    id: 24,
    name: 'Choe',
    cat: 'sandalias',
    price: 700,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia en rojo y negro.',
    colors: [
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/choe negros.jpeg'] },
      { name: 'Rojo', hex: '#c0392b', photos: ['Img/zapatos/choe rojos.jpeg'] }
    ]
  },
  {
    id: 25,
    name: 'Rhodes',
    cat: 'sandalias',
    price: 780,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia en tonos azul y beige.',
    colors: [
      { name: 'Azul', hex: '#2c5f8a', photos: ['Img/zapatos/rhodes azul .jpeg'] },
      { name: 'Beige', hex: '#d4a88a', photos: ['Img/zapatos/rhodes beige .jpeg'] }
    ]
  },
  {
    id: 26,
    name: 'Celia',
    cat: 'sandalias',
    price: 790,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia con detalles en rosa.',
    colors: [
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/celia negro .jpeg'] },
      { name: 'Rosita', hex: '#F898B8', photos: ['Img/zapatos/celia rosa.jpeg'] }
    ]
  },
  {
    id: 27,
    name: 'Virginia',
    cat: 'sandalias',
    price: 750,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia en tonos café.',
    colors: [
      { name: 'Negro y Caramel', hex: '#c49a6c', photos: ['Img/zapatos/virginia caramelo.jpeg'] }
    ]
  },
  {
    id: 28,
    name: 'Evana',
    cat: 'sandalias',
    price: 800,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia con múltiples colores.',
    colors: [
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/evana negro .jpeg'] },
      { name: 'Rosita', hex: '#F898B8', photos: ['Img/zapatos/evana negro .jpeg'] },
      { name: 'Azul', hex: '#2c5f8a', photos: ['Img/zapatos/evana azul .jpeg'] },
      { name: 'Silver', hex: '#aab0b8', photos: ['Img/zapatos/evana silver .jpeg'] }
    ]
  },
  {
    id: 29,
    name: 'Hattie',
    cat: 'sandalias',
    price: 750,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia con detalles dorados.',
    colors: [
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/hattie negro .jpeg'] },
      { name: 'Gold', hex: '#c9a84c', photos: ['Img/zapatos/hattie gold .jpeg'] }
    ]
  },
  {
    id: 30,
    name: 'Candy',
    cat: 'sandalias',
    price: 730,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia en tonos neutros y dorado.',
    colors: [
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/candy negro .jpeg'] },
      { name: 'Beige', hex: '#d4a88a', photos: ['Img/zapatos/candy beige .jpeg'] },
      { name: 'Gold', hex: '#c9a84c', photos: ['Img/zapatos/candy gold .jpeg'] }
    ]
  },
  {
    id: 31,
    name: 'Hudson',
    cat: 'sandalias',
    price: 810,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia en tonos beige y blanco.',
    colors: [
      { name: 'Tan', hex: '#d4a88a', photos: ['Img/zapatos/hudson tan .jpeg'] },
      { name: 'Blanco', hex: '#f5f0eb', photos: ['Img/zapatos/hudson tan .jpeg'] }
    ]
  },
  {
    id: 32,
    name: 'Nina',
    cat: 'sandalias',
    price: 700,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '9', '10'],
    badge: null,
    desc: 'Sandalia en color plata.',
    colors: [
      { name: 'Plata', hex: '#aab0b8', photos: ['Img/zapatos/nina silver .jpeg'] }
    ]
  },
  {
    id: 33,
    name: 'Chic Buckle',
    cat: 'sandalias',
    price: 790,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'],
    badge: null,
    desc: 'Sandalia con hebilla en color vino.',
    colors: [
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/chic buckle negro.jpeg'] },
      { name: 'Vino', hex: '#722f37', photos: ['Img/zapatos/chic buckle vino.jpeg'] }
    ]
  },
  {
    id: 34,
    name: 'Fifi',
    cat: 'sandalias',
    price: 750,
    emoji: '👡',
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '10'],
    badge: null,
    desc: 'Sandalia con detalles dorados y plateados.',
    colors: [
      { name: 'Gold', hex: '#c9a84c', photos: ['Img/zapatos/fifi gold .jpeg'] },
      { name: 'Negro', hex: '#1a1a18', photos: ['Img/zapatos/fifi negro .jpeg'] },
      { name: 'Blanco', hex: '#f5f0eb', photos: ['Img/zapatos/fifi blanco.jpeg'] }
    ]
  }
];

// Exportar para usar en otros archivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = products;
}
