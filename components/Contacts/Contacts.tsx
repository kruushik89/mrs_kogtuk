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
        <a href="#"><Image src={telegramIcon} alt="Telegram icon" width={width} height={height}/></a>
        <a href="#"><Image src={instagramIcon} alt="Instagram icon" width={width} height={height}/></a>
        <a href="#"><Image src={facebookIcon} alt="Facebook icon" width={width} height={height}/></a>
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
