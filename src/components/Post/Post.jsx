import React from 'react';
import './Post.scss';
import photo1 from '../../assets/img/DSC09989.JPG';

import { BsSunFill } from 'react-icons/bs';
import { WiStrongWind, WiBarometer } from 'react-icons/wi';
import { GiCirclingFish } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Post = ({ data, id }) => {
  return (
    <div className="card">
      <div className="first-block">
        <div className="card--photo">
          <img src={photo1} alt="Otchet1" />
          <div className="card--photo-arrows"></div>
          <div className="card--photo-likes"></div>
          <div className="card--photo-points"></div>
        </div>
      </div>
      <div className="second-block">
        <div className="card--info">
          <Link to={`/post/${id}`}>
            <h1>{data.name}</h1>
          </Link>
          <div className="card--info-post">
            <span className="author">{data.user}</span>
            <span>{data.data}</span>
            <span>{data.location}</span>
          </div>
          <div className="card--info-weather">
            <div className="weather-blog">
              <span className="sun">
                <BsSunFill />
              </span>
              <span>{data.temperature}</span>
            </div>
            <div className="weather-blog">
              <span className="wind">
                <WiStrongWind />
              </span>
              <span>{data.wind}</span>
            </div>
            <div className="weather-blog">
              <span className="barometr">
                <WiBarometer />
              </span>
              <span>{data.pressure}</span>
            </div>
          </div>
        </div>
        <div className="card--fish">
          <GiCirclingFish className="icon-fish" />
          <span>{data.fish}</span>
        </div>
        <div className="card--description">
          <p
            className={
              data.description.length > 210
                ? 'card--description-scroll'
                : 'card--description-hidden'
            }>
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
