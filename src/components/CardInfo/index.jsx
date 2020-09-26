import React from 'react';

import Button from '../Button';

import './styles.css';

import pikachuImg from '../../assets/pikachu.png';
import pokerbolaImg from '../../assets/pokerbola.png';

function CardInfo() {
  return (
    <aside className="card-info">
      <section className="card-info-box">
        <h2 className="card-info-box__title">Teste frontend</h2>
        <p className="card-info-box__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, a
          lacus, aliquam mattis est enim, molestie diam. Consequat blandit nec,
          venenatis dignissim suspendisse in facilisi molestie duis. Tempor sed
          quis phasellus arcu, posuere. Elementum ut tellus nisi, nunc ac etiam
          ut lectus porta. Et morbi enim vestibulum sodales sed ullamcorper
          dapibus accumsan. Faucibus pharetra, et at orci, vel blandit odio.
          Volutpat urna fusce quisque libero pellentesque in. Augue tempor vitae
          ullamcorper bibendum.
        </p>
        <p className="card-info-box__text">
          Quis facilisi nulla id est natoque sed ut consectetur. Id eleifend
          eros ullamcorper et. Diam, ultrices pellentesque urna, integer a
          lectus. Sit sollicitudin ac egestas amet netus. Elit vitae dolor
          cursus cursus.
        </p>
        <Button />
      </section>
      <div className="card-info-images">
        <img src={pokerbolaImg} alt="Pokerbola" />
        <img src={pikachuImg} alt="Pikachu" />
      </div>
    </aside>
  );
}

export default CardInfo;
