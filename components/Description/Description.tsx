import React from 'react';

import DescriptionItem from '@/components/Description/DescriptionItem';
import { descriptionData } from '@/components/Description/description.data';
import flowerLeft from '../../public/images/flower-left.png';
import flowerRight from '../../public/images/flower-right.png';

import styles from './Description.module.css';
import classNames from 'classnames';

const Description = () => {
  return (
    <div className={styles.description}>
      <img className={classNames(`${styles.flower}`, {
        [styles.flowerLeft]: true
      })} src={flowerLeft.src} alt="Flower"/>
      <div className={styles.descriptionWrap}>
        {descriptionData.map((item) => {
          return (
            <DescriptionItem key={item.title} title={item.title} imageSrc={item.imageSrc} text={item.text} />
          )
        })}

      </div>
      <img className={
        classNames(`${styles.flower}`, {
          [styles.flowerRight]: true
        })
      } src={flowerRight.src} alt="Flower"/>
    </div>
  );
};

export default Description;
