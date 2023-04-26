import React from 'react';
import Image from 'next/image'

import styles from './Header.module.css';

import logoImage from './logo.png';
import FacebookIcon from '@/public/svg/Facebook';
import InstagramIcon from '@/public/svg/Instagram';
import TelegramIcon from '@/public/svg/Telegram';

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
          <Image src={logoImage} alt="Logo" width={50} height={50}/>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://t.me/l_a_andreevna"><TelegramIcon /></a>
          <a href="https://instagram.com/mrs.kogtuk?igshid=YmMyMTA2M2Y="><InstagramIcon /></a>
          <a href="https://www.facebook.com/profile.php?id=100010697550526"> <FacebookIcon /></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
