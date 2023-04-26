import React from 'react';
import Image from 'next/image';
import styles from './Contacts.module.css';
import Title from '@/components/UI/Title/Title';

import telegramIcon from './images/telegram-contact.svg';
import instagramIcon from './images/instagram-contact.svg';
import facebookIcon from './images/facebook-contact.svg';
import classNames from 'classnames';
import flowerLeft from '@/public/images/flower-left.png';
import flowerRight from '@/public/images/flower-right.png';

import '@/styles/Home.module.css';

const Contacts = () => {
  let width = 100;
  let height = 100;

  return (
    <div className={styles.contacts}>
      <img className={classNames(`${styles.flower}`, {
        [styles.flowerLeft]: true
      })} src={flowerLeft.src} alt="Flower"/>
      <Title tag="h3">Слідкуйте за мною в соціальних мережах</Title>
      <div className={styles.contactsWrap}>
        <a href="https://t.me/l_a_andreevna"><Image src={telegramIcon} className={styles.telegram} alt="Telegram icon" width={width} height={height}/></a>
        <a href="https://instagram.com/mrs.kogtuk?igshid=YmMyMTA2M2Y="><Image src={instagramIcon} className={styles.instagram} alt="Instagram icon" width={width} height={height}/></a>
        <a href="https://www.facebook.com/profile.php?id=100010697550526"><Image src={facebookIcon} className={styles.facebook} alt="Facebook icon" width={width} height={height}/></a>
      </div>
      <img className={
        classNames(`${styles.flower}`, {
          [styles.flowerRight]: true
        })
      } src={flowerRight.src} alt="Flower"/>
    </div>
  );
};

export default Contacts;
