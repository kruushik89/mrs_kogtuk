import React from 'react';

import Title from '@/components/UI/Title/Title';
import PortfolioCard from '@/components/Portfolio/PortfolioCard';

import portfolioCardImage1 from './images/portfolio_1.png';
import portfolioCardImage2 from './images/portfolio_2.png';
import portfolioCardImage3 from './images/portfolio_3.png';
import portfolioCardImage4 from './images/portfolio_4.png';
import portfolioCardImage5 from './images/portfolio_5.png';

import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <Title tag="h1">Portfolio</Title>

      <div className={styles.portfolioContainer}>
        <PortfolioCard title="Класичний манікюр" imageSrc={portfolioCardImage1.src} id={1}/>
        <PortfolioCard title="Кольорова база" imageSrc={portfolioCardImage2.src} id={2}/>
        <PortfolioCard title="Дизайн" imageSrc={portfolioCardImage3.src} id={3}/>
        <PortfolioCard title="Нарощування нігтів" imageSrc={portfolioCardImage4.src} id={4}/>
        <PortfolioCard title="Укріплення гель" imageSrc={portfolioCardImage5.src} id={5}/>
      </div>
    </div>
  );
};

export default Portfolio;
