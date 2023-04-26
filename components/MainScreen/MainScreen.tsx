import React from 'react';

import styles from './MainScreen.module.css';
import safetyImage from '@/public/images/Safety.png';
import sterileImage from '@/public/images/Steryl.png';
import comfortImage from '@/public/images/Comfortable.png';
import bigLogoImage from '@/public/images/big-logo.png';
import AdvantageItem from '@/components/Advantages/AdvantageItem';

const MainScreen = (): JSX.Element => {
  return(
    <div className={styles.main}>
      <div className={styles.bigLogo}>
        <img src={bigLogoImage.src} alt="Big logo"/>
      </div>
      <div className={styles.mainWrap}>
        <ul className={styles.description}>
          <li className={styles.descriptionItem}>Індивідуальний підхід</li>
          <li className={styles.descriptionItem}>Бачу естетику у всьому</li>
          <li className={styles.descriptionItem}>Обожнюю малювати френч</li>
        </ul>
        <div className={styles.advantages}>
          <AdvantageItem label='Безпечно'  style='safely' alt='Safely image' {...safetyImage} />
          <AdvantageItem label='Стерильно'  style='sterile' alt='Sterile image' {...sterileImage} />
          <AdvantageItem label='Комфортно'  style='comfort' alt='Comfort image' {...comfortImage} />
        </div>
      </div>
    </div>
  )
}

export default MainScreen;