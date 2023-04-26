import React from 'react';

import { PortfolioCardProps } from '@/components/Portfolio/portfolio.props';

import styles from './Portfolio.module.css';
import classNames from 'classnames';

const PortfolioCard: React.FC<PortfolioCardProps> = ({imageSrc, title, id}) => {
  return (
    <div className={classNames(styles.card, {
      [styles.portfolio1]: id === 1,
      [styles.portfolio2]: id === 2,
      [styles.portfolio3]: id === 3,
      [styles.portfolio4]: id === 4,
      [styles.portfolio5]: id === 5,
    })} >
      <div className={styles.cardImage}>
        <img src={imageSrc} alt={title} />
      </div>
      <div className={styles.cardTitle}>{title}</div>
    </div>
  );
};

export default PortfolioCard;
