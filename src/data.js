import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';

export const pageLinks = [
  {
    id: 1,
    text: 'home',
    url: '#home',
  },
  {
    id: 2,
    text: 'about',
    url: '#about',
  },
  {
    id: 3,
    text: 'services',
    url: '#services',
  },
  {
    id: 4,
    text: 'tours',
    url: '#tours',
  },
];

export const socialLinks = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: 'fab fa-squarespace',
  },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
];

export const tours = [
  {
    id: 1,
    tourDate: 'october 11th, 2020',
    tourInfo: 'best of java',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    country: 'indonesia',
    days: '11 days',
    price: 'From $1400',
    image: tour1,
  },
  {
    id: 2,
    tourDate: 'august 26th, 2020',
    tourInfo: 'tibet adventure',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    country: 'china',
    days: '6 days',
    price: 'From $2100',
    image: tour2,
  },
  {
    id: 3,
    tourDate: 'september 15th, 2020',
    tourInfo: 'kilimanjaro',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    country: 'tanzania',
    days: '10 days',
    price: 'From $4000',
    image: tour3,
  },
];
