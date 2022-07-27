import photo1 from './assets/img/DSC00002.jpg';
import photo4 from './assets/img/DSC00004.jpg';
import photo3 from './assets/img/DSC09989.jpg';

const data = [
  {
    id: 1,
    name: 'Рыбалка в Сабурово было круто и весело! Хочу повторить еще!',
    user: 'BLVCK7',
    photo: [
      {
        link: photo1,
        likes: 1,
      },
      {
        link: photo4,
        likes: 1,
      },
      {
        link: photo3,
        likes: 1,
      },
    ],
    data: '2 марта 2022',
    location: 'МР, Сабурово',
    temperature: '+4',
    wind: 'С, 3 м/c',
    pressure: '751 мм',
    fish: '2 судака 500 и 700гр, 1 щука 1200гр, окунь на 300гр. 2 судака 500 и 700гр, 1 щука 1200гр, окунь на 300гр.',
    description:
      'Поклевки с 16 до 18, на Tioga 3 зеленый цвет. С ближней бровки. Воблера по ночи молчали. В 23 ушел домой. Поклевки с 16 до 18, на Tioga 3 зеленый цвет.',
  },
  {
    id: 2,
    name: 'Офигенно съездили!',
    user: 'Romka09',
    photo: [
      {
        link: photo1,
        likes: 1,
      },
      {
        link: photo4,
        likes: 1,
      },
    ],
    data: '23 июня 2022',
    location: 'МР, Коломенское',
    temperature: '+24',
    wind: 'В, 1 м/c',
    pressure: '745 мм',
    fish: '2 судака 500 и 700гр, 1 щука 1200гр, окунь на 300гр.',
    description:
      'Поклевки с 16 до 18, на Tioga 3 зеленый цвет. С ближней бровки. Воблера по ночи молчали. В 23 ушел домой. Поклевки с 16 до 18, на Tioga 3 зеленый.',
  },
];

export default data;
