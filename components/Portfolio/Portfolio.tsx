import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import Title from '@/components/UI/Title/Title';
import PortfolioCard from '@/components/Portfolio/PortfolioCard';
import Modal from '@/components/Modal/Modal';
import { imagesData } from '@/components/Portfolio/portfolio.data';

import portfolioCardImage1 from './images/portfolio_1.png';
import portfolioCardImage2 from './images/portfolio_2.png';
import portfolioCardImage3 from './images/portfolio_3.png';
import portfolioCardImage4 from './images/portfolio_4.png';
import portfolioCardImage5 from './images/portfolio_5.png';

import styles from './Portfolio.module.css';

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState('classic');
  const openModal = (type: string) => {
    setShowModal(true);
    setType(type);
  }

  const closeModal = () => setShowModal(false);
  const data = imagesData();

  return (
    <div className={styles.portfolio} id="gallery">
      <Title tag="h1">Portfolio</Title>

      <div className={styles.portfolioContainer}>
        <PortfolioCard openModal={openModal} title="Класичний манікюр" imageSrc={portfolioCardImage1.src}
                       type="classic"/>
        <PortfolioCard openModal={openModal} title="Кольорова база" imageSrc={portfolioCardImage2.src} type="gel"/>
        <PortfolioCard openModal={openModal} title="Нарощування нігтів" imageSrc={portfolioCardImage4.src}
                       type="strengtheningGel"/>
        <PortfolioCard openModal={openModal} title="Укріплення гель" imageSrc={portfolioCardImage5.src} type="buildUp"/>
        <PortfolioCard openModal={openModal} title="Дизайн" imageSrc={portfolioCardImage3.src} type="design"/>
      </div>

      <Modal show={showModal} closeModal={closeModal}>
        <ImageGallery
          // @ts-ignore
          items={data[type]}
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={false}
        />
      </Modal>
    </div>
  );
};

export default Portfolio;
