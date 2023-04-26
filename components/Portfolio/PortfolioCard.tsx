import React from 'react';

import { PortfolioCardProps } from '@/components/Portfolio/portfolio.props';

import styles from './Portfolio.module.css';
import classNames from 'classnames';

const PortfolioCard: React.FC<PortfolioCardProps> = ({imageSrc, title, id}) => {
  return (
    <div className={classNames(styles.card)} >
      <div className={styles.cardImage}>
        <img src={imageSrc} alt={title} />
      </div>
      <div className={styles.cardTitle}>{title}</div>
    </div>
  );
};

export default PortfolioCard;
