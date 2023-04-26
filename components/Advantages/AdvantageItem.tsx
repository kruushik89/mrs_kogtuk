import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { AdvantageItemProps } from '@/components/Advantages/AdvantageItem.props';
import styles from './AdvantageItem.module.css';

const AdvantageItem: React.FC<AdvantageItemProps> = ({ label, style, ...props }) => {
  return (
    <div className={styles.advantages}>
      <div className={styles.image}>
        <Image src={props.src} alt={props.alt} width={220} height={300}/>
      </div>
      <div className={classNames(styles.label, {
        [styles.safely]: style === 'safely',
        [styles.sterile]: style === 'sterile',
        [styles.comfort]: style === 'comfort',
      })}>{label}</div>
    </div>
  );
};

export default AdvantageItem;
