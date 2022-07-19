import React from 'react';
import Post from '../../components/Post/Post';
import './Home.scss';

const Home = () => {
  const data = [
    {
      name: 'Рыбалка в Сабурово',
      user: 'BLVCK7',
      data: '2 марта 2022',
      location: 'МР, Сабурово',
      temperature: '+4',
      wind: 'С, 3 м/c',
      pressure: '751 мм',
      fish: '2 судака 500 и 700гр, 1 щука 1200гр, окунь на 300гр.',
      description:
        'Поклевки с 16 до 18, на Tioga 3 зеленый цвет. С ближней бровки. Воблера по ночи молчали. В 23 ушел домой. Поклевки с 16 до 18, на Tioga 3 зеленый цвет. С ближней бровки. Воблера по ночи молчали. В 23 ушел домой. Поклевки с 16 до 18, на Tioga 3 зеленый цвет. С ближней бровки. Воблера поплыли!',
    },
    {
      name: 'Офигенно съездили!',
      user: 'Romka09',
      data: '23 июня 2022',
      location: 'МР, Коломенское',
      temperature: '+24',
      wind: 'В, 1 м/c',
      pressure: '745 мм',
      fish: '2 судака 500 и 700гр, 1 щука 1200гр, окунь на 300гр.',
      description:
        'Поклевки с 16 до 18, на Tioga 3 зеленый цвет. С ближней бровки. Воблера по ночи молчали. В 23 ушел домой.',
    },
  ];

  // console.log(data[0].description.length);

  return (
    <div className="home">
      {data.map((post) => (
        <Post data={post} />
      ))}
    </div>
  );
};

export default Home;
