import React from 'react';

import { PriceItemProps } from '@/components/PriceList/price-list.props';
import styles from './PriceList.module.css';

const PriceItem: React.FC<PriceItemProps> = ({ isPrice, data }) => {
  console.log(data);
  return (
    <div className={styles.priceItem}>
      <div className={styles.priceItemHeader}>
        <div className={styles.priceItemTitle}>{data.title}</div>
        {isPrice && <div className={styles.priceItemTitle}>Price</div>}
      </div>
      {data && data.list.map((price: any) => {
        console.log(price)
        return (
          <>
            <div className={styles.data}>
              <div className={styles.dataText}>{price.name}</div>
              <div className={styles.dataText}>{price.price}</div>
            </div>
            {!!price.subName.length && (
              <ul className={styles.subNameList}>
                {price.subName.map((item: any) => (
                  <li className={styles.data}>
                    <div className={styles.dataText}>{item.name}</div>
                    <div className={styles.dataText}>{item.price}</div>
                  </li>
                ))}
              </ul>
            )}
          </>
        )
      })}
    </div>
  );
};

export default PriceItem;
