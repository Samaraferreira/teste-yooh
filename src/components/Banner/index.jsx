import React, { useState } from 'react';

import Button from '../Button';

import heroImg from '../../assets/hero-banner__image.png';
import arrowLeftIcon from '../../assets/arrow-left.svg';
import arrowRightIcon from '../../assets/arrow-right.svg';

import './styles.css';

function Banner() {
  const [active, setActive] = useState('1');

  function nextBanner() {
    if (active === '1') setActive('2');
    else setActive('1');
  }

  return (
    <div className="sliders">
      <div className="sliders-controls">
        <button onClick={nextBanner} className="sliders-controls__button">
          <img src={arrowLeftIcon} alt="Anterior" />
        </button>
        <button onClick={nextBanner} className="sliders-controls__button">
          <img src={arrowRightIcon} alt="Próximo" />
        </button>
      </div>

      <section className={`banner ${active === '1' && 'banner--active'}`}>
        <article className="banner__infos">
          <span className="banner__infos-subtitle">Faça seu teste</span>
          <h1 className="banner__infos-title">De frontend</h1>
          <p className="banner__infos-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
            euismod at egestas sapien porttitor dui.
          </p>

          <Button />
        </article>
        <aside>
          <img className="banner__image" src={heroImg} alt="Hero" />
        </aside>
      </section>

      <section
        className={`banner banner--second ${
          active === '2' && 'banner--active'
        }`}
      >
        <article className="banner__infos">
          <span className="banner__infos-subtitle">Faça seu teste</span>
          <h1 className="banner__infos-title">Outro banner</h1>
          <p className="banner__infos-description">
            Ait amet, consectetur adipiscing elit. Amet,
            euismod at egestas sapien porttitor dui.
          </p>

          <Button />
        </article>
        <aside>
          <img className="banner__image" src={heroImg} alt="Hero" />
        </aside>
      </section>
    </div>
  );
}

export default Banner;
