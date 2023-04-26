import React from 'react';
import Image from 'next/image'

import styles from './Header.module.css';

import logoImage from './logo.png';
import telegramIcon from '@/public/svg/telegram.svg';
import facebookIcon from '@/public/svg/facebook.svg';
import instagramIcon from '@/public/svg/instagram.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerWrap}>
        <nav className={styles.navigation}>
          <div className={styles.navigationItem}>Прайс-лист</div>
          <div className={styles.navigationItem}>Послуги</div>
          <div className={styles.navigationItem}>Галерея</div>
          <div className={styles.navigationItem}>Контакти</div>
        </nav>
        <div className={styles.logo}>
          <Image src={logoImage} alt='Logo' width={50} height={50}/>
        </div>
        <div className={styles.socialIcons}>
          <Image src={telegramIcon} alt='Logo' width={30} height={30}/>
          <Image src={facebookIcon} alt='Logo' width={30} height={30}/>
          <Image src={instagramIcon} alt='Logo' width={30} height={30}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
