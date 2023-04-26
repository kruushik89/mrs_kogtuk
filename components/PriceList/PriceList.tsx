import React from 'react';
import Image from 'next/image';
import Title from '@/components/UI/Title/Title';

import ownerImage from '@/components/PriceList/images/owner-round.png'

import styles from './PriceList.module.css';
import { design, gelNails, manicureData } from '@/components/PriceList/price-list.data';
import PriceItem from '@/components/PriceList/PriceItem';

const PriceList = () => {
  return (
    <div className={styles.priceList}>
      <Title tag='h1'>Price-list</Title>

      <div className={styles.priceListContent}>
        <div className={styles.ownerImage}>
          <Image src={ownerImage} alt='Owner' width={200} height={200} />
        </div>
        <div className={styles.price}>
          <PriceItem isPrice={true} data={manicureData}/>
          <PriceItem isPrice={false} data={gelNails}/>
          <PriceItem isPrice={false} data={design}/>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
