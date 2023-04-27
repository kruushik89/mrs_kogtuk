import React from 'react';
import classNames from 'classnames';

import DescriptionItem from '@/components/Description/DescriptionItem';
import { descriptionData } from '@/components/Description/description.data';
import flowerLeft from '@/public/images/flower-left.png';
import flowerRight from '@/public/images/flower-right.png';
import useMediaQuery from '@/components/hooks/useMediaQuery';
import { DescriptionsProps } from '@/components/Description/description.props';

import styles from './Description.module.css';

const Description: React.FC<DescriptionsProps> = () => {
  const isMobile = useMediaQuery('(max-width: 500px)');
  return (
    <div className={styles.description} id='services'>
      <img className={classNames(`${styles.flower}`, {
        [styles.flowerLeft]: true
      })} src={flowerLeft.src} alt="Flower" />
      <div className={styles.descriptionWrap}>
        {descriptionData.map((item) => {
          return (
            <DescriptionItem key={item.title} title={item.title} imageSrc={item.imageSrc} text={item.text} />
          )
        })}

      </div>
      {!isMobile && (
        <img className={
          classNames(`${styles.flower}`, {
            [styles.flowerRight]: true
          })
        } src={flowerRight.src} alt="Flower"/>
      )}
    </div>
  );
};

export default Description;
