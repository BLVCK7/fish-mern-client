import { Stack } from '@mui/material';
import React from 'react';
import Post from '../../components/Post/Post';
import './Home.scss';

const Home = () => {
  const data = [
    {
      id: 1,
      name: 'Рыбалка в Сабурово было круто и весело! Хочу повторить еще!',
      user: 'BLVCK7',
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

  const _id = Math.floor(Math.random() * 1000);

  console.log(data[0].description.length);

  return (
    <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={3}>
      {data.map((post) => (
        <Post data={post} id={_id} key={post.id} />
      ))}
    </Stack>
  );
};

export default Home;
