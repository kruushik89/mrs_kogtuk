import React from 'react';
import classNames from 'classnames';
import styles from '@/public/svg/SVG.module.css';

const TelegramIcon = () => {
  return (
    <svg className={classNames(styles.svgTelegram, styles.svg)} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15ZM15.5381 11.0738C14.0794 11.6813 11.1619 12.9375 6.78938 14.8425C6.08063 15.1237 5.7075 15.4012 5.67375 15.6712C5.6175 16.1269 6.18938 16.3069 6.9675 16.5525L7.29563 16.6556C8.06063 16.905 9.09188 17.1956 9.62625 17.2069C10.1137 17.2181 10.6556 17.0194 11.2537 16.6069C15.3394 13.8488 17.4488 12.4556 17.58 12.4256C17.6737 12.4031 17.805 12.3769 17.8913 12.4556C17.9794 12.5325 17.97 12.6806 17.9606 12.72C17.9044 12.9619 15.66 15.0469 14.4994 16.1269C14.1375 16.4644 13.8806 16.7025 13.8281 16.7569C13.7125 16.875 13.595 16.9913 13.4756 17.1056C12.7631 17.7919 12.2306 18.3056 13.5037 19.1456C14.1169 19.5506 14.6081 19.8825 15.0975 20.2162C15.63 20.58 16.1625 20.9419 16.8525 21.3956C17.0269 21.5081 17.1956 21.63 17.3588 21.7463C17.9794 22.1887 18.54 22.5863 19.2281 22.5225C19.6294 22.485 20.0438 22.11 20.2537 20.985C20.7506 18.3281 21.7275 12.5737 21.9525 10.2019C21.9662 10.0047 21.9581 9.80662 21.9281 9.61125C21.9105 9.4536 21.8342 9.30836 21.7144 9.20438C21.5438 9.08661 21.3404 9.02559 21.1331 9.03C20.5706 9.03938 19.7025 9.34125 15.5381 11.0738Z"
        fill="#BFBFBF"/>
    </svg>

  );
};

export default TelegramIcon;
