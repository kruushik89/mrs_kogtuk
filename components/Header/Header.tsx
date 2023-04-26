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
          <a href="https://t.me/l_a_andreevna"><Image src={telegramIcon.src} className={styles.telegram} alt='Logo' width={30} height={30}/></a>
          <a href="https://instagram.com/mrs.kogtuk?igshid=YmMyMTA2M2Y="><Image src={instagramIcon} className={styles.instagram} alt='Logo' width={30} height={30}/></a>
          <a href="https://www.facebook.com/profile.php?id=100010697550526"><Image src={facebookIcon} className={styles.facebook} alt='Logo' width={30} height={30}/></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
