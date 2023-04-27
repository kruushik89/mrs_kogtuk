import React from 'react';
import Image from 'next/image';

import Title from '@/components/UI/Title/Title';
import ownerImage from '@/components/PriceList/images/owner-round.png'
import { design, gelNails, manicureData } from '@/components/PriceList/price-list.data';
import PriceItem from '@/components/PriceList/PriceItem';
import useMediaQuery from '@/components/hooks/useMediaQuery';

import styles from './PriceList.module.css';

const PriceList = () => {
  const isMobile = useMediaQuery('(max-width: 500px)');
  const measurement = isMobile ? 300 : 200;
  return (
    <div className={styles.priceList} id="price">
      <Title tag="h1">Price-list</Title>

      <div className={styles.priceListContent}>
        <div className={styles.ownerImage}>
          <Image src={ownerImage} alt="Owner" width={measurement} height={measurement}/>
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
