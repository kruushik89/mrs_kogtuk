import React, { useEffect, useState } from 'react';
import Image from 'next/image'

import styles from './Header.module.css';

import { HeaderProps } from '@/components/Header/header.props';
import classNames from 'classnames';

import logoImage from './logo.png';
import FacebookIcon from '@/public/svg/Facebook';
import InstagramIcon from '@/public/svg/Instagram';
import TelegramIcon from '@/public/svg/Telegram';
import { portfolioIcon, phoneIcon, priceIcon } from './icons';
import useMediaQuery from '@/components/hooks/useMediaQuery';

const Header: React.FC<HeaderProps> = ({ scrollTop }) => {
  const isMobile = useMediaQuery('(max-width: 500px)');

  return (
    <div className={classNames(styles.header, {
      [styles.bgBlack]: scrollTop >= 100
    })}>
      <div className={styles.headerWrap}>
        {(!isMobile) && (
          <nav className={styles.navigation}>
            <div className={styles.navigationItem}>Прайс-лист</div>
            <div className={styles.navigationItem}>Послуги</div>
            <div className={styles.navigationItem}>Галерея</div>
            <div className={styles.navigationItem}>Контакти</div>
          </nav>
        )}
        {isMobile && (
          <nav className={styles.mobileNavigation}>
            <div className={styles.mobileNavigationItem}>
              <Image src={priceIcon} alt='Price icon' width={35} height={35} />
              <p className={styles.mobileNavigationText}>Прайс-лист</p>
            </div>
            <div className={styles.mobileNavigationItem}>
              <Image src={portfolioIcon} alt='Price icon' width={35} height={35} />
              <p className={styles.mobileNavigationText}>Портфоліо</p>
            </div>
            <div className={styles.mobileNavigationItem}>
              <Image src={phoneIcon} alt='Price icon' width={35} height={35} />
              <p className={styles.mobileNavigationText}>Контакти</p>
            </div>
          </nav>
        )}
        {(scrollTop >= 100 || isMobile ) && (
          <div className={styles.logo}>
            <Image src={logoImage} alt="Logo" width={50} height={50}/>
          </div>
        )}
        {!isMobile && (
          <div className={styles.socialIcons}>
            <a href="https://t.me/l_a_andreevna"><TelegramIcon/></a>
            <a href="https://instagram.com/mrs.kogtuk?igshid=YmMyMTA2M2Y="><InstagramIcon/></a>
            <a href="https://www.facebook.com/profile.php?id=100010697550526"> <FacebookIcon/></a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
