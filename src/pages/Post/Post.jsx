import React from 'react';
import { useSelector } from 'react-redux';

const Post = ({ postName, location, temperature, windDirection, windPower, pressure }) => {
  const post = useSelector((state) => state.post);

  return (
    <div>
      <p>
        Название поста: {postName}, локация: {location}, температура воздуха: {temperature}, ветер и
        его направление: {windDirection} {windPower}, атмосферное давление: {pressure}
      </p>
    </div>
  );
};

export default Post;
